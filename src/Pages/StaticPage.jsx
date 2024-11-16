import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Style/StaticPage.css";
import Loading from "../Components/Blogs/Loading";

const Page = ({ match }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { slug } = useParams(); // URL'den slug parametresini alıyoruz

  useEffect(() => {
    // API çağrısı
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://blog.freetold.com/wp-json/custom/v1/get-page/${slug}`
        );
        if (response.status === 200) {
          setData(response.data);
        } else {
          throw new Error("Sayfa bulunamadı");
        }
      } catch (err) {
        setError(err.message || "Bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <>
        <div className="loading-page">
          <Loading />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="page">
        <div className="error-message">
          <h1>Sayfa Bulunamadı</h1>
          <p>Aradığınız sayfa mevcut değil ya da URL yanlış olabilir.</p>
        </div>
      </div>
    );
  }

  const { title, content, featuredmedia } = data;

  return (
    <div className="page">
      {/* Başlık Bölümü */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${featuredmedia})` }}
      >
        <div className="overlay">
          <h1 className="hero-title">{title}</h1>
        </div>
      </div>

      {/* İçerik Bölümü */}
      <div className="content-section">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default Page;
