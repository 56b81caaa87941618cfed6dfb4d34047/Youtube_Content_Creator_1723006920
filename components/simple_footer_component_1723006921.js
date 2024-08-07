/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723006921", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-400 to-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 rounded-lg shadow-lg">
                <hr id="footer-divider" class="my-6 border-pink-300 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            VidStream - Your YouTube Alternative
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white">
                        Empowering creators to share their videos without restrictions. Upload, stream, and connect with your audience on VidStream.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
