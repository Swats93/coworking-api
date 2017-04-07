import {table} from 'app/orm';
import bcrypt from 'bcrypt';

export default {
  async run(t) {
    console.log('seeding news');

    return table('news', t).insert([
      {	
      	heading: 'North Korean ballistic missile fired into the Sea of Japan',
      	content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
         "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
      	date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
         "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
         "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
         "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
     {  
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
         "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
         "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
         "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
         "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      }
    ]);
  }
};
