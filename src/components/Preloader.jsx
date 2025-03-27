import { resourceManager } from '../utils/ResourceManager';
// Import images from the src folder so Vite processes them.
import am from '../assets/images/am.png';
import cloud from '../assets/images/cloud.png';
import duong from '../assets/images/duong.png';
import langam from '../assets/images/langam.png';
import langduong from '../assets/images/langduong.png';
import map_chung from '../assets/images/map_chung.png';
import ong_nam_cheo from '../assets/images/ong_nam_cheo.jpg';
import orange_smoke from '../assets/images/orage-smoke.png';
import red_smoke from '../assets/images/red-smoke.png';
import thu_ngo from '../assets/images/thu_ngo.png';
import white_smoke from '../assets/images/white-smoke.png';
import yellow from '../assets/images/yellow.png';
// Info Card images
import am_binh from '../assets/images/info_card/am_binh.png';
import ba_gia_ao_do from '../assets/images/info_card/ba_gia_ao_do.png';
import cau_co_1 from '../assets/images/info_card/cau_co_1.png';
import cau_co_2 from '../assets/images/info_card/cau_co_2.png';
import co_hon_1 from '../assets/images/info_card/co_hon_1.png';
import co_hon_2 from '../assets/images/info_card/co_hon_2.png';
import ho_tinh_1 from '../assets/images/info_card/ho_tinh_1.png';
import ho_tinh_2 from '../assets/images/info_card/ho_tinh_2.png';
import le_quy_1 from '../assets/images/info_card/le_quy_1.png';
import le_quy_2 from '../assets/images/info_card/le_quy_2.png';
import linh_mieu_1 from '../assets/images/info_card/linh_mieu_1.png';
import linh_mieu_2 from '../assets/images/info_card/linh_mieu_2.png';
import ma_cut_dau_1 from '../assets/images/info_card/ma_cut_dau_1.png';
import ma_cut_dau_2 from '../assets/images/info_card/ma_cut_dau_2.png';
import ma_da_1 from '../assets/images/info_card/ma_da_1.png';
import ma_da_2 from '../assets/images/info_card/ma_da_2.png';
import ma_giau_xac_1 from '../assets/images/info_card/ma_giau_xac_1.png';
import ma_giau_xac_2 from '../assets/images/info_card/ma_giau_xac_2.png';
import ma_lai_1 from '../assets/images/info_card/ma_lai_1.png';
import ma_lai_2 from '../assets/images/info_card/ma_lai_2.png';
import ma_le from '../assets/images/info_card/ma_le.png';
import ma_lon_1 from '../assets/images/info_card/ma_lon_1.png';
import ma_lon_2 from '../assets/images/info_card/ma_lon_2.png';
import ma_mat_mam_1 from '../assets/images/info_card/ma_mat_mam_1.png';
import ma_mat_mam_2 from '../assets/images/info_card/ma_mat_mam_2.png';
import ma_rap_xac_1 from '../assets/images/info_card/ma_rap_xac_1.png';
import ma_rap_xac_2 from '../assets/images/info_card/ma_rap_xac_2.png';
import ma_that_co_1 from '../assets/images/info_card/ma_that_co_1.png';
import ma_that_co_2 from '../assets/images/info_card/ma_that_co_2.png';
import ma_toc_dai_1 from '../assets/images/info_card/ma_toc_dai_1.png';
import ma_toc_dai_2 from '../assets/images/info_card/ma_toc_dai_2.png';
import ma_troi_1 from '../assets/images/info_card/ma_troi_1.png';
import ma_troi_2 from '../assets/images/info_card/ma_troi_2.png';
import ma_vu_dai_1 from '../assets/images/info_card/ma_vu_dai_1.png';
import ma_vu_dai_2 from '../assets/images/info_card/ma_vu_dai_2.png';
import ma_vu_dai_3 from '../assets/images/info_card/ma_vu_dai_3.png';
import ngai_1 from '../assets/images/info_card/ngai_1.png';
import ngai_2 from '../assets/images/info_card/ngai_2.png';
import ong_ba_bi_1 from '../assets/images/info_card/ong_ba_bi_1.png';
import ong_ba_bi_2 from '../assets/images/info_card/ong_ba_bi_2.png';
import ong_ho_may_1 from '../assets/images/info_card/ong_ho_may_1.png';
import ong_ho_may_2 from '../assets/images/info_card/ong_ho_may_2.png';
import ong_ho_may_3 from '../assets/images/info_card/ong_ho_may_3.png';
import ong_nam_cheo_1_test from '../assets/images/info_card/ong_nam_cheo_1_test.png';
import ong_nam_cheo_2 from '../assets/images/info_card/ong_nam_cheo_2.png';
import ong_ta_1 from '../assets/images/info_card/ong_ta_1.png';
import ong_ta_2 from '../assets/images/info_card/ong_ta_2.png';
import quy_mot_gio_1 from '../assets/images/info_card/quy_mot_gio_1.png';
import quy_mot_gio_2 from '../assets/images/info_card/quy_mot_gio_2.png';
import quy_nhap_trang_1 from '../assets/images/info_card/quy_nhap_trang_1.png';
import quy_nhap_trang_2 from '../assets/images/info_card/quy_nhap_trang_2.png';
import quy_nhap_trang_3 from '../assets/images/info_card/quy_nhap_trang_3.png';
import than_trung_1 from '../assets/images/info_card/than_trung_1.png';
import than_trung_2 from '../assets/images/info_card/than_trung_2.png';
import thanh_hoang_lang_1 from '../assets/images/info_card/thanh_hoang_lang_1.png';
import thanh_hoang_lang_2 from '../assets/images/info_card/thanh_hoang_lang_2.png';
import thien_linh_cai_1 from '../assets/images/info_card/thien_linh_cai_1.png';
import thien_linh_cai_2 from '../assets/images/info_card/thien_linh_cai_2.png';
import vong_nhi_1 from '../assets/images/info_card/vong_nhi_1.png';
import vong_nhi_2 from '../assets/images/info_card/vong_nhi_2.png';
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
// Import audio files for "lang am audio"
import audioCauKhi from '../assets/audio/lang am audio/cau_khi.MP3';
import audioCayGua from '../assets/audio/lang am audio/cay_gua.MP3';
import audioChoAm from '../assets/audio/lang am audio/cho_am.MP3';
import audioDinhLangThoQuyBenTrong from '../assets/audio/lang am audio/dinh_lang_tho_quy_ben_trong.MP3';
import audioDinhThanThoQuyBenNgoai from '../assets/audio/lang am audio/dinh_than_tho_quy_ben_ngoai.MP3';
import audioLangAmGanHatMa from '../assets/audio/lang am audio/làng âm - gánh hát ma.MP3';
import audioNhaDiaChuBenNgoai from '../assets/audio/lang am audio/nha_dia_chu_ben_ngoai.MP3';
import audioNhaDiaChuBenTrong from '../assets/audio/lang am audio/nha_dia_chu_ben_trong.MP3';
import audioSanChoiLangAm from '../assets/audio/lang am audio/san_choi.MP3';
// Import audio files for "lang duong audio"
import audioCayDaThanLangDuong from '../assets/audio/lang duong audio/cay_da_than.MP3';
import audioChoDuong from '../assets/audio/lang duong audio/cho_duong.MP3';
import audioDinhLangBenNgoaiLangDuong from '../assets/audio/lang duong audio/dinh_lang_ben_ngoai.MP3';
import audioDinhLangBenTrongLangDuong from '../assets/audio/lang duong audio/dinh_lang_ben_trong.MP3';
import audioGanhHatTrenSong from '../assets/audio/lang duong audio/ganh_hat_tren_song.MP3';
import audioGiaDinhDiaChuBenNgoai from '../assets/audio/lang duong audio/gia_dinh_dia_chu_ben_ngoai.MP3';
import audioGiaDinhDiaChuBenTrong from '../assets/audio/lang duong audio/gia_dinh_dia_chu_ben_trong.MP3';
import audioSanChoiLangDuong from '../assets/audio/lang duong audio/san_choi.MP3';

const imageUrls = [
  am,
  cloud,
  duong,
  langam,
  langduong,
  map_chung,
  ong_nam_cheo,
  orange_smoke,
  red_smoke,
  thu_ngo,
  white_smoke,
  yellow,
  // info_card
  am_binh,
  ba_gia_ao_do,
  cau_co_1,
  cau_co_2,
  co_hon_1,
  co_hon_2,
  ho_tinh_1,
  ho_tinh_2,
  le_quy_1,
  le_quy_2,
  linh_mieu_1,
  linh_mieu_2,
  ma_cut_dau_1,
  ma_cut_dau_2,
  ma_da_1,
  ma_da_2,
  ma_giau_xac_1,
  ma_giau_xac_2,
  ma_lai_1,
  ma_lai_2,
  ma_le,
  ma_lon_1,
  ma_lon_2,
  ma_mat_mam_1,
  ma_mat_mam_2,
  ma_rap_xac_1,
  ma_rap_xac_2,
  ma_that_co_1,
  ma_that_co_2,
  ma_toc_dai_1,
  ma_toc_dai_2,
  ma_troi_1,
  ma_troi_2,
  ma_vu_dai_1,
  ma_vu_dai_2,
  ma_vu_dai_3,
  ngai_1,
  ngai_2,
  ong_ba_bi_1,
  ong_ba_bi_2,
  ong_ho_may_1,
  ong_ho_may_2,
  ong_ho_may_3,
  ong_nam_cheo_1_test,
  ong_nam_cheo_2,
  ong_ta_1,
  ong_ta_2,
  quy_mot_gio_1,
  quy_mot_gio_2,
  quy_nhap_trang_1,
  quy_nhap_trang_2,
  quy_nhap_trang_3,
  than_trung_1,
  than_trung_2,
  thanh_hoang_lang_1,
  thanh_hoang_lang_2,
  thien_linh_cai_1,
  thien_linh_cai_2,
  vong_nhi_1,
  vong_nhi_2,
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

const audioUrls = [
  // lang am audio
  audioCauKhi,
  audioCayGua,
  audioChoAm,
  audioDinhLangThoQuyBenTrong,
  audioDinhThanThoQuyBenNgoai,
  audioLangAmGanHatMa,
  audioNhaDiaChuBenNgoai,
  audioNhaDiaChuBenTrong,
  audioSanChoiLangAm,
  // lang duong audio
  audioCayDaThanLangDuong,
  audioChoDuong,
  audioDinhLangBenNgoaiLangDuong,
  audioDinhLangBenTrongLangDuong,
  audioGanhHatTrenSong,
  audioGiaDinhDiaChuBenNgoai,
  audioGiaDinhDiaChuBenTrong,
  audioSanChoiLangDuong,
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

    // Preload all audios
    audioUrls.forEach((url) => {
      resourceManager.preloadAudio(url).catch((err) =>
        console.error(`Error preloading audio ${url}:`, err)
      );
    });
  }, []);

  return null;
};

export default Preloader;
