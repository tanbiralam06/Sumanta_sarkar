import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <>
      <div className="about-container">
        <section className="hero">
          <img src="/Images/about.jpg" alt="About" className="hero-image" />
          <h1>About Sumanta Sarkar</h1>
        </section>

        <section className="content">
          <div className="paragraph">
            <img
              src="./Images/sumantasarkar.jpg"
              alt="Sumanta Sarkar"
              className="float-left"
            />
            <p>
              Sumanta Sarkar has been carrying forward the legacy of Agra
              Gharana since he started taking talim from his guru late Pandit
              D.T Joshi. Sumanta has performed across the country in various
              concerts and is an established singer of A.I.R Kolkata and Kolkata
              Doordarshan. His magnificent voice quality has mesmerized
              audiences all over India. Apart form Pandit D.T Joshi Sumanta
              Sarkar has also taken lessons from Late Pandit Kumar Prasad
              Mukherjee, Late Pandit Ramashraye Jha and Late Pandit Sunil Bose.
            </p>
            <p>
              Sumanta's way of unfolding a raga always touches the heart of
              listeners by his own way of improvisation through his voice
              quality along with different layakaries and taans. His rendering
              of thumri is also a mark of aestheticism and sense of beauty. He
              always performs easily and smoothly, extracting the brilliance of
              Hindustani Music. Sumanta Sarkar presents art of classical vocal
              music with no artificiality, but maintains, what is called
              'parampara', a true bond of teacher and student.
            </p>
          </div>

          <div className="paragraph">
            <p>
              Sumanta Sarkar truly represents Agra Gayaki, with a vibrant voice
              quality. He is an established artist of All India Radio and
              Doordarshan. His style of vocal presentation mesmerized audiences
              in various programs at Rabindrasadan, Birla Academy, Kalamandir
              and other prestigious venues in kolkata. Apart from kolkata,
              Sumanta Sarkar overwhelmed audiences in Allahabad, Benaras,
              Bengaluru, New Delhi, Burdwan, Shantiniketan etc.
            </p>
          </div>

          <div className="paragraph">
            <img
              src="./Images/sumanta.jpg"
              alt="Sumanta"
              className="float-right"
            />
            <p>
              Sumanta Sarkar is the grandson of Late Shri Kshitindranath
              Majumder, who was an eminent painter of his time. Shri
              Kshitindranath Majumder was one of the five great disciples of
              Abanindranath Tagor. Kshitindranath's aestheticism in his art and
              personality is inherited by his grandson Sumanta in unfolding and
              exploring different moods of classical music.
            </p>
            <p>
              Sumanta has been a favourite of all his gurus(teachers). Pandit.
              D.T Joshi used to call him "Taan Kaptaan" for his mastery over
              taan. Sumanta's taankari often made Kumar babu (Pandit. Kumar
              Prasad Mukherjee) reminiscent of great Ustad Vilayat Hussain Khan
              Sahab of Agra Gharana. Pandit. Ramashraye Jha of Allahabad also
              appreciated his style of singing and treatment of raga. For that
              matter, Pandit. Ramashraye Jha also taught some of his own
              compositions to Sumanta.
            </p>
          </div>
        </section>
        <section className="hero">
                <h1>Sumanta's GrandFather</h1>
                <h2>Kshitindranath Majumder</h2>
        </section>
        <section className="content">
          <div className="paragraph">
            <img src="./Images/kshitindranath_majumdar.jpg" alt="" className="float-left" />
            <p>
            Kshitindranath was born in 1891 at Nimtita in Murshidabad District of West Bengal. His father was Kedarnath Majumdar. He lost his mother, Kadambini devi, when he was only one. Kshitindranath learned his unassuming ways amid rural surroundings. His art stems from religious rituals,  village narrations (katha) and the folk theatre (yatra) all of which are a part of traditional village life. He educated himself in the customary way that our people educated themselves before English schools and colleges were established. Kshitindranath came to calcutta in his early youth and thereafter always lived in towns and cities. But, there were no sharp overtones of modern urban society in his personality. He became a student of Abanindranath Tagore in 1909 and studied with him for 6 years. At that time Abanindranath's style was quite popular in sophisticated circles. Indian art in those days had taken a definite course.
            </p>
            <p>
            Kshitindranath started teaching at the Indian Society of Oriental Art and later became the principal; he worked there for 18 years. Kshitindranath's paintings which were in the New Bengal School style were greatly admired.  Some of his paitings were sold to Rothenstein, Lord Hardinge, the viceroy;  Lord Ronaldshay, Governor of Bengal and other distingushed patrons of that time.
            </p>
            <p>He was invited to teach art at Allahabad University in 1942 and continued there till he retired in 1964. Retrospective exhibitions of his works were arranged in Banaras in 1949 and agin in 1964 and in calcutta in 1963. He was felicitated with Merit Award (Ashok Pillar) by the Bengal Congress Committee in 1963. He was a distinguished fellow of Lalit Kala Academy. Kshitindranath died in 1975.</p>
            <p>Kshitindranath, who was an ardent Vaishnavite, travelled on various pilgrimages to Brindaban, Nabadvip, Hardwar, Puri, and other sacred cities. He spent much if his time listning to religious discourses. He also visited Southern India and Bombay. Kshitindranath studied Kirtan with Nabadvip Brajbashi and was an accomplished singer.</p>
          </div>

        </section>
      </div>
    </>
  );
}

export default About;
