import axios from 'axios';

const YOUTUBE_API_KEY = "AIzaSyBOANFibvKUUOjHSOjWTm24Fi8_znI6EBI";
const CHANNEL_ID = 'UCllRlG3XjZZrMpCzB5slu2A';

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

const getFromCache = (key) => {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION) {
        localStorage.removeItem(key);
        return null;
    }
    return data;
};

const setToCache = (key, data) => {
    const cacheData = {
        data,
        timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(cacheData));
};

export const fetchChannelData = async () => {
    const cacheKey = 'youtube_channel_data';
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    const channelUrl = `${YOUTUBE_BASE_URL}/channels?part=snippet,statistics,contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
    const { data } = await axios.get(channelUrl);
    const channelData = data.items[0];
    setToCache(cacheKey, channelData);
    return channelData;
};

export const fetchLatestVideo = async () => {
    const cacheKey = 'youtube_latest_video';
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    // First, get the uploads playlist ID
    const channelData = await fetchChannelData();
    const uploadsPlaylistId = channelData.contentDetails.relatedPlaylists.uploads;

    // Fetch the latest video from the uploads playlist
    const playlistUrl = `${YOUTUBE_BASE_URL}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${YOUTUBE_API_KEY}`;
    const { data } = await axios.get(playlistUrl);

    if (data.items.length === 0) {
        throw new Error('No videos found in the playlist.');
    }

    // Extract the video details
    const latestVideo = data.items[0];
    const videoId = latestVideo.snippet.resourceId.videoId;
    const thumbnail = latestVideo.snippet.thumbnails.maxres
        ? latestVideo.snippet.thumbnails.maxres.url
        : latestVideo.snippet.thumbnails.high.url;
    
    const videoData = {
        url: `https://www.youtube.com/embed/${videoId}`,
        thumbnail
    };
    
    setToCache(cacheKey, videoData);
    return videoData;
};

export const fetchAllVideos = async () => {
    const cacheKey = 'youtube_all_videos';
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    const searchUrl = `${YOUTUBE_BASE_URL}/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&key=${YOUTUBE_API_KEY}`;
    const { data } = await axios.get(searchUrl);
    setToCache(cacheKey, data.items);
    return data.items;
};

export const fetchAllPlaylists = async () => {
    const cacheKey = 'youtube_all_playlists';
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    const playlistsUrl = `${YOUTUBE_BASE_URL}/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=50&key=${YOUTUBE_API_KEY}`;
    const { data } = await axios.get(playlistsUrl);
    setToCache(cacheKey, data.items);
    return data.items;
};