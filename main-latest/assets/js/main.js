(function () {
  "use strict";

  /* TIMER */
  function vslTimer() {
    var h = document.getElementById("vsl-h"),
      m = document.getElementById("vsl-m"),
      s = document.getElementById("vsl-s");
    if (!h) return;
    var total = 2 * 3600 + 47 * 60 + 18;
    function tick() {
      var hh = Math.floor(total / 3600),
        mm = Math.floor((total % 3600) / 60),
        ss = total % 60;
      h.textContent = String(hh).padStart(2, "0");
      m.textContent = String(mm).padStart(2, "0");
      s.textContent = String(ss).padStart(2, "0");
      if (total > 0) total--;
    }
    tick();
    setInterval(tick, 1000);
  }

  /* FAQ */
  function vslFaq() {
    document.querySelectorAll(".vsl-faq-q").forEach(function (q) {
      q.addEventListener("click", function () {
        var item = this.closest(".vsl-faq");
        var isOpen = item.classList.contains("open");
        document.querySelectorAll(".vsl-faq").forEach(function (i) {
          i.classList.remove("open");
        });
        if (!isOpen) item.classList.add("open");
      });
    });
  }

  /* SCROLL REVEAL */
  function vslReveal() {
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".vsl-reveal").forEach(function (el) {
      obs.observe(el);
    });
  }

  /* STICKY */
  function vslSticky() {
    var bar = document.getElementById("vsl-sticky");
    if (!bar) return;
    window.addEventListener("scroll", function () {
      bar.classList.toggle("show", window.scrollY > 500);
    });
  }

  /* SMOOTH SCROLL */
  function vslScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var t = document.querySelector(a.getAttribute("href"));
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  /* AOS — Comprehensive Scroll Animations */
  function vslAos() {
    if (typeof AOS === "undefined") return;

    var prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    var isMobile = window.innerWidth <= 768;

    // var groups = [
    //   { selector: ".vsl-hero-logo",                   anim: "fade-in",       dur: 350,  delay: 0   },
    //   { selector: ".fancy-border",                     anim: "fade-in-up",    dur: 380,  delay: 100 },
    //   { selector: ".vsl-video-box",                    anim: "fade-in-up",    dur: 400,  delay: 80  },
    //   { selector: ".vsl-vid-left .vsl-ani-box",        anim: "fade-in-right", dur: 350,  stagger: 50, delay: 50 },
    //   { selector: ".vsl-vid-right .vsl-ani-box",       anim: "fade-in-left",  dur: 350,  stagger: 50, delay: 50 },
    //   { selector: ".vsl-social",                       anim: "fade-in",       dur: 300,  delay: 0   },
    //   { selector: ".vsl-btm-bnr .vsl-btn-wrap",        anim: "fade-in-up",    dur: 350,  delay: 50  },
    //   { selector: ".vsl-banr-tags .vsl-tag",           anim: "fade-in",       dur: 280,  stagger: 30, delay: 0 },
    //   { selector: ".marquee-banner",                   anim: "fade-in",       dur: 350,  delay: 0   },
    //   { selector: ".vsl-wrk-flw .vsl-video-wrap-main", anim: "fade-in-up",   dur: 380,  stagger: 40, delay: 0 },
    //   { selector: ".vsl-wrk-flw .vsl-content",         anim: "fade-in-left",  dur: 380,  stagger: 40, delay: 50 },
    //   { selector: ".vsl-arrow-down",                   anim: "fade-in",       dur: 250,  stagger: 25, delay: 0 },
    //   { selector: ".vsl-wrk-new",                      anim: "flip-in",       dur: 350,  stagger: 40, delay: 0 },
    //   { selector: ".vsl-videowrap",                    anim: "fade-in-up",    dur: 400,  delay: 0   },
    //   { selector: ".vsl-video-click",                  anim: "fade-in",       dur: 300,  delay: 50  },
    //   { selector: ".vsl-feat-box",                     anim: "fade-in-up",    dur: 350,  stagger: 40, delay: 0 },
    //   { selector: ".vsl-creating-video",               anim: "fade-in-up",    dur: 380,  stagger: 50, delay: 0 },
    //   { selector: ".vsl-ng",                           anim: "fade-in",       dur: 300,  delay: 50  },
    //   { selector: ".vsl-chr-im",                       anim: "fade-in-right", dur: 300,  delay: 60  },
    //   { selector: ".vsl-down",                         anim: "fade-in",       dur: 300,  delay: 0   },
    //   { selector: ".vsl-money-back",                   anim: "fade-in-up",    dur: 400,  delay: 50  },
    //   { selector: ".vsl-moneybc-img",                  anim: "fade-in-left",  dur: 380,  delay: 0   },
    //   { selector: ".vsl-access-box",                   anim: "fade-in-up",    dur: 400,  delay: 0   },
    //   { selector: ".vsl-access-orange",                anim: "fade-in",       dur: 300,  delay: 50  },
    //   { selector: ".vsl-features-row",                 anim: "fade-in",       dur: 280,  stagger: 30, delay: 0 },
    //   { selector: ".vsl-feat-price",                   anim: "fade-in-up",    dur: 350,  delay: 50  },
    //   { selector: ".vsl-price",                        anim: "fade-in",       dur: 300,  delay: 60  },
    //   { selector: ".vsl-off",                          anim: "fade-in-up",    dur: 300,  delay: 80  },
    //   { selector: ".accordion-item",                   anim: "fade-in-up",    dur: 300,  stagger: 30, delay: 0 },
    //   { selector: ".vsl-footer-logo",                  anim: "fade-in",       dur: 300,  delay: 0   },
    // ];

    // groups.forEach(function (group) {
    //   document.querySelectorAll(group.selector).forEach(function (el, index) {
    //     if (!el.hasAttribute("data-aos")) {
    //       el.setAttribute("data-aos", group.anim);
    //     }
    //     if (!el.hasAttribute("data-aos-duration")) {
    //       el.setAttribute("data-aos-duration", String(group.dur || 800));
    //     }
    //     if (!el.hasAttribute("data-aos-delay")) {
    //       var baseDelay = group.delay || 0;
    //       var stagger   = group.stagger || 0;
    //       el.setAttribute("data-aos-delay", String(Math.min(baseDelay + index * stagger, 600)));
    //     }
    //     if (!el.hasAttribute("data-aos-easing")) {
    //       el.setAttribute("data-aos-easing", "ease-out-cubic");
    //     }
    //   });
    // });

    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 60,
      disable: prefersReduced || isMobile,
    });
  }

  /* PARALLAX HERO BG */
  function vslParallax() {
    var hero = document.querySelector(".vsl-hero");
    if (!hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    window.addEventListener(
      "scroll",
      function () {
        hero.style.backgroundPositionY =
          Math.round(window.scrollY * 0.25) + "px";
      },
      { passive: true },
    );
  }

  /* NAVBAR SCROLL EFFECT */
  function vslNavbar() {
    var nb = document.querySelector(".vsl-navbar");
    if (!nb) return;
    window.addEventListener(
      "scroll",
      function () {
        nb.classList.toggle("vsl-navbar--scrolled", window.scrollY > 80);
      },
      { passive: true },
    );
  }

  /* PLAY CIRCLE — click karne pe iframe play hogi */
  function vslPlayCircle() {
    document.querySelectorAll(".vsl-play-circle").forEach(function (circle) {
      var wrapper = circle.closest(".vsl-video-inner") || circle.parentElement;
      var iframe = wrapper ? wrapper.querySelector("iframe") : null;
      if (!iframe) return;

      // Initially pause vimeo (remove autoplay from src)
      var src = iframe.src;
      iframe.src = src.replace("autoplay=1", "autoplay=0");

      circle.style.cursor = "pointer";

      circle.addEventListener("click", function () {
        // Put autoplay=1 back and trigger play via postMessage
        iframe.src = iframe.src.replace("autoplay=0", "autoplay=1");

        // Fade out the play button
        circle.style.transition = "opacity 0.3s ease";
        circle.style.opacity = "0";
        setTimeout(function () {
          circle.style.display = "none";
        }, 300);

        // Vimeo postMessage API to play
        setTimeout(function () {
          iframe.contentWindow.postMessage(
            JSON.stringify({ method: "play" }),
            "https://player.vimeo.com",
          );
        }, 300);
      });
    });
  }

  /* GALLERY SWIPER — two rows with opposing autoplay + manual nav + iframe lazy load */
  function deferGalleryIframes(scope) {
    /* Move src → data-src on every iframe inside the gallery BEFORE Swiper
       clones slides. Clones will inherit the deferred state automatically. */
    var iframes = scope.querySelectorAll("iframe");
    for (var i = 0; i < iframes.length; i++) {
      var f = iframes[i];
      if (!f.dataset.src && f.src) {
        f.dataset.src = f.src;
        f.removeAttribute("src");
      }
    }
  }

  function observeGalleryIframes(scope, onLoad) {
    /* Load iframe src only when the slide is near the viewport. The horizontal
       rootMargin pre-loads a screen-width ahead so sliding never reveals an
       unloaded slot — no visible jerk. onLoad(iframe) fires the instant a src
       is assigned, so a Player.js listener can attach before the player is
       ready (attaching afterwards would miss the one-shot "ready" event). */
    var pending = scope.querySelectorAll("iframe[data-src]");
    if (!pending.length) return;

    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < pending.length; i++) {
        pending[i].src = pending[i].dataset.src;
        if (onLoad) onLoad(pending[i]);
      }
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var f = e.target;
        if (f.dataset.src && !f.getAttribute("src")) {
          f.src = f.dataset.src;
          if (onLoad) onLoad(f);
        }
        io.unobserve(f);
      });
    }, {
      root: null,
      rootMargin: "200px 400px 200px 400px",
      threshold: 0.01
    });

    for (var j = 0; j < pending.length; j++) io.observe(pending[j]);
  }

  /* Bridge gallery video playback -> marquee pause.
     Bunny Stream (mediadelivery.net) iframes speak the Player.js protocol, so
     we drive them with the official player.js library. We attach a Player to
     each gallery iframe the moment its src is assigned, then count how many
     videos are playing — both marquee rows pause while the count is > 0 and
     resume at 0. Returns { attach } so the lazy-loader can wire each slide. */
  function galleryVideoPauseBridge(scope, rows) {
    var armed = new WeakSet();
    var players = [];      // every attached player.js instance
    var playing = 0;       // how many gallery videos are currently playing

    function setRowsPaused(p) {
      for (var i = 0; i < rows.length; i++) {
        if (rows[i] && rows[i].setPaused) rows[i].setPaused(p);
      }
    }
    function inc() {
      playing++;
      setRowsPaused(true);
    }
    function dec() {
      playing = Math.max(0, playing - 1);
      if (playing === 0) setRowsPaused(false);
    }

    /* Enforce single playback: when one video starts, pause every other one.
       Pausing the others fires their own "pause" events, which keep the
       playing counter (and the marquee) correct. */
    function pauseOthers(current) {
      for (var i = 0; i < players.length; i++) {
        if (players[i] !== current) {
          try {
            players[i].pause();
          } catch (e) {}
        }
      }
    }

    function attach(iframe) {
      if (!iframe || armed.has(iframe)) return;
      if (typeof playerjs === "undefined" || !playerjs.Player) return;
      if (!iframe.getAttribute("src")) return; // only once the player is loading
      armed.add(iframe);
      try {
        var player = new playerjs.Player(iframe);
        players.push(player);
        player.on("ready", function () {
          player.on("play", function () {
            pauseOthers(player); // only one video plays at a time
            inc();
          });
          player.on("pause", dec);
          player.on("ended", dec);
        });
      } catch (e) {
        armed.delete(iframe); // let a later pass retry
      }
    }

    /* Safety net: catch any iframe whose src was set without going through the
       onLoad hook (e.g. the no-IntersectionObserver path), and retry while the
       player.js library is still finishing its load. */
    function scan() {
      var frames = scope.querySelectorAll(".vsl-card iframe");
      for (var i = 0; i < frames.length; i++) attach(frames[i]);
    }
    setTimeout(scan, 800);
    setTimeout(scan, 2500);
    setTimeout(scan, 6000);

    return { attach: attach };
  }

  /* Custom RAF marquee - replaces Swiper for the two gallery rows.
     Why: Swiper's loop + variable-width slides + zero-delay autoplay
     repeatedly desynced and stalled after a few cycles. A plain
     requestAnimationFrame loop with cloned slides is infinite by
     construction. Buttons, wheel, and drag all adjust the same offset
     so manual scrolling does not fight the auto marquee. */
  function initVslSliders() {
    var topEl = document.querySelector(".vsl-top-slider");
    var botEl = document.querySelector(".vsl-bottom-slider");
    if (!topEl || !botEl) return;

    var gallery = document.getElementById("vsl-gallery") || document;

    /* Defer iframe src BEFORE cloning so clones inherit data-src too. */
    deferGalleryIframes(gallery);

    var BASE_SPEED = 28;        // px/sec — feel of the idle marquee

    function setupRow(rowEl, naturalDirection) {
      var track = rowEl.querySelector(".swiper-wrapper");
      if (!track) return null;

      /* Lock the visible viewport and use explicit gap (no Swiper). */
      rowEl.style.overflow = "hidden";
      track.style.display = "flex";
      track.style.flexWrap = "nowrap";
      track.style.gap = "12px";
      track.style.willChange = "transform";
      track.style.transition = "none";

      /* Triple the slides so a half-shift is never visible at the edges.
         We translate within one set-width and wrap modulo that width. */
      var originals = Array.prototype.slice.call(track.children);
      function appendCloneSet() {
        for (var i = 0; i < originals.length; i++) {
          track.appendChild(originals[i].cloneNode(true));
        }
      }
      appendCloneSet();
      appendCloneSet();

      var setWidth = 0;
      function measure() {
        var gap = 12;
        var w = 0;
        for (var i = 0; i < originals.length; i++) {
          var child = track.children[i];
          if (!child) continue;
          w += child.offsetWidth + gap;
        }
        if (w > 0) setWidth = w;
      }

      /* Layout depends on media metadata, so re-measure as media loads
         and on resize. The marquee uses the latest setWidth each frame. */
      measure();
      setTimeout(measure, 200);
      setTimeout(measure, 800);
      window.addEventListener("resize", measure);
      var media = track.querySelectorAll("img,video,iframe");
      for (var m = 0; m < media.length; m++) {
        media[m].addEventListener("load", measure);
        media[m].addEventListener("loadedmetadata", measure);
      }

      /* Park the viewport in the MIDDLE set so there's always a full
         set of slides on both sides of the visible area — supports
         drifting in either direction without revealing empty space. */
      var offset = 0;
      var centered = false;
      var lastTime = null;
      var externalPause = false;   // true while a gallery video is playing
      var manualHoldUntil = 0;
      var scrollStart = 0;
      var scrollEnd = 0;
      var scrollFrom = 0;
      var scrollDistance = 0;
      var isDragging = false;
      var lastPointerX = 0;

      function wrapOffset() {
        if (setWidth <= 0) return;
        while (offset <= -2 * setWidth) offset += setWidth;
        while (offset >= 0) offset -= setWidth;
      }

      function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      }

      function resolveScroll(now) {
        if (now >= scrollEnd) {
          if (scrollEnd > 0) {
            offset = scrollFrom + scrollDistance;
            wrapOffset();
          }
          scrollEnd = 0;
          return false;
        }

        var t = (now - scrollStart) / (scrollEnd - scrollStart);
        if (t < 0) t = 0; else if (t > 1) t = 1;
        offset = scrollFrom + (scrollDistance * easeOutCubic(t));
        wrapOffset();
        return true;
      }

      function getSingleCardStep() {
        measure();
        var gap = 12;
        if (!originals.length) return 260;
        if (setWidth <= 0) return originals[0].offsetWidth + gap;

        var local = ((-offset % setWidth) + setWidth) % setWidth;
        var running = 0;
        for (var i = 0; i < originals.length; i++) {
          var child = track.children[i];
          if (!child) continue;
          var childStep = child.offsetWidth + gap;
          if (local < running + childStep - 1) return childStep;
          running += childStep;
        }
        return originals[0].offsetWidth + gap;
      }

      function scrollByPixels(distance, duration) {
        var now = performance.now();
        resolveScroll(now);
        scrollStart = now;
        scrollEnd = now + duration;
        scrollFrom = offset;
        scrollDistance = distance;
        manualHoldUntil = scrollEnd + 150;
      }

      function pauseAuto(duration) {
        manualHoldUntil = performance.now() + duration;
        scrollEnd = 0;
      }

      function onPointerDown(e) {
        if (e.button !== undefined && e.button !== 0) return;
        isDragging = true;
        lastPointerX = e.clientX;
        pauseAuto(900);
        rowEl.classList.add("is-vsl-dragging");
        if (rowEl.setPointerCapture && e.pointerId !== undefined) {
          rowEl.setPointerCapture(e.pointerId);
        }
        e.preventDefault();
      }

      function onPointerMove(e) {
        if (!isDragging) return;
        var dx = e.clientX - lastPointerX;
        lastPointerX = e.clientX;
        offset += dx;
        wrapOffset();
        pauseAuto(900);
      }

      function onPointerUp(e) {
        if (!isDragging) return;
        isDragging = false;
        rowEl.classList.remove("is-vsl-dragging");
        pauseAuto(500);
        if (rowEl.releasePointerCapture && e.pointerId !== undefined) {
          rowEl.releasePointerCapture(e.pointerId);
        }
      }

      rowEl.addEventListener("pointerdown", onPointerDown);
      rowEl.addEventListener("pointermove", onPointerMove);
      rowEl.addEventListener("pointerup", onPointerUp);
      rowEl.addEventListener("pointercancel", onPointerUp);
      rowEl.addEventListener("mouseleave", onPointerUp);
      rowEl.addEventListener("wheel", function (e) {
        var delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        if (delta === 0) return;
        offset -= delta;
        wrapOffset();
        pauseAuto(650);
        e.preventDefault();
      }, { passive: false });

      function tick(now) {
        if (lastTime === null) lastTime = now;
        var dt = (now - lastTime) / 1000;
        lastTime = now;
        /* Cap dt so a backgrounded tab returning doesn't jump-scroll. */
        if (dt > 0.1) dt = 0.1;

        /* As soon as we know setWidth, snap the offset into the middle
           band. Done once; subsequent measures only update setWidth. */
        if (!centered && setWidth > 0) {
          offset = -setWidth;
          centered = true;
        }

        var manualScrollActive = resolveScroll(now);
        if (!externalPause && !manualScrollActive && !isDragging && now >= manualHoldUntil) {
          offset += BASE_SPEED * dt * naturalDirection;
        }

        /* Wrap offset in the band (-2*setWidth, 0] so the viewport
           always sits inside the middle set's neighbourhood. */
        wrapOffset();

        track.style.transform = "translate3d(" + offset.toFixed(2) + "px,0,0)";
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);

      return {
        scrollOne: function (direction) {
          scrollByPixels(getSingleCardStep() * direction, 900);
        },
        setPaused: function (v) {
          externalPause = !!v;
          /* When resuming, reset the frame clock so the parked dt doesn't
             produce a sudden jump on the next animation frame. */
          if (!externalPause) lastTime = null;
        }
      };
    }

    /* Natural directions: top row drifts left (-1), bottom row drifts right (+1). */
    var topCtl = setupRow(topEl, -1);
    var botCtl = setupRow(botEl, +1);

    /* Pause the marquee while any gallery video is playing, resume when it
       pauses/ends. Create the bridge first so we can attach a Player.js
       listener to each slide the instant its src is assigned. */
    var pauseBridge = galleryVideoPauseBridge(gallery, [topCtl, botCtl]);

    /* Load iframe src for any slide that becomes near-viewport, attaching the
       video-playback listener at the same moment. Runs after cloning so clones
       are observed too. */
    observeGalleryIframes(gallery, pauseBridge.attach);

    var nextBtn = document.querySelector(".vsl-slider-next");
    var prevBtn = document.querySelector(".vsl-slider-prev");
    /* Right button: scroll one card in the natural direction (top left, bottom right). */
    if (nextBtn) nextBtn.addEventListener("click", function () {
      if (topCtl) topCtl.scrollOne(-1);
      if (botCtl) botCtl.scrollOne(+1);
    });
    /* Left button: scroll one card opposite the natural direction. */
    if (prevBtn) prevBtn.addEventListener("click", function () {
      if (topCtl) topCtl.scrollOne(+1);
      if (botCtl) botCtl.scrollOne(-1);
    });
  }

  /* INIT */
  document.addEventListener("DOMContentLoaded", function () {
    vslTimer();
    vslFaq();
    vslReveal();
    vslSticky();
    vslScroll();
    vslAos();
    vslParallax();
    vslNavbar();
    vslPlayCircle();
    initVslSliders();
  });
})();
