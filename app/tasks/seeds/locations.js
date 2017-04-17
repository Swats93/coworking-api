import {table} from 'app/orm';
import bcrypt from 'bcrypt';

export default {
  async run(t) {
    console.log('seeding locations');

    return table('locations', t).insert([
      {	
      	name: 'Discovr Connaught Place', 
        description: `We are located in the heart of Delhi, surrounded by lush green gardens, fine dining restaurants, business hubs and high street shops. Our external environment and internal ambiance is a perfect balance of work and fun. Come and feel free to mingle with like-minded people, entrepreneurs & startups. You can also attend our events to network or unwind from a hard day's work.`,
        address: '69, Regal Building, New Delhi - 110001',
        images: 'https://inv8-prodstatic.s3.amazonaws.com/media/website/centrelist/mcra7s04RLibCwPG3EHZeA.jpg'
      },
      { 
        name: 'Discovr City Emporium', 
        description: `We are located in the heart of Delhi, surrounded by lush green gardens, fine dining restaurants, business hubs and high street shops. Our external environment and internal ambiance is a perfect balance of work and fun. Come and feel free to mingle with like-minded people, entrepreneurs & startups. You can also attend our events to network or unwind from a hard day's work.`,
        address: '19, Ground Floor, City Emporium Mall, Industrial Area Phase I, Chandigarh - 160002',
        images: 'https://inv8-prodstatic.s3.amazonaws.com/media/website/centrelist/V3xHf_wESs6rb9AUY4nM1Q.jpg'
      },
      { 
        name: 'Discovr Koramangla', 
        description: `Flanged by Social on right, Starbucks on left, Forum Mall and numerous eateries, we are the address of choice for young and energetic folks who want to make a dent in the world. You have pool, foosball table, table tennis arena and other breakout zones which will give you the space to be yourself when you don't want to work.`,
        address: 'Office No. 3, Koramangala, Industrial Area, Opp. Starbucks Koramangala - 560034',
        images: 'https://inv8-prodstatic.s3.amazonaws.com/media/website/centrelist/sjwbze9STlmLNTBSpg7XcQ.jpg'
      }
    ]);
  }
};
