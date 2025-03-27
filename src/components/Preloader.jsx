// Preloader.jsx
import { useEffect } from 'react';
import { resourceManager } from '../utils/ResourceManager';

const Preloader = () => {
  useEffect(() => {
    // List all image and audio URLs to preload
    const imageUrls = [
      '/assets/images/am.png',
      '/assets/images/cloud.png',
      '/assets/images/duong.png',
      '/assets/images/langam.png',
      '/assets/images/langduong.png',
      '/assets/images/map_chung.png',
      '/assets/images/ong_nam_cheo.png',
      '/assets/images/orange-smoke.png',
      '/assets/images/red-smoke.png',
      '/assets/images/thu_ngo.png',
      '/assets/images/white-smoke.png',
      '/assets/images/yellow.png',
      //info_card
      '/assets/images/info_card/am_binh.png',
  '/assets/images/info_card/ba_gia_ao_do.png',
  '/assets/images/info_card/cau_co_1.png',
  '/assets/images/info_card/cau_co_2.png',
  '/assets/images/info_card/co_hon_1.png',
  '/assets/images/info_card/co_hon_2.png',
  '/assets/images/info_card/ho_tinh_1.png',
  '/assets/images/info_card/ho_tinh_2.png',
  '/assets/images/info_card/le_quy_1.png',
  '/assets/images/info_card/le_quy_2.png',
  '/assets/images/info_card/linh_mieu_1.png',
  '/assets/images/info_card/linh_mieu_2.png',
  '/assets/images/info_card/ma_cut_dau_1.png',
  '/assets/images/info_card/ma_cut_dau_2.png',
  '/assets/images/info_card/ma_da_1.png',
  '/assets/images/info_card/ma_da_2.png',
  '/assets/images/info_card/ma_giau_xac_1.png',
  '/assets/images/info_card/ma_giau_xac_2.png',
  '/assets/images/info_card/ma_lai_1.png',
  '/assets/images/info_card/ma_lai_2.png',
  '/assets/images/info_card/ma_le.png',
  '/assets/images/info_card/ma_lon_1.png',
  '/assets/images/info_card/ma_lon_2.png',
  '/assets/images/info_card/ma_mat_mam_1.png',
  '/assets/images/info_card/ma_mat_mam_2.png',
  '/assets/images/info_card/ma_rap_xac_1.png',
  '/assets/images/info_card/ma_rap_xac_2.png',
  '/assets/images/info_card/ma_that_co_1.png',
  '/assets/images/info_card/ma_that_co_2.png',
  '/assets/images/info_card/ma_toc_dai_1.png',
  '/assets/images/info_card/ma_toc_dai_2.png',
  '/assets/images/info_card/ma_troi_1.png',
  '/assets/images/info_card/ma_troi_2.png',
  '/assets/images/info_card/ma_vu_dai_1.png',
  '/assets/images/info_card/ma_vu_dai_2.png',
  '/assets/images/info_card/ma_vu_dai_3.png',
  '/assets/images/info_card/ngai_1.png',
  '/assets/images/info_card/ngai_2.png',
  '/assets/images/info_card/ong_ba_bi_1.png',
  '/assets/images/info_card/ong_ba_bi_2.png',
  '/assets/images/info_card/ong_ho_may_1.png',
  '/assets/images/info_card/ong_ho_may_2.png',
  '/assets/images/info_card/ong_ho_may_3.png',
  '/assets/images/info_card/ong_nam_cheo_1_test.png',
  '/assets/images/info_card/ong_nam_cheo_2.png',
  '/assets/images/info_card/ong_ta_1.png',
  '/assets/images/info_card/ong_ta_2.png',
  '/assets/images/info_card/quy_mot_gio_1.png',
  '/assets/images/info_card/quy_mot_gio_2.png',
  '/assets/images/info_card/quy_nhap_trang_1.png',
  '/assets/images/info_card/quy_nhap_trang_2.png',
  '/assets/images/info_card/quy_nhap_trang_3.png',
  '/assets/images/info_card/than_trung_1.png',
  '/assets/images/info_card/than_trung_2.png',
  '/assets/images/info_card/thanh_hoang_lang_1.png',
  '/assets/images/info_card/thanh_hoang_lang_2.png',
  '/assets/images/info_card/thien_linh_cai_1.png',
  '/assets/images/info_card/thien_linh_cai_2.png',
  '/assets/images/info_card/vong_nhi_1.png',
  '/assets/images/info_card/vong_nhi_2.png',
  //card
    '/assets/images/the bai/card_am_binh.png',
    '/assets/images/the bai/card_ba_gia_ao_do.png',
    '/assets/images/the bai/card_cau_co.png',
    '/assets/images/the bai/card_ho_tinh.png',
    '/assets/images/the bai/card_le_quy.png',
    '/assets/images/the bai/card_linh_mieu.png',
    '/assets/images/the bai/card_ma_cut_dau.png',
    '/assets/images/the bai/card_ma_da.png',
    '/assets/images/the bai/card_ma_doi.png',
    '/assets/images/the bai/card_ma_giau.png',
    '/assets/images/the bai/card_ma_lai.png',
    '/assets/images/the bai/card_ma_le.png',
    '/assets/images/the bai/card_ma_lon.png',
    '/assets/images/the bai/card_ma_mat_mam.png',
    '/assets/images/the bai/card_ma_rap_xac.png',
    '/assets/images/the bai/card_ma_that_co.png',
    '/assets/images/the bai/card_ma_toc_dai.png',
    '/assets/images/the bai/card_ma_troi.png',
    '/assets/images/the bai/card_ma_vu_dai.png',
    '/assets/images/the bai/card_ngai.png',
    '/assets/images/the bai/card_ong_ba_bi.png',
    '/assets/images/the bai/card_ong_ho_may.png',
    '/assets/images/the bai/card_ong_ta.png',
    '/assets/images/the bai/card_quy_mot_gio.png',
    '/assets/images/the bai/card_quy_nhap_trang.png',
    '/assets/images/the bai/card_than_trung.png',
    '/assets/images/the bai/card_thanh_hoang_lang.png',
    '/assets/images/the bai/card_thien_linh_cai.png',
    '/assets/images/the bai/card_vong_nhi.png',
    '/assets/images/the bai/THẺ BÀI ÔNG NĂM CHÈO.png',
    //map lang am
    '/assets/images/map lang am/7_CAU_KHI.png',
  '/assets/images/map lang am/8A_NHA_DAI_DIEN_CHU.png',
  '/assets/images/map lang am/8B_NHA_DAI_DIEN_CHU.png',
  '/assets/images/map lang am/9A_DINH_LANG_AM.png',
  '/assets/images/map lang am/9B_DINH_LANG_AM.png',
  '/assets/images/map lang am/10_CHO_AM.png',
  '/assets/images/map lang am/11_SAN_CHOI_LANG_AM.png',
  '/assets/images/map lang am/12_GIAN_GUA.png',
  '/assets/images/map lang am/13_GANH_HAT_MA.png',
  //map lang duong
  '/assets/images/map lang duong/1_GANH_HAT_TREN_SONG.png',
  '/assets/images/map lang duong/2_CAY_DA_THAN.png',
  '/assets/images/map lang duong/3A_DINH_LANG_DUONG_BEN_NGOAI.png',
  '/assets/images/map lang duong/3B_DINH_LANG_DUONG_BEN_TRONG.png',
  '/assets/images/map lang duong/4A_NHA_DAI_DIEN_CHU_BEN_NGOAI.png',
  '/assets/images/map lang duong/4B_NHA_DAI_DIEN_CHU_BEN_TRONG.png',
  '/assets/images/map lang duong/5_CHO_LANG_DUONG.png',
  '/assets/images/map lang duong/6_SAN_CHOI_LANG_DUONG.png',
    ];
    const audioUrls = [
        //lang am audio
      '/assets/audio/lang am audio/cau_khi.MP3',
  '/assets/audio/lang am audio/cay_gua.MP3',
  '/assets/audio/lang am audio/cho_am.MP3',
  '/assets/audio/lang am audio/dinh_lang_tho_quy_ben_trong.MP3',
  '/assets/audio/lang am audio/dinh_than_tho_quy_ben_ngoai.MP3',
  '/assets/audio/lang am audio/làng âm - gánh hát ma.MP3',
  '/assets/audio/lang am audio/nha_dia_chu_ben_ngoai.MP3',
  '/assets/audio/lang am audio/nha_dia_chu_ben_trong.MP3',
  '/assets/audio/lang am audio/san_choi.MP3',
  //lang duong audio
  '/assets/audio/lang duong audio/cay_da_than.MP3',
  '/assets/audio/lang duong audio/cho_duong.MP3',
  '/assets/audio/lang duong audio/dinh_lang_ben_ngoai.MP3',
  '/assets/audio/lang duong audio/dinh_lang_ben_trong.MP3',
  '/assets/audio/lang duong audio/ganh_hat_tren_song.MP3',
  '/assets/audio/lang duong audio/gia_dinh_dia_chu_ben_ngoai.MP3',
  '/assets/audio/lang duong audio/gia_dinh_dia_chu_ben_trong.MP3',
  '/assets/audio/lang duong audio/san_choi.MP3'
    ];

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

  // This component doesn't render anything to the DOM.
  return null;
};

export default Preloader;
