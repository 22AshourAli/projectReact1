// import React, { Component } from 'react'

// export default class Portfolio extends Component {
//   render() {
//     return (
//       <>
//         <div className="portfolio-content   d-flex align-items-center justify-content-center">

// <div className="container">
//       <div className="info-port text-center pt-2 text-dark mt-5">
//       <h1 className='text-dark fw-bolder '>PORTFOLIO COMPONENT</h1>
//       <span className='lines line-1  bg-dark'></span> <i className=' fa-solid  mx-4 fa-star position-relative text-dark fs-4 '></i><span className=' lines line-2 bg-dark'></span>
//       </div>
//       <div className="row  mx-auto py-2 g-4">
//       <div className="col-md-4 overflow-hidden ">
//         <div className="item-port  overflow-hidden position-relative">
//             <img src="images/poert1 (1).png" className='img-prot w-100 rounded-3 ' alt="Poert1" />
//       <div className="layer rounded-3  d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0">
//         <i className='text-white position-relative port-icon fa-solid fa-plus fa-6x'></i>
//       </div>
//         </div>
//       </div>
//       <div className="col-md-4 ">
//         <div className="item-port  overflow-hidden position-relative">
//             <img src="images/poert1.png" className='img-prot w-100 rounded-3 ' alt="Poert1" />
//       <div className="layer rounded-3 d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0">
//         <i className='text-white position-relative port-icon fa-solid fa-plus fa-6x'></i>
//       </div>
//         </div>
//       </div>
//       <div className="col-md-4 ">
//         <div className="item-port  overflow-hidden position-relative">
//             <img src="images/port3.png" className='img-prot w-100 rounded-3 ' alt="Poert1" />
//       <div className="layer rounded-3 d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0">
//         <i className='text-white position-relative port-icon fa-solid fa-plus fa-6x'></i>
//       </div>
//         </div>
//       </div>
//       <div className="col-md-4 ">
//         <div className="item-port  overflow-hidden position-relative">
//             <img src="images/poert1 (1).png" className='img-prot w-100 rounded-3 ' alt="Poert1" />
//       <div className="layer rounded-3 d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0">
//         <i className='text-white position-relative port-icon fa-solid fa-plus fa-6x'></i>
//       </div>
//         </div>
//       </div>
//       <div className="col-md-4 ">
//         <div className="item-port  overflow-hidden position-relative">
//             <img src="images/poert1.png" className='img-prot w-100 rounded-3 ' alt="Poert1" />
//       <div className="layer rounded-3 d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0">
//         <i className='text-white position-relative port-icon fa-solid fa-plus fa-6x'></i>
//       </div>
//         </div>
//       </div>
//       <div className="col-md-4  mb-5">
//         <div className="item-port  overflow-hidden position-relative">
//             <img src="images/port3.png" className='img-prot w-100 rounded-3 ' alt="Poert1" />
//       <div className="layer rounded-3 d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0">
//         <i className='text-white position-relative port-icon fa-solid fa-plus fa-6x'></i>
//       </div>
//         </div>
//       </div>

//         </div> 
//       </div>
//         </div>
//       </>
//     )
//   }
// }





import React, { Component } from 'react';

// مكون لعرض الصورة المكبرة
class MagnifiedImage extends Component {
  render() {
    const { imageUrl, onClose } = this.props;
    return (
      <div className="magnified-image-overlay" onClick={onClose}>
        <div className="magnified-image-container">
          <img src={imageUrl} className="magnified-image" alt="Magnified" />
        </div>
      </div>
    );
  }
}

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magnifiedImageUrl: '', // URL للصورة المكبرة
    };
  }

  // دالة لعرض الصورة المكبرة
  showMagnifiedImage = (imageUrl) => {
    this.setState({ magnifiedImageUrl: imageUrl });
  };

  // دالة لإخفاء الصورة المكبرة
  hideMagnifiedImage = () => {
    this.setState({ magnifiedImageUrl: '' });
  };

  render() {
    const { magnifiedImageUrl } = this.state;
    return (
      <>
       <div className="info-port text-center mx-auto  text-dark pt-5">
      <h1 className='text-dark fw-bolder '>PORTFOLIO COMPONENT</h1>
     <span className='lines line-1  bg-dark'></span> <i className=' fa-solid  mx-4 fa-star position-relative text-dark fs-4 '></i><span className=' lines line-2 bg-dark'></span>
     </div>
        <div className="portfolio-content  d-flex align-items-center justify-content-center">
          
          <div className="container">
            {/* الصور هنا */}
            <div className="row mx-auto  g-4">
              <div className="col-md-4 overflow-hidden">
                <div className="item-port overflow-hidden position-relative">
                  <img
                    src="images/poert1 (1).png"
                    className="img-prot w-100 rounded-3 "
                    alt="Poert1"
                  />
                  <div
                    className="layer rounded-3 d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0"
                    
                  >
                    <i onClick={() => this.showMagnifiedImage("images/poert1 (1).png")} className="text-white position-relative port-icon fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 overflow-hidden">
                <div className="item-port overflow-hidden position-relative">
                  <img
                    src="images/poert1.png"
                    className="img-prot w-100 rounded-3 "
                    alt="Poert1"
                  />
                  <div
                    className="layer rounded-3 d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0"
                   
                  >
                    <i  onClick={() => this.showMagnifiedImage("images/poert1.png")} className="text-white position-relative port-icon fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 overflow-hidden">
                <div className="item-port overflow-hidden position-relative">
                  <img
                    src="images/port3.png"
                    className="img-prot w-100 rounded-3 "
                    alt="Poert1"
                  />
                  <div
                    className="layer rounded-3 d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0"
                   
                  >
                    <i  onClick={() => this.showMagnifiedImage("images/port3.png")} className="text-white position-relative port-icon fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 overflow-hidden">
                <div className="item-port overflow-hidden position-relative">
                  <img
                    src="images/poert1 (1).png"
                    className="img-prot w-100 rounded-3 "
                    alt="Poert1"
                  />
                  <div
                    className="layer rounded-3 d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0"
                    
                  >
                    <i onClick={() => this.showMagnifiedImage("images/poert1 (1).png")} className="text-white position-relative port-icon fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 overflow-hidden">
                <div className="item-port overflow-hidden position-relative">
                  <img
                    src="images/poert1.png"
                    className="img-prot w-100 rounded-3 "
                    alt="Poert1"
                  />
                  <div
                    className="layer rounded-3 d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0"
                   
                  >
                    <i  onClick={() => this.showMagnifiedImage("images/poert1.png")} className="text-white position-relative port-icon fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 overflow-hidden">
                <div className="item-port overflow-hidden position-relative">
                  <img
                    src="images/port3.png"
                    className="img-prot w-100 rounded-3 "
                    alt="Poert1"
                  />
                  <div
                    className="layer rounded-3 d-flex align-items-center justify-content-center position-absolute end-0 start-0  top-0 bottom-0"
                   
                  >
                    <i  onClick={() => this.showMagnifiedImage("images/port3.png")} className="text-white position-relative port-icon fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>




              {/* يمكنك تكرار البناء للصور الأخرى */}
            </div>
          </div>
        </div>
        {/* عرض الصورة المكبرة إذا تم النقر عليها */}
        {magnifiedImageUrl && (
          <MagnifiedImage imageUrl={magnifiedImageUrl} onClose={this.hideMagnifiedImage} />
        )}
      </>
    );
  }
}
