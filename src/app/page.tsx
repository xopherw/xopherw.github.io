import Image from "next/image";
import Link from "next/link";
import me from '../../public/me.jpg';
import github from '../../public/icons/github.png';
import linkedIn from '../../public/icons/linkedIn.png';
import email from '../../public/icons/email.png';
import medium from '../../public/icons/medium.png';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4 body">
      <div className="p-2 rouded-full">
        <Image src={me} alt="me" width={300} className="rounded-full" />
      </div>
      <div className="m-3 items-center justify-center p-3"> 
        <text className="text-3xl font-bold ">Welcome to my site</text>
      </div>

      <div className="preWrap w-[1000px]">
        <p>
          Hello world, welcome to my personal website! My name is Christopher Wong (She/They). I am from Malaysia born in Kota Kinabalu, Sabah.
          I am currently doing my PhD in the University of Canberra, Australia.  
        </p>
        <p>
          Previously, I have obtained a bachelor degree in Mechanical Engeering from the Iowa State University in 2018. After graduating, I 
          worked in Singapore as an Engineer. Shortly after that, I began my Master in Business Informatics journey with University of Canberra,
          Australia and have completed in 2024.
        </p>
        <p>
        I have always been passionate about technology and programming. In my free time I like to work on my personal coding project mostly in 
        Ptyhon, but I am open to almost many programming languages. In this site, it is mainly developed in ReactJS using Typescript.
        </p>
        <p>
        I also love learning new stuff and listening to audiobooks. Anyway, I hope you enjoy my website, you may reach me in one of the medium below!
        </p>
      </div>

      <div className="mt-[10px] mediums flex">
        <Link href="https://github.com/xopherw">
          
            <Image src={github} alt="github" />
          
        </Link>
        
        <Link href="https://www.linkedin.com/in/chriswwl95/">
          
            <Image src={linkedIn} alt="LinkedIn" />
          
        </Link>
        <Link href="mailto:chriswwl95@gmail.com">
          
            <Image src={email} alt="email" />
          
        </Link>
        <Link href="https://medium.com/@chriswwl95">
          
            <Image src={medium} alt="medium"/>
          
        </Link>
      </div>
    
    </main>
  );
}
