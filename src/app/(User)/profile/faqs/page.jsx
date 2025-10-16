"use client";

import React from "react";
import BackArrow from "@/Components/BackArrow/BackArrow";

const FAQs = () => {
  const questions = [
    {
      q: "ما هو موقع Marakiib؟",
      a: "Marakiib.com هو منصة وسيطة لتأجير السيارات في الأردن، تربط بين أصحاب السيارات (المؤجرين) والعملاء (المستأجرين). نحن نساعد الطرفين على التواصل بسهولة وأمان مقابل عمولة رمزية على كل عملية تأجير.",
    },
    {
      q: "منذ متى تعمل منصة Marakiib؟",
      a: "تأسست المنصة في عام 2018، ومنذ ذلك الحين نعمل على تحسين تجربة تأجير السيارات في السوق الأردني بخدمات موثوقة وسريعة.",
    },
    {
      q: "هل يمكنني عرض سيارتي للإيجار على الموقع؟",
      a: "نعم بالتأكيد، يمكنك التسجيل كمالك سيارة وإضافة تفاصيل سيارتك وصورها لتصبح متاحة للمستأجرين. المنصة تتيح لك التحكم الكامل في السعر والتوافر.",
    },
    {
      q: "كيف يتم الدفع عبر الموقع؟",
      a: "نوفر خيارات دفع إلكترونية آمنة، ويمكنك الدفع عبر البطاقات البنكية أو المحافظ الرقمية المعتمدة. يتم خصم العمولة تلقائيًا من المبلغ المحصل.",
    },
    {
      q: "هل توفر Marakiib تأمينًا على السيارات؟",
      a: "التأمين يكون حسب نوع السيارة والاتفاق بين المالك والمستأجر، لكننا نوفر إرشادات لضمان التعامل مع شركات التأمين الموثوقة في الأردن.",
    },
    {
      q: "هل يمكن استرجاع المبلغ في حال إلغاء الحجز؟",
      a: "نعم، لدينا سياسة استرجاع مرنة تعتمد على وقت الإلغاء وشروط كل مالك سيارة. التفاصيل تظهر أثناء عملية الحجز.",
    },
    {
      q: "كيف يمكنني التواصل مع الدعم الفني؟",
      a: "يمكنك التواصل معنا عبر صفحة 'Contact Us' أو مراسلتنا على البريد الإلكتروني support@marakiib.com. فريقنا متاح لخدمتك من الأحد إلى الخميس من الساعة 9 صباحًا حتى 6 مساءً.",
    },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 🔹 السهم والعنوان */}
        <div className="flex items-center justify-center relative mb-8">
          <div className="absolute left-0">
            <BackArrow className="text-3xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 text-center">FAQs</h1>
        </div>

        {/* 🔸 الأسئلة */}
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-red-600 mb-2">
                {index + 1}. {item.q}
              </h2>
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 text-center mt-10">
          لم تجد الإجابة التي تبحث عنها؟{" "}
          <a href="/contact" className="text-red-600 underline">
            تواصل معنا
          </a>{" "}
          وسيسعد فريقنا بمساعدتك.
        </p>
      </div>
    </div>
  );
};

export default FAQs;
