// Home.jsx
// import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="Hero">
        <div id="top">
          <p id="top-text">
            "Lose yourself in the ethereal world of classical music"
          </p>
        </div>
      </section>
      <section className="achivements">
        <div className="title">
          <h2>Achievements</h2>
        </div>
        <div className="achivement-container">
          <div className="a-card1">
            <div className="img img1">
              <img src="/Images/4.jpg" alt="image" />
            </div>
            <p>
              Carring forward the rich legacy of Agra Gharana with profound
              dedication and authencity.
            </p>
          </div>
          <div className="a-card1">
            <div className="img">
              <img src="/Images/sumanta.jpg" alt="image" />
            </div>
            <p>
              An established artist of all India Radio and Doordarshan,
              showcasing the brilliance of Hindustani classical music.
            </p>
          </div>
          <div className="a-card1">
            <div className="img">
              <img src="/Images/sumantasarkar.jpg" alt="image" />
            </div>
            <p>
              Admired by maestros like Pandit D. T. Joshi, who honored him with
              the title "Taan Kaptaan".
            </p>
          </div>
        </div>
      </section>
      <section className="teachers">
        <div className="title">
          <h2>Teachers Of Sumanta</h2>
        </div>
        <div className="teacher">
          <div className="t-img" style={{ float: "left", marginRight: "20px" }}>
            <img src="/Images/joshi.jpg" alt="Prof. Dhruva Tara Joshi" />
          </div>
          <div className="text-teacher">
            <p>
              Prof. Dhruva Tara Joshi, popularly known as "Joshi ji" was a Sitar
              virtuoso of his time and was a disciple of legendary Ustad Inayat
              Khan Sahab. Joshi ji was an expert in Urdu, Hindi, English and
              Bengali language. His intense love for music and profound passion
              for language can be seen in his great compositions. Joshi ji
              performed in concerts all over India and won the hearts of people
              everywhere. Unfortunately due to a physical problem he was forced
              to stop playing Sitar. So, Joshi ji concentrated more on composing
              and teaching music. He composed many Khayals, Dhrupads, Ghazals in
              Urdu and Hindi language. His pen name as a composer in Hindi was
              "Prem Rang" and in Urdu language it was "Jhunu Lucknowee". As a
              person and human being he had no parallel in the field of music,
              the Hindustani Classical Music fraternity will remember him
              forever.
            </p>
          </div>
        </div>
        <div className="teacher-right">
          <div className="text-teacher-right">
            <p>
              Pandit Sunil Bose, a strong representative of Agra Gharana, was
              born in the year 1916 in Chamba, Himachal Pradesh. He trained
              himself under great maestro, musicologist Pandit Ratanjhankar. He
              had the privilege of taking guidance under Aftab -E- Mausiki Ustad
              Faiyaz Khan Sahab. He also learnt from Pandit D.T Joshi, Ustad
              Khadim Hussain Khan, Ustad Ata Hussain Khan and Ustad Latafat
              Hussain Khan. Thus, he enriched himself with the close association
              of those great personalities and putting these learning
              experiences into teaching, he, himself created a scientific voice
              training method which was unique in nature. He was a great teacher
              and many of his students are renowned musicians of the day.
            </p>
          </div>
          <div
            className="t-img-right"
            style={{ float: "right", marginLeft: "20px" }}
          >
            <img src="/Images/sunil babu.jpg" alt="Prof. Dhruva Tara Joshi" />
          </div>
        </div>
        <div className="teacher">
          <div className="t-img" style={{ float: "left", marginRight: "20px" }}>
            <img
              src="/Images/kumar_babu2.jpg"
              alt="Pandit Kumar Prasad Mukherjee"
            />
          </div>
          <div className="text-teacher">
            <p>
              Pandit Kumar Prasad Mukherjee was an eminent singer and admirer of
              Indian Classical Music. He was a music critic for 15 years in
              Statesman. Music was his heartbeat. He started his taleem from
              Rabindra Roy at the age of 8 years. After being matured enough he
              became disciple of Mustaque Hussain Khan Sahab. Later he was
              highly influenced by the style of Aftab -E- Mausiki Ustad Faiyaz
              Khan Sahab and his gayaki (way of exploring a particular raga
              along with one's personality). He started taking guidance from two
              very near relatives of Ustad Faiyaz Khan Sahab --- Ustad Latafat
              Hussain Khan Sahab and Ustad Ata Hussain Khan Sahab. His first
              radio program was a national program. His first book was awarded
              'Rabindra Puraskar'. He performed many times in national programs
              and attended as vocalist in different conferences. As an orator of
              Indian music he received 'Pandit' award from Gana Kala Parishad
              Bengaluru.
            </p>
          </div>
        </div>
      </section>
      <section className="review">
        <div className="title">
          <h2>Reviews</h2>
        </div>
          <div className="review-box">
            <div className="reviews">
              <img src="/Images/Tanbir.jpg" alt="Tanbir Alam" />
              <h4>Tanbir Alam</h4>
              <p>Sumanta Sarkar's soulful voice and mastery of ragas captivate audiences, embodying the essence of Agra Gharana</p>
            </div>
            <div className="reviews">
              <img src="/Images/review.jpg" alt="Suman Sikdar" />
              <h4>Suman Sikder</h4>
              <p>Sumanta Sarkar's performances are a mesmerizing blend of tradition and talent, leaving listeners spellbound.</p>
            </div>
            <div className="reviews">
              <img src="/Images/review1.jpg" alt="Spandan Sarkar" />
              <h4>Spandan Sarkar</h4>
              <p>Sumanta Sarkar's exceptional voice and mastery of classical music bring the true spirit of Hindustani music alive.</p>
            </div>
          </div>
      </section>
    </>
  );
}

export default Home;
