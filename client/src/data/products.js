const products = [
  {
    id: 1,
    countInStock: 27,
    productName:
      'Tecno Camon 18 Premier -CH9- 6\'7" - 256gb - 8gb - Dual Sim - Polar Night - 4750mah',
    price: 180200,
    image: 'images/Tecno-Camon-18.jpeg',
    Description:
      'DISPLAY	6.7 inches \n SIM	Dual SIM (Nano-SIM, dual stand-by) \n Resolution	1080 x 2460 pixels \n OS	Android 11, HIOS 8.0 \n Chipset	Mediatek Helio G96 (12 nm) \n CPU	Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) \n GPU	Mali-G52 MC2 \n Internal	256GB 8GB RAM \n Triple Camera	64 MP, f/1.6, 26mm (wide), PDAF \n 8 MP, f/3.5, 135mm (periscope telephoto), PDAF, 5x optical zoom \n 12 MP, (ultrawide), gimbal OIS \n Battery Type	Li-Po 4750 mAh, non-removable \n Charging	Fast charging 33W \n Sensors	Fingerprint (side-mounted), accelerometer gyro, proximit',
    isFeatured: true,
  },
  {
    id: 2,
    countInStock: 7,
    productName:
      'Tecno Phantom X (ac8) 256+8gb + Branded Bag - Monet Summer- 6.7inch -4700mah - 50mp+13mp+8m Super Amoled',
    price: 240000,
    image: 'images/Tecno-Phantom-x.jpeg',
    Description:
      'Sim Slots	Dual Sim \n Battery Capacity	3000mAh - 5000mAh \n Sim Type	Dual SIM \n OS	Android OS \n Colour	Multicolour \n Brand	Tecno \n Screen size	None \n Connectivity	WiFi + 4G \n RAM	8 GB \n Internal Memory	256 GB',
    isFeatured: false,
  },
  {
    id: 3,
    countInStock: 0,
    productName: 'Oraimo 27000mAh Power Charging Bank 3 Byte',
    price: 13500,
    image: 'images/Oraimo-27000mAh.jpeg',
    Description: 'Colour	Black \n Brand	Oraimo \n OS	Android OS',
    isFeatured: true,
  },
  {
    id: 4,
    countInStock: 8,
    productName: 'A1 Smartwatch With Sim And Memory Card Slot- White',
    price: 5500,
    image: 'images/A1-smartwatch.jpeg',
    Description:
      'Type: Watch Phone \n CPU: MTK6261 \n External memory: Supports Up to 32GB MicroSD \n Display:\n Screen type: Capacitive \n Screen size: 1.54 inch \n Screen resolution: 240 x 240 \n Network: \n Wireless Connectivity: GSM, Bluetooth \n Network type: GSM \n Frequency: GSM850/900/1800/1900MHz \n Bluetooth: Yes \n Camera: \n Camera type: Single camera \n Front camera: 0.3MP \n Video recording: Yes \n Connectivity: \n SIM Card Slot: Single SIM(Micro SIM slot) \n TF card slot: Yes \n Media Formats: \n Picture format: JPEG,GIF,BMP \n Music format: MP3,WAV \n Video format: MP4',
    isFeatured: true,
  },
  {
    id: 5,
    countInStock: 7,
    productName:
      'Samsung Galaxy A12 - Dual Sim - 64GB ROM - 4GB RAM - 4G LTE - 6.5" - 48MP - 5000maAh - Fingerprint - Black',
    price: 81999,
    image: 'images/Galaxy-A12.jpeg',
    Description:
      'Samsung Galaxy A12 Key Specs & Features \n 6.5-inch TFT LCD Display, 720 x 1560 Pixels, 264 PPI \n Octa-core Processor (2.3 GHz, 1.8 GHz) \n 4GB RAM \n Android 10 \n 64GB Storage with SD-Card Support \n 48MP + 5MP + 2MP + 2MP Rear Camera \n 8MP Front Camera \n 4G LTE \n Non-Removable 5000mAh Li-Po Battery',
    isFeatured: false,
  },
  {
    id: 6,
    countInStock: 5,
    productName: 'Samsung Galaxy S21 - 256GB + 8GB - 5G - Phantom Violet',
    price: 479000,
    image: 'images/Galaxy-S21.jpeg',
    Description:
      'GENERAL \n Network 2G/3G/4G/5G/VoLTE supported \n SIM Dual Nano SIM - optional \n BODY \n Dimensions 161.4 x 75.6 x 7.8 mm \n Weight 202 g \n DISPLAY \n Type Dynamic AMOLED 2X, 120Hz, HDR10+ \n Size 6.7 inches \n Multitouch Yes \n SOUND \n Loudspeaker Yes, with stereo speakers  \n MEMORY \n Card slot microSD, up to 1 TB(Uses SIM 2 slot) \n Internal RAM - 8 GB ; ROM - 256 GB \n DATA \n Speed HSPA,LTE \n WLAN Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct, hotspot \n Bluetooth 5.0, A2DP, LE \n NFC Yes \n USB USB Type-C 3.2, USB On-The-Go \n CAMERA \n Primary 12 MP(f/1.8) + 64 MP(f/2.0) + 12 MP(f/2.2) \n Features LED flash, auto-HDR, panorama \n Video 8K@30fps, 4K@30/60fps, 1080p@30/60/120fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EIS & OIS \n Secondary 10 MP, f/2.2 \n FEATURES \n OS Android 11, One UI 3.1 \n Chipset Exynos 2100 (5 nm) \n CPU Octa-core (1x2.9 GHz Cortex-X1 & 3x2.80 GHz Cortex-A78 & 4x2.2 GHz Cortex-A55) Processor. \n GPU Mali-G78 MP14 \n Sensors Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, compass, barometer \n GPS Yes, with A-GPS, GLONASS, BDS, GALILEO \n  BATTERY \n Type Non-removable Li-Po 4800 mAh battery, Fast charging 25W',
    isFeatured: true,
  },
  {
    id: 7,
    countInStock: 11,
    productName: 'Samsung Galaxy A53 - 6.5" -6GB Ram -128GB Rom - Dual Sim - 5G - 5000mAh- Blue',
    price: 223000,
    image: 'images/Galaxy-A53.jpeg',
    Description:
      'Colour	Blue \n Warranty Period	2 Years \n Brand	Samsung \n Screen size	Others \n Connectivity	5G  \n Sim Type	Dual SIM \n OS	Android OS \n Sim Slots	Dual Sim \n Battery Capacity	5000mAh \n RAM	6 GB \n Internal Memory	128 GB \n Colour	Blue \n Warranty Period	 2 Year \n Brand	 Samsung \n Screen size	Others \n Connectivity	5G \n Sim Type	Dual SIM \n OS	Android OS \n Sim Slots	Dual Sim \n Battery Capacity	5000mAh \n RAM	6 GB \n Internal Memory	128 GB',
    isFeatured: false,
  },
  {
    id: 8,
    countInStock: 21,
    productName:
      'Samsung Galaxy S21 Plus - 6.7" - 256GB ROM - 8GB RAM - Dual Sim - 5G - 4800mAh - Phantom Silver',
    price: 562000,
    image: 'images/Galaxy-S21-plus.jpeg',
    Description:
      'DISPLAY 6.7INCHES , Dynamic AMOLED 2X, 120Hz, HDR10+, 1300 nits (peak) \n NETWORK GSM / CDMA / HSPA / EVDO / LTE / 5G \n OPERATING SYSTEM Android 11, One UI 3.1 \n PROCESSOR Octa core  \n MEMORY  256GB + 8GB RAM \n SELFIE CAMERA 10MP \n BACK CAMERA 108 MP \n SIM TYPE Single SIM (Nano-SIM and/or eSIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by) \n BATTERY Li-Po 4800 mAh, non-removable, FAST CHARGE \n COLOUR Phantom Silver \n OTHER SPECIFICATIONS Fingerprint ,FM radio,Dual video call, Auto-HDR,Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct, hotspot, Bluetooth 5.1, Bixby natural language commands and dictation.',
    isFeatured: false,
  },
  {
    id: 9,
    countInStock: 19,
    productName: 'Samsung Galaxy Bud Live- Wireless Earbuds - MYSTIC BRONZE',
    price: 48000,
    image: 'images/Galaxy-bud.jpeg',
    Description: 'Colour	Bronze \n Brand	Samsung \n OS	Android OS',
    isFeatured: false,
  },
  {
    id: 10,
    countInStock: 9,
    productName: 'Samsung Led View Flip Case For Samsung Galaxy Note 20 Ultra',
    price: 35000,
    image: 'images/Galaxy-Led-Case.jpeg',
    Description: 'Colour	Black \n Brand	Samsung \n OS	Android OS',
    isFeatured: false,
  },
  {
    id: 11,
    countInStock: 5,
    productName:
      'Apple iPhone 13 - Single SIM - 128GB ROM - 4GB RAM - 6.1" - iOS 15 - 3240mAh - Midnight',
    price: 499999,
    image: 'images/Iphone13.jpeg',
    Description:
      'RAM	4 GB \n Internal Memory	128 GB \n Sim Slots	Single Sim \n Battery Capacity	3000mAh - 5000mAh \n Sim Type	Single SIM \n OS	iOS \n Warranty Period	1 Year \n Colour	Black \n Brand	Apple \n Screen size	6.1 inches \n Connectivity	WiFi + 4G',
    isFeatured: true,
  },
  {
    id: 12,
    countInStock: 10,
    productName: 'Apple iPhone 12 Pro - 6GB - 256GB - Graphite',
    price: 640300,
    image: 'images/Iphone12-pro.jpeg',
    Description:
      'New Apple iPhone 12 Pro \n 6.1-inch Super Retina XDR display \n Ceramic Shield, tougher than any smartphone glass \n A14 Bionic chip, the fastest chip ever in a smartphone \n Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 4x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording \n LiDAR Scanner for improved AR experiences, Night mode portraits \n 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording \n Industry-leading IP68 water resistance \n Supports MagSafe accessories for easy attachment and faster wireless charging \n iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more',
    isFeatured: false,
  },
  {
    id: 13,
    countInStock: 13,
    productName:
      'Apple iPhone 13 Pro Max - 5G - Dual Sim - 512GB ROM - 6GB RAM - 6.7" OLED - iOS 15 - 4352mAh - Blue',
    price: 1060000,
    image: 'images/iphone13-pro-max.jpeg',
    Description:
      'Screen size	Others \n Connectivity	WiFi + 4G \n Sim Type	Dual SIM \n OS	iOS \n Sim Slots	Dual Sim \n Battery Capacity	3000mAh - 5000mAh \n RAM	6 GB \n Internal Memory	Above 256 GB \n Warranty Period	1 Year \n Colour	Blue \n Brand	Apple',
    isFeatured: true,
  },
  {
    id: 14,
    countInStock: 11,
    productName:
      'Apple iPhone Xs Max 6.5” -4GB RAM - 64GB ROM -Gold With Back Case And Screen Protector',
    price: 265000,
    image: 'images/iphoneXs-max.jpeg',
    Description:
      'RAM	4 GB \n Internal Memory	64 GB \n Sim Slots	Single Nano Sim \n Battery Capacity	3000mAh - 5000mAh \n Sim Type	Nano SIM \n OS	iOS \n Colour	Gold \n Brand	Apple \n Screen size	6.4 inches \n Connectivity	WiFi + 4G',
    isFeatured: false,
  },
  {
    id: 15,
    countInStock: 15,
    productName: 'Apple iPhone SE 2020 - 64gb - 4g Lte - Black',
    price: 230000,
    image: 'images/iphoneSE.jpeg',
    Description:
      'Colour	Black \n Brand	Apple \n Screen size	4.7 inches \n Connectivity	Wired \n Sim Type	Nano SIM \n OS	iOSvSim Slots	Single Sim \n Battery Capacity	1000mAh - 3000mAh \n RAM	3 GB \n Internal Memory	64 GB',
    isFeatured: false,
  },
  {
    id: 16,
    countInStock: 6,
    productName: 'Oraimo Smart Watch 1.69" IPS Screen IP68 Waterproof',
    price: 14500,
    image: 'images/Oraimo-smart-watch.jpeg',
    Description:
      'Specifications:\n\nColor: black \n Screen: 1.69" IPS 240*280 \n BT Version: V5.0 \n Cell Capacity: 200mAh \n Standby Time: Up to 15 days \n Watch Size: 43*35*9.95mm \n Weight: 165g \n Material: Zinc Alloy/PC/TPU \n Waterproof Rating: IP68',
    isFeatured: false,
  },
  {
    id: 17,
    countInStock: 8,
    productName: 'Oraimo Riff Smaller For Comfort True Wireless Earbuds -White',
    price: 9990,
    image: 'images/Oraimo-earbuds.jpeg',
    Description:
      'Specifications:\n\nBT Version: V5.0 \n Range: 10m \n Battery Playtime: 4.5 hrs on single charge; case provides additional 12 hrs \n Charge Input: Type-C \n Battery Capacity: 35mAh(earbud), 300mAh(case)<p></p>Key Features\n\n Compact Design-Smaller For Comfort \n Dynamic Sound-Never Lose a Beat \n ENC 1-mic Technology-Hear the Other One Clearly \n Open and Connect-Convenience at Your Side \n IPX4 Splash & Sweat Protection-All-weather Protection',
    isFeatured: false,
  },
  {
    id: 18,
    countInStock: 10,
    productName: 'Anker Soundcore R100- True Wireless Earbuds - Black',
    price: 13400,
    image: 'images/Anker-earbuds.jpeg',
    Description:
      'Key Features:\n\n​Long-Life Buds \n Crystal-Clear Calls \n 10mm Dynamic Drivers \n BassUp Technology \n Secure Fit \n Bluetooth 5.0 \n Auto-Pairing \n Single Earbud Mode',
    isFeatured: false,
  },
  {
    id: 19,
    countInStock: 12,
    productName:
      'Edifier W800BT PLUS Wireless Bluetooth Headset Bluetooth V5.1 40mm Drivers Unit Up To 55 Hours Stereo Headphones Support AptX',
    price: 12990,
    image: 'images/Edifier-headset.jpeg',
    Description:
      'Key Features:\n\nBluetooth: Qualcomm QCC V5.1 for stable connection \n Ф40mm audio drivers deliver detailed and powerful sound \n Built-in rechargeable batteries allow up to 50 hours of playtime \n Noise reduction for clear phone conversations \n Connects to two Bluetooth devices simultaneously \n Find audio presets and more on the EDIFIER Connect app',
    isFeatured: false,
  },
  {
    id: 20,
    countInStock: 18,
    productName:
      'Infinix Hot 11 Play, 6.8" IPS LCD Screen, 4GB/128GB MEmory, 13MP Dual Camera, 6000 mAh Battery - Sunset Gold',
    price: 75990,
    image: 'images/infinix-hot11.jpeg',
    Description:
      'Key Features:\n\n​Display - 6.82-inch (1640x720) \n Processor - MediaTek Helio G35 \n Front Camera - 8MP \n Rear Camera - 13MP + AI Lens \n RAM - 4GB \n Storage - 128GB \n Battery Capacity - 6000mAh \n OS - Android 11  \n Colour - Sunset Gold',
    isFeatured: false,
  },
  {
    id: 21,
    countInStock: 3,
    productName:
      'Infinix Note 11i - 6.95" - 64GB RAM - 4GB ROM - 48MP+2MP+2MP Rear & 16MP Selfie - 5000mAh - Black',
    price: 89900,
    image: 'images/infinix-note11i.jpeg',
    Description:
      'Screen Type: IPS LCD \n Display: 6.95 inches / 1080 x 2460 pixels \n Sim: Dual SIM (Nano-SIM, dual stand-by) \n Network: 4G LTE \n Operating System: Android 11, XOS 7.6 \n Processor/Chipset:  Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) / MediaTek Helio G85 (12nm) \n Internal memory: 64GB \n RAM: 4GB \n Front camera: 16 MP \n Main camera: 48 MP, f/1.8, PDAF + 2 MP, f/2.4, (macro) + 2 MP, f/2.4, (depth) \n Battery capacity: Li-Po 5000 mAh, non-removable / Fast Charging 18W \n Warranty: 12 Months \n Others: Fingerprint (side-mounted), accelerometer, gyro, proximity, compass',
    isFeatured: false,
  },
  {
    id: 22,
    countInStock: 14,
    productName: 'Infinix Note 10 (X693), 6.95" FHD, 128GB/4GB',
    price: 112500,
    image: 'images/infinix-note10.jpeg',
    Description:
      'Key Features:\n\n​6.95 Inch FHD+ Super Fluid Display4GB RAM, 128GB ROM5000mAh Battery with 18W X-ChargeMediaTek Helio G85 Game Processor48MP Ultra Night Camera, 16MP AI Selfie CameraDual Nano SIM + Micro SDCinematic Dual Speakers with DTSAndroid 11',
    isFeatured: false,
  },
];

export default products;
