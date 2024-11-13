function createSection(id, title, description, isOdd) {
            const bgColor = isOdd ? 'bg-[#FFF8E5] py-16' : 'bg-[#FFFBF5] py-16';
            return `<section id="${id}" class="section px-4 md:px-10 lg:px-10 ${bgColor}">
                <h2 class="text-4xl font-bold text-center text-[#304463] mb-6">${title}</h2>
                <p class="text-lg font-light text-center text-[#304463] mb-12">${description}</p>
                <div class="flex justify-center gap-8">
                    <div class="bg-[#FFFBF5] rounded-lg p-6 shadow-md w-80">
                        <div class="h-[200px] bg-gray-200 rounded-md flex items-center justify-center">
                            <span class="text-gray-500">Product Image Placeholder</span>
                        </div>
                        <h3 class="text-2xl font-semibold mt-4">Product 1</h3>
                        <p class="text-md text-[#304463]">Product description</p>
                        <button class="bg-[#ae8c7c] text-white py-2 px-4 mt-4 rounded-lg hover:bg-opacity-90 transition">Добави</button>
                    </div>
                    <div class="bg-[#FFFBF5] rounded-lg p-6 shadow-md w-80">
                        <div class="h-[200px] bg-gray-200 rounded-md flex items-center justify-center">
                            <span class="text-gray-500">Product Image Placeholder</span>
                        </div>
                        <h3 class="text-2xl font-semibold mt-4">Product 2</h3>
                        <p class="text-md text-[#304463]">Product description</p>
                        <button class="bg-[#ae8c7c] text-white py-2 px-4 mt-4 rounded-lg hover:bg-opacity-90 transition">Добави</button>
                    </div>
                </div>
            </section>`;
            }