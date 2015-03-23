$(function () {
    function application() {
        var self = {};
        self.frameTime = 500;
        self.secondFrameOffset = 0.75;
        self.itemsAmount = $(".animation-container").children().length;

        self.animateSpreading = function (element) {
            $(element).show();
            $(element).animate({
                top: '50px',
                'opacity': 0.0,
                'margin-left': "-400px",
                width: "798px"
            }, self.itemsAmount * self.frameTime, 'linear', function () {
                $(element).attr("style", "");
            });
        }

        self.animateSpreadingGroup = function () {
            $(".animation-container").children().each(function (i, el) {
                var animationOffset = i % 2 == 0 ? self.frameTime * self.secondFrameOffset : 0;
                var startDelay = ((i + 1) * self.frameTime) - animationOffset;
                setTimeout(function () {
                    self.animateSpreading(el);
                }, startDelay);
            });
        }

        self.animateWaterDropFall = function () {
            $(".water-drop").animate({
                'margin-top': '-156px',
                'top': '100%',
            }, 2000, 'easeInCubic', function () {
                $(".water-drop").hide("slow");
                self.animateSpreadingGroup();
            });
        }

        self.start = function () {
            self.animateWaterDropFall();
        }

        self.init = function () {
            $(".start-button a").click(function () {
                self.start();
            });
        }

        self.init();
        return self;
    }

    window.app = new application();
});