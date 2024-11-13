const sectionsData = [
            { id: 'section-hair', title: 'КОСА', description: 'Натурални продукти за силна, гъста и блестяща коса' },
            { id: 'section-skin', title: 'КОЖА', description: 'Натурални продукти за здрава, обновена и подхранена кожа' },
            { id: 'section-tanning', title: 'АВТОБРОНЗАНТИ', description: 'Зараждащ и естествен тен без вредни вещества' },
            { id: 'section-glow', title: 'БЛЯСЪК', description: 'Продукти за блясък и силност на кожата и косата' },
            { id: 'section-tan', title: 'ТЕН', description: 'За тезкото и естествено тениране' },
            { id: 'section-spf', title: 'SPF', description: 'Защита от слънчевите лъчи за здрава кожа' }
        ];

        sectionsData.forEach((section, index) => {
            const isOdd = index % 2 === 0;
            document.write(createSection(section.id, section.title, section.description, isOdd));
        });