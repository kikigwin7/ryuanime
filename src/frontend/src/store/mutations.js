export const mutations = {
  SET_LATEST_DATA(state , payload){
    state.latest = payload;  
  },
  SET_VIDEO_ANIME(state , payload){
    state.videos = payload;
  },
  SET_ANIME_ALPHA(state , payload){
    state.animesByAlpha = payload;
  },
  IS_LOADING(state , payload){
    state.isLoading = payload;
  }
};