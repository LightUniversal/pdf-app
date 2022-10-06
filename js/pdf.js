function pdfState() {
    this.activatepdfstates = document.querySelectorAll('.materials a.read');
    this.pdfbox = document.querySelector('.container');
    this.html;
    this.url = null;
}

pdfState.prototype = {
    resizePage : function() {
        const can = document.querySelector('canvas');
        const context = can.getContext("2d");


    },
    openreaderPage: function () {
        this.activatepdfstates.forEach((ele, i) => {
            ele.addEventListener('click', (e) => {
                e.preventDefault();
                this.url = ele.dataset.id;
                console.log(this.url);
                page.change(new pdfreadState);
                this.readPage();
            }, 0);
        })
    },
    readPage: function () {
        if (this.url !== null) {
            const url = this.url;

            let pdfDoc = null,
                pageNum = 1,
                pageIsRendering = false,
                pageNumIsPending = null;

            const scale = 1.5,
                canvas = document.querySelector('#pdf-render'),
                ctx = canvas.getContext("2d");
            // Render the page
            const renderPage = num => {
                pageIsRendering = true;

                // Get page
                pdfDoc.getPage(num).then(page => {
                    // Set scale
                    const viewport = page.getViewport({
                        scale
                    });
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    const renderCtx = {
                        canvasContext: ctx,
                        viewport
                    }

                    page.render(renderCtx).promise.then(() => {
                        pageIsRendering = false;

                        if (pageNumIsPending !== null) {
                            renderPage(pageNumIsPending);
                            pageNumIsPending = null;
                        }
                    });
                    // Output Current Page
                    document.querySelector('.page-num').textContent = num;
                });
            };

           // check for pages rendering
            const queueRenderPage = num => {
                if(pageIsRendering) {
                    pageNumIsPending = num
                } else {
                    renderPage(num);
                }
            }

            // Show previous page
            const showPrevPage = () => {
                if(pageNum <= 1) {
                    return;
                } else {
                    pageNum--;
                    queueRenderPage(pageNum);
                }
            }

            // Show Next page
            const nextPrevPage = () => {
                if(pageNum >= pdfDoc.numPages) {
                    return;
                } else {
                    pageNum++;
                    queueRenderPage(pageNum);
                }
            }
            // Get Document


            pdfjsLib.getDocument(this.url).promise.then(pdfDoc_ => {
                pdfDoc = pdfDoc_;

                document.querySelector('#page-count').textContent = pdfDoc.numPages;

                renderPage(pageNum);
            });

            // Button Events
            document.querySelector('#prev').addEventListener('click', showPrevPage);
            document.querySelector('#next').addEventListener('click', nextPrevPage);
        }
    }
}