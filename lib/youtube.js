import axios from 'axios';

const YOUTUBE_API_KEY = "AIzaSyBOANFibvKUUOjHSOjWTm24Fi8_znI6EBI";
const CHANNEL_ID = 'UCllRlG3XjZZrMpCzB5slu2A';

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchChannelData = async () => {
    const channelUrl = `${YOUTUBE_BASE_URL}/channels?part=snippet,statistics,contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
    const { data } = await axios.get(channelUrl);
    return data.items[0];
};

export const fetchLatestVideo = async () => {
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
    // Get the highest quality thumbnail (maxresdefault, fall back to hqdefault)
    const thumbnail = latestVideo.snippet.thumbnails.maxres
        ? latestVideo.snippet.thumbnails.maxres.url
        : latestVideo.snippet.thumbnails.high.url;
    return {
        url: `https://www.youtube.com/embed/${videoId}`,
        thumbnail
    };
};


export const fetchAllVideos = async () => {
    const searchUrl = `${YOUTUBE_BASE_URL}/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&key=${YOUTUBE_API_KEY}`;
    const { data } = await axios.get(searchUrl);
    return data.items;
};
