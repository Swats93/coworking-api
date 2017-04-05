import {table} from 'app/orm';
import bcrypt from 'bcrypt';

export default {
  async run(t) {
    console.log('seeding events');

    return table('events', t).insert([
      {	
      	name: 'COMEDY IN DELHI', 
        content: `You can tell how smart people are by what they laugh at! And, these guys just love it when people laugh at them er... sorry, laugh for them! What fuels comedy shows is the laughter that keeps the artist alive as the crowd goes wild! Laughter is the best medicine no doubt, and so the artist doubles up as a therapist almost. Standup, Open Mic , Improv and Plays – They would tickle your funny bone and have you in splits. Laugh out loud and give a loud shout for these Fun(ny) Folks!`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://eheventimages.s3.amazonaws.com/2015-08-03/4aa2faf358ab31cf0137a413c766f22d6a95c3da5556dc55b09adaeb64adbd75_1438597383450_original.jpg',
        videos: '',
        venue: '',
        event_organizer_name: 'Deepak Gupta'
      },
      { 
        name: 'COMEDY IN DELHI', 
        content: `You can tell how smart people are by what they laugh at! And, these guys just love it when people laugh at them er... sorry, laugh for them! What fuels comedy shows is the laughter that keeps the artist alive as the crowd goes wild! Laughter is the best medicine no doubt, and so the artist doubles up as a therapist almost. Standup, Open Mic , Improv and Plays – They would tickle your funny bone and have you in splits. Laugh out loud and give a loud shout for these Fun(ny) Folks!`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://eheventimages.s3.amazonaws.com/2015-08-03/4aa2faf358ab31cf0137a413c766f22d6a95c3da5556dc55b09adaeb64adbd75_1438597383450_original.jpg',
        videos: '',
        venue: '',
        event_organizer_name: 'Deepak Gupta'
      },
      { 
        name: 'COMEDY IN DELHI', 
        content: `You can tell how smart people are by what they laugh at! And, these guys just love it when people laugh at them er... sorry, laugh for them! What fuels comedy shows is the laughter that keeps the artist alive as the crowd goes wild! Laughter is the best medicine no doubt, and so the artist doubles up as a therapist almost. Standup, Open Mic , Improv and Plays – They would tickle your funny bone and have you in splits. Laugh out loud and give a loud shout for these Fun(ny) Folks!`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://eheventimages.s3.amazonaws.com/2015-08-03/4aa2faf358ab31cf0137a413c766f22d6a95c3da5556dc55b09adaeb64adbd75_1438597383450_original.jpg',
        videos: '',
        venue: '',
        event_organizer_name: 'Deepak Gupta'
      },
      { 
        name: 'COMEDY IN DELHI', 
        content: `You can tell how smart people are by what they laugh at! And, these guys just love it when people laugh at them er... sorry, laugh for them! What fuels comedy shows is the laughter that keeps the artist alive as the crowd goes wild! Laughter is the best medicine no doubt, and so the artist doubles up as a therapist almost. Standup, Open Mic , Improv and Plays – They would tickle your funny bone and have you in splits. Laugh out loud and give a loud shout for these Fun(ny) Folks!`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://eheventimages.s3.amazonaws.com/2015-08-03/4aa2faf358ab31cf0137a413c766f22d6a95c3da5556dc55b09adaeb64adbd75_1438597383450_original.jpg',
        videos: '',
        venue: '',
        event_organizer_name: 'Deepak Gupta'
      },
      { 
        name: 'COMEDY IN DELHI', 
        content: `You can tell how smart people are by what they laugh at! And, these guys just love it when people laugh at them er... sorry, laugh for them! What fuels comedy shows is the laughter that keeps the artist alive as the crowd goes wild! Laughter is the best medicine no doubt, and so the artist doubles up as a therapist almost. Standup, Open Mic , Improv and Plays – They would tickle your funny bone and have you in splits. Laugh out loud and give a loud shout for these Fun(ny) Folks!`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://eheventimages.s3.amazonaws.com/2015-08-03/4aa2faf358ab31cf0137a413c766f22d6a95c3da5556dc55b09adaeb64adbd75_1438597383450_original.jpg',
        videos: '',
        venue: '',
        event_organizer_name: 'Deepak Gupta'
      },
      { 
        name: 'COMEDY IN DELHI', 
        content: `You can tell how smart people are by what they laugh at! And, these guys just love it when people laugh at them er... sorry, laugh for them! What fuels comedy shows is the laughter that keeps the artist alive as the crowd goes wild! Laughter is the best medicine no doubt, and so the artist doubles up as a therapist almost. Standup, Open Mic , Improv and Plays – They would tickle your funny bone and have you in splits. Laugh out loud and give a loud shout for these Fun(ny) Folks!`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://eheventimages.s3.amazonaws.com/2015-08-03/4aa2faf358ab31cf0137a413c766f22d6a95c3da5556dc55b09adaeb64adbd75_1438597383450_original.jpg',
        videos: '',
        venue: '',
        event_organizer_name: 'Deepak Gupta'
      },
      { 
        name: 'COMEDY IN DELHI', 
        content: `You can tell how smart people are by what they laugh at! And, these guys just love it when people laugh at them er... sorry, laugh for them! What fuels comedy shows is the laughter that keeps the artist alive as the crowd goes wild! Laughter is the best medicine no doubt, and so the artist doubles up as a therapist almost. Standup, Open Mic , Improv and Plays – They would tickle your funny bone and have you in splits. Laugh out loud and give a loud shout for these Fun(ny) Folks!`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://eheventimages.s3.amazonaws.com/2015-08-03/4aa2faf358ab31cf0137a413c766f22d6a95c3da5556dc55b09adaeb64adbd75_1438597383450_original.jpg',
        videos: '',
        venue: '',
        event_organizer_name: 'Deepak Gupta'
      },
      { 
        name: 'COMEDY IN DELHI', 
        content: `You can tell how smart people are by what they laugh at! And, these guys just love it when people laugh at them er... sorry, laugh for them! What fuels comedy shows is the laughter that keeps the artist alive as the crowd goes wild! Laughter is the best medicine no doubt, and so the artist doubles up as a therapist almost. Standup, Open Mic , Improv and Plays – They would tickle your funny bone and have you in splits. Laugh out loud and give a loud shout for these Fun(ny) Folks!`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://eheventimages.s3.amazonaws.com/2015-08-03/4aa2faf358ab31cf0137a413c766f22d6a95c3da5556dc55b09adaeb64adbd75_1438597383450_original.jpg',
        videos: '',
        venue: '',
        event_organizer_name: 'Deepak Gupta'
      },
      { 
        name: 'COMEDY IN DELHI', 
        content: `You can tell how smart people are by what they laugh at! And, these guys just love it when people laugh at them er... sorry, laugh for them! What fuels comedy shows is the laughter that keeps the artist alive as the crowd goes wild! Laughter is the best medicine no doubt, and so the artist doubles up as a therapist almost. Standup, Open Mic , Improv and Plays – They would tickle your funny bone and have you in splits. Laugh out loud and give a loud shout for these Fun(ny) Folks!`,
        date_time: '5 April 2017 4:30 pm',
        images: 'https://eheventimages.s3.amazonaws.com/2015-08-03/4aa2faf358ab31cf0137a413c766f22d6a95c3da5556dc55b09adaeb64adbd75_1438597383450_original.jpg',
        videos: '',
        venue: '',
        event_organizer_name: 'Deepak Gupta'
      }
    ]);
  }
};
