import React from 'react';
import Image from 'next/image';

export default function OprecPage() {
  return (
    <div className="main w-full pt-14 font-Lato text-[#FFF6E0]">
      <div>
        {/* <Image src={'/oprec-volunteer/line-9.png'} alt='line-bg' width={1029} height={975} className='absolute -z-[1]'/> */}
      </div>
      <div className="container flex justify-between my-[40px]">
        <div className="bg-[#662549] w-1/2 rounded-e-[200px] bg-no-repeat bg-left-bottom" style={{ backgroundImage: 'url(/oprec-volunteer/dots-5.png)' }}>
          <div className="ml-[64px] my-[30px]">
            <h2 className="pt-11 text-4xl font-bold">Open Recruitment Volunteer</h2>
            <h1 className="text-7xl font-bold">Harmoni Serasi</h1>
            <br />
            <p className="text-lg">
              Program kerja yang mewadahi mahasiswa aktif FIKTI UG untuk <br /> berkontribusi dalam kepanitiaan acara dan kegiatan yang diselenggarakan <br /> oleh BEM FIKTI UG.
            </p>
            <br />
            <h4 className="text-2xl font-bold">Periode Pendaftaran:</h4>
            <h4 className="text-2xl font-bold">15 Januari 2024 - 20 Januari 2024</h4>
            <br />
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-transparent rounded-full border border-brown-1 flex gap-1">
                <svg className="w-6 h-6 pt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.66667 15.8333H14.5833C16.25 15.8333 17.5 14.5833 17.5 12.9166C17.5 11.25 16.25 9.99998 14.5833 9.99998H12.9167H5.41667C3.75 9.99998 2.5 8.74998 2.5 7.08331C2.5 5.41665 3.75 4.16665 5.41667 4.16665L17.5 4.16665"
                    stroke="#FFF6E0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M15.4167 6.25L17.5001 4.16667L15.4167 2.08333" stroke="#FFF6E0" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M2.50008 15.8333C2.50008 16.9839 3.43282 17.9167 4.58341 17.9167C5.73401 17.9167 6.66675 16.9839 6.66675 15.8333C6.66675 14.6827 5.73401 13.75 4.58341 13.75C3.43282 13.75 2.50008 14.6827 2.50008 15.8333Z"
                    fill="#FFF6E0"
                    stroke="#FFF6E0"
                  />
                </svg>
                <p className="text-lg">Project Timeline</p>
              </div>
              <div className="px-3 py-1 bg-transparent rounded-full border border-brown-1 flex gap-1">
                <svg className="w-6 h-6 pt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.25 5.625H8.75M6.25 10H13.75M6.25 12.5H13.75M6.25 15H8.75M5 18.125H15C15.3315 18.125 15.6495 17.9933 15.8839 17.7589C16.1183 17.5245 16.25 17.2065 16.25 16.875V3.125C16.25 2.79348 16.1183 2.47554 15.8839 2.24112C15.6495 2.0067 15.3315 1.875 15 1.875H5C4.66848 1.875 4.35054 2.0067 4.11612 2.24112C3.8817 2.47554 3.75 2.79348 3.75 3.125V16.875C3.75 17.2065 3.8817 17.5245 4.11612 17.7589C4.35054 17.9933 4.66848 18.125 5 18.125Z"
                    stroke="#FFF6E0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.75 5.9375C13.9226 5.9375 14.0625 5.79759 14.0625 5.625C14.0625 5.45241 13.9226 5.3125 13.75 5.3125C13.5774 5.3125 13.4375 5.45241 13.4375 5.625C13.4375 5.79759 13.5774 5.9375 13.75 5.9375Z"
                    fill="#FFF6E0"
                    stroke="#FFF6E0"
                  />
                </svg>
                <p className="text-lg">Syarat Umum Pendaftaran</p>
              </div>
              <div className="px-3 py-1 bg-transparent rounded-full border border-brown-1 flex gap-1">
                <svg className="w-6 h-6 pt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_160_74)">
                    <path
                      d="M0 3.125C0 2.08984 0.839844 1.25 1.875 1.25H5.625C6.66016 1.25 7.5 2.08984 7.5 3.125V3.75H15V3.125C15 2.08984 15.8398 1.25 16.875 1.25H20.625C21.6602 1.25 22.5 2.08984 22.5 3.125V6.875C22.5 7.91016 21.6602 8.75 20.625 8.75H16.875C15.8398 8.75 15 7.91016 15 6.875V6.25H7.5V6.875C7.5 6.94141 7.49609 7.00781 7.48828 7.07031L10.625 11.25H14.375C15.4102 11.25 16.25 12.0898 16.25 13.125V16.875C16.25 17.9102 15.4102 18.75 14.375 18.75H10.625C9.58984 18.75 8.75 17.9102 8.75 16.875V13.125C8.75 13.0586 8.75391 12.9922 8.76172 12.9297L5.625 8.75H1.875C0.839844 8.75 0 7.91016 0 6.875V3.125Z"
                      fill="#FFF6E0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_160_74">
                      <rect width="22.5" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-lg">Project List</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-7 w-1/2">
          <Image src={'/oprec-volunteer/bejo-1.png'} alt="people" width={461} height={431} className="object-cover my-[58px] mx-[20px]" />
          <Image src={'/oprec-volunteer/lingkaran-2.png'} alt="lingkaran" width={400} height={400} className=" mt-[-810px] ml-[420px]" />
          <Image src={'/oprec-volunteer/dots-group.png'} alt='dots-2' width={150} height={150} className='ml-[567px] mt-[120px]'/>

        </div>
      </div>
      <div className="flex justify-center items-center pt-32">
        <div className="bg-cover bg-center h-72 w-80 text-center items-center justify-center flex flex-col" style={{ backgroundImage: 'url(/oprec-volunteer/bulet-abstrak-2.png)' }}>
          <h1 className="text-6xl font-bold whitespace-nowrap">Project Timeline</h1>
          <p className="whitespace-nowrap overflow-hidden pt-2 text-sm">
            Agar tidak ketinggalan informasi terbaru, yuk, simpan <br /> tanggal-tanggal penting di timeline ini!
          </p>
        </div>
      </div>
      <div className="flex mx-auto bg-cover bg-no-repeat w-[1425px] h-[588px]" style={{ backgroundImage: 'url(/oprec-volunteer/line-8.png)' }}>
        <div className="w-[360px] h-[192px] bg-no-repeat ml-[49px] pt-[80.61px]" style={{ backgroundImage: 'url(/oprec-volunteer/timeline-1.png)' }}>
          <Image src={'/oprec-volunteer/kalender.png'} alt="kalender" width={100} height={100} className="pt-[260px]" />
        </div>
        <div className="w-[321px] h-[171px] bg-no-repeat ml-[-240px] mt-[368px]" style={{ backgroundImage: 'url(/oprec-volunteer/timeline-2.png)' }}>
          <Image src={'/oprec-volunteer/folder.png'} alt="folder" width={100} height={100} className="ml-[220px] mt-[-450px]" />
        </div>
        <div className="w-[462px] h-[91px] bg-no-repeat ml-[150px] mt-[32px]" style={{ backgroundImage: 'url(/oprec-volunteer/timeline-3.png)' }}>
          <Image src={'/oprec-volunteer/ceklis.png'} alt="ceklis" width={100} height={100} className="mt-[120px] ml-[-70px]" />
        </div>
        <div className="w-[423px] h-[198px] bg-no-repeat ml-[-410px] mt-[200px]" style={{ backgroundImage: 'url(/oprec-volunteer/timeline-4.png)' }}>
          <Image src={'/oprec-volunteer/megaphone.png'} alt="speaker" width={120} height={120} className="mt-[230px] ml-[80px]" />
        </div>
        <div className="w-[467px] h-[135px] bg-no-repeat ml-[-200px] mt-[440px]" style={{ backgroundImage: 'url(/oprec-volunteer/timeline-5.png)' }}>
          <Image src={'/oprec-volunteer/target.png'} alt="target" width={100} height={100} className="ml-[270px] mt-[-360px]" />
          <Image src={'/oprec-volunteer/dots-group.png'} alt="dots group" width={150} height={150} className="ml-[390px] mt-[100px]" />
        </div>
      </div>
      <br />
      <div className="w-[320px] h-[120px] flex main items-start flex-column rounded-e-[24px]">
        <div className="py-[20px] text-md pl-[36px]">
          Hubungi untuk informasi lebih lanjut
          <div className="flex gap-3 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <g clip-path="url(#clip0_49_303)">
                <path
                  d="M0.0557861 24.7193L1.74422 18.5604C0.703599 16.7539 0.153755 14.712 0.153755 12.6111C0.153755 6.05325 5.49422 0.718872 12.0459 0.718872C15.2269 0.718872 18.2114 1.9559 20.4628 4.20731C22.7077 6.45215 23.9447 9.44325 23.9447 12.6176C23.9447 19.1754 18.6042 24.5098 12.0525 24.5098H12.0459C10.0561 24.5098 8.09954 24.0125 6.36516 23.0632L0.0557861 24.7193ZM6.65297 20.9168L7.01297 21.1329C8.53125 22.0362 10.2722 22.5073 12.0459 22.5139H12.0525C17.5045 22.5139 21.9352 18.0828 21.9352 12.6312C21.9352 9.987 20.9077 7.50637 19.0425 5.64122C17.1773 3.77606 14.6967 2.742 12.0525 2.742C6.60047 2.742 2.16329 7.17309 2.16329 12.6247C2.16329 14.4898 2.68688 16.3095 3.675 17.8868L3.91079 18.26L2.90954 21.9054L6.65297 20.9168Z"
                  fill="#FFF6E0"
                />
                <path
                  d="M0.467819 24.3068L2.09766 18.3575C1.08985 16.6165 0.566257 14.6398 0.566257 12.6176C0.566257 6.28856 5.71688 1.13794 12.0459 1.13794C15.1153 1.13794 18.0019 2.3356 20.168 4.50216C22.3345 6.67528 23.5322 9.55481 23.5256 12.6242C23.5256 18.9533 18.375 24.1039 12.0459 24.1039H12.0394C10.1152 24.1039 8.23032 23.6197 6.55501 22.7098L0.467819 24.3068Z"
                  fill="url(#paint0_linear_49_303)"
                />
                <path
                  d="M0.0557861 24.7193L1.74422 18.5604C0.703599 16.7539 0.153755 14.712 0.153755 12.6111C0.153755 6.05325 5.49422 0.718872 12.0459 0.718872C15.2269 0.718872 18.2114 1.9559 20.4628 4.20731C22.7077 6.45215 23.9447 9.44325 23.9447 12.6176C23.9447 19.1754 18.6042 24.5098 12.0525 24.5098H12.0459C10.0561 24.5098 8.09954 24.0125 6.36516 23.0632L0.0557861 24.7193ZM6.65297 20.9168L7.01297 21.1329C8.53125 22.0362 10.2722 22.5073 12.0459 22.5139H12.0525C17.5045 22.5139 21.9352 18.0828 21.9352 12.6312C21.9352 9.987 20.9077 7.50637 19.0425 5.64122C17.1773 3.77606 14.6967 2.742 12.0525 2.742C6.60047 2.742 2.16329 7.17309 2.16329 12.6247C2.16329 14.4898 2.68688 16.3095 3.675 17.8868L3.91079 18.26L2.90954 21.9054L6.65297 20.9168Z"
                  fill="url(#paint1_linear_49_303)"
                />
                <path
                  d="M9.07453 7.64374C8.85188 7.1464 8.61656 7.13983 8.40703 7.13327C8.23688 7.12671 8.03391 7.12671 7.8375 7.12671C7.64109 7.12671 7.32047 7.1989 7.04578 7.49983C6.77109 7.79421 6.00516 8.51421 6.00516 9.98046C6.00516 11.4401 7.07203 12.8534 7.21594 13.0564C7.36641 13.2528 9.27094 16.3484 12.2948 17.5395C14.8083 18.5276 15.3188 18.3312 15.8616 18.2858C16.4048 18.2333 17.6222 17.5658 17.8706 16.872C18.1195 16.1783 18.1195 15.5825 18.0408 15.4583C17.9686 15.3341 17.7661 15.2619 17.4713 15.1114C17.1769 14.9609 15.7106 14.2409 15.4425 14.143C15.1678 14.045 14.9714 13.9925 14.775 14.2934C14.5786 14.5878 14.0091 15.2619 13.8323 15.4583C13.6622 15.6547 13.4855 15.6809 13.1911 15.5305C12.8967 15.38 11.9344 15.0659 10.8023 14.0576C9.91875 13.2725 9.32344 12.297 9.14672 12.0026C8.97656 11.7083 9.12703 11.5447 9.2775 11.3942C9.40828 11.2634 9.57188 11.0473 9.72235 10.8706C9.87281 10.6939 9.91875 10.5762 10.0167 10.3733C10.1147 10.1769 10.0692 10.0001 9.99047 9.84968C9.91875 9.69874 9.34266 8.23296 9.07453 7.64374Z"
                  fill="#FFF6E0"
                />
              </g>
              <defs>
                <linearGradient id="paint0_linear_49_303" x1="11.9967" y1="24.307" x2="11.9967" y2="1.13822" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#20B038" />
                  <stop offset="1" stop-color="#60D66A" />
                </linearGradient>
                <linearGradient id="paint1_linear_49_303" x1="12" y1="24.7193" x2="12" y2="0.719341" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F9F9F9" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <clipPath id="clip0_49_303">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.72168)" />
                </clipPath>
              </defs>
            </svg>
            +62-8517-3330-443 (Iqbal)
          </div>
          <div className="flex gap-3 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <g clip-path="url(#clip0_49_343)">
                <path d="M20.4 0.72168H3.6C1.61177 0.72168 0 2.33345 0 4.32168V21.1217C0 23.1099 1.61177 24.7217 3.6 24.7217H20.4C22.3882 24.7217 24 23.1099 24 21.1217V4.32168C24 2.33345 22.3882 0.72168 20.4 0.72168Z" fill="#00B900" />
                <path
                  d="M20.7656 11.5498C20.6719 13.6592 19.7812 15.1123 18.375 16.3779C15.8906 18.5811 11.9531 21.2998 11.4375 20.8779C10.9219 20.2217 12.4219 18.6748 10.5 18.4404C6.375 17.8779 3.23438 14.9717 3.23438 11.5498C3.23438 7.70605 7.21875 4.51855 12.0469 4.51855C16.875 4.51855 20.9062 7.70605 20.7656 11.5498Z"
                  fill="#FFF6E0"
                />
                <path
                  d="M17.3906 11.5967H15.7969M17.3906 9.90918H15.7031V13.2842H17.3906M11.625 13.2842V9.90918L14.1562 13.2842V9.90918M9.98438 13.2842V9.90918M6.89062 9.90918V13.2842H8.625"
                  stroke="#00B900"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_49_343">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.72168)" />
                </clipPath>
              </defs>
            </svg>
            @baliqstic (Iqbal)
          </div>
        </div>
      </div>
      <div className="p-[102.28px] flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold whitespace-nowrap">Project List</h1>
        <p className="pt-2 text-center text-sm">
          Proyek kerja kami membutuhkan bantuanmu,
          <br /> Yuk ramaikan acara-acara proyek kerja ini!
        </p>
      </div>
      <div className="px-[214px] grid grid-rows-1 gap-6">
        <div className="w-[993px] h-[301px] flex flex-col">
          <div className="bg-[#270548] w-full h-[125px] px-[36px] py-[24px] rounded-t-[48px]">
            <h2 className="text-5xl font-bold whitespace-nowrap">HEROES X</h2>
            <p className="text-sm pt-1">Hero of Educational and Social X</p>
          </div>
          <div className="px-[48px] py-[30px] backdrop-blur-[6.300000190734863px] bg-[#FFFFFF1A] rounded-b-[48px]">
            <p className="text-lg">
              HEROES X (Hero of Education and Social X) adalah kegiatan bakti sosial yang dilaksanakan oleh Mahasiswa/i FIKTI UG di wilayah yang memiliki suatu permasalahan dalam keseharian. Acara ini terdapat kegiatan seperti melakukan
              sosialisasi tentang teknologi, kerja bakti, dan kegiatan sosial lainnya. Kegiatan akan berlangsung selama 3 hari.
            </p>
          </div>
        </div>
        <div className="w-[993px] h-[301px] flex flex-col">
          <div className="bg-[#270548] w-full h-[125px] px-[36px] py-[24px] rounded-t-[48px]">
            <h2 className="text-5xl font-bold whitespace-nowrap">HEROES X</h2>
            <p className="text-sm pt-1">Hero of Educational and Social X</p>
          </div>
          <div className="px-[48px] py-[30px] backdrop-blur-[6.300000190734863px] bg-[#FFFFFF1A] rounded-b-[48px]">
            <p className="text-lg">
              HEROES X (Hero of Education and Social X) adalah kegiatan bakti sosial yang dilaksanakan oleh Mahasiswa/i FIKTI UG di wilayah yang memiliki suatu permasalahan dalam keseharian. Acara ini terdapat kegiatan seperti melakukan
              sosialisasi tentang teknologi, kerja bakti, dan kegiatan sosial lainnya. Kegiatan akan berlangsung selama 3 hari.
            </p>
          </div>
        </div>
        <div className="w-[993px] h-[301px] flex flex-col">
          <div className="bg-[#270548] w-full h-[125px] px-[36px] py-[24px] rounded-t-[48px]">
            <h2 className="text-5xl font-bold whitespace-nowrap">HEROES X</h2>
            <p className="text-sm pt-1">Hero of Educational and Social X</p>
          </div>
          <div className="px-[48px] py-[30px] backdrop-blur-[6.300000190734863px] bg-[#FFFFFF1A] rounded-b-[48px]">
            <p className="text-lg">
              HEROES X (Hero of Education and Social X) adalah kegiatan bakti sosial yang dilaksanakan oleh Mahasiswa/i FIKTI UG di wilayah yang memiliki suatu permasalahan dalam keseharian. Acara ini terdapat kegiatan seperti melakukan
              sosialisasi tentang teknologi, kerja bakti, dan kegiatan sosial lainnya. Kegiatan akan berlangsung selama 3 hari.
            </p>
          </div>
        </div>
        <div className="w-[993px] h-[301px] flex flex-col">
          <div className="bg-[#270548] w-full h-[125px] px-[36px] py-[24px] rounded-t-[48px]">
            <h2 className="text-5xl font-bold whitespace-nowrap">HEROES X</h2>
            <p className="text-sm pt-1">Hero of Educational and Social X</p>
          </div>
          <div className="px-[48px] py-[30px] backdrop-blur-[6.300000190734863px] bg-[#FFFFFF1A] rounded-b-[48px]">
            <p className="text-lg">
              HEROES X (Hero of Education and Social X) adalah kegiatan bakti sosial yang dilaksanakan oleh Mahasiswa/i FIKTI UG di wilayah yang memiliki suatu permasalahan dalam keseharian. Acara ini terdapat kegiatan seperti melakukan
              sosialisasi tentang teknologi, kerja bakti, dan kegiatan sosial lainnya. Kegiatan akan berlangsung selama 3 hari.
            </p>
          </div>
        </div>
        <div className="w-[993px] h-[301px] flex flex-col mb-10">
          <div className="bg-[#270548] w-full h-[125px] px-[36px] py-[24px] rounded-t-[48px]">
            <h2 className="text-5xl font-bold whitespace-nowrap">HEROES X</h2>
            <p className="text-sm pt-1">Hero of Educational and Social X</p>
          </div>
          <div className="px-[48px] py-[30px] backdrop-blur-[6.300000190734863px] bg-[#FFFFFF1A] rounded-b-[48px]">
            <p className="text-lg">
              HEROES X (Hero of Education and Social X) adalah kegiatan bakti sosial yang dilaksanakan oleh Mahasiswa/i FIKTI UG di wilayah yang memiliki suatu permasalahan dalam keseharian. Acara ini terdapat kegiatan seperti melakukan
              sosialisasi tentang teknologi, kerja bakti, dan kegiatan sosial lainnya. Kegiatan akan berlangsung selama 3 hari.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
