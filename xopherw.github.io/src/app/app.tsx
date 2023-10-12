export default function App() {
  return (
    <main>
      <body>
        <div className="flex flex-col space-y-15">
          <div className="m-16 self-center">
            <img src="/assets/me.jpg" width={100} />
          </div>

          <h2 className="text-4xl border-4 border-pink-500 text-center">
            Welcome to my site!!
          </h2>
          <p>
            My name is Christopher Wong and I am born in Kota Kinabalu,
            Malaysia. I graduated as a Bachelor of Science in Mechanical
            Engineering from Iowa State University in 2018. I am currently doing
            my Master Degree in Business Informatics in University of Canberra.
          </p>
          <p>
            As you can see, I am quite passionate about technology. I personally
            enjoy coding in Python. I have been doing some JS projects. I am
            also interested in Data Science and Machine Learning sorts of
            things, hence my Master was mostly about that.
          </p>
          <p>
            Overall I enjoy learning new things, and occassionally read some
            books. I hope you enjoy my site and please feel free to reach me out
            in any medium below!
          </p>
        </div>

        <div>
          <h3>Icons</h3>
        </div>
      </body>
    </main>
  );
}
