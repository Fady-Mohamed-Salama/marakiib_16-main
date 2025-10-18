// "use client";

// import Loader from "@/Components/ui/Loader";
// import api from "@/lib/api";
// import { useEffect, useState } from "react";
// import GetCardsVendor from "./GetCardsVendor";

// const GitUploadCars = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // جلب البيانات من الـ API
//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await api.get(
//           "/my-cars",
//           {
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//               "Accept-Language": "en",
//             },
//           }
//         );
//         setCars(response.data.data);
//         console.log(response.data.data);
//       } catch (error) {
//         console.error("❌ Error fetching cars:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <div className="bg-white py-6">

// {cars.map((car) => (
//   <div key={car.id}>
//     <GetCardsVendor car={car} />
//   </div>
// ))}

//     </div>
//   );
// }

// export default GitUploadCars;

// "use client";

// import Loader from "@/Components/ui/Loader";
// import api from "@/lib/api";
// import { useEffect, useState } from "react";
// import GetCardsVendor from "./GetCardsVendor";
// import { useAuth } from "@/Contexts/AuthContext";

// const GitUploadCars = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { access_token } = useAuth();
//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await api.get("/my-cars", {
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             "Accept-Language": "en",
//             Authorization: `Bearer ${access_token}`,
//           },
//         });

//         console.log("🚗 Cars response:", response.data);
//         setCars(response.data?.data || response.data || []);
//       } catch (error) {
//         console.error("❌ Error fetching cars:", error);
//         setCars([]); // في حالة الخطأ
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <div className="bg-white py-6">
//         {cars.map((car) => (
//           <div key={car.id}>
//             <GetCardsVendor car={car} />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default GitUploadCars;

"use client";

import Loader from "@/Components/ui/Loader";
import api from "@/lib/api";
import { useEffect, useState } from "react";
import GetCardsVendor from "./GetCardsVendor";
import { useAuth } from "@/Contexts/AuthContext";

const GitUploadCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const { access_token } = useAuth();

  useEffect(() => {
    if (!access_token) return;
    const fetchCars = async () => {
      try {
        const response = await api.get("/my-cars", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
            Authorization: `Bearer ${access_token}`,
          },
        });

        const res = response.data;
        console.log("🚗 Cars response:", res);

        // 🔹 تحديد المكان الصحيح للـ Array حسب شكل الـ response
        if (Array.isArray(res?.data)) {
          setCars(res.data);
        } else if (Array.isArray(res?.data?.cars)) {
          setCars(res.data.cars);
        } else if (Array.isArray(res)) {
          setCars(res);
        } else {
          console.warn("⚠️ Unexpected response format:", res);
          setCars([]);
        }
      } catch (error) {
        console.error("❌ Error fetching cars:", error);
        setCars([]); // في حالة الخطأ
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [access_token]);

  if (loading) return <Loader />;

  return (
    <div
      className="
            grid gap-6 
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            px-4 sm:px-8 lg:px-16
          "
    >
      {cars.length > 0 ? (
        cars.map((car) => (
          <div key={car.id}>
            <GetCardsVendor car={car} />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 font-medium">
          🚘 No cars found.
        </p>
      )}
    </div>
  );
};

export default GitUploadCars;
