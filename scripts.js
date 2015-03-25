$(function () {
    function application() {
        var self = {};

        //ripple parameters
        self.rippleFrameTime = 250;
        self.secondFrameOffset = 0.75;
        self.itemsAmount = $(".animation-container").children().length;

        //bubble parameters
        self.bubbleFrameTime = 250;

        self.animateSpreading = function (element) {
            $(element).show();
            $(element).animate({
                top: '0px',
                'opacity': 0.0,
                'height': '118%',
                'margin-left': "-50%",
                width: "100%"
            }, self.itemsAmount * self.rippleFrameTime, 'linear', function () {
                // $(element).attr("style", "");
                // self.animateSpreading(element);
            });
        }

        self.animateSpreadingGroup = function () {
            $(".animation-container").children().each(function (i, el) {
                var animationOffset = i % 2 != 0 ? self.rippleFrameTime * self.secondFrameOffset : 0;
                var startDelay = ((i + 1) * self.rippleFrameTime) - animationOffset;
                setTimeout(function () {
                    self.animateSpreading(el);
                }, startDelay);
            });
        }

        self.animateWaterDropFall = function () {
            $(".water-drop").show();
            $(".water-drop").animate({
                'margin-top': '-156px',
                'top': '100%',
            }, 1700, 'easeInCubic', function () {
                 self.animateBubblePopUppingGroup();
            });
        }

        self.animateBubblePopUpping = function (element) {
            $(element).animate({
                'left': '50%',
                'width': '100%',
                'height': 'auto',
                'top': '100%',
                'margin-top': '0%',
                'opacity': "1"
            });
        }

        self.animateBubblePopUppingGroup = function () {
            $(".bubble-item").each(function (i, item) {
                var buttleTimeOffset = (i + 1) * self.bubbleFrameTime;
                setTimeout(function () {
                    self.animateBubblePopUpping(item);
                }, buttleTimeOffset);
            });
        }

        self.start = function () {
            self.animateWaterDropFall();
            setTimeout(function () {
                $(".water-drop").hide("slow");
                self.animateSpreadingGroup();
            }, self.itemsAmount * self.rippleFrameTime);
        }

        self.init = function () {
            setTimeout(function () {
                self.start();
            }, 1000);
        }

        self.init();
        return self;
    }

    window.app = new application();
});