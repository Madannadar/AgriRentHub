import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          heroSection: {
            title: "Maximize Your Farm's Potential with Easy FieldRentals",
            subtitle: "Discover, book, and manage top-quality equipment and land with just a few clicks.",
            getStarted: "Get Started"
          },
          // footer: {
          //   title: "FieldRentals",
          //   terms: "Terms",
          //   privacyPolicy: "Privacy Policy",
          //   legalNotice: "Legal Notice",
          //   accessibility: "Accessibility",
          // },
          profile: {
            title: "Profile",
            personalInfo: "Personal Information",
            rentalHistory: "Rental History",
            equipmentInventory: "Equipment Inventory",
            supportHelp: "Support and Help",
            accountSettings: "Account Settings"
          },
          aboutUs: {
            title: "About Us",
            paragraph1: "Welcome to FieldRentals, your go-to destination for reliable and high-quality farm equipment rentals.",
            paragraph2: "Our mission is simple: to offer top-notch equipment at competitive prices, backed by exceptional customer service."
          },
          ourServices: {
            title: "Our Services.",
            equipmentRental: {
              title: "Equipment Rental",
              content: "Access a diverse fleet of high-quality farm machinery for rent, including tractors, combines, plows, and more. Our equipment is well-maintained and ready to handle your agricultural needs."
            },
            customRentalSolutions: {
              title: "Custom Rental Solutions",
              content: "Tailored rental solutions to meet your specific needs. Whether you require specialized equipment or a unique rental arrangement, we’re here to accommodate."
            },
            seasonalPromotions: {
              title: "Seasonal Promotions",
              content: "Special offers and discounts on equipment rentals during peak seasons or for long-term rentals."
            },
            rentalHistory: {
              title: "Rental History",
              content: "Rental history is a record of a tenant's previous rental experiences, including payment habits and references. It's used by landlords to assess the reliability of potential tenants."
            },
            weatherForecast: {
              title: "Weather Forecast",
              content: "Weather forecasts predict future atmospheric conditions like temperature, precipitation, and wind. They help people plan activities and prepare for changing weather."
            },
            cropManagement: {
              title: "Crop Management",
              content: "Crop management involves optimizing planting, irrigation, and pest control to enhance crop growth and yield. It ensures sustainable farming by efficiently using resources and minimizing losses."
            }
          },
          searchBox: {
            equipment: "Equipment",
            chooseEquipment: "Choose an equipment",
            location: "Location",
            chooseLocation: "Choose a location",
            pickUpDate: "Pick Up Date",
            chooseDate: "Choose a date",
            dropOffDate: "Drop Off Date",
            search: "Search",
          },
          nav: {
            home: "Home",
            aboutUs: "About Us",
            services: "Services",
            ourServices: "Our Services",
            logIn: "Log In",
          },
          // footer: {
          //   title: "FieldRentals",
          // },
          auth: {
            title: "FieldRentals",
            email: "Email",
            password: "Password",
            confirmPassword: "Confirm Password",
            signUp: "Sign Up",
            signIn: "Sign In",
            alreadyMember: "Already a member?",
            loginHere: "Log in here.",
            dontHaveAccount: "Don’t have an account?",
            signUpHere: "Sign up here",
            welcome: "Welcome!",
            welcomeBack: "Welcome Back!",
            signUpDescription:
              "Join FieldRentals today and gain access to top-quality farming equipment and tools for all your agricultural needs. Simply complete the form below to start renting and optimizing your farm operations!",
            signInDescription:
              "Log in to your FieldRentals account to access your dashboard, manage your rentals, and explore the latest farming equipment and tools.",
            errors: {
              fillAllFields: "Please fill all the fields",
              invalidEmail: "Email address is invalid",
              passwordTooShort: "Password must be at least 8 characters long",
              passwordMismatch: "Passwords do not match",
            }
          },
          // footer: {
          //   title: "FieldRentals",
          // },
          addEquipment: {
            title: "Add Equipment",
            equipmentName: "Equipment Name",
            equipmentDescription: "Equipment Description",
            location: "Location",
            price: "Price",
            addButton: "Add",
            addingButton: "Adding...",
            allFieldsRequired: "All fields are required!",
            failedToAdd: "Failed to add equipment. Please try again.",
            close: "Close",
            imagePlaceholder: "Upload Equipment Image",
            imagePreview: "Equipment Preview",
          },
          cropManagement: {
            title: "Crop Management",
            selectCrop: "Select Crop",
            wheat: "Wheat",
            rice: "Rice",
            maize: "Maize",
            plantingWindow: "Planting Window",
            growthStages: "Growth Stages",
            harvestTime: "Harvest Time",
            growthTimeline: "Growth Timeline",
            planting: "Planting",
            harvest: "Harvest",
          },
          cropData: {
            wheat: {
              plantingWindow: "October - November",
              growthStages: [
                { stage: "Germination", duration: "1-2 weeks" },
                { stage: "Tillering", duration: "3-4 weeks" },
                { stage: "Boot Stage", duration: "2 weeks" },
                { stage: "Heading", duration: "3 weeks" },
              ],
              harvestTime: "March - April",
            },
            rice: {
              plantingWindow: "June - July",
              growthStages: [
                { stage: "Germination", duration: "1 week" },
                { stage: "Tillering", duration: "3-4 weeks" },
                { stage: "Boot Stage", duration: "2 weeks" },
                { stage: "Heading", duration: "4 weeks" },
              ],
              harvestTime: "September - October",
            },
            maize: {
              plantingWindow: "March - April",
              growthStages: [
                { stage: "Germination", duration: "1 week" },
                { stage: "Vegetative", duration: "4-5 weeks" },
                { stage: "Silking", duration: "2 weeks" },
                { stage: "Maturity", duration: "3 weeks" },
              ],
              harvestTime: "July - August",
            },
        },
        ourCollection: {
            title: "Our Collection",
            bookNow: "Book Now",
            location: "Location",
            price: "Price",
            perDay: "per day",
            previous: "Previous",
            next: "Next",
            page: "Page",
            of: "of",
            error: "Error",
            retry: "Retry",
          },
          ourCollectionModal: {
            close: "Close",
            location: "Location",
            price: "Price",
            perDay: "per day",
            pickUpDate: "Pick-up Date",
            numberOfDays: "Number of Days",
            dropOffDate: "Drop-off Date",
            total: "Total",
            proceedToCheckout: "Proceed to Checkout",
            processing: "Processing...",
            error: {
              selectPickupDate: "Please select a pickup date.",
              invalidNumberOfDays: "Please set number of days greater than 0.",
              cannotBookOwnEquipment: "You cannot book your own equipment.",
              bookingError: "There was an error processing your booking.",
            },
          },
          soilAnalysis: {
            title: "Soil Analysis and Fertilizer Suggestion",
            soilMoisture: "Soil Moisture (%)",
            moisturePlaceholder: "40%-70% is recommended",
            soilPhLevel: "Soil pH Level",
            phPlaceholder: "e.g., 5.5-7.5 is recommended",
            nutrientLevel: "Nutrient Level (N-P-K)",
            nutrientPlaceholder: "e.g., 10-5-5",
            pestsDetected: "Pests Detected",
            no: "No",
            yes: "Yes",
            whichPest: "Which Pest?",
            aphids: "Aphids",
            mites: "Spider Mites",
            weevils: "Weevils",
            cutworms: "Cutworms",
            other: "Other",
            getAnalysis: "Get Analysis",
            suggestionTitle: "Analysis and Suggestions",
            suggestions: {
              moistureGood: "Soil moisture is good for agriculture.",
              moistureNotIdeal: "Soil moisture is not ideal for agriculture.",
              moistureLow: "Consider using mulch to retain soil moisture.",
              moistureHigh: "Improve drainage or reduce irrigation to lower soil moisture.",
              phGood: "Soil pH is good for agriculture.",
              phNotIdeal: "Soil pH is not ideal for agriculture.",
              phLow: "Apply lime to raise the pH to a more neutral level.",
              phHigh: "Apply sulfur or organic matter to lower the pH to a more acidic level.",
              nutrientsGood: "Nutrient levels are good for agriculture.",
              nutrientsNotIdeal: "Nutrient levels are not ideal. Consider using a balanced fertilizer like NPK 10-10-10.",
              nitrogenLow: "Consider a fertilizer high in nitrogen, such as Urea (46-0-0) or Ammonium Nitrate (34-0-0).",
              phosphorusLow: "Consider adding a phosphorus-rich fertilizer, like Superphosphate (0-20-0) or Bone Meal.",
              potassiumLow: "Consider adding potassium-rich fertilizers like Potash (0-0-60) or Sulfate of Potash (0-0-50).",
              pestsDetected: "Pests detected.",
              noPestsDetected: "No pests detected.",
              aphidsControl: "Use an insecticidal soap or neem oil to control them.",
              mitesControl: "Use horticultural oil or a miticide.",
              weevilsControl: "Apply beneficial nematodes or use a granular insecticide.",
              cutwormsControl: "Use diatomaceous earth or Bacillus thuringiensis (Bt) to control them.",
              otherPestControl: "Consider using an appropriate pesticide or IPM practices based on the type of pest detected.",
            },
        },
        weather: {
            title: "Weather Forecast",
            enterCity: "Enter city name",
            getWeather: "Get Weather",
            cityNotFound: "City not found",
            pleaseEnterCity: "Please enter a city to see the weather.",
            loadingUserData: "Loading user data...",
            windSpeed: "Wind Speed",
            humidity: "Humidity",
            condition: "Condition",
            temperature: "Temperature",
            forecastTitle: "4 Day Forecast",
            days: {
              monday: "Monday",
              tuesday: "Tuesday",
              wednesday: "Wednesday",
              thursday: "Thursday",
              friday: "Friday",
              saturday: "Saturday",
              sunday: "Sunday",
            },
            units: {
              windSpeedUnit: "m/s",
              humidityUnit: "%",
              temperatureUnit: "°C",
            },
        },
        homePageAfterLogin: {
            readyToEarn: "Ready to earn extra income? Click here to add your equipment for rent!",
            addEquipment: "Add Equipment",
            deleteEquipment: "Delete Equipment",
            enterEquipmentName: "Enter Equipment Name",
            deleteEquipmentButton: "Delete Equipment",
            deleteSuccess: "Equipment deleted successfully!",
            deleteError: "Error deleting equipment. Check the console for details.",
            invalidEquipmentName: "Please enter a valid Equipment Name.",
          },
          accountSettings: {
            signOutTitle: "Sign Out :",
            signOutButton: "Sign Out",
            signingOut: "Signing out...",
          },
          equipmentInventory: {
            noEquipment: "No equipment owned by this user.",
            equipmentName: "Equipment Name",
            description: "Description",
            location: "Location",
            price: "Price",
            status: "Status",
            dropOffDate: "Drop-off Date",
            relistEquipment: "Relist Equipment",
            relisting: "Relisting...",
          },
          personalInformation: {
            name: "Name",
            firstName: "First Name",
            lastName: "Last Name",
            contact: "Contact",
            phoneNumber: "Phone Number",
            email: "Email",
            address: "Address",
            state: "State",
            city: "City",
            save: "Save",
            saving: "Saving...",
          },
          rentalHistory: {
            noRentalHistory: "No rental history found for this user.",
            equipmentName: "Equipment Name",
            pickUpDate: "Pick Up Date",
            dropOffDate: "Drop Off Date",
          },
          supportAndHelp: {
            supportNumber: "Support No. :",
            supportEmail: "Support Email Id :",
          },
          footer: {
            fieldRentals: "FieldRentals",
            terms: "Terms",
            privacyPolicy: "Privacy Policy",
            legalNotice: "Legal Notice",
            accessibility: "Accessibility",
          },
          nav: {
            home: "Home",
            aboutUs: "About Us",
            services: "Services",
            ourServices: "Our Services",
            logIn: "Log In",
          },
          footer: {
            title: "FieldRentals",
          },
          "ourCollection": {
            "title": "Our Collection",
            "error": "Error",
            "retry": "Retry",
            "location": "Location",
            "price": "Price",
            "perDay": "per day",
            "bookNow": "Book Now",
            "previous": "Previous",
            "page": "Page",
            "of": "of",
            "next": "Next",
            "searchPlaceholder": "Search equipment...",
            "searchAll": "All",
            "searchByName": "By Name",
            "searchByLocation": "By Location",
            "noResults": "No equipment found matching your search"
          }
        }
      },
      hi: {
        translation: {
          heroSection: {
            title: "आसान फील्ड रेंटल्स के साथ अपने खेत की क्षमता को अधिकतम करें",
            subtitle: "केवल कुछ क्लिक में उच्च गुणवत्ता वाले उपकरण और भूमि को खोजें, बुक करें और प्रबंधित करें।",
            getStarted: "शुरू करें"
          },
          
          profile: {
            title: "प्रोफ़ाइल",
            personalInfo: "व्यक्तिगत जानकारी",
            rentalHistory: "किराये का इतिहास",
            equipmentInventory: "उपकरण सूची",
            supportHelp: "समर्थन और सहायता",
            accountSettings: "खाता सेटिंग्स"
          },
          aboutUs: {
            title: "हमारे बारे में",
            paragraph1: "फील्ड रेंटल्स में आपका स्वागत है, जो विश्वसनीय और उच्च-गुणवत्ता वाले कृषि उपकरण किराए पर लेने का प्रमुख स्थान है।",
            paragraph2: "हमारा लक्ष्य सरल है: प्रतिस्पर्धी कीमतों पर उच्च गुणवत्ता वाले उपकरण प्रदान करना, उत्कृष्ट ग्राहक सेवा के साथ।"
          },
          ourServices: {
            title: "हमारी सेवाएं।",
            equipmentRental: {
              title: "उपकरण किराये पर लेना",
              content: "ट्रैक्टर, कंबाइन, हल और अन्य सहित उच्च गुणवत्ता वाली कृषि मशीनरी के व्यापक बेड़े तक पहुंचें। हमारा उपकरण अच्छी तरह से बनाए रखा गया है और आपकी कृषि आवश्यकताओं को पूरा करने के लिए तैयार है।"
            },
            customRentalSolutions: {
              title: "अनुकूलित किराये समाधान",
              content: "आपकी विशिष्ट आवश्यकताओं को पूरा करने के लिए अनुकूलित किराये समाधान। चाहे आपको विशेष उपकरण की आवश्यकता हो या एक अद्वितीय किराये की व्यवस्था, हम यहां सहायता करने के लिए हैं।"
            },
            seasonalPromotions: {
              title: "मौसमी प्रचार",
              content: "पीक सीजन के दौरान या दीर्घकालिक किराये के लिए उपकरण किराये पर विशेष ऑफ़र और छूट।"
            },
            rentalHistory: {
              title: "किराये का इतिहास",
              content: "किराये का इतिहास किरायेदार के पिछले किराये के अनुभवों का रिकॉर्ड है, जिसमें भुगतान की आदतें और संदर्भ शामिल हैं। यह मकान मालिकों द्वारा संभावित किरायेदारों की विश्वसनीयता का आकलन करने के लिए उपयोग किया जाता है।"
            },
            weatherForecast: {
              title: "मौसम पूर्वानुमान",
              content: "मौसम पूर्वानुमान भविष्य के वायुमंडलीय परिस्थितियों की भविष्यवाणी करता है जैसे कि तापमान, वर्षा और हवा। वे लोगों को गतिविधियों की योजना बनाने और बदलते मौसम के लिए तैयार रहने में मदद करते हैं।"
            },
            cropManagement: {
              title: "फसल प्रबंधन",
              content: "फसल प्रबंधन में रोपण, सिंचाई और कीट नियंत्रण का अनुकूलन शामिल है ताकि फसल वृद्धि और पैदावार को बढ़ाया जा सके। यह संसाधनों के कुशल उपयोग और हानियों को कम करके स्थायी खेती सुनिश्चित करता है।"
            }
          },
          searchBox: {
            equipment: "उपकरण",
            chooseEquipment: "एक उपकरण चुनें",
            location: "स्थान",
            chooseLocation: "एक स्थान चुनें",
            pickUpDate: "पिकअप की तारीख",
            chooseDate: "एक तारीख चुनें",
            dropOffDate: "ड्रॉप ऑफ तारीख",
            search: "खोजें",
          },
          nav: {
            home: "होम",
            aboutUs: "हमारे बारे में",
            services: "सेवा",
            ourServices: "हमारी सेवाएँ",
            logIn: "लॉग इन",
          },
          // footer: {
          //   title: "फील्ड रेंटल्स",
          // },
          auth: {
            title: "फील्ड रेंटल्स",
            email: "ईमेल",
            password: "पासवर्ड",
            confirmPassword: "पासवर्ड की पुष्टि करें",
            signUp: "साइन अप",
            signIn: "साइन इन",
            alreadyMember: "पहले से ही सदस्य हैं?",
            loginHere: "यहाँ लॉगिन करें।",
            dontHaveAccount: "खाता नहीं है?",
            signUpHere: "यहाँ साइन अप करें",
            welcome: "स्वागत है!",
            welcomeBack: "वापसी पर स्वागत है!",
            signUpDescription:
              "आज ही फील्ड रेंटल्स से जुड़ें और उच्च गुणवत्ता वाले कृषि उपकरणों और टूल्स तक पहुंच प्राप्त करें। बस नीचे दिए गए फॉर्म को भरें और अपनी कृषि संचालन को अनुकूलित करना शुरू करें!",
            signInDescription:
              "अपने फील्ड रेंटल्स खाते में लॉग इन करें, अपना डैशबोर्ड एक्सेस करें, अपने किराये का प्रबंधन करें और नवीनतम कृषि उपकरणों और टूल्स का अन्वेषण करें।",
            errors: {
              fillAllFields: "कृपया सभी फ़ील्ड भरें",
              invalidEmail: "ईमेल पता अमान्य है",
              passwordTooShort: "पासवर्ड कम से कम 8 अक्षरों का होना चाहिए",
              passwordMismatch: "पासवर्ड मेल नहीं खाते",
            }
          },
          // footer: {
          //   title: "फील्ड रेंटल्स",
          // },
          addEquipment: {
            title: "उपकरण जोड़ें",
            equipmentName: "उपकरण का नाम",
            equipmentDescription: "उपकरण का विवरण",
            location: "स्थान",
            price: "मूल्य",
            addButton: "जोड़ें",
            addingButton: "जोड़ रहा है...",
            allFieldsRequired: "सभी फ़ील्ड आवश्यक हैं!",
            failedToAdd: "उपकरण जोड़ने में विफल। कृपया पुनः प्रयास करें।",
            close: "बंद करें",
            imagePlaceholder: "उपकरण की छवि अपलोड करें",
            imagePreview: "उपकरण की पूर्वावलोकन छवि",
          },
          cropManagement: {
            title: "फसल प्रबंधन",
            selectCrop: "फसल चुनें",
            wheat: "गेहूँ",
            rice: "चावल",
            maize: "मक्का",
            plantingWindow: "रोपण की अवधि",
            growthStages: "विकास के चरण",
            harvestTime: "कटाई का समय",
            growthTimeline: "विकास समयरेखा",
            planting: "रोपण",
            harvest: "कटाई",
          },
          cropData: {
            wheat: {
              plantingWindow: "अक्टूबर - नवंबर",
              growthStages: [
                { stage: "अंकुरण", duration: "1-2 सप्ताह" },
                { stage: "कल्ले फूटना", duration: "3-4 सप्ताह" },
                { stage: "बूट स्टेज", duration: "2 सप्ताह" },
                { stage: "शीर्षकरण", duration: "3 सप्ताह" },
              ],
              harvestTime: "मार्च - अप्रैल",
            },
            rice: {
              plantingWindow: "जून - जुलाई",
              growthStages: [
                { stage: "अंकुरण", duration: "1 सप्ताह" },
                { stage: "कल्ले फूटना", duration: "3-4 सप्ताह" },
                { stage: "बूट स्टेज", duration: "2 सप्ताह" },
                { stage: "शीर्षकरण", duration: "4 सप्ताह" },
              ],
              harvestTime: "सितंबर - अक्टूबर",
            },
            maize: {
              plantingWindow: "मार्च - अप्रैल",
              growthStages: [
                { stage: "अंकुरण", duration: "1 सप्ताह" },
                { stage: "वानस्पतिक", duration: "4-5 सप्ताह" },
                { stage: "सिल्किंग", duration: "2 सप्ताह" },
                { stage: "परिपक्वता", duration: "3 सप्ताह" },
              ],
              harvestTime: "जुलाई - अगस्त",
            },
          },
          ourCollection: {
            title: "हमारा संग्रह",
            bookNow: "अभी बुक करें",
            location: "स्थान",
            price: "मूल्य",
            perDay: "प्रति दिन",
            previous: "पिछला",
            next: "अगला",
            page: "पृष्ठ",
            of: "का",
            error: "त्रुटि",
            retry: "पुनः प्रयास करें",
          },
          ourCollectionModal: {
            close: "बंद करें",
            location: "स्थान",
            price: "मूल्य",
            perDay: "प्रति दिन",
            pickUpDate: "उठाने की तारीख",
            numberOfDays: "दिनों की संख्या",
            dropOffDate: "वापसी की तारीख",
            total: "कुल",
            proceedToCheckout: "चेकआउट करें",
            processing: "प्रक्रिया कर रहा है...",
            error: {
              selectPickupDate: "कृपया उठाने की तारीख चुनें।",
              invalidNumberOfDays: "कृपया दिनों की संख्या 0 से अधिक सेट करें।",
              cannotBookOwnEquipment: "आप अपने स्वयं के उपकरण बुक नहीं कर सकते।",
              bookingError: "आपकी बुकिंग प्रक्रिया में त्रुटि हुई।",
            },
          },
          soilAnalysis: {
            title: "मृदा विश्लेषण और उर्वरक सुझाव",
            soilMoisture: "मृदा नमी (%)",
            moisturePlaceholder: "40%-70% अनुशंसित है",
            soilPhLevel: "मृदा pH स्तर",
            phPlaceholder: "उदाहरण: 5.5-7.5 अनुशंसित है",
            nutrientLevel: "पोषक तत्व स्तर (N-P-K)",
            nutrientPlaceholder: "उदाहरण: 10-5-5",
            pestsDetected: "कीट पाए गए",
            no: "नहीं",
            yes: "हाँ",
            whichPest: "कौन सा कीट?",
            aphids: "एफिड्स",
            mites: "स्पाइडर माइट्स",
            weevils: "वीविल्स",
            cutworms: "कटवर्म्स",
            other: "अन्य",
            getAnalysis: "विश्लेषण प्राप्त करें",
            suggestionTitle: "विश्लेषण और सुझाव",
            suggestions: {
              moistureGood: "मृदा नमी कृषि के लिए अच्छी है।",
              moistureNotIdeal: "मृदा नमी कृषि के लिए आदर्श नहीं है।",
              moistureLow: "मृदा नमी बनाए रखने के लिए मल्च का उपयोग करें।",
              moistureHigh: "मृदा नमी कम करने के लिए जल निकासी में सुधार करें या सिंचाई कम करें।",
              phGood: "मृदा pH कृषि के लिए अच्छा है।",
              phNotIdeal: "मृदा pH कृषि के लिए आदर्श नहीं है।",
              phLow: "pH को अधिक तटस्थ स्तर तक बढ़ाने के लिए चूने का उपयोग करें।",
              phHigh: "pH को अधिक अम्लीय स्तर तक कम करने के लिए सल्फर या जैविक पदार्थ का उपयोग करें।",
              nutrientsGood: "पोषक तत्व स्तर कृषि के लिए अच्छे हैं।",
              nutrientsNotIdeal: "पोषक तत्व स्तर आदर्श नहीं हैं। NPK 10-10-10 जैसे संतुलित उर्वरक का उपयोग करें।",
              nitrogenLow: "नाइट्रोजन युक्त उर्वरक जैसे यूरिया (46-0-0) या अमोनियम नाइट्रेट (34-0-0) का उपयोग करें।",
              phosphorusLow: "फॉस्फोरस युक्त उर्वरक जैसे सुपरफॉस्फेट (0-20-0) या बोन मील का उपयोग करें।",
              potassiumLow: "पोटेशियम युक्त उर्वरक जैसे पोटाश (0-0-60) या पोटाश सल्फेट (0-0-50) का उपयोग करें।",
              pestsDetected: "कीट पाए गए।",
              noPestsDetected: "कोई कीट नहीं पाए गए।",
              aphidsControl: "उन्हें नियंत्रित करने के लिए कीटनाशक साबुन या नीम तेल का उपयोग करें।",
              mitesControl: "हॉर्टिकल्चरल तेल या माइटिसाइड का उपयोग करें।",
              weevilsControl: "लाभकारी नेमाटोड या दानेदार कीटनाशक का उपयोग करें।",
              cutwormsControl: "डायटोमेशियस अर्थ या बैसिलस थुरिंजिएन्सिस (Bt) का उपयोग करें।",
              otherPestControl: "पाए गए कीट के प्रकार के आधार पर उचित कीटनाशक या IPM प्रथाओं का उपयोग करें।",
            },
          },
          weather: {
            title: "मौसम पूर्वानुमान",
            enterCity: "शहर का नाम दर्ज करें",
            getWeather: "मौसम प्राप्त करें",
            cityNotFound: "शहर नहीं मिला",
            pleaseEnterCity: "मौसम देखने के लिए कृपया एक शहर दर्ज करें।",
            loadingUserData: "उपयोगकर्ता डेटा लोड हो रहा है...",
            windSpeed: "हवा की गति",
            humidity: "नमी",
            condition: "स्थिति",
            temperature: "तापमान",
            forecastTitle: "4 दिन का पूर्वानुमान",
            days: {
              monday: "सोमवार",
              tuesday: "मंगलवार",
              wednesday: "बुधवार",
              thursday: "गुरुवार",
              friday: "शुक्रवार",
              saturday: "शनिवार",
              sunday: "रविवार",
            },
            units: {
              windSpeedUnit: "मी/से",
              humidityUnit: "%",
              temperatureUnit: "°C",
            },
          },
          homePageAfterLogin: {
            readyToEarn: "अतिरिक्त आय अर्जित करने के लिए तैयार हैं? यहां क्लिक करके अपने उपकरण को किराए पर जोड़ें!",
            addEquipment: "उपकरण जोड़ें",
            deleteEquipment: "उपकरण हटाएं",
            enterEquipmentName: "उपकरण का नाम दर्ज करें",
            deleteEquipmentButton: "उपकरण हटाएं",
            deleteSuccess: "उपकरण सफलतापूर्वक हटाया गया!",
            deleteError: "उपकरण हटाने में त्रुटि। विवरण के लिए कंसोल जांचें।",
            invalidEquipmentName: "कृपया एक वैध उपकरण का नाम दर्ज करें।",
          },
          accountSettings: {
            signOutTitle: "साइन आउट करें :",
            signOutButton: "साइन आउट",
            signingOut: "साइन आउट हो रहा है...",
          },
          equipmentInventory: {
            noEquipment: "इस उपयोगकर्ता के पास कोई उपकरण नहीं है।",
            equipmentName: "उपकरण का नाम",
            description: "विवरण",
            location: "स्थान",
            price: "मूल्य",
            status: "स्थिति",
            dropOffDate: "वापसी की तारीख",
            relistEquipment: "उपकरण पुनः सूचीबद्ध करें",
            relisting: "पुनः सूचीबद्ध हो रहा है...",
          },
          personalInformation: {
            name: "नाम",
            firstName: "पहला नाम",
            lastName: "अंतिम नाम",
            contact: "संपर्क",
            phoneNumber: "फोन नंबर",
            email: "ईमेल",
            address: "पता",
            state: "राज्य",
            city: "शहर",
            save: "सहेजें",
            saving: "सहेजा जा रहा है...",
          },
          rentalHistory: {
            noRentalHistory: "इस उपयोगकर्ता के लिए कोई किराया इतिहास नहीं मिला।",
            equipmentName: "उपकरण का नाम",
            pickUpDate: "उठाने की तारीख",
            dropOffDate: "वापसी की तारीख",
          },
          supportAndHelp: {
            supportNumber: "समर्थन नंबर :",
            supportEmail: "समर्थन ईमेल आईडी :",
          },
          footer: {
            fieldRentals: "फील्ड रेंटल्स",
            terms: "नियम और शर्तें",
            privacyPolicy: "गोपनीयता नीति",
            legalNotice: "कानूनी सूचना",
            accessibility: "पहुंच",
          },
          nav: {
            home: "होम",
            aboutUs: "हमारे बारे में",
            services: "सेवा",
            ourServices: "हमारी सेवाएँ",
            logIn: "लॉग इन",
          },
          footer: {
            title: "फील्ड रेंटल्स",
          },
          "ourCollection": {
          // existing keys...
          "searchPlaceholder": "उपकरण खोजें...",
          "searchAll": "सभी",
          "searchByName": "नाम से",
          "searchByLocation": "स्थान से",
          "noResults": "आपकी खोज से मेल खाने वाला कोई उपकरण नहीं मिला",
          "title": "हमारा संग्रह",
          "error": "त्रुटि",
          "retry": "पुन: प्रयास करें",
          "location": "स्थान",
          "price": "कीमत",
          "perDay": "प्रति दिन",
          "bookNow": "अभी बुक करें",
          "previous": "पिछला",
          "page": "पृष्ठ",
          "of": "का",
          "next": "अगला"
        },
        "ourCollection": {
    "title": "हमारा संग्रह",
    "error": "त्रुटि",
    "retry": "पुन: प्रयास करें",
    "location": "स्थान",
    "price": "कीमत",
    "perDay": "प्रति दिन",
    "bookNow": "अभी बुक करें",
    "previous": "पिछला",
    "page": "पृष्ठ",
    "of": "का",
    "next": "अगला",
    "searchPlaceholder": "उपकरण खोजें...",
    "searchAll": "सभी",
    "searchByName": "नाम से",
    "searchByLocation": "स्थान से",
    "noResults": "आपकी खोज से मेल खाने वाला कोई उपकरण नहीं मिला"
  }
        }
      }
    }
  });

export default i18n;
