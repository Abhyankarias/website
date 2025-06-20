import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import Carousel from './Carousel';
import Button from './Button';

const TITLE = ` Success stories & testimonial`;
const ALUMNI_LIST = [
  {
    name: `Swapnil Mahajan`,
    imgSrc: '/images/SwapnilMahajan.png',
    rank: `IPS, (CSE-2016, AIR-720)`,
    institute: ``,
    text: [
      `It all started when…..well to be honest I don't know when it actually started, but it was in July of 2013 when I decided that I must give some serious thought to pursue career in Civil Services. By August I had put in my papers and by November end I was back in Pune.`,
      `I was attending a friend's wedding when somebody asked me where I was going to prepare for CSE. I had not decided yet and that same person suggested that I visit Abhyankar's IAS Academy. 1st December 2013 I met Aashay Sir, discussed about my background and got to know about the class.
My first impression of our class was very positive and my first interaction with sir gave me the confidence that it is here that I can find the path to reach my goal.`,
      `I started on 3rd December and the journey so far has been much more rewarding than I had expected. Two and half years since then I have only grown as a person, learnt many things that are essential to become a good human being, met officers from services which only inspired me to work even harder. One of the best decision has been to write CSE 2014, I knew I was not prepared but that was not the point. It provided me an opportunity to know my strengths and weaknesses. Sir's support during this
attempt was crucial, It was race against time but we were able to hit a good total in Mains. The interview preparation after the mains was fun filled starting with a trip to Goa followed by Mumbai. Although I did not clear Main exam I had got the orientation of what needs to be done. Problem areas vary from individual to individual and one needs an unique solution to overcome them. This is exactly what the academy provides at every single stage i.e. Prelims, Mains and Interview. The 2015 prelim was a little different as CSAT was made qualifying thus making GS paper much more
important. Aashay Sir equipped us well with thorough practice (we had 9 mini-mocks and 8 full portionmocks) and I was able to clear the first stage successfully.`,
      `This was followed by a series of mock tests for mains (16 GS mini mocks+ 9 Socio mini mocks and 2 full portion), this has helped me improve my writing speed as well as arrangement of thoughts necessary to write a good answer. Lot of focus was on current affairs discussion which is very important in today's format of CSE.`,
      `I want to separately thank sir for helping me improve my essay writing which carries weightage equivalent to one GS paper. I can vividly recollect my first essay in class, I was barely able to write 200 words but practicing essays and getting them corrected from sir has led to a lot of improvement.
The most interesting and to my mind the most difficult part was the interview preparation. Interesting because I got to meet great people, the journey started with Mr. Bhagwan Joshi and Dr. Pradnya Saravade IPS in Pune and Mumbai respectively, followed by our trip to Delhi where I got to
interact with Dr. Nandkumar Saravade ex-IPS, Mr. Rajesh Tomar of ITBP, Nuclear Scientist Dr. Nerurkar and Mr. Manhar Yadav IFS. Lastly I got to meet Mr. Jha IRS here in Pune.`,
      `These interactions provided a glimpse into life of these officers which was amazing and it also allowed me to gain knowledge and build perspectives about the burning issues. Most importantly it showed that one can reach for the skies with feet on the ground. I said difficult because I am an introvert and this was acting against me during our mock interviews. Sir kept motivating me to speak more and it worked in the end. I was again impressed by sir's efforts to prepare questions for me and prepare me for the interview.`,
      `Guidance by Ameya Sir and Nila Ma'am has proved valuable. They take keen interest in the progress of students at the academy. In April 2016 Ameya Sir conducted a mock interview for me and gave me specific pointers to work on, that way I was able to channelize my energy in a better manner.`,
      `Charu Ma'am also inspired me whenever we met. I remember once I met ma'am after 2015 prelim results and ma'am said " your hard work has paid off, keep working and you will definitely succeed. I'll pray for you” . Today when I write this testimonial, these words have come true.`,
      `Last but not the least; Bharat has been a great inspiration throughout the preparation. He took time from his busy schedule to talk to me and motivate me.`,
      `To conclude, I would like to say that it has been an awesome experience so far as a member of Abhyankar's IAS family and I see this as a new beginning. Words are not enough to Thank Sir for all the things he has done.`,
      `Sir once gave us an essay topic to write “The path is the goal”, I feel that this statement is more important today than ever.`,
    ],
  },
  {
    name: `Vinod Patil`,
    imgSrc: '/images/VinodPatil.png',
    rank: `AIR-132, CSE 2019`,
    institute: ``,
    text: [
      `I took guidance from Aashay Abhyankar Sir. I had been scoring average marks. I was made to realise that the way I was approaching the interview was wrong. I found Sir's approach to be unique here and unlike the conventional mock interviews and feedback. This had provided me much needed confidence to face the interview and helped me in getting 132 rank in civil services exam 2019.
`,
    ],
  },
  {
    name: `Maithili Korde`,
    imgSrc: '/images/MaithiliKorde.png',
    rank: `AIR-663, CSE 2017`,
    institute: ``,
    text: [
      `As a student, preparing for the the Civil Services Examination, I had enrolled with the Abhyankar ' s IAS Academy for the Mains and Interview preparation. Today, with an All India Rank 663 in the Civil Services Examination, 2017, I can say that Abhyankar's IAS Academy has played a major role in achieving it. Aashay Abhyankar Sir's out of the box thinking, creative inputs and thorough analysis helped me write unique answers in the Mains examination. The brainstorming sessions and question - answer rounds with Abhyankar Sir made it possible for me to score 184 marks in my interview.`,
      `Sir has not only been a teacher, but also a mentor, parent and friend in this arduous journey. In my failures, Sir has stood by me and shown the way forward through identification of my mistakes and the way to resolve them. Sir's dedication, enthusiasm and optimism has always motivated me to keep moving ahead even in adverse circumstances. I take this opportunity to thank Abhyankar's IAS Academy for helping me achieve this milestone. The learnings received here will definitely be useful throughout my life. The moments lived here will always be cherished. I give my best wishes to Aashay Abhyankar Sir and Abhyankar's IAS Academy for greater success.`,
    ],
  },
  {
    name: `Kiran S`,
    imgSrc: '/images/KiranS.png',
    rank: `AIR-302, CSE-2016`,
    institute: `IRS(IT)`,
    text: [
      `Five attempts, 2 interviews and not being in the coveted rank list would be a heart breaking situation for any aspirant. I was being let down by my interview scores. This is when I chanced upon Abhayankar's IAS for my interview preparation.`,
      `Aashay Sir's unique approach to personality test focused on short mock interviews, focus on how to do a better conversation with an idea to convey more in few words, interaction with senior officers and understanding the need of personality test played a major role in my success.`,
      `Further, Sir helped me to understand the requirements and how a panel of 5 members assesses a candidate. Also, his way of teaching and thinking, away from the regular run of the mill coaching classes, gives a fresh perspective to an aspirant.`,
      `Eventually, I scored 182 in my third interview and currently undergoing training for IRS(IT) in Nagpur.`,
      `I take this opportunity to thank Sir from the bottom of my heart`,
    ],
  },
  {
    name: `G Ravikiran`,
    imgSrc: '/images/GRavikiran.png',
    rank: `AIR-986, CSE 2014`,
    institute: ``,
    text: [
      `I have come to know about Abhyankar IAS through Ameya sir. I interacted with Aashay sir before mains 2016 over phone and used to send my answer scripts for feedback. Sir has suggested improvements like sticking to fundamentals, defining the concepts asked in question rather than directly jumping to answer them, and including government schemes where ever needed etc. These are the points which many of us tend to ignore as silly paying huge costs. I and Kiran have completely relied on Aashay sir for interview preparation. Sir made us meet many ex-bureaucrats who boosted our confidence and it made us comfortable interacting with such seniors. So, facing the interview board never "scared" us! Also, he has taken many personal sessions, one-on-one mock interviews and used to provide instant feedback. Regular motivation before interview ensured that we are in the right spirits and gave our best during the interview. Interactions with Aashay sir was not just confined to civil services exam, it was a personally enriching experience too providing a holistic and broad-minded approach to exam and the life. I thank Aashay and Ameya Sir for guiding me for the exam, and also wish them great success in guiding future aspirants for civil services.`,
    ],
  },
  {
    name: `Bharat Reddy`,
    imgSrc: '/images/BharatReddy.png',
    rank: `AIR-120, CSE-2014`,
    text: [
      `I was fortunate enough to be associated with the ABIAS family for over 5 years and with sir for around 3 and half years.`,
      `The stress on sir’s teaching was always ‘ meaning of each and every word’. A typical class would go like this :
“Why must one pursue excellence?”`,
      `Like always we’d see each others’ blank faces and reply “To give your best..?”`,
      `“To achieve the best.. ?”. Another student said.`,
      `“Very Sad, why, why why excellence ? Because EVERYTIME I WANT TO GET IT RIGHT! ” Said Sir. These were the words that ingrained in my mind. In this way sir would free our minds and help us identify what our goals must be.
Another incident I would like to explain here, once a student had asked “Sir, how much must one aim in the optionals ?”`,
      `“What is the maximum mark? “. Sir said.`,
      `“600 sir.”`,
      `“Then you must aim for 600”.`,
      `In this way sir would inspire us to not settle for meagre numbers. He would always want us set the “right” targets and work towards achieving them.`,
      `These things, may sound superficial, but they helped me a lot while preparing for exam. It helped also in the exam center as my competition was not with anyone and so I was not stressed by what people were talking. This was because I was clear in my mind that I have to do well irrespective of the paper  being easy or tough. That is how I was able to clear mains thrice back-to-back`,
      `After sir’s demise in 2011, Ameya sir and Aashay sir helped me a lot. I really salute the fortitude of Ameya Sir who immediately after cremating his father comes of the cremation area and announced we’ll have class tomorrow at 9 am.`,
      `In 2012, I decided the take the exam again. This was my last attempt. I focussed a lot on GS and Essay. I had acquired very good marks in Socio and Pub Ad in 2010. So, I slowly tended to neglect the optional thinking that I can good marks even without practicing answer writing. During this period, Aashay sir had helped me upgrade my Essay skills. On the exam day for mains, I was feeling less confident but carried on. I did get an interview call and so I was satisfied. For interview prep Ameya sir arranged some meetings with few serving officers. I first went to Odisha. There I met Mr. Sachin Jadhav, IAS. He was very receptive and asked specifically what went wrong in my last interview. After explaining he told me what things I needed to correct. I also went along with him to a village and interacted with few tribals.`,
      `At Delhi, I met Mr. Vijay Dev, IAS and Mr. Bhagawan Joshi. Mr Vijay Dev is one person whom I will never forget in life. I had opportunity to talk to him only for around 20 mins. His personality, clarity of thought and form of expression really impressed me. I immediately felt that this is how an IAS officer must be and took him as my role model.`,
      `In the exam this time I was able to achieve good marks in GS but I performed extremely bad in the optional subjects. I faced Mrs Alka Sirohi in the interview. Her first question had put me stress. I tried to recover and salvage as much. I got 174 in the interview. I was having a feeling that my name will appear in the list this time. Alas, it did not. I was devastated and thoughts of even committing suicide had entered my mind. I remembered what Sir had told me once. Whatever decision you take, take it after 1 week. I waited for a week. Did nothing. My friend took me to his place. His parents were helpful and made me realise of my family and life other than Civil Services Exam. The doors of CSE were closed on me. I met Aashay sir and he told me that I must start looking forward now. Since, I had not quit the job, I was able to concentrate other things and also started charting out career plans in the direction of my work.`,
      `On 22nd Feb, the news of extension of age and number of attempts had arrived. A great feeling of irony pervaded my mind. I asked sir, what does it mean ? Should I try again ? I was not sure that if I could not clear it this time too, then I would not be able to see myself in a mirror ever again. Aashay Sir told me only one thing. “Things happen to only those who can face them. It happened to you because you never quit. It happened because you can fight”. I made up my mind that I must appear for the exam one more time. This time I closed myself to all external influences. I rationally took out the syllabus, gathered study material and studied as if I was executing an 8 month long project. Aashay sir helped me by working with me very closely. He made himself available whenever I wanted. We’d even meet at around 10 PM after all classes to discuss my answers.`,
      `The mains exam 2014 was over in a jiffy, there was no time even to assess how the papers went. In January of 2015, we again started our Interview prep by visiting serving officers. Our stint started with Goa. Here we met Ameya sir and Nila Ma’am. We also met Mr. Ajit IAS who was of 2011 batch. He gave us a very personalized explanation of how we must prepare. For me he said my interview would be varied and general as my profile was like that. He told that each interview is unique and one cannot learn by reading about other s’ interviews.`,
      `Another thing we did during this period was that we 4 people who were preparing for the interview conducted mock interviews for each other. So, 3 people would sit and interview the 4th person based on profile, current affairs and the like. It was an extremely helpful process. We also video graphed each interview and would look at our body language and correct them for subsequent interviews.`,
      `We further met Shri Nandkumar Saravade and Shrimati Pradnya Saravade in Mumbai. Interactions with them gave a broader view of police reforms, cyber security and make in India.`,
      `The interview dates arrived and two of our interviews were spaced over a week. A very crucial thing happened during this period which had a great bearing on my interview performance. Sir, himself had accompanied us to Delhi.  Presence of Sir in person had a great positive influence on my psyche. It gave me great courage that I can face it no matter what. We, along with sir, met many individuals who provided their share of wisdom towards cracking the interview. Mr. Bhagwan Joshi was of great help in this regard. He gave great insights into how one must introduce and make oneself comfortable in the beginning of the interview.`,
      `And then finally, 4 months later it happened. On 4th of July the results were announced and I had secured 120th rank. All the efforts of my sirs and my friends had come to fruition. It was indeed a day of fulfillment. The task that I had set upon had ended. In this journey, I met some great wise men without whom my resolve could never have been strengthened, I saw myself in situations from which I wouldn’t have learnt what I learnt to overcome this behemoth of exam. I will always be indebted to the Abhyankar IAS family for their constant support in achieving the dream of my life.`,
    ],
  },
  {
    name: `Shatarupa Mishra`,
    imgSrc: '/images/ShatarupaMishra.png',
    rank: ``,
    institute: `IRS(IT)`,
    text: [
      `Growing up in a family where many members worked in government services or development sector, I had a natural curiosity towards civil services since childhood. All through my school and college years , while my career goals kept shifting , deep down I knew that someday I would attempt the prestigious UPSC CSE examinations. The common questions of why and how became crystal clear when I met Ajit Sir and Aashay Sir and the rest for me , has been a dream run.`,
      `I joined the Abhyankar IAS Academy in 2011 while I was pursuing my 4th year BA LLB for the foundation course. Aashay Sir’s constant words of encouragement helped my writing skills blossom. In 2012 due to a rigorous college schedule I had to discontinue classes at the Academy and was almost on the verge of accepting a corporate law firm job. But destiny had other plans! Discussion with Aashay Sir and family members convinced me to thoroughly to prepare once at least for the examinations.`,
      `Insecurities of zero work experience, staying away from home, the huge syllabus melted away as I thoroughly enjoyed the Mains classes. Focus of the pedagogy was interlinkages of syllabus with current events-something the UPSC expects us to build. Aashay Sir’s amazing conceptual clarity in teaching was a boon for a novice like me. The best part was no doubt of anyone was considered irrational or small – it was cleared instantly.`,
      `Sociology as an optional was new for me but I thoroughly started enjoying it due to Sir. Simple yet critical nuances like weekly discussions of current affairs, small strength of batches, holistic analysis of each topic are hallmarks of the Academy that helped us a lot. The constant reiteration of answer writing practice was drilled into our heads – something that most fail to do and suffer in the Mains.`,
      `April 2014 onwards, we were subjected to an extremely Prelims module, replete with discussions, special CSAT classes and the most important, tests. It being my first attempt, I was nervous and had many doubts but Sir had more confidence in me – Keep working , Shatarupa. You will pass” Thank God I listened to him and August 2014 saw a hopeful me, waiting for results.`,
      `The 3 and half months prior to Mains examinations was filled with timely sectional and full portions tests , regular feedback and doubt clearing sessions – occasional anxiety attacks were met with Sir’s constant encouragement. I was pleasantly surprised to see that most questions in the UPSC CSE Mains 2014 had been covered in class already.`,
      `January onwards , we started preparations for the last leg of the journey- the Personality Test through gruelling mock interviews , interactions with serving and retired bureaucrats and study trip . Practical experience enriched our theoretical knowledge. Soon I was ready for the final lap.`,
      `The Civil Services Examination tests not only out knowledge but also our mental strength and stability in times of adverse situations. The Abhyankar’s IAS Academy understands this and prepares us both mentally and intellectually. Over the past two years of my preparation I have a lot to thank the Academy for. Here you learn to love what you do and that guarantees satisfaction and with little bit of luck and blessings, success too.`,
      `All I did was listen to Sir, work very hard and circa 2015 , my long cherished childhood dream of clearing civil services examination in the very 1st attempt came true and in what a splendid way!`,
    ],
  },
];

function truncateText(text) {
  const maxLength = 193;
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '.....';
}

export default function Testimonials({ className }) {
  return (
    <section className={className}>
      <h1 className='title text-center mb-8'>{TITLE}</h1>
      <Carousel>
        {ALUMNI_LIST.map(({ name, imgSrc, rank, institute, text }, index) => {
          return (
            <div
              className='flex flex-col w-full bg-[#FFF8F5] rounded-2xl p-8 gap-4 drop-shadow-md md:flex-row'
              key={index}
            >
              <div className='flex flex-col gap-2'>
                <div className='mx-auto relative max-h-[170] max-w-[200]'>
                  <img
                    className='relative z-[2] mx-auto md:place-self-start'
                    src={imgSrc}
                    alt={`Picture of ${name}`}
                    style={{ maxHeight: '170px' }}
                  />
                  {/* <Image
                    className='relative z-[2] mx-auto md:place-self-start'
                    style={{ maxHeight: '170px' }}
                    src={imgSrc}
                    alt={`Picture of ${name}`}
                    width={169}
                    height={170}
                  /> */}
                  <div
                    className='absolute bottom-0 z-[1] h-[139] w-[157] rounded-t-md '
                    style={{ background: '#e57b3e' }}
                  ></div>
                </div>

                <p className='title text-center md:text-left'>
                  <span>{name}</span>
                  <span className='block md:inline-block md:ml-2'>
                    {rank || institute}
                  </span>
                </p>
              </div>

              <div className='flex flex-col gap-2 md:gap-20'>
                <p className='text-center whitespace-pre-wrap md:text-left'>
                  {truncateText(text[0])}
                </p>
                <Button
                  className='font-league-spartan-medium md:max-w-1/5'
                  text='View Story'
                  textColorPrimary={false}
                  backgroundPrimary={false}
                  style={{ backgroundColor: '#FFF0E8' }}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
