import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg"
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="check it out"
                heading="Featured Item"
            ></SectionTitle>
            <div className="flex md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab a soluta facilis esse quas voluptates harum inventore reiciendis quam animi odit neque alias sit, asperiores dolores iste quo distinctio. Aperiam consequuntur quae ipsam vel sit ad cumque officia maxime ipsa recusandae, perspiciatis fugit rerum deleniti reiciendis dolorem neque autem?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;