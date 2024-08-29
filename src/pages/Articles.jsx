import React from "react";
import Scrollspy from "react-scrollspy";
import "./Article.css";

const Articles = () => {
  return (
    <>
      <div className="article-page">
        {/* Sidebar */}
        <nav className="sidebar">
          <Scrollspy
            items={["section1", "section2", "section3", "section4"]}
            currentClassName="is-current"
          >
            <li>
              <a href="#section1">The Concept of Raga</a>
            </li>
            <li>
              <a href="#section2">Ideals Of An Ideal Thumri</a>
            </li>
            <li>
              <a href="#section3">Agra Gharana</a>
            </li>
            <li>
              <a href="#section4">Guru Shishya Parampara</a>
            </li>
          </Scrollspy>
        </nav>

        {/* Content */}
        <div className="content">
          <section id="section1">
            <h2>The Concept of Raga</h2>
            <h4>Introduction</h4>
            <p>
              The Indian Classical music whether North Indian/Hindustani or
              South Indian is based upon the concepts of “Raga (or Raag)” –
              which means melody and “Tala (or Taal)” – which means rhythm.
              These two concepts form the backbone of our music. So, in order to
              understand Indian music, it is very important to understand and
              get acquainted with these two concepts. Here we will concern
              ourselves with the concept of Raga. We will first define a raga
              then we will discuss its characteristics and subsequently we will
              discuss about its types.
            </p>
            <h4>Origin</h4>
            <p>
              Ragas originated from thaats. “Thaat” is the mother of a raga.
              Thaat can be formally defined as a group of musical notes which
              are capable of producing a raga. Literally “thaat” means a
              structure. Thaat is also known as “mel”. There are 10 thaats in
              North Indian or Hindustani Classical Music.
            </p>
            <p>
              <ol>
                <li>Kalyan – notes used – Sa Re Ga Ma’ Pa Dha Ni</li>
                <li>Bilawal – notes used – Sa Re Ga Ma Pa Dha Ni</li>
                <li>Khamaj – notes used – Sa Re Ga Ma Pa Dha Ni</li>
                <li>Bhairav – notes used – Sa Re Ga Ma Pa Dha Ni</li>
                <li>Poorvi – notes used – Sa Re Ga Ma’ Pa Dha Ni</li>
                <li>Marwa – notes used – Sa Re Ga Ma’ Pa Dha Ni</li>
                <li>Kafi – notes used – Sa Re Ga Ma Pa Dha Ni</li>
                <li>Ashavari – notes used – Sa Re Ga Ma Pa Dha Ni</li>
                <li>Bhairavi – notes used – Sa Re Ga Ma Pa Dha Ni</li>
                <li>Todi (or Tori) – notes used – Sa Re Ga Ma’ Pa Dha Ni</li>
              </ol>
            </p>
            <h4>Defination</h4>
            <p>
              A raga is the combination of minimum five notes and maximum seven
              notes which seem soothing and melodic to our ear. A particular
              raga in Indian music is meant to convey a particular emotion or
              may be used to create a particular kind of environment. Ragas are
              mostly associated with a particular emotion, season or time in
              Indian Classical music. For example raga “Vasant” is associated
              with the spring season; similarly, raag “Megh Mallhar” is
              associated with the rainy season. If these ragas are sung or
              performed by an accomplished singer or performer then one will
              find, how astonishingly, using the notes of these ragas the singer
              or performer changes the environment almost instantaneously. It is
              difficult to say exactly how many ragas are there in Indian
              classical music but near about 100 ragas are performed in the
              classical music concerts.
            </p>
            <h4>Characteristics of Raga</h4>
            <p>
              The characteristics of raga are as follows: <br />
              <ol>
                <li>
                  The first characteristic of a raga can be derived from its
                  definition – it must be soothing to the ear. Now if we
                  elaborate this concept what we get is, a raga must have an
                  appeal along with beauty. This appeal makes that particular
                  raga special.
                </li>
                <li>
                  A raga must have at least five notes and maximum seven notes.
                  Now this statement takes us to the concept of “Jati”. The
                  “Jati” are basically classification of ragas based on the
                  number of notes used. The concept of “Jati” is elaborated
                  later in the article.
                </li>
                <li>
                  Every raga has originated from a “thaat”. There are 10 thaats
                  in Indian Classical Music, and every raga is believed to have
                  originated from them. For example, raga “Desh” has originated
                  from the “Khamaj” thaat.
                </li>
                <li>
                  “Sa” or the first note of Indian Classical Music must be
                  present in all the ragas. No raga can be formed without it.
                </li>
                <li>
                  Either “Ma” or “Pa” must be present in a raga. A raga cannot
                  be formed without using both these notes.
                </li>
                <li>
                  In every raga, there is a “Vadi” and a “Samvadi” note. The
                  concepts of “Vadi” and “Samvadi” notes are illustrated below.
                </li>
                <li>
                  A raga can be sung only at a particular time of the day or
                  night. There are also ragas that can be sung only in a
                  particular season.
                </li>
              </ol>
            </p>
            <h4>Vadi Swara</h4>
            <p>
              The most Important note in a raga is called “vadi swara or vadi
              note”. The performer rests on this note mostly than other notes
              during the performance of that raga. This note is also used more
              than other notes during alaap, sargam or taan. <br />
              Ex: “Ga” is the most important note in case of raga Yaman.
            </p>
            <h4>Samvadi Swara</h4>
            <p>
              The second most important note of a raga, after the “vadi” is
              called the “Samvadi note”. It is used less than the “Vadi” but,
              more than any other note in the raga. <br /> Ex: “Ni” is the
              Samvadi note of Yaman raga.
            </p>
            <h4>Aroh (Ascent) and Avroh (Descent)</h4>
            <p>
              When notes of a raga are sung in ascending order then this
              ascending order of notes is called the “Aroh”. In the same manner
              “Avroh” can be described as the descending order of notes. The
              concept of Aroh and Avroh can be illustrated with the following
              examples: <br />
              <strong>
                Raga Yaman: <br />
                Aroh: Ni. Re Ga M’a Pa Dha Ni Sa` <br />
                Avaroh: Sa` Ni Dha Pa M’a Ga Re Sa
              </strong>
            </p>
            <h4>Jati or Classification of a Raga</h4>
            <p>
              “Jati” is basically a classification of ragas based on the number
              of notes used in their Aroh (Ascent) and Avroh (Descent). In some
              ragas, only five notes are used, whereas in others, seven notes
              are used. So ragas are classified in the following manner on the
              basis of Jati:
            </p>

            <ol className="text-white">
              <li>Odav (Pentatonic): A raga of five notes.</li>
              <li>Shadav (Hexatonic): A raga of six notes.</li>
              <li>Sampoorna (Heptatonic): A raga of seven notes.</li>
            </ol>

            <p>
              Now, it may seem from the above classification that ragas can be
              classified in only three ways based on their jati, but we must
              remember that every raga has its own aroha (ascent) as well as
              avroh (descent). Therefore, it may be the case that the aroh of a
              particular raga consists of seven notes and the avroh consists of
              six notes, or vice versa. So, to classify a raga properly on the
              basis of Jati, we must use jati of both aroh and avroh, and
              therefore with respect to this classification, ragas can be
              classified under nine jatis:
            </p>

            <ul className="text-white px-5">
              <li>Sampoorna – Sampoorna</li>
              <li>Sampoorna – Shadav</li>
              <li>Sampoorna – Odav</li>
              <li>Shadav – Sampoorna</li>
              <li>Shadav – Shadav</li>
              <li>Shadav – Odav</li>
              <li>Odav – Sampoorna</li>
              <li>Odav – Shadav</li>
              <li>Odav – Odav</li>
            </ul>
            <h4>Performance of a Raga – Based upon Time and Season</h4>
            <p>
              Now comes the practical part. There is a very interesting rule
              regarding the performance of a raga or melody in Indian Classical
              music. A particular raga cannot be performed at any time and any
              season. Each raga has a particular time allotted for its recital
              and some ragas have a particular season when they are to be
              performed. For example, raga Lalit is performed at dawn i.e.
              between 4 to 6 am and it cannot be performed at any other time of
              the day. Similarly raga Megh Malhar is performed at the rainy
              season. Now, one may ask that who would listen to a performer at
              dawn. But, the fact is, here in India, Classical music concerts
              are organized at all times. Some are held in evening, some are
              held day long and most of the big concerts are held as whole night
              concerts which continue till morning. So an artist gets ample
              chances to perform a raga as he or she may perform at any given
              time of day or night in a particular concert.
            </p>
            <h4>Explanation of time or season based performance:</h4>
            <p>
              A raga or melody can create or change the environment in just
              seconds. It is capable of conveying different emotions. Therefore
              each raga has its own set of characteristics and powers which
              makes it unique. To sharpen these qualities, the maestros of
              Indian Classical music allocated time and seasons for the
              performance of a raga so that there is a more profound effect of
              these melodies on the audience.
            </p>
          </section>
          <section id="section2">
            <h2>Ideals of An Ideal Thumri</h2>
            <p>
              An ideal 'Thumri' generally relies upon the structural theory of
              other traditional styles of music in India. According to the
              ancient 'parampara' (tradition), for an ideal rendition of any
              form of music, the following requirements are a must:
            </p>

            <ol className="text-white">
              <li>Attractive Voice</li>
              <li>Good Expression</li>
              <li>Perfect Order</li>
              <li>Poetic Text</li>
              <li>Ornamentation</li>
              <li>Proportion</li>
            </ol>

            <p>
              Similarly, in an ideal 'Thumri' presentation, these types of
              qualities should be present, which can be categorized in two ways:
            </p>

            <ol type="a" className="text-white">
              <li>Primary</li>
              <li>Secondary</li>
            </ol>

            <h3>Primary needs of 'Thumri' are:</h3>
            <ul className="text-white">
              <li>Poem</li>
              <li>Technique</li>
              <li>Art of Presentation / Gayaki</li>
            </ul>

            <p>
              'Thumri' is that style of singing through which the inner meaning
              of the poem can be expressed. Accordingly, the lyrics of the poem
              should match the style of Thumri singing, and the singer should
              choose those words at the time of singing which will express the
              meaning of the poem. Thus, the singing style and selection of
              words would support each other for the best rendition.
            </p>

            <h3>Technique:</h3>
            <p>
              One must accept that 'Khayal' and 'Thumri' Gayaki are different.
              In 'Khayal', we use long-ranging 'taan' and 'alaap'. In 'Thumri',
              these applications of 'taan' and 'alaap' are not in vogue.
              Secondly, in 'Thumri', we use different notes and note structures
              which are not based on a particular raga. In Khayal, we only use
              those notes of a particular raga which are appropriate and
              suitable. Thus, a 'Thumri' may be based on more ragas according to
              the ability of the singer and his creativity, aesthetics, etc., as
              per the meaning of the text of the poem is concerned. The singer
              takes short alaap, taan, murki, meend, etc., to enrich his
              singing. 'Thumri' may be based on a particular raga, but the
              singer has the liberty to use note structures of other ragas to
              point out the main context and meaning of the poem. For example,
              in a 'Pilu' Thumri, the singer can use notes of 'Bhairavi' to
              support his imagination and creativity for a better performance.
              Moreover, the presentation of a 'Thumri' should be free from any
              'mudradosh' (meaning typical mannerism). The singer must have a
              thoughtful heart and proper judgement of creation to spellbind the
              audience.
            </p>
          </section>
          <section id="section3">
            <h2>Agra Gharana</h2>
            <h4>Introduction:</h4>
            <p>
              The Agra gharana is one of the most dynamic and fascinating
              gharanas of North Indian/Hindustani Classical Vocal music. The
              Agra gharana is characterized by its masculine and full-throated
              voice production. The style (or gayaki) of this school uses "bol
              baat" (permutations and combination using the lyrics of the
              bandish) and laya-karis frequently in their bandish singing.
              Although, this gharana claims its origins in the Mughal period but
              at that time it was mainly a dhrupad gharana. <br />
              Agra gharana is also known as the "Rangila gharana" meaning the
              "colorful school". It is called the "colorful school" because all
              the eight elements of Khayal have been intricately stitched
              together in this style of singing. If these elements of khayal are
              to be assumed as different colors then the Agra gharana's gayaki
              is the rainbow - a vivacious yet proportionate display of these
              eight colors.
            </p>
            <h4>The Origin</h4>
            <p>
              The scholars of this gharana claim that "Haji Sujaan Khan" was the
              founder of this gharana, but, no credible evidence has been
              produced to support such a statement. This is primarily because of
              the fact that very few books, which were written in the Mughal
              period, are available today for further research in this area.{" "}
              <br />
              Fakirulla's "raag darpan" is one such book which gives us a fair
              amount of insight into the musical traditions and personalities
              associated with music of that time. "Raag Darpan" was written at
              the time of Aurangzeb and it is assumed that he finished the book
              in 1666 A.D. In Fakirulla's "Raag Darpan" we can find a list of
              great singers at the time of Akbar. Here we can find the name of
              "Haji Sujaan Khan" or "Nauhar Bani" after the name of Miyan
              Tansen. It is beyond any doubt that Haji Sujaan Khan was a great
              singer and composer of his time and many of his compositions are
              still performed and well known in the Hindustani Classical music
              circle, although, from these compositions it is not possible to
              establish a link with the Agra style of singing.
            </p>
            <h4>Singing Style:</h4>
            <p>
              There are some very distinctive features of the singing style of
              Agra -
            </p>
            <ol className="text-white">
              <li>
                The first most important feature is the Alaap of Agra gharana
                which uses the nom-tom alaap of dhrupadic traditions. This
                portion helps the singer to establish the right mood and
                environment which is to be rendered with the help of that raag.
              </li>
              <li>
                The second most striking feature is the layakari (different
                rhythmic patterns). The laya-karis are very entertaining and
                beautiful. Frequent improvisations on these rhythmic patterns
                establish the raag on a firmer ground creating a musical
                splendor refreshing and fascinating in every aspect.
              </li>
              <li>
                Boltaans - The taan portions of the vocal recitals in drut laya
                or fast tempo are sung using the words of the bandish. These are
                known as boltaans. The singers of Agra gharana are expert in
                this aspect. Apart from boltaans they also use "aa - kar" taan
                (the taans which are sung by producing a flatter sound of a).
              </li>
            </ol>
            <p>
              The singers of Agra also use meends (gliding over notes) and
              gamaks (powerful sinusoidal emphasis on lower notes) frequently
              for the ornamentation of the recital.
            </p>
            <h4>Maestros of Agra:</h4>
            <p>
              Whenever we think about Agra gayaki, the figure of great Aftab - E
              - Mousiki Ustad Faiyaz Khan Sahab comes to our mind. He is
              considered as a legendary figure in the recent history of
              Hindustani Classical music. Ustad Faiyaz Khan introduced the nom -
              tom alaap of dhrupad into the khayal singing of Agra. His "halak"
              taans and "gamak" taans were extraordinary. Which he executed with
              great speed and beauty. His musical thinking and rendering styles
              have given the Agra gayaki new dimensions. Faiyaz khan sahab has
              produced several worthy disciples who went on to become great
              singers and musicologists. <br />
              Some distinguished singers of this gharana are Ustad Nathhan Pir
              Baksh, Ustad Ghaghhe Khuda Baksh, Ustad Ghulam Abbas Khan, Ustad
              Faiyaz Khan, Ustad Vilayat Hussain Khan, Ustad Latafat and
              Sharafat Hussain Khan, Ustad Yunus Hussain Khan, Pandit S.N
              Ratanjhankar, Pandit Dinkar Kaikini, Pandit K.G Ginde, Pandit
              Kumar Prasad Mukherjee etc. <br />
              Apart from the male singers, this gharana has also produced some
              exceptionally talented and gifted female singers. Among them
              Zohrabai Agrewali, Gauharjaan and Malkajaan are notable singers of
              their time. In fact, Gauharjaan was the first artist in India to
              record a song in the year 1902.
            </p>
          </section>
          <section id="section4">
            <h2>Guru Shishya Parampara</h2>
            <h4>Introduction:</h4>
            <p>
              “Guru Shishya Parampara” or the teacher - pupil relationship is an
              important part of India’s teaching tradition. In ancient India
              most of the knowledge was passed on from the teacher to his pupil
              through oral tradition, this oral tradition of passing knowledge
              is known as the “Guru Shishya Parampara”. Indian classical music
              is still largely dependent on this tradition. In the “Guru Shishya
              Parampara” the student lives with his guru or teacher. The student
              learns different aspects of the music mostly through observing his
              guru and by following his oral instructions. Although due to
              emergence of institutionalized training, now in many parts of the
              world Indian classical music is being taught on the basis of a
              particular syllabus. But still “Guru Shishya Parampara” is the
              preferred method.
            </p>
            <h4>Strengths and weaknesses of Guru Shishya Parampara:</h4>
            <p>
              <h5 className="text-white">Strengths:</h5>
            </p>
            <p>
              As we know every tradition has its pros and cons and so does this
              tradition. The “Guru Shishya Parampara” is a very ancient teaching
              method and thus, in the course of its development it has evolved
              some unique techniques to accommodate different needs of both the
              teacher and the student. Let us now discuss the strengths of this
              tradition:
            </p>
            <ol className="text-white">
              <li>
                The first thing that happens during this teaching process is the
                formation of a unique mental bond between the teacher and the
                student. This deep bonding is absolutely essential when someone
                is learning an art like music.
              </li>
              <li>
                In this teaching tradition, the student gets the sole attention
                of the teacher. Even if there are many students studying under
                one teacher, it is possible to impart training to each and every
                student separately.
              </li>
              <li>
                There is no particular time or format for a class. A lesson may
                be learned by just observing a concert or performance of the
                teacher. The time of imparting a lesson is at the discretion of
                the guru.
              </li>
              <li>
                This method helps to maintain the traditional aspect of Indian
                classical music. A guru who belongs to a particular gharana (or
                school of music) will pass on the traits of this gharana to his
                shishya or pupil. Over a period of time, the shishya absorbs all
                the necessary traits and style of this gharana, and in this way,
                the cycle continues.
              </li>
              <li>
                Another striking feature of this tradition is its ability to
                teach spontaneity. Yes, spontaneous improvisation techniques are
                taught through this tradition. This is possible due to the fact
                that this tradition does not lay down a fixed format for
                teaching, so it varies from person to person, from teacher to
                teacher. Thus, improvisation is inherent in this tradition.
              </li>
            </ol>
            <p>
              <h5 className="text-white">Weaknesses:</h5>
            </p>
            <p>
              From the above-stated facts, we get a clear picture of the
              strengths of the “Guru Shishya Parampara.” But, there are also
              some serious weaknesses in this tradition which are as follows:
            </p>

            <ol className="text-white">
              <li>
                The student learns only from one teacher and thus looks at all
                the aspects from only one vantage point.
              </li>
              <li>
                The absence of a structured teaching method makes students more
                vulnerable to failures.
              </li>
              <li>
                This tradition is particularly helpful for imparting practical
                lessons. It does not help in learning the theoretical aspects of
                the subject.
              </li>
              <li>
                Overdependence on a single teacher. We must not forget that
                teachers are human beings, and their strengths, weaknesses, mood
                swings, perception, and overall personality become important
                factors at the time of teaching.
              </li>
            </ol>
            <h4>Present form of Guru Shishya Parampara:</h4>
            <p>
              The present form of “Guru Shishya Parampara” does not strictly
              adhere to the principles of this tradition. It rather uses some
              basic concepts of this tradition along with modern teaching
              methods and techniques. <br />
              By using a MP3 player, iPod or digital recorder a student can now
              acquire more details in lesser time. Youtube and other such
              internet mediums have opened up vast archives of Indian classical
              music records of the past 100 years or so through which students
              can simultaneously learn and enrich their knowledge base. So, the
              scenario has changed quite a bit and we can expect to see more
              changes in the coming years.
            </p>
            <h4>Conclusion:</h4>
            <p>“Guru Shishya Parampara” is still essential for Indian classical music. It has not lost its credibility due to the emergence of new technology or institutionalized training system. What is needed today is a fusion of “Guru Shishya Parampara” with institutional training. New technology and equipment can further increase the effectiveness of this tradition. We must not forget that this is a time tested method. With spontaneity and improvisation as its key ingredients, it is destined to play even a bigger role in shaping the future of Indian classical music.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Articles;
