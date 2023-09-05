// const express = require('express');
// const router = express.Router();
// const Api = require('../api/api');
// const Api = require('../api/api');
import Api from '../api/api.js'
// const { RunnerCrawlTweet } = require('./async/runnerCrawlTweet');
// const cp = require("child_process");
// const fs = require("fs");
// const { fork } = require('child_process');
// const { performance, memory } = require('perf_hooks');
// const twitter = require('twitter-text');
// const { RunnerSentimentTweet } = require('./async/runnerSentimentTweet');

class SyncRunner {
  async analyzingSentiment() {
    const api = new Api();

    // TODO: 1.  Get Lat Long
    const responseLatLong = await api.get_current_latlong();
    const { lat, lng: long } = responseLatLong?.data?.location;

    // TODO: 2.  Get WOEID from Lat Long
    const paramGetClosestWoeid = {
      query: {
        lat,
        long,
      },
    };

    // console.log(paramGetClosestWoeid)
    // const responseGetClosestWoeid = await api.get_closest_woeid(
    //   paramGetClosestWoeid
    // );
    // const woeid = responseGetClosestWoeid?.data[0].woeid;
    // console.log("woeid: ", woeid);

    // // TODO: 3.  Get 10 Trending Topic from WOEID
    const paramGetTrendingTopics = {
      query: {
        // woeid,
        woeid: 1047378,
      },
    };
    const responseGetTrendingTopics = await api.get_trending_topics(
      paramGetTrendingTopics
    );
    console.log(responseGetTrendingTopics)
    // const trends = responseGetTrendingTopics?.data[0].trends;
    // const sortedTrends = trends
    //   .filter((trend) => {
    //     if (trend?.tweet_volume != null) {
    //       return trend;
    //     }
    //   })
    //   .sort((a, b) => b.tweet_volume - a.tweet_volume)
    //   .slice(0, 10);

    // console.log("trends: ", sortedTrends);
    // console.log("trends length: ", sortedTrends.length);

    // // TODO: 4.  Search 100 tweet per each trending topic before
    // // TODO: 5.  Clean data from 1000 tweet

    // const searchTweets = async (data) => {
    //   let {
    //     keyQuery,
    //     query,
    //     countCleanTweets = 0,
    //     cleanTweets = [],
    //     countCrawlTweets = 0,
    //     crawlTweets = [],
    //   } = data;
    //   console.log("data: ", data);
    //   const limitResultTweets = 10;
    //   const limitResultCleanTweet = 10;

    //   const paramSearchTweet = {
    //     query: {
    //       query: `lang:en ${query}`,
    //       limitResult: limitResultTweets,
    //     },
    //   };

    //   const responseSearchTweet = await api.search_tweets_v2(paramSearchTweet);

    //   const tweets = responseSearchTweet.data.data;

    //   let countCleanData = 0;
    //   let cleanedTweets = [...cleanTweets];
    //   for (let indexTweet in tweets) {
    //     const dataTweet = tweets[indexTweet];
    //     const tweet = dataTweet.text.replaceAll(/\s/g, " ");

    //     const isTweetElipsis = tweet.includes("…");
    //     const isTweetInEnglish = dataTweet.lang === "en";
    //     const isTweetReachedCleanLimit =
    //       countCleanTweets + countCleanData < limitResultCleanTweet;
    //     // const isTweetDuplicated = cleanedTweets?.map(tweetObj => tweetObj?.tweet).includes(tweet)

    //     console.log("cleanedTweets: ", cleanedTweets);
    //     console.log("tweet: ", tweet);
    //     // if (!tweet.includes('…') && dataTweet.lang === "en" && (countCleanTweets + countCleanData) < limitResultCleanTweet) {
    //     // if (!isTweetElipsis && isTweetInEnglish && isTweetReachedCleanLimit && !isTweetDuplicated) {
    //     if (!isTweetElipsis && isTweetInEnglish && isTweetReachedCleanLimit) {
    //       cleanedTweets.push({
    //         keyTweet: `${keyQuery}-tweet-${cleanedTweets.length}`,
    //         tweet,
    //       });
    //       countCleanData += 1;
    //     }
    //   }

    //   console.log("countCleanData: ", countCleanData);
    //   let res = {
    //     query,
    //     // originalTweets: {
    //     //   ...crawlTweets,
    //     //   responseSearchTweet.data.data,
    //     // }
    //     keyQuery,
    //     countCrawlTweets: countCrawlTweets + tweets.length,
    //     countCleanTweets: countCleanTweets + countCleanData,
    //     cleanTweets: [
    //       // ...cleanTweets,
    //       ...cleanedTweets,
    //     ],
    //   };
    //   console.log("res: ", res);
    //   if (countCleanTweets < limitResultCleanTweet) {
    //     console.log("countCleanTweets: ", countCleanTweets);
    //     console.log("Recursive Called...");
    //     // res = await searchTweets(res)
    //     return await searchTweets(res);
    //     // setTimeout(async () => {
    //     //   searchTweets(res)
    //     // }, 1000)
    //   }

    //   console.log("Final Result...");
    //   console.log("res: ", res);

    //   return res;
    // };

    // const searchTweetBasedOnTrends = async (trends) => {
    //   let resultTweets = [];
    //   for (const indexTrend in trends) {
    //     query = trends[indexTrend]?.name.replace("AND", "");

    //     const resSearchTweets = await searchTweets({
    //       keyQuery: `query-${indexTrend}`,
    //       query,
    //     });

    //     resultTweets.push({
    //       ...resSearchTweets,
    //     });
    //     // console.log("responseSearchTweet: ", responseSearchTweet)
    //     // console.log("responseSearchTweet: ", responseSearchTweet.data.data)
    //   }
    //   console.log("resultTweets: ", resultTweets);

    //   // fs.writeFile(filename, JSON.stringify(resultTweets), (error) => {
    //   //   // throwing the error
    //   //   // in case of a writing problem
    //   //   if (error) {
    //   //     // logging the error
    //   //     console.error(error);

    //   //     throw error;
    //   //   }

    //   //   console.log(`${filename} written correctly`);
    //   // });

    //   return resultTweets;
    // };

    // // const responseSearchTweets = await searchTweetBasedOnTrends(sortedTrends);
    // const responseSearchTweets = await searchTweetBasedOnTrends(
    //   sortedTrends.slice(0, 10)
    // );

    // console.log("responseSearchTweets: ", responseSearchTweets);

    // const memUsage = process.memoryUsage();
    // console.log("Memory usage:", formatMemoryUsage(memUsage));

    // function formatMemoryUsage(memoryUsage) {
    //   const format = (bytes) => (bytes / (1024 * 1024)).toFixed(2) + " MB";
    //   return {
    //     rss: format(memoryUsage.rss),
    //     heapTotal: format(memoryUsage.heapTotal),
    //     heapUsed: format(memoryUsage.heapUsed),
    //     external: format(memoryUsage.external),
    //   };
    // }

    // // Memory usage: {
    // //   rss: '70.00 MB',
    // //   heapTotal: '31.70 MB',
    // //   heapUsed: '15.29 MB',
    // //   external: '5.55 MB'
    // // }
    // // GET /process/sync 200 37823.517 ms - 137315

    // // TODO: 6.  Get sentiment for each clean data

    // let data = [...responseSearchTweets];
    // for (let indexOfTrend in data) {
    //   const query = data[indexOfTrend]?.query;
    //   let tweets = data[indexOfTrend]?.cleanTweets;
    //   for (let indexOfTweet in tweets) {
    //     const tweet = tweets[indexOfTweet]?.tweet;
    //     const paramGetSentimentValue = {
    //       body: {
    //         text: tweet,
    //       },
    //     };

    //     const response = await api.get_sentiment_value(paramGetSentimentValue);

    //     // console.log(`tweet: ${tweet} | res.data: ${response?.data}`)
    //     // console.log(response?.data)

    //     // const parsed = twitter.parseTweet(tweet);
    //     // console.log(parsed)

    //     data[indexOfTrend].cleanTweets[indexOfTweet] = {
    //       ...data[indexOfTrend]?.cleanTweets[indexOfTweet],
    //       score: response?.data?.score_tag,
    //     };
    //   }
    // }

    // // TODO: 7.  (Temporary) Print Result
    // // TODO: 8.  (TBA)

    // // res.send('sync route');
    // // res.send(responseSearchTweets);
    // console.log(data);
    // // res.send(data);
  }
}

export { SyncRunner };