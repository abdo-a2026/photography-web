// ============================================
// Products Database - Local Images Version
// بيانات المنتجات - نسخة الصور المحلية
// ============================================

// استخدم هذا الملف إذا كنت تريد استخدام صورك المحلية
// ضع صورك في مجلد public/gallery/

const products = [
    {
        id: 1,
        category: 'weddings',
        image: 'public/gallery/wedding-1.jpg',
        description: 'لحظات من الفرح والسعادة الأبدية'
    },
    {
        id: 2,
        category: 'weddings',
        image: 'public/gallery/wedding-2.jpg',
        description: 'عروس في أجمل لحظاتها المميزة'
    },
    {
        id: 3,
        category: 'engagement',
        image: 'public/gallery/wedding-5.jpg',
        description: 'بداية قصة حب جميلة ورومانسية'
    },
    {
        id: 4,
        category: 'weddings',
        image: 'public/gallery/wedding-3.jpg',
        description: 'تفاصيل دقيقة لا تُنسى'
    },
    {
        id: 5,
        category: 'events',
        image: 'public/gallery/event-1.jpg',
        description: 'احتفالات مميزة وراقية'
    },
    {
        id: 6,
        category: 'graduation',
        image: 'public/gallery/graduation-1.jpg',
        description: 'لحظات النجاح والتخرج المبهجة'
    },
    {
        id: 7,
        category: 'weddings',
        image: 'public/gallery/wedding-4.jpg',
        description: 'حفل زفاف أنيق وساحر'
    },
    {
        id: 8,
        category: 'engagement',
        image: 'public/gallery/wedding-1.jpg',
        description: 'خطوبة رومانسية وعصرية'
    },
    {
        id: 9,
        category: 'special',
        image: 'public/gallery/special-1.jpg',
        description: 'مناسبات خاصة واحتفالات عائلية'
    },
    {
        id: 10,
        category: 'weddings',
        image: 'public/gallery/wedding-5.jpg',
        description: 'أجواء ساحرة وأضواء مبهرة'
    },
    {
        id: 11,
        category: 'events',
        image: 'public/gallery/event-2.jpg',
        description: 'حفلات راقية ومناسبات كبيرة'
    },
    {
        id: 12,
        category: 'graduation',
        image: 'public/gallery/graduation-2.jpg',
        description: 'يوم التخرج المميز والمبهج'
    },
    {
        id: 13,
        category: 'special',
        image: 'public/gallery/special-2.jpg',
        description: 'لحظات عائلية دافئة وحميمية'
    },
    {
        id: 14,
        category: 'engagement',
        image: 'public/gallery/wedding-2.jpg',
        description: 'عهد الحب والوفاء الأبدي'
    },
    {
        id: 15,
        category: 'weddings',
        image: 'public/gallery/wedding-6.jpg',
        description: 'تفاصيل استثنائية ولحظات خالدة'
    }
];

// ============================================
// ملاحظات مهمة:
// ============================================

/*
1. تأكد من إنشاء مجلد 'public' في نفس مستوى ملف index.html
2. أنشئ مجلد 'gallery' داخل مجلد 'public'
3. ضع صورك بالأسماء التالية:
   
   الأعراس (6 صور):
   - wedding-1.jpg
   - wedding-2.jpg
   - wedding-3.jpg
   - wedding-4.jpg
   - wedding-5.jpg
   - wedding-6.jpg
   
   الخطوبة (3 صور):
   - engagement-1.jpg
   - engagement-2.jpg
   - engagement-3.jpg
   
   التخرج (2 صور):
   - graduation-1.jpg
   - graduation-2.jpg
   
   المناسبات (2 صور):
   - event-1.jpg
   - event-2.jpg
   
   الخاصة (2 صور):
   - special-1.jpg
   - special-2.jpg

4. يمكنك تغيير امتداد الصور (.jpg, .png, .webp) حسب صورك
5. تأكد من أن أسماء الملفات تطابق المسارات في الكود
6. استخدم أحرف إنجليزية صغيرة وبدون مسافات في أسماء الملفات
*/

// ============================================
// مثال على إضافة منتج جديد:
// ============================================

/*
{
    id: 16,                           // رقم فريد (يجب أن يكون أكبر من آخر id)
    category: 'weddings',             // الفئة: weddings, engagement, graduation, events, special
    image: 'public/gallery/wedding-7.jpg',  // مسار الصورة
    description: 'وصف مختصر للصورة'   // وصف يظهر عند التحويم
}
*/

// ============================================
// دالة مساعدة لطباعة قائمة المنتجات
// ============================================

function printProductsList() {
    console.log('=================================');
    console.log('قائمة المنتجات:');
    console.log('=================================');
    products.forEach(product => {
        console.log(`ID: ${product.id} | الفئة: ${product.category} | الوصف: ${product.description}`);
    });
    console.log('=================================');
    console.log(`إجمالي المنتجات: ${products.length}`);
}

// غير التعليق عن السطر التالي لعرض قائمة المنتجات في Console
// printProductsList();

// Export products for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}