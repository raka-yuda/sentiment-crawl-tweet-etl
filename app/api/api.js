// let axios = require('axios')
import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config()
// import 'dotenv/config'
// // const Twitter = require('twitter')
// var FormData = require('form-data');

// function Api(){}


// Api.prototype.get_site_detail = async function (params){
//   const response = await axios.get('https://localhost:3000/test',{
//     method : "get",
//     params : {'siteId':params.query.siteid},
//     headers: {
//         'access_key': params?.session.access_key,
//         'origin': 'https://localhost:3000/test'
//     }
//   });
//   return response;
// }

// Api.prototype.get_list_woeid = async function (params){
//   const response = await axios.get('https://api.twitter.com/1.1/trends/available.json',{
//     method : "get",
//     headers: {
//         'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
//     }
//   });
//   return response;
// }

// Api.prototype.get_closest_woeid = async function (params){
//   const { lat, long } = params.query;
//   const response = await axios.get('https://api.twitter.com/1.1/trends/closest.json',{
//     method : "get",
//     params : {
//       'lat': lat,
//       'long': long,
//     },
//     headers: {
//         'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
//     }
//   });
//   return response;
// }

// Api.prototype.get_current_latlong = async function (params){
//   console.log('IPGEO_API_KEY: ', process.env.IPGEO_API_KEY)
//   const response = await axios.get('https://ip-geolocation.whoisxmlapi.com/api/v1',{
//     method : "get",
//     params : {
//       'apiKey': process.env.IPGEO_API_KEY,
//     }
//   });
//   return response;
// }

// Api.prototype.get_trending_topics = async function (params){
//   const { woeid } = params.query;
//   const response = await axios.get('https://api.twitter.com/1.1/trends/place.json',{
//     method : "get",
//     params : {
//       'id': woeid,
//     },
//     headers: {
//       'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
//     }
//   });
//   return response;
// }

// Api.prototype.search_tweets_v2 = async function (params){
//   const { query, limitResult } = params.query;
//   const response = await axios.get('https://api.twitter.com/2/tweets/search/recent',{
//     method : "get",
//     params : {
//       'query': query,
//       // 'expansions': 'attachments.poll_ids,attachments.media_keys,author_id,entities.mentions.username,geo.place_id,in_reply_to_user_id,referenced_tweets.id,referenced_tweets.id.author_id',
//       // 'result_type': 'popular',
//       'tweet.fields':	'text,lang',
//       'expansions':	'referenced_tweets.id,referenced_tweets.id.author_id,entities.mentions.username,in_reply_to_user_id,attachments.media_keys',
//       // 'user.fields': 'description',
//       'max_results': limitResult ?? 10
//     },
//     headers: {
//       'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
//     }
//   });
//   return response;
// }

// Api.prototype.search_tweets_v1 = async function (params){
//   const { query } = params.query;
//   const response = await axios.get('https://api.twitter.com/1.1/tweets/search/30day/development.json',{
//     method : "get",
//     params : {
//       'query': `lang:en ${query}`,
//     },
//     headers: {
//       'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
//     }
//   });
//   return response;
// }

// Api.prototype.search_single_tweet = async function (params){
//   const { id } = params.query;
//   const response = await axios.get('https://api.twitter.com/2/tweets/1618287920842178562',{
//     method : "get",
//     params : {
//       // 'tweet.fields': query,
//       // 'tweet.fields': 'attachments,author_id,id,text,entities',
//       // 'user.fields': 'id,name,profile_image_url,url,username',
//       'expansions': 'referenced_tweets.id',
//       // 'media.fields': 'preview_image_url,type,url',
//     },
//     headers: {
//       'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
//     }
//   });
//   return response;
// }

// Api.prototype.get_sentiment_value = async function (params){
//   const { text } = params.body;
//   var formData = new FormData();
//   formData.append("key", process.env.MEANING_CLOUD_API_KEY)
//   formData.append("txt", text)
//   formData.append("lang", 'en')

//   const response = await axios.post('https://api.meaningcloud.com/sentiment-2.1', formData);
  
//   return response;
  
// }

// module.exports = Api

export default class Api {
  get_site_detail = async (params) => {
    const response = await axios.get("https://localhost:3000/test", {
      method: "get",
      params: { siteId: params.query.siteid },
      headers: {
        access_key: params?.session.access_key,
        origin: "https://localhost:3000/test",
      },
    });
    return response;
  };

  get_list_woeid = async (params) => {
    const response = await axios.get('https://api.twitter.com/1.1/trends/available.json',{
      method : "get",
      headers: {
          'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
      }
    });
    return response;
  }

  get_closest_woeid = async (params) => {
    const { lat, long } = params.query;
    const response = await axios.get('https://api.twitter.com/1.1/trends/closest.json',{
      method : "get",
      params : {
        'lat': lat,
        'long': long,
      },
      headers: {
          'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
      }
    });
    return response;
  }

  get_current_latlong = async (params) => {
    console.log('IPGEO_API_KEY: ', process.env.IPGEO_API_KEY)
    const response = await axios.get('https://ip-geolocation.whoisxmlapi.com/api/v1',{
      method : "get",
      params : {
        'apiKey': process.env.IPGEO_API_KEY,
      }
    });
    return response;
  }

  get_trending_topics = async (params) => {
    const { woeid } = params.query;
    const response = await axios.get('https://api.twitter.com/1.1/trends/place.json',{
      method : "get",
      params : {
        'id': woeid,
      },
      headers: {
        'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
      }
    });
    return response;
  }

  search_tweets_v2 = async (params) => {
    const { query, limitResult } = params.query;
    const response = await axios.get('https://api.twitter.com/2/tweets/search/recent',{
      method : "get",
      params : {
        'query': query,
        // 'expansions': 'attachments.poll_ids,attachments.media_keys,author_id,entities.mentions.username,geo.place_id,in_reply_to_user_id,referenced_tweets.id,referenced_tweets.id.author_id',
        // 'result_type': 'popular',
        'tweet.fields':	'text,lang',
        'expansions':	'referenced_tweets.id,referenced_tweets.id.author_id,entities.mentions.username,in_reply_to_user_id,attachments.media_keys',
        // 'user.fields': 'description',
        'max_results': limitResult ?? 10
      },
      headers: {
        'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
      }
    });
    return response;
  }

  search_tweets_v1 = async (params) => {
    const { query } = params.query;
    const response = await axios.get('https://api.twitter.com/1.1/tweets/search/30day/development.json',{
      method : "get",
      params : {
        'query': `lang:en ${query}`,
      },
      headers: {
        'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
      }
    });
    return response;
  }

  search_single_tweet = async (params) => {
    const { id } = params.query;
    const response = await axios.get('https://api.twitter.com/2/tweets/1618287920842178562',{
      method : "get",
      params : {
        // 'tweet.fields': query,
        // 'tweet.fields': 'attachments,author_id,id,text,entities',
        // 'user.fields': 'id,name,profile_image_url,url,username',
        'expansions': 'referenced_tweets.id',
        // 'media.fields': 'preview_image_url,type,url',
      },
      headers: {
        'Authorization': `Bearer ${process.env.TWITTER_AUTH_TOKENS_BEARER_TOKEN}`,
      }
    });
    return response;
  }

  get_sentiment_value = async (params) => {
    const { text } = params.body;
    var formData = new FormData();
    formData.append("key", process.env.MEANING_CLOUD_API_KEY)
    formData.append("txt", text)
    formData.append("lang", 'en')

    const response = await axios.post('https://api.meaningcloud.com/sentiment-2.1', formData);
    
    return response;
    
  }
}

// export default class Api