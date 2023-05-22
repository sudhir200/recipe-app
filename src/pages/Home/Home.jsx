import React from "react";
import StudentFormComponent from "../../components/forms/StudentFormComponent";
import "./home.css";
import ImageGallery from "../../components/gallery/ImageGallery";
import Footer from "../../components/footer/Footer";
export default function Home() {
  return (
    <div className={`home-wrapper`}>
      <img
        alt={""}
        width={"100%"}
        src={
          "https://www.wallpapers13.com/wp-content/uploads/2020/02/Sunset-in-Himalayan-mountain-Mount-Everest-between-Nepal-and-China-nature-landscape-Wallpaper-Hd-1920x1080.jpg"
        }
      />
      <StudentFormComponent />
      <ImageGallery />
      <Footer />
    </div>
  );
}
