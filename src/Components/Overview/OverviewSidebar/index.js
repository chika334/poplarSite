import React from "react";
import { useSelector } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import { Container } from "@material-ui/core";

const mapItems = [
  {
    name: "pending transactions",
    icon: <AccessAlarmIcon size={40} />,
    figure: 0,
  },
  {
    name: "Failed transactions",
    icon: <AccessAlarmIcon size={40} />,
    figure: 0,
  },
];

const complete = [
  {
    name: "completed transactions",
    icon: <AccessAlarmIcon size={40} />,
    figure: "figures",
  },
];

const Services = () => {
  const transactions = useSelector((state) => state.transactions);
  const tranx =
    transactions.transaction === null ? "" : transactions.transaction;

  return (
    <>
      <PerfectScrollbar>
        <div className="mt-3 bg-white">
          <div>
            <Container className="d-block text-center py-3 text-sm-left align-items-center justify-content-between">
              <div className="align-items-center mb-3 mb-sm-0">
                {mapItems.map((allDetails, index) => (
                  <div key={index}>
                    {/* <Link to={`${allDetails.url}`}> */}
                    <div style={{ backgroundColor: "rgb(0, 68, 116)", color: "#fff" }} className="card card-box-alt m-3">
                      <h3 className="m-auto p-3">{allDetails.name}</h3>
                      <div className="">
                        <span className="">{allDetails.icon}</span>
                      </div>
                      <h3 className="">{tranx.length - tranx.length}</h3>
                    </div>
                    {/* </Link> */}
                  </div>
                ))}
                {complete.map((allDetails, index) => (
                  <div key={index}>
                    {/* <Link to={`${allDetails.url}`}> */}
                    <div style={{ backgroundColor: "rgb(0, 68, 116)", color: "#fff" }} className="card card-box-alt m-3">
                      <h3 className="m-auto p-3">{allDetails.name}</h3>
                      <div className="">
                        <span className="">{allDetails.icon}</span>
                      </div>
                      <h3 className="">{tranx.length}</h3>
                    </div>
                    {/* </Link> */}
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </PerfectScrollbar>
    </>
  );
};

export default Services;

// import React, { useEffect, useState } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Grid, Card, Button, List, ListItem } from '@material-ui/core';
// import Alert from '@material-ui/lab/Alert';

// import { useDropzone } from 'react-dropzone';
// import Slider from 'react-slick';
// import PerfectScrollbar from 'react-perfect-scrollbar';

// import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
// import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
// import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
// import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
// import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
// import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

// import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
// import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
// import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
// import CheckIcon from '@material-ui/icons/Check';

// function SliderArrowNext(props) {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <FontAwesomeIcon icon={['fas', 'chevron-right']} />
//     </div>
//   );
// }

// function SliderArrowPrev(props) {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <FontAwesomeIcon icon={['fas', 'chevron-left']} />
//     </div>
//   );
// }

// export default function LivePreviewExample() {
//   const contactsCarousel = {
//     dots: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     arrows: false,
//     nextArrow: <SliderArrowNext />,
//     prevArrow: <SliderArrowPrev />,
//     responsive: [
//       {
//         breakpoint: 1300,
//         settings: { slidesToShow: 1, slidesToScroll: 1 }
//       }
//     ]
//   };

//   const [files, setFiles] = useState([]);
//   const {
//     isDragActive,
//     isDragAccept,
//     isDragReject,
//     getRootProps,
//     getInputProps
//   } = useDropzone({
//     accept: 'image/*',
//     onDrop: (acceptedFiles) => {
//       setFiles(
//         acceptedFiles.map((file) =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file)
//           })
//         )
//       );
//     }
//   });

//   const thumbs = files.map((file) => (
//     <Grid item md={3} className="p-2" key={file.name}>
//       <div className="p-2 bg-white shadow-xxl border-dark card-box d-flex overflow-hidden rounded-sm">
//         <img
//           className="img-fluid img-fit-container rounded-sm"
//           src={file.preview}
//           alt="..."
//         />
//       </div>
//     </Grid>
//   ));

//   useEffect(
//     () => () => {
//       files.forEach((file) => URL.revokeObjectURL(file.preview));
//     },
//     [files]
//   );

//   return (
//     <>
//       <PerfectScrollbar>
//         <div className="bg-second p-4 m-4 rounded-lg d-lg-flex align-items-center justify-content-between">
//           <div className="d-lg-flex align-items-center">
//             <div className="avatar-icon-wrapper d-60 mr-3">
//               <div className="avatar-icon d-60 shadow-none rounded-circle">
//                 <img alt="..." src={avatar1} />
//               </div>
//               <div className="badge badge-success badge-position badge-position--bottom-center badge-circle">
//                 Online
//               </div>
//             </div>
//             <div className="my-3 my-lg-0">
//               <div className="font-weight-bold font-size-xl text-white">
//                 Mayson Zavala
//               </div>
//               <div className="text-white opacity-7">Works at Spotify LTD</div>
//             </div>
//           </div>
//           <div>
//             <div className="d-30 badge-wrapper text-white">
//               <NotificationsActiveTwoToneIcon className="opacity-4" />
//               <div className="badge badge-warning badge-position shadow-none badge-position--bottom-right badge-circle">
//                 Notifications
//               </div>
//             </div>
//           </div>
//         </div>
//         <h5 className="px-4 py-3 mb-0 font-weight-bold font-size-xxl">
//           Recent Contacts
//         </h5>
//         <div className="px-2">
//           <Slider {...contactsCarousel}>
//             <div className="pb-4">
//               <Card className="card-box card-box-alt m-3 d-block">
//                 <div className="p-3 text-left">
//                   <div className="d-50 rounded-circle border-0 mb-1 text-white btn-icon text-center shadow-sm">
//                     <div className="avatar-icon d-50 rounded-circle shadow-none">
//                       <img alt="..." src={avatar1} />
//                     </div>
//                   </div>
//                   <div className="font-weight-bold font-size-xl line-height-1 py-3">
//                     Edmund Mcneill
//                   </div>
//                   <div className="pb-3 font-size-sm text-black-50">
//                     3 days ago
//                   </div>

//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-first btn-transition-none btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'plus']} />
//                     </span>
//                   </Button>
//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-link bg-white-10 btn-transition-none ml-2 btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
//                     </span>
//                   </Button>
//                 </div>
//               </Card>
//             </div>
//             <div className="pb-4">
//               <Card className="card-box card-box-alt m-3 d-block bg-deep-sky">
//                 <div className="p-3 text-left text-white">
//                   <div className="d-50 rounded-circle border-0 mb-1 text-white btn-icon text-center shadow-sm-dark">
//                     <div className="avatar-icon d-50 rounded-circle shadow-none">
//                       <img alt="..." src={avatar2} />
//                     </div>
//                   </div>
//                   <div className="font-weight-bold font-size-xl line-height-1 py-3">
//                     Beck Navarro
//                   </div>
//                   <div className="pb-3 font-size-sm text-white-50">
//                     37 mins ago
//                   </div>

//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-warning btn-transition-none btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'plus']} />
//                     </span>
//                   </Button>
//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-link bg-transparent text-white btn-transition-none ml-2 btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
//                     </span>
//                   </Button>
//                 </div>
//               </Card>
//             </div>
//             <div className="pb-4">
//               <Card className="card-box card-box-alt m-3 d-block">
//                 <div className="p-3 text-left">
//                   <div className="d-50 rounded-circle border-0 mb-1 text-white btn-icon text-center shadow-sm">
//                     <div className="avatar-icon d-50 rounded-circle shadow-none">
//                       <img alt="..." src={avatar3} />
//                     </div>
//                   </div>
//                   <div className="font-weight-bold font-size-xl line-height-1 py-3">
//                     Zarah Deleon
//                   </div>
//                   <div className="pb-3 font-size-sm text-black-50">
//                     7 days ago
//                   </div>

//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-first btn-transition-none btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'plus']} />
//                     </span>
//                   </Button>
//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-link bg-white-10 btn-transition-none ml-2 btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
//                     </span>
//                   </Button>
//                 </div>
//               </Card>
//             </div>

//             <div className="pb-4">
//               <Card className="card-box card-box-alt m-3 d-block">
//                 <div className="p-3 text-left">
//                   <div className="d-50 rounded-circle border-0 mb-1 text-white btn-icon text-center shadow-sm">
//                     <div className="avatar-icon d-50 rounded-circle shadow-none">
//                       <img alt="..." src={avatar4} />
//                     </div>
//                   </div>
//                   <div className="font-weight-bold font-size-xl line-height-1 py-3">
//                     Sultan Ramsay
//                   </div>
//                   <div className="pb-3 font-size-sm text-black-50">
//                     44 mins ago
//                   </div>

//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-first btn-transition-none btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'plus']} />
//                     </span>
//                   </Button>
//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-link bg-white-10 btn-transition-none ml-2 btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
//                     </span>
//                   </Button>
//                 </div>
//               </Card>
//             </div>
//             <div className="pb-4">
//               <Card className="card-box card-box-alt m-3 d-block">
//                 <div className="p-3 text-left">
//                   <div className="d-50 rounded-circle border-0 mb-1 text-white btn-icon text-center shadow-sm">
//                     <div className="avatar-icon d-50 rounded-circle shadow-none">
//                       <img alt="..." src={avatar5} />
//                     </div>
//                   </div>
//                   <div className="font-weight-bold font-size-xl line-height-1 py-3">
//                     Ajay Wickens
//                   </div>
//                   <div className="pb-3 font-size-sm text-black-50">
//                     5 days ago
//                   </div>

//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-first btn-transition-none btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'plus']} />
//                     </span>
//                   </Button>
//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-link bg-white-10 btn-transition-none ml-2 btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
//                     </span>
//                   </Button>
//                 </div>
//               </Card>
//             </div>
//             <div className="pb-4">
//               <Card className="card-box card-box-alt m-3 d-block">
//                 <div className="p-3 text-left">
//                   <div className="d-50 rounded-circle border-0 mb-1 text-white btn-icon text-center shadow-sm">
//                     <div className="avatar-icon d-50 rounded-circle shadow-none">
//                       <img alt="..." src={avatar6} />
//                     </div>
//                   </div>
//                   <div className="font-weight-bold font-size-xl line-height-1 py-3">
//                     Missy Harper
//                   </div>
//                   <div className="pb-3 font-size-sm text-black-50">
//                     7 days ago
//                   </div>

//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-first btn-transition-none btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'plus']} />
//                     </span>
//                   </Button>
//                   <Button
//                     href="#/"
//                     onClick={(e) => e.preventDefault()}
//                     className="btn-link bg-white-10 btn-transition-none ml-2 btn-icon p-0 d-40 btn-animated-icon-sm rounded-lg">
//                     <span className="btn-wrapper--icon d-flex">
//                       <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
//                     </span>
//                   </Button>
//                 </div>
//               </Card>
//             </div>
//           </Slider>
//         </div>
//         <div className="px-4 pt-3">
//           <h5 className="mb-4 font-weight-bold font-size-xxl">Navigation</h5>
//           <List
//             component="div"
//             className="nav-pills nav-neutral-first nav-lg nav-pills-rounded flex-column pb-4">
//             <ListItem
//               button
//               href="#/"
//               onClick={(e) => e.preventDefault()}
//               className="br-tl br-bl pl-4 pr-3 rounded-pill"
//               selected>
//               <span>Contacts</span>
//               <div className="ml-auto">
//                 <FontAwesomeIcon
//                   icon={['fas', 'chevron-right']}
//                   className="font-size-xs opacity-3"
//                 />
//               </div>
//             </ListItem>
//             <ListItem
//               button
//               href="#/"
//               onClick={(e) => e.preventDefault()}
//               className="br-tl br-bl pl-4 pr-3 rounded-pill">
//               <span>Conversations</span>
//               <div className="ml-auto">
//                 <FontAwesomeIcon
//                   icon={['fas', 'chevron-right']}
//                   className="font-size-xs opacity-3"
//                 />
//               </div>
//             </ListItem>
//             <ListItem
//               button
//               href="#/"
//               onClick={(e) => e.preventDefault()}
//               className="br-tl br-bl pl-4 pr-3 rounded-pill">
//               <span>Chat History</span>
//               <div className="ml-auto">
//                 <FontAwesomeIcon
//                   icon={['fas', 'chevron-right']}
//                   className="font-size-xs opacity-3"
//                 />
//               </div>
//             </ListItem>
//             <ListItem
//               button
//               href="#/"
//               onClick={(e) => e.preventDefault()}
//               className="br-tl br-bl pl-4 pr-3 rounded-pill">
//               <span>Storage</span>
//               <div className="ml-auto">
//                 <div className="badge badge-dark mr-3">453</div>
//                 <FontAwesomeIcon
//                   icon={['fas', 'chevron-right']}
//                   className="font-size-xs opacity-3"
//                 />
//               </div>
//             </ListItem>
//             <ListItem
//               button
//               href="#/"
//               onClick={(e) => e.preventDefault()}
//               className="br-tl br-bl pl-4 pr-3 rounded-pill">
//               <span>Settings</span>
//               <div className="ml-auto">
//                 <div className="badge badge-dark mr-3">654</div>
//                 <FontAwesomeIcon
//                   icon={['fas', 'chevron-right']}
//                   className="font-size-xs opacity-3"
//                 />
//               </div>
//             </ListItem>
//           </List>
//         </div>
//         <div className="divider" />
//         <div className="p-4">
//           <h5 className="mb-4 font-weight-bold font-size-xxl">Upload</h5>
//           <div className="dropzone">
//             <div {...getRootProps({ className: 'dropzone-upload-wrapper' })}>
//               <input {...getInputProps()} />
//               <div className="dropzone-inner-wrapper bg-white">
//                 {isDragAccept && (
//                   <div>
//                     <div className="d-140 hover-scale-lg icon-blob icon-blob-animated btn-icon text-success mx-auto">
//                       <svg
//                         className="d-140 opacity-2"
//                         viewBox="0 0 600 600"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <g transform="translate(300,300)">
//                           <path
//                             d="M170.4,-137.2C213.2,-82.3,234.8,-11.9,223.6,56.7C212.4,125.2,168.5,191.9,104.3,226.6C40.2,261.3,-44.1,264,-104,229.8C-163.9,195.7,-199.4,124.6,-216.2,49.8C-233,-25.1,-231,-103.9,-191.9,-158C-152.7,-212.1,-76.4,-241.6,-6.3,-236.6C63.8,-231.6,127.7,-192.2,170.4,-137.2Z"
//                             fill="currentColor"
//                           />
//                         </g>
//                       </svg>
//                       <div className="blob-icon-wrapper">
//                         <CheckIcon className="d-50" />
//                       </div>
//                     </div>
//                     <div className="font-size-sm text-success">
//                       All files will be uploaded!
//                     </div>
//                   </div>
//                 )}
//                 {isDragReject && (
//                   <div>
//                     <div className="d-140 hover-scale-lg icon-blob icon-blob-animated btn-icon text-danger mx-auto">
//                       <svg
//                         className="d-140 opacity-2"
//                         viewBox="0 0 600 600"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <g transform="translate(300,300)">
//                           <path
//                             d="M169,-144C206.7,-87.5,216.5,-18,196.9,35.7C177.3,89.4,128.3,127.1,75.2,150.7C22,174.2,-35.4,183.5,-79.7,163.1C-124,142.7,-155.1,92.6,-164.1,40.9C-173.1,-10.7,-160.1,-64,-129,-118.9C-98,-173.8,-49,-230.4,8.3,-237.1C65.7,-243.7,131.3,-200.4,169,-144Z"
//                             fill="currentColor"
//                           />
//                         </g>
//                       </svg>
//                       <div className="blob-icon-wrapper">
//                         <CloseTwoToneIcon className="d-50" />
//                       </div>
//                     </div>
//                     <div className="font-size-sm text-danger">
//                       Some files will be rejected!
//                     </div>
//                   </div>
//                 )}
//                 {!isDragActive && (
//                   <div>
//                     <div className="d-140 hover-scale-lg icon-blob btn-icon text-first mx-auto">
//                       <svg
//                         className="d-140 opacity-2"
//                         viewBox="0 0 600 600"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <g transform="translate(300,300)">
//                           <path
//                             d="M171.2,-128.5C210.5,-87.2,223.2,-16.7,205.1,40.4C186.9,97.5,137.9,141.1,81.7,167.2C25.5,193.4,-38,202.1,-96.1,181.2C-154.1,160.3,-206.7,109.7,-217.3,52.7C-227.9,-4.4,-196.4,-68,-153.2,-110.2C-110,-152.4,-55,-173.2,5.5,-177.5C65.9,-181.9,131.9,-169.8,171.2,-128.5Z"
//                             fill="currentColor"
//                           />
//                         </g>
//                       </svg>
//                       <div className="blob-icon-wrapper">
//                         <PublishTwoToneIcon className="d-50" />
//                       </div>
//                     </div>
//                     <div className="font-size-sm">
//                       Drag some images to see the animated effects!
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="divider" />
//         <div className="card-footer p-4 bg-secondary">
//           <div>
//             <div className="font-weight-bold mb-3 text-uppercase text-dark font-size-sm text-center">
//               Uploaded Files
//             </div>
//             {thumbs.length <= 0 && (
//               <div className="text-first text-center font-size-sm">
//                 Uploaded demo images previews will appear here!
//               </div>
//             )}
//             {thumbs.length > 0 && (
//               <div>
//                 <Alert color="success" className="text-center mb-3">
//                   You have uploaded <b>{thumbs.length}</b> files!
//                 </Alert>
//                 <Grid container spacing={0}>
//                   {thumbs}
//                 </Grid>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="divider" />

//         <div className="w-100 bg-white p-4 d-flex align-items-center">
//           <div className="d-flex flex-column flex-grow-1 justify-content-center w-100">
//             <div>
//               <div className="text-success d-flex align-items-center">
//                 <div className="d-30 rounded-sm btn-icon bg-neutral-success mr-2">
//                   <FontAwesomeIcon icon={['fas', 'angle-up']} />
//                 </div>
//                 <span className="pt-1 font-weight-bold font-size-sm">
//                   +34.54%
//                 </span>
//               </div>
//               <div className="text-black-50 pt-3">
//                 You had increased storage consumption over the last 30 days.
//               </div>
//             </div>
//           </div>
//         </div>
//       </PerfectScrollbar>
//     </>
//   );
// }
