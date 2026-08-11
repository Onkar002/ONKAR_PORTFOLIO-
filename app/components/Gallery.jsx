import styles from './styles.module.css';
import img1 from '../../public/gallery/img1.jpg';
import img2 from '../../public/gallery/img2.png';
import img3 from '../../public/gallery/img3.jpeg';
import img4 from '../../public/gallery/img4.jpeg';
import img5 from '../../public/gallery/img5.jpeg';
import img6 from '../../public/gallery/img6.jpeg';
import img7 from '../../public/gallery/img7.jpeg';
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: img1,
            scale: scale4
        },
        {
            src: img2,
            scale: scale5
        },
        {
            src: img3,
            scale: scale6
        },
        {
            src: img4,
            scale: scale5
        },
        {
            src: img5,
            scale: scale6
        },
        {
            src: img6,
            scale: scale8
        },
        {
            src: img7,
            scale: scale9
        }
    ]

    return (
        <div ref={container} className={styles.container}>
          <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
  <div className="max-w-4xl text-center">
    <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
      Jornal
      <br />
      
    </h1>
  </div>
</div>
            <div className={styles.sticky}>
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
