import {table} from 'app/orm';
import bcrypt from 'bcrypt';

export default {
  async run(t) {
    console.log('seeding news');

    return table('news', t).insert([
      {	
      	heading: 'North Korean ballistic missile fired into the Sea of Japan',
      	content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
          It is the latest in a series of tests which the North has been conducting in pursuit of its goal of developing a nuclear missile.
          The launch comes on the eve of a visit by China's President Xi Jinping to the US to meet President Donald Trump.
          The two will discuss how to rein in North Korea's nuclear and missile programmes as the US steps up the pressure on China, a historic ally of Pyongyang, to help more on the issue.
          Mr Trump said in a recent interview that Washington was ready to act without Beijing's co-operation: "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
      	date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
          It is the latest in a series of tests which the North has been conducting in pursuit of its goal of developing a nuclear missile.
          The launch comes on the eve of a visit by China's President Xi Jinping to the US to meet President Donald Trump.
          The two will discuss how to rein in North Korea's nuclear and missile programmes as the US steps up the pressure on China, a historic ally of Pyongyang, to help more on the issue.
          Mr Trump said in a recent interview that Washington was ready to act without Beijing's co-operation: "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
          It is the latest in a series of tests which the North has been conducting in pursuit of its goal of developing a nuclear missile.
          The launch comes on the eve of a visit by China's President Xi Jinping to the US to meet President Donald Trump.
          The two will discuss how to rein in North Korea's nuclear and missile programmes as the US steps up the pressure on China, a historic ally of Pyongyang, to help more on the issue.
          Mr Trump said in a recent interview that Washington was ready to act without Beijing's co-operation: "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
          It is the latest in a series of tests which the North has been conducting in pursuit of its goal of developing a nuclear missile.
          The launch comes on the eve of a visit by China's President Xi Jinping to the US to meet President Donald Trump.
          The two will discuss how to rein in North Korea's nuclear and missile programmes as the US steps up the pressure on China, a historic ally of Pyongyang, to help more on the issue.
          Mr Trump said in a recent interview that Washington was ready to act without Beijing's co-operation: "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
          It is the latest in a series of tests which the North has been conducting in pursuit of its goal of developing a nuclear missile.
          The launch comes on the eve of a visit by China's President Xi Jinping to the US to meet President Donald Trump.
          The two will discuss how to rein in North Korea's nuclear and missile programmes as the US steps up the pressure on China, a historic ally of Pyongyang, to help more on the issue.
          Mr Trump said in a recent interview that Washington was ready to act without Beijing's co-operation: "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
          It is the latest in a series of tests which the North has been conducting in pursuit of its goal of developing a nuclear missile.
          The launch comes on the eve of a visit by China's President Xi Jinping to the US to meet President Donald Trump.
          The two will discuss how to rein in North Korea's nuclear and missile programmes as the US steps up the pressure on China, a historic ally of Pyongyang, to help more on the issue.
          Mr Trump said in a recent interview that Washington was ready to act without Beijing's co-operation: "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
          It is the latest in a series of tests which the North has been conducting in pursuit of its goal of developing a nuclear missile.
          The launch comes on the eve of a visit by China's President Xi Jinping to the US to meet President Donald Trump.
          The two will discuss how to rein in North Korea's nuclear and missile programmes as the US steps up the pressure on China, a historic ally of Pyongyang, to help more on the issue.
          Mr Trump said in a recent interview that Washington was ready to act without Beijing's co-operation: "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      },
      { 
        heading: 'North Korean ballistic missile fired into the Sea of Japan',
        content: `South Korea's defence ministry said the missile flew about 60km (40 miles).
          It is the latest in a series of tests which the North has been conducting in pursuit of its goal of developing a nuclear missile.
          The launch comes on the eve of a visit by China's President Xi Jinping to the US to meet President Donald Trump.
          The two will discuss how to rein in North Korea's nuclear and missile programmes as the US steps up the pressure on China, a historic ally of Pyongyang, to help more on the issue.
          Mr Trump said in a recent interview that Washington was ready to act without Beijing's co-operation: "If China is not going to solve North Korea, we will."
          The North is banned from any missile or nuclear tests by the UN, though it has repeatedly broken those sanctions.`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/EEF8/production/_95467116_gettyimages-656323206.jpg',
        videos: '',
        author: 'Deepak Gupta'
      }
    ]);
  }
};
