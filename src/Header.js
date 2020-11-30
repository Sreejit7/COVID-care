import React from 'react'
import {Link} from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
function Header() {
  return (
    <div className="app__navbar">
        <Sidebar/>
        <Link to = "/">
          <img className = "app__logo" src = "https://lh3.googleusercontent.com/BjkuCl62-D9rbTLaAd6zC-FvHyaIVYtRhwfyoAdW6XHTXl17pMrRcyvL_6AuYQl3ip4V7_9qIP76gx8fNQxTeZi1Kvn0Rlp2kDxWRGAuWhuUGJhSSwrAwOHtqRnCqowRRKKrPKkLcGobTsZUknDzzQfH7XoMTvA8UK08kzkcHSCdBEkuyWBAPp1-x1-wSziaP5kSiH3FGUP-GshCGb0c_miZuL3WKg0lihH7rjhYM1mJ7ZMZ_9vz9EbVraWDLOeXn6hDw2nfl1W_NLVe-6mGREZof3j7I4unm8PJbDvTSJfbP-dsYISb-S_neIPrGNA2samrOnOaIGfqLC-9XnwPu-okfdkej6MibdFaOY9F2T9eNUOxrGFzEC2R9iBsZNDX9MAqmAOPbCsMp4vFnlC8leZExG1eICa9wK679iNClZ0sT3N1rM9ti6ixUZTIxfZfE3D1FsQpR_J_D_pVXkPWf_hq4_RUQXeHQA5ISiNzt4B7l8xgix09OR9UI3ZS1wgNnUgTK7580QDgxpuXTjQImzlEzymrHqb5sEm6jsy1B0GiXTo08FCyaLLKfGtE-2oQ3BvPFPu7exdXoSWidGh2mj8LKEpM26avhgSisHzcjxujFuwf362EcU2DE6A1mVq8OCqt2wZlRwvlR9IlW2uQWtfhGFkGU413SxTkeZPSdXHl74QSToTtAedXsWpU=w1054-h212-no?authuser=0" alt = ""/>
        </Link>
    </div>
  )
}

export default Header
