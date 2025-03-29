import { resourceManager } from '../utils/ResourceManager';
// Import images from the src folder so Vite processes them.
import am from '../assets/images/am.png';
import cloud from '../assets/images/cloud.png';
import duong from '../assets/images/duong.png';
import map_chung from '../assets/images/map_chung.png';
import ong_nam_cheo from '../assets/images/ong_nam_cheo.jpg';
import orange_smoke from '../assets/images/orage-smoke.png';
import red_smoke from '../assets/images/red-smoke.png';
import thu_ngo from '../assets/images/thu_ngo.png';
import khao_sat from '../assets/images/khao_sat.png';
import lien_he from '../assets/images/lien_he.jpg';
import white_smoke from '../assets/images/white-smoke.png';
import yellow from '../assets/images/yellow.png';
import lang_am_bg from '../assets/images/am.jpg';
import lang_duong_bg from '../assets/images/duong.jpg';
import trang_chu from '../assets/images/trang_chu.jpg';
// Cards (the bai)
import card_am_binh from '../assets/images/the bai/card_am_binh.png';
import card_ba_gia_ao_do from '../assets/images/the bai/card_ba_gia_ao_do.png';
import card_cau_co from '../assets/images/the bai/card_cau_co.png';
import card_ho_tinh from '../assets/images/the bai/card_ho_tinh.png';
import card_le_quy from '../assets/images/the bai/card_le_quy.png';
import card_linh_mieu from '../assets/images/the bai/card_linh_mieu.png';
import card_ma_cut_dau from '../assets/images/the bai/card_ma_cut_dau.png';
import card_ma_da from '../assets/images/the bai/card_ma_da.png';
import card_ma_doi from '../assets/images/the bai/card_ma_doi.png';
import card_ma_giau from '../assets/images/the bai/card_ma_giau.png';
import card_ma_lai from '../assets/images/the bai/card_ma_lai.png';
import card_ma_le from '../assets/images/the bai/card_ma_le.png';
import card_ma_lon from '../assets/images/the bai/card_ma_lon.png';
import card_ma_mat_mam from '../assets/images/the bai/card_ma_mat_mam.png';
import card_ma_rap_xac from '../assets/images/the bai/card_ma_rap_xac.png';
import card_ma_that_co from '../assets/images/the bai/card_ma_that_co.png';
import card_ma_toc_dai from '../assets/images/the bai/card_ma_toc_dai.png';
import card_ma_troi from '../assets/images/the bai/card_ma_troi.png';
import card_ma_vu_dai from '../assets/images/the bai/card_ma_vu_dai.png';
import card_ngai from '../assets/images/the bai/card_ngai.png';
import card_ong_ba_bi from '../assets/images/the bai/card_ong_ba_bi.png';
import card_ong_ho_may from '../assets/images/the bai/card_ong_ho_may.png';
import card_ong_ta from '../assets/images/the bai/card_ong_ta.png';
import card_quy_mot_gio from '../assets/images/the bai/card_quy_mot_gio.png';
import card_quy_nhap_trang from '../assets/images/the bai/card_quy_nhap_trang.png';
import card_than_trung from '../assets/images/the bai/card_than_trung.png';
import card_thanh_hoang_lang from '../assets/images/the bai/card_thanh_hoang_lang.png';
import card_thien_linh_cai from '../assets/images/the bai/card_thien_linh_cai.png';
import card_vong_nhi from '../assets/images/the bai/card_vong_nhi.png';
import card_ong_nam_cheo from '../assets/images/the bai/THẺ BÀI ÔNG NĂM CHÈO.png';

const imageUrls = [
  am,
  cloud,
  duong,
  map_chung,
  ong_nam_cheo,
  orange_smoke,
  red_smoke,
  thu_ngo,
  white_smoke,
  yellow,
  lang_am_bg,
  lang_duong_bg,
  trang_chu,
  khao_sat,
  lien_he,
  // cards (the bai)
  card_am_binh,
  card_ba_gia_ao_do,
  card_cau_co,
  card_ho_tinh,
  card_le_quy,
  card_linh_mieu,
  card_ma_cut_dau,
  card_ma_da,
  card_ma_doi,
  card_ma_giau,
  card_ma_lai,
  card_ma_le,
  card_ma_lon,
  card_ma_mat_mam,
  card_ma_rap_xac,
  card_ma_that_co,
  card_ma_toc_dai,
  card_ma_troi,
  card_ma_vu_dai,
  card_ngai,
  card_ong_ba_bi,
  card_ong_ho_may,
  card_ong_ta,
  card_quy_mot_gio,
  card_quy_nhap_trang,
  card_than_trung,
  card_thanh_hoang_lang,
  card_thien_linh_cai,
  card_vong_nhi,
  card_ong_nam_cheo
];


import { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    // Preload all images
    imageUrls.forEach((url) => {
      resourceManager.preloadImage(url).catch((err) =>
        console.error(`Error preloading image ${url}:`, err)
      );
    });
  }, []);

  return null;
};

export default Preloader;
