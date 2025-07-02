import Image from "next/image";
import Marquee from "react-fast-marquee";

const Text = ({ text }) => <div>{text}</div>;

const MarqueeVariant1 = () => {
    return (
        <Marquee speed={50}>
            <Text text={"Learn more about ordering"} />
        </Marquee>
    );
};

const MarqueeVariant2 = () => {
    const imgs = [
        "images/marquee/img1.png",
        "images/marquee/img2.png",
        "images/marquee/img3.png",
        "images/marquee/img4.png",
        "images/marquee/img5.png",
        "images/marquee/img1.png",
        "images/marquee/img2.png",
        "images/marquee/img3.png",
        "images/marquee/img4.png",
        "images/marquee/img5.png"
    ];

    return (
        <Marquee speed={30} direction="left" gradient={false}>
            <div className="MarqueeContainer">
                {imgs.map((i, index) => (
                    <Image 
                        key={index} 
                        alt={"img" + index} 
                        src={i} 
                        width={50}
                        height={50}
                    />
                ))}
            </div>
        </Marquee>
    );
};

const MarqueeComponent = ({ variant }) => {
    const renderVariant = () => {
        switch (variant) {
            case "variant1":
                return <MarqueeVariant1 />;
            case "variant2":
                return <MarqueeVariant2 />;
            default:
                return null;
        }
    };

    return (
        <div>
            {renderVariant()}
        </div>
    );
};

export default MarqueeComponent;
