
var checkPoints = [100,200,400,700,1100,1500];
var realIMG=["https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/afdfd23u2098.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/suweiur24343.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/fjdkfj9e243090.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/eioie0ieowi2.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/isiea292u.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/jfdkjfd29292.png"];


var giftIMG = ["https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/tikus.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/kolor.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/tost.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/bukabuku.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/sampanye.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/music.png"];

var faceIMG = ["https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_rock.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_ruka.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_gaku.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_ayumu.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_reiji.png",
"https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_sho.png"];


var hadiahArray = ['His biggest catch (Rat)','Ge***o Pi**e Pajamas','Transparent and anti-burn toaster','Rare Books about Yoshida Shouin','2001 Domaine Arnaud Ente Meursault, Champagne Tower, and Pickup Lines for Dummies','A custom-made music box. Music: “Le Carnaval des Animaux” No. 13, “Le Cygne”'];

var ucapanArray = ['“Nya!! Nyaaaa!!!!”','“I remember you saying you want them! Nice taste, Haru-kun!”','“I’m pretty sure you won’t burn your toast anymore. Use it nicely, okay?”','“These are the rarest books I can find… Y--you don’t have them yet, right? I hope you like them…”','“That one has a fruity taste, especially lemon, so I’m sure you’ll like it. Also learn better pickup lines from this book. Maybe you can make a better impersonation that way.”','“Do you remember this melody?”'];

var komentarArray = ['“Wonderful. Rock is nice. I wonder how I should cook it.”','“This...is very cute!!! I’m now an even cuter version of me!!!”','“Gaku-san…!!! I’m very touched!!! I will eat a lot of toasts from now on!! Breakfast, lunch, dinner…”<div class="othereply" style="border-color:#4e4e4e;">Gaku: “No, you don’t have to go that far ^^;”</div>','“These….!!! I’ve been searching for them for years….!!!! Ayumu-san, thank you so much!!!!”','“Tower…!!! I want to pour the champagne!!!! Also I will learn a lot, Reiji-san!! Banzai to your beautiful eyes!”<div class="othereply"  style="border-color:#028a15;">Reiji: “IT’S ‘CHEERS’, YOU LITTLE--</div>','“I do. I will always remember. Thank you very much, Sho.”'];


var hadiahArray_JP = ['大きなねずみ','ジェ〇ピ〇のパジャマ','庫内が見える！高性能トースター','吉田松陰のレア本','2001年産 アルノー・アント ムルソーワインによるシャンパンタワーとサルでもわかる！演技台詞集','特注オルゴール 組曲「動物の謝肉祭」より「白鳥」'];

var ucapanArray_JP = ['「ニャ！ニャーー！！！！」','「ハルくんこれ欲しいって言ってたからさ〜！絶対 似合うよ☆」','「悠人がこれ以上トーストを焦がさないように選んだんだ。大事に使ってくれよ？」','「俺が手に入れられる限界はここまでだった……。悠人はその、まだ持っていないよな？気に入ってくれると良いんだが……」','「レモンの風味が強いワイン、お前好きだろ？それからお前の為に本も入れておいてやったから。感謝して演技の糧にしろよ、悠人」','「悠人はこの曲を覚えているかい？」'];

var komentarArray_JP = ['「凄いぞ、ロック。ありがとう。……さて、これをどうしたものか……」','「これは……とてもかわいいですね！これ以上かわいくなってしまうのか、俺は……！」','「岳さん……！！ありがとうございます、感動しました！これから毎日、3食欠かさずこのトースターでパンを焼きます」<div class="othereply" style="border-color:#4e4e4e;">岳 「そこまでしなくていいからな！？」</div>','「これは……！！！ずっと探していたんです……！！！歩さん、ありがとうございます……！！！」','「シャンパンタワー……！！一度注いでみたかったんですよね……。本もありがとうございます、玲司さん。俺頑張りますね。君の瞳に……万歳！」<div class="othereply"  style="border-color:#028a15;">玲司 「それを言うなら『乾杯』な」</div>','「勿論覚えている。……本当にありがとう、翔」<div class="othereply"  style="border-color:#f4f4f4;">翔 「ふふ、どういたしまして♪」</div>'];




(function ($) {
// define variables

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var player, score, stop, ticker;
var ground = [], water = [], enemies = [], environment = [];

// platform variables
var platformHeight, platformLength, gapLength;
var platformWidth = 32;
var platformBase = canvas.height - platformWidth;  // bottom row of the game
var platformSpacer = 64;

var canUseLocalStorage = 'localStorage' in window && window.localStorage !== null;
var playSound;

// set the sound preference
if (canUseLocalStorage) {
  playSound = (localStorage.getItem('kandi.playSound') === "true")

  if (playSound) {
    $('.sound').addClass('sound-on').removeClass('sound-off');
  }
  else {
    $('.sound').addClass('sound-off').removeClass('sound-on');
  }
}

/**
 * Get a random number between range
 * @param {integer}
 * @param {integer}
 */
function rand(low, high) {
  return Math.floor( Math.random() * (high - low + 1) + low );
}

/**
 * Bound a number between range
 * @param {integer} num - Number to bound
 * @param {integer}
 * @param {integer}
 */
function bound(num, low, high) {
  return Math.max( Math.min(num, high), low);
}

/**
 * Asset pre-loader object. Loads all images
 */
var assetLoader = (function() {
  // images dictionary
  this.imgs        = {
    'bg'            : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bg.png',
    'sky'           : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/sky.png',
    'backdrop'      : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/backdrop.png',
    'backdrop2'     : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/backdrop_ground.png',
    'grass'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/grass.png',
    'avatar_normal' : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/normal_walk.png',
    'water'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/water.png',
    'grass1'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/grassMid1.png',
    'grass2'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/grassMid2.png',
    'bridge'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bridge.png',
    'plant'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/plant.png',
    'bush1'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bush1.png',
    'bush2'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bush2.png',
    'cliff'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/grassCliffRight.png',
    'spikes'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/spikes.png',
    'box'           : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/boxCoin.png',
    'slime'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/slime.png',
    'jumpbut'       : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/jumpbutton.png',
    'bgpolosan'     : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bg_polos.png',
    'bgbutton'      : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bg_menu.png',
    'menubg'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu-bg.png',
    'creditsbg'     : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/credits-bg.png',
    'favicon'       : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/favicon.png',
    'menu_start'    : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_start.png',
    'menu_lang'     : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_lang.png',
    'menu_gifts'    : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_gifts.png',
    'menu_credits'  : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_credits.png',
    'creditsbg-JP'     : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/credits-bg_JP.png',
    'menu_start-JP'    : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_start_jp.png',
    'menu_lang-JP'     : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_lang_jp.png',
    'menu_gifts-JP'    : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_gifts_jp.png',
    'menu_credits-JP'  : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_credits_jp.png',
    'presentitle'   : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/presentitle.png',
    'presentitle-JP': 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/presentitle_jp.png',
    'shadow1'       : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/shadow1.png',
    'shadow2'       : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/shadow2.png',
    'shadow3'       : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/shadow3.png',
    'shadow4'       : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/shadow4.png',
    'shadow5'       : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/shadow5.png',
    'shadow6'       : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/shadow6.png',
    'soundOn'       : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/soundOn.png',
    'soundOff'      : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/soundOff.png',
    'buttonclose'   : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/button_close.png',
    'rokku'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/afdfd23u2098.png',
    'rukarukapi'    : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/suweiur24343.png',
    'gakkun'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/fjdkfj9e243090.png',
    'ayuyu'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/eioie0ieowi2.png',
    'reihiii'       : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/isiea292u.png',
    'shooo'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/jfdkjfd29292.png',
    'tickus'        :'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/tikus.png',
    'kolor'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/kolor.png',
    'toast'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/tost.png',
    'bukbuku'       : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/bukabuku.png',
    'sampan'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/sampanye.png',
    'music'         : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/music.png',
    'face_haruto'   : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_haruto.png',
    'face_rock'     :'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_rock.png',
    'face_ruka'     : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_ruka.png',
    'face_gaku'     : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_gaku.png',
    'face_ayumu'    : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_ayumu.png',
    'face_reiji'    : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_reiji.png',
    'face_sho'      : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_sho.png',
    'openchest'     : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/openchest.png',
    'closechest'    : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/closechest.png',
    'movie1'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bedtimestory/2.jpg',
    'movie2'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bedtimestory/3.jpg',
    'movie3'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bedtimestory/4.jpg',
    'movie4'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bedtimestory/5.jpg',
    'movie5'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bedtimestory/6.jpg',
    'movie6'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bedtimestory/7.jpg',
    'movie7'        : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/bedtimestory/8.jpg'

}
  // sounds dictionary
  this.sounds      = {
    'bg'            : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/sounds/bg.mp3',
    'jump'          : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/sounds/jump.mp3',
    'gameOver'      : 'https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/sounds/gameOver.mp3'
  };

  var assetsLoaded = 0;                                // how many assets have been loaded
  var numImgs      = Object.keys(this.imgs).length;    // total number of image assets
  var numSounds    = Object.keys(this.sounds).length;  // total number of sound assets
  this.totalAssest = numImgs;                          // total number of assets

  /**
   * Ensure all assets are loaded before using them
   * @param {number} dic  - Dictionary name ('imgs', 'sounds', 'fonts')
   * @param {number} name - Asset name in the dictionary
   */
  function assetLoaded(dic, name) {
    // don't count assets that have already loaded
    if (this[dic][name].status !== 'loading') {
      return;
    }

    this[dic][name].status = 'loaded';
    assetsLoaded++;

    // progress callback
    if (typeof this.progress === 'function') {
      this.progress(assetsLoaded, this.totalAssest);
    }

    // finished callback
    if (assetsLoaded === this.totalAssest && typeof this.finished === 'function') {
      this.finished();
    }
  }

  /**
   * Check the ready state of an Audio file.
   * @param {object} sound - Name of the audio asset that was loaded.
   */
  function _checkAudioState(sound) {
    if (this.sounds[sound].status === 'loading' && this.sounds[sound].readyState === 4) {
      assetLoaded.call(this, 'sounds', sound);
    }
  }

  /**
   * Create assets, set callback for asset loading, set asset source
   */
  this.downloadAll = function() {
    var _this = this;
    var src;

    // load images
    for (var img in this.imgs) {
      if (this.imgs.hasOwnProperty(img)) {
        src = this.imgs[img];

        // create a closure for event binding
        (function(_this, img) {
          _this.imgs[img] = new Image();
          _this.imgs[img].status = 'loading';
          _this.imgs[img].name = img;
          _this.imgs[img].onload = function() { assetLoaded.call(_this, 'imgs', img) };
          _this.imgs[img].src = src;
        })(_this, img);
      }
    }

    // load sounds
    for (var sound in this.sounds) {
      if (this.sounds.hasOwnProperty(sound)) {
        src = this.sounds[sound];

        // create a closure for event binding
        (function(_this, sound) {
          _this.sounds[sound] = new Audio();
          _this.sounds[sound].status = 'loading';
          _this.sounds[sound].name = sound;
          _this.sounds[sound].addEventListener('canplay', function() {
            _checkAudioState.call(_this, sound);
          });
          _this.sounds[sound].src = src;
          _this.sounds[sound].preload = 'auto';
          _this.sounds[sound].load();
        })(_this, sound);
      }
    }
  }

  return {
    imgs: this.imgs,
    sounds: this.sounds,
    totalAssest: this.totalAssest,
    downloadAll: this.downloadAll
  };
})();

/**
 * Show asset loading progress
 * @param {integer} progress - Number of assets loaded
 * @param {integer} total - Total number of assets
 */
assetLoader.progress = function(progress, total) {
  var pBar = document.getElementById('progress-bar');
  pBar.value = progress / total;
  document.getElementById('p').innerHTML = Math.round(pBar.value * 100) + "%";
}

/**
 * Load the main menu
 */
assetLoader.finished = function() {
  mainMenu();
}

/**
 * Creates a Spritesheet
 * @param {string} - Path to the image.
 * @param {number} - Width (in px) of each frame.
 * @param {number} - Height (in px) of each frame.
 */
function SpriteSheet(path, frameWidth, frameHeight) {
  this.image = new Image();
  this.frameWidth = frameWidth;
  this.frameHeight = frameHeight;

  // calculate the number of frames in a row after the image loads
  var self = this;
  this.image.onload = function() {
    self.framesPerRow = Math.floor(self.image.width / self.frameWidth);
  };

  this.image.src = path;
}

/**
 * Creates an animation from a spritesheet.
 * @param {SpriteSheet} - The spritesheet used to create the animation.
 * @param {number}      - Number of frames to wait for before transitioning the animation.
 * @param {array}       - Range or sequence of frame numbers for the animation.
 * @param {boolean}     - Repeat the animation once completed.
 */
function Animation(spritesheet, frameSpeed, startFrame, endFrame) {

  var animationSequence = [];  // array holding the order of the animation
  var currentFrame = 0;        // the current frame to draw
  var counter = 0;             // keep track of frame rate

  // start and end range for frames
  for (var frameNumber = startFrame; frameNumber <= endFrame; frameNumber++)
    animationSequence.push(frameNumber);

  /**
   * Update the animation
   */
  this.update = function() {

    // update to the next frame if it is time
    if (counter == (frameSpeed - 1))
      currentFrame = (currentFrame + 1) % animationSequence.length;

    // update the counter
    counter = (counter + 1) % frameSpeed;
  };

  /**
   * Draw the current frame
   * @param {integer} x - X position to draw
   * @param {integer} y - Y position to draw
   */
  this.draw = function(x, y) {
    // get the row and col of the frame
    var row = Math.floor(animationSequence[currentFrame] / spritesheet.framesPerRow);
    var col = Math.floor(animationSequence[currentFrame] % spritesheet.framesPerRow);

    ctx.drawImage(
      spritesheet.image,
      col * spritesheet.frameWidth, row * spritesheet.frameHeight,
      spritesheet.frameWidth, spritesheet.frameHeight,
      x, y,
      spritesheet.frameWidth, spritesheet.frameHeight);
  };
}

/**
 * Create a parallax background
 */
var background = (function() {
  var sky   = {};
  var backdrop = {};
  var backdrop2 = {};

  /**
   * Draw the backgrounds to the screen at different speeds
   */
  this.draw = function() {
    ctx.drawImage(assetLoader.imgs.bg, 0, 0);

    // Pan background
    sky.x -= sky.speed;
    backdrop.x -= backdrop.speed;
    backdrop2.x -= backdrop2.speed;

    // draw images side by side to loop
    ctx.drawImage(assetLoader.imgs.sky, sky.x, sky.y);
    ctx.drawImage(assetLoader.imgs.sky, sky.x + canvas.width, sky.y);

    ctx.drawImage(assetLoader.imgs.backdrop, backdrop.x, backdrop.y);
    ctx.drawImage(assetLoader.imgs.backdrop, backdrop.x + canvas.width, backdrop.y);

    ctx.drawImage(assetLoader.imgs.backdrop2, backdrop2.x, backdrop2.y);
    ctx.drawImage(assetLoader.imgs.backdrop2, backdrop2.x + canvas.width, backdrop2.y);

    // If the image scrolled off the screen, reset
    if (sky.x + assetLoader.imgs.sky.width <= 0)
      sky.x = 0;
    if (backdrop.x + assetLoader.imgs.backdrop.width <= 0)
      backdrop.x = 0;
    if (backdrop2.x + assetLoader.imgs.backdrop2.width <= 0)
      backdrop2.x = 0;
  };

  /**
   * Reset background to zero
   */
  this.reset = function()  {
    sky.x = 0;
    sky.y = 0;
    sky.speed = 0.2;

    backdrop.x = 0;
    backdrop.y = 0;
    backdrop.speed = 0.4;

    backdrop2.x = 0;
    backdrop2.y = 0;
    backdrop2.speed = 0.6;
  }

  return {
    draw: this.draw,
    reset: this.reset
  };
})();

/**
 * A vector for 2d space.
 * @param {integer} x - Center x coordinate.
 * @param {integer} y - Center y coordinate.
 * @param {integer} dx - Change in x.
 * @param {integer} dy - Change in y.
 */
function Vector(x, y, dx, dy) {
  // position
  this.x = x || 0;
  this.y = y || 0;
  // direction
  this.dx = dx || 0;
  this.dy = dy || 0;
}

/**
 * Advance the vectors position by dx,dy
 */
Vector.prototype.advance = function() {
  this.x += this.dx;
  this.y += this.dy;
};

/**
 * Get the minimum distance between two vectors
 * @param {Vector}
 * @return minDist
 */
Vector.prototype.minDist = function(vec) {
  var minDist = Infinity;
  var max     = Math.max( Math.abs(this.dx), Math.abs(this.dy),
                          Math.abs(vec.dx ), Math.abs(vec.dy ) );
  var slice   = 1 / max;

  var x, y, distSquared;

  // get the middle of each vector
  var vec1 = {}, vec2 = {};
  vec1.x = this.x + this.width/2;
  vec1.y = this.y + this.height/2;
  vec2.x = vec.x + vec.width/2;
  vec2.y = vec.y + vec.height/2;
  for (var percent = 0; percent < 1; percent += slice) {
    x = (vec1.x + this.dx * percent) - (vec2.x + vec.dx * percent);
    y = (vec1.y + this.dy * percent) - (vec2.y + vec.dy * percent);
    distSquared = x * x + y * y;

    minDist = Math.min(minDist, distSquared);
  }

  return Math.sqrt(minDist);
};

/**
 * The player object
 */
var player = (function(player) {
  // add properties directly to the player imported object
  player.width     = 60;
  player.height    = 96;
  player.speed     = 4;

  // jumping
  player.gravity   = 1;
  player.dy        = 0;
  player.jumpDy    = -10;
  player.isFalling = false;
  player.isJumping = false;

  // spritesheets
  player.sheet     = new SpriteSheet('https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/normal_walk.png', player.width, player.height);
  player.walkAnim  = new Animation(player.sheet, 4, 0, 15);
  player.jumpAnim  = new Animation(player.sheet, 4, 15, 15);
  player.fallAnim  = new Animation(player.sheet, 4, 11, 11);
  player.anim      = player.walkAnim;

  Vector.call(player, 0, 0, 0, player.dy);

  var jumpCounter = 0;  // how long the jump button can be pressed down

  /**
   * Update the player's position and animation
   */
  player.update = function() {

    // jump if not currently jumping or falling
    if (KEY_STATUS.space && player.dy === 0 && !player.isJumping) {
      player.isJumping = true;
      player.dy = player.jumpDy;
      jumpCounter = 12;
      assetLoader.sounds.jump.play();
    }

    // jump higher if the space bar is continually pressed
    if (KEY_STATUS.space && jumpCounter) {
      player.dy = player.jumpDy;
    }

    jumpCounter = Math.max(jumpCounter-1, 0);

    this.advance();

    // add gravity
    if (player.isFalling || player.isJumping) {
      player.dy += player.gravity;
    }

    // change animation if falling
    if (player.dy > 0) {
      player.anim = player.fallAnim;
    }
    // change animation is jumping
    else if (player.dy < 0) {
      player.anim = player.jumpAnim;
    }
    else {
      player.anim = player.walkAnim;
    }

    player.anim.update();
  };

  /**
   * Draw the player at it's current position
   */
  player.draw = function() {
    player.anim.draw(player.x, player.y);
  };

  /**
   * Reset the player's position
   */
  player.reset = function() {
    player.x = 64;
    player.y = 250;
  };

  return player;
})(Object.create(Vector.prototype));

/**
 * Sprites are anything drawn to the screen (ground, enemies, etc.)
 * @param {integer} x - Starting x position of the player
 * @param {integer} y - Starting y position of the player
 * @param {string} type - Type of sprite
 */
function Sprite(x, y, type) {
  this.x      = x;
  this.y      = y;
  this.width  = platformWidth;
  this.height = platformWidth;
  this.type   = type;
  Vector.call(this, x, y, 0, 0);

  /**
   * Update the Sprite's position by the player's speed
   */
  this.update = function() {
    this.dx = -player.speed;
    this.advance();
  };

  /**
   * Draw the sprite at it's current position
   */
  this.draw = function() {
    ctx.save();
    ctx.translate(0.5,0.5);
    ctx.drawImage(assetLoader.imgs[this.type], this.x, this.y);
    ctx.restore();
  };
}
Sprite.prototype = Object.create(Vector.prototype);

/**
 * Get the type of a platform based on platform height
 * @return Type of platform
 */
function getType() {
  var type;
  switch (platformHeight) {
    case 0:
    case 1:
      type = Math.random() > 0.5 ? 'grass1' : 'grass2';
      break;
    case 2:
      type = 'grass';
      break;
    case 3:
      type = 'bridge';
      break;
    case 4:
      type = 'box';
      break;
  }
  if (platformLength === 1 && platformHeight < 3 && rand(0, 3) === 0) {
    type = 'cliff';
  }

  return type;
}

/**
 * Update all ground position and draw. Also check for collision against the player.
 */
function updateGround() {
  // animate ground
  player.isFalling = true;
  for (var i = 0; i < ground.length; i++) {
    ground[i].update();
    ground[i].draw();

    // stop the player from falling when landing on a platform
    var angle;
    if (player.minDist(ground[i]) <= player.height/2 + platformWidth/2 &&
        (angle = Math.atan2(player.y - ground[i].y, player.x - ground[i].x) * 180/Math.PI) > -130 &&
        angle < -50) {
      player.isJumping = false;
      player.isFalling = false;
      player.y = ground[i].y - player.height + 5;
      player.dy = 0;
    }
  }

  // remove ground that have gone off screen
  if (ground[0] && ground[0].x < -platformWidth) {
    ground.splice(0, 1);
  }
}

/**
 * Update all water position and draw.
 */
function updateWater() {
  // animate water
  for (var i = 0; i < water.length; i++) {
    water[i].update();
    water[i].draw();
  }

  // remove water that has gone off screen
  if (water[0] && water[0].x < -platformWidth) {
    var w = water.splice(0, 1)[0];
    w.x = water[water.length-1].x + platformWidth;
    water.push(w);
  }
}

/**
 * Update all environment position and draw.
 */
function updateEnvironment() {
  // animate environment
  for (var i = 0; i < environment.length; i++) {
    environment[i].update();
    environment[i].draw();
  }

  // remove environment that have gone off screen
  if (environment[0] && environment[0].x < -platformWidth) {
    environment.splice(0, 1);
  }
}

/**
 * Update all enemies position and draw. Also check for collision against the player.
 */
function updateEnemies() {
  // animate enemies
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].update();
    enemies[i].draw();

    // player ran into enemy
    if (player.minDist(enemies[i]) <= player.width - platformWidth/2) {
      gameOver();
    }
  }

  // remove enemies that have gone off screen
  if (enemies[0] && enemies[0].x < -platformWidth) {
    enemies.splice(0, 1);
  }
}

/**
 * Update the players position and draw
 */
function updatePlayer() {
  player.update();
  player.draw();

  // game over
  if (player.y + player.height >= canvas.height) {
    gameOver();
  }
}

/**
 * Spawn new sprites off screen
 */
function spawnSprites() {
  // increase score
  score++;

  // first create a gap
  if (gapLength > 0) {
    gapLength--;
  }
  // then create ground
  else if (platformLength > 0) {
    var type = getType();

    ground.push(new Sprite(
      canvas.width + platformWidth % player.speed,
      platformBase - platformHeight * platformSpacer,
      type
    ));
    platformLength--;

    // add random environment sprites
    spawnEnvironmentSprites();

    // add random enemies
    spawnEnemySprites();
  }
  // start over
  else {
    // increase gap length every speed increase of 4
    gapLength = rand(player.speed - 2, player.speed);
    // only allow a ground to increase by 1
    platformHeight = bound(rand(0, platformHeight + rand(0, 2)), 0, 4);
    platformLength = rand(Math.floor(player.speed/2), player.speed * 4);
  }
}

/**
 * Spawn new environment sprites off screen
 */
function spawnEnvironmentSprites() {
  if (score > 40 && rand(0, 20) === 0 && platformHeight < 3) {
    if (Math.random() > 0.5) {
      environment.push(new Sprite(
        canvas.width + platformWidth % player.speed,
        platformBase - platformHeight * platformSpacer - platformWidth + 1,
        'plant'
      ));
    }
    else if (platformLength > 2) {
      environment.push(new Sprite(
        canvas.width + platformWidth % player.speed,
        platformBase - platformHeight * platformSpacer - platformWidth + 1,
        'bush1'
      ));
      environment.push(new Sprite(
        canvas.width + platformWidth % player.speed + platformWidth,
        platformBase - platformHeight * platformSpacer - platformWidth + 1,
        'bush2'
      ));
    }
  }
}

/**
 * Spawn new enemy sprites off screen
 */
function spawnEnemySprites() {
  if (score > 100 && Math.random() > 0.96 && enemies.length < 3 && platformLength > 5 &&
      (enemies.length ? canvas.width - enemies[enemies.length-1].x >= platformWidth * 3 ||
       canvas.width - enemies[enemies.length-1].x < platformWidth : true)) {
    enemies.push(new Sprite(
      canvas.width + platformWidth % player.speed,
      platformBase - platformHeight * platformSpacer - platformWidth + 1,
      Math.random() > 0.5 ? 'spikes' : 'slime'
    ));
  }
}

/**
 * Game loop
 */
function animate() {
  if (!stop) {
    requestAnimFrame( animate );
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    background.draw();

    // update entities
    updateWater();
    updateEnvironment();
    updatePlayer();
    updateGround();
    updateEnemies();

    // draw the score
    ctx.fillText('Score: ' + score + 'm', canvas.width - 140, 30);

    // spawn a new Sprite
    if (ticker % Math.floor(platformWidth / player.speed) === 0) {
      spawnSprites();
    }

    // increase player speed only when player is jumping
    if (ticker > (Math.floor(platformWidth / player.speed) * player.speed * 20) && player.dy !== 0) {
      player.speed = bound(++player.speed, 0, 15);
      player.walkAnim.frameSpeed = Math.floor(platformWidth / player.speed) - 1;

      // reset ticker
      ticker = 0;

      // spawn a platform to fill in gap created by increasing player speed
      if (gapLength === 0) {
        var type = getType();
        ground.push(new Sprite(
          canvas.width + platformWidth % player.speed,
          platformBase - platformHeight * platformSpacer,
          type
        ));
        platformLength--;
      }
    }

    ticker++;
  }
}

/**
 * Keep track of the spacebar events
 */
var KEY_CODES = {
  32: 'space'
};
var KEY_STATUS = {};
for (var code in KEY_CODES) {
  if (KEY_CODES.hasOwnProperty(code)) {
     KEY_STATUS[KEY_CODES[code]] = false;
  }
}
document.onkeydown = function(e) {
  var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
  if (KEY_CODES[keyCode]) {
    e.preventDefault();
    KEY_STATUS[KEY_CODES[keyCode]] = true;
  }
};
document.onkeyup = function(e) {
  var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
  if (KEY_CODES[keyCode]) {
    e.preventDefault();
    KEY_STATUS[KEY_CODES[keyCode]] = false;
  }
};

/**
 * Request Animation Polyfill
 */
var requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function(callback, element){
            window.setTimeout(callback, 1000 / 60);
          };
})();

/**
 * Show the main menu after loading all assets
 */
function mainMenu() {
  for (var sound in assetLoader.sounds) {
    if (assetLoader.sounds.hasOwnProperty(sound)) {
      assetLoader.sounds[sound].muted = !playSound;
    }
  }

  languageChange();
  $('#progress').fadeOut();
  if (localStorage.hawwugame_lasthighest == null)
   {localStorage.hawwugame_lasthighest = 0; }
  $('#main').fadeIn();
  $('#menu').addClass('main');
  $('.sound').fadeIn();
}

/**
 * Start the game - reset all variables and entities, spawn ground and water.
 */
function startGame() {
  document.getElementById('game-over').style.display = 'none';
  ground = [];
  water = [];
  environment = [];
  enemies = [];
  player.reset();
  ticker = 0;
  stop = false;
  score = 0;
  for (var aaa = 0; aaa < checkPoints.length; aaa++) {
  	if (localStorage.getItem("hawwugame_lasthighest") >= checkPoints[aaa]) {
  		score = checkPoints[aaa];
  	}
  }

 // score = localStorage.getItem("hawwugame_lasthighest");
  platformHeight = 2;
  platformLength = 15;
  gapLength = 0;

  ctx.font = '16px arial, sans-serif';

  for (var i = 0; i < 30; i++) {
    ground.push(new Sprite(i * (platformWidth-3), platformBase - platformHeight * platformSpacer, 'grass'));
  }

  for (i = 0; i < canvas.width / 32 + 2; i++) {
    water.push(new Sprite(i * platformWidth, platformBase, 'water'));
  }

  background.reset();

  animate();

  assetLoader.sounds.gameOver.pause();
  assetLoader.sounds.bg.currentTime = 0;
  assetLoader.sounds.bg.loop = true;
  assetLoader.sounds.bg.play();
}

/**
 * End the game and restart
 */
function gameOver() {
  stop = true;
  

    if (score > localStorage.hawwugame_lasthighest) {
       localStorage.setItem("hawwugame_lasthighest", score);
     }
 
  
  $('#score').html(score);
  $('#game-over').fadeIn();
  assetLoader.sounds.bg.pause();
  assetLoader.sounds.gameOver.currentTime = 0;
  assetLoader.sounds.gameOver.play();
}

var jumpCounter = 0;

$("#jumpbutton").click(function() {
  if (player.dy === 0 && !player.isJumping) {
      player.isJumping = true;
      player.dy = player.jumpDy;
      jumpCounter = 3;
      assetLoader.sounds.jump.play();
    }

    // jump higher if the space bar is continually pressed
    if (jumpCounter) {
      player.dy = player.jumpDy;

    }
     jumpCounter = Math.max(jumpCounter-1, 0);


    player.advance();

    // add gravity
    if (player.isFalling || player.isJumping) {
      player.dy += player.gravity;
    }

    // change animation if falling
    if (player.dy > 0) {
      player.anim = player.fallAnim;
    }
    // change animation is jumping
    else if (player.dy < 0) {
      player.anim = player.jumpAnim;
    }
    else {
      player.anim = player.walkAnim;
    }

    player.anim.update();
}); 


function languageChange(){
  if (localStorage.hawwugame_language == "jp") {
    
    $('.button.play').find('img').attr('src','https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_start_jp.png');
    $('.button.lang').find('img').attr('src','https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_lang_jp.png');
    $('.button.hawwugifts').find('img').attr('src','https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_gifts_jp.png');
    $('.button.credits').find('img').attr('src','https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_credits_jp.png');

    $('#game-over h2').html('悠人は <span id="score"></span> メートル走りました');
    $('#game-over').find('.restart').html('もう一度');
    $('#game-over').find('.back').html('メインメニュー');
    $("#present_title").find('img').attr('src','https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/presentitle_jp.png');

    $("#credits").css('background-image', 'url(https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/credits-bg_JP.png)');

    $('#credits').find(".content").html('<ul><li>イラスト <a href="https://twitter.com/axenyan/">axe☆</a> & <a href="https://twitter.com/_diesyrae">Yaeeee★</a> @ twitter</li><li>構成 <a href="https://twitter.com/_diesyrae">Yaeeee★</a> @ twitter</li><li>各種素材 <a href="https://bayat.itch.io/platform-game-assets">Bayat Games</a></li><li>プログラミング <a href="https://github.com/straker/endless-runner-html5-game">Steven Lambert</a></li><li>翻訳 <a href="https://twitter.com/4ma_0806">しまこ</a> @ Twitter</li><li></li><li>Presented by <a href="https://twitter.com/bundanyaharuto">mochmoch</a> @ Twitter</li></ul>');
     


  }

  else {

    $('.button.play').find('img').attr('src','https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_start.png');
    $('.button.lang').find('img').attr('src','https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_lang.png');
    $('.button.hawwugifts').find('img').attr('src','https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_gifts.png');
    $('.button.credits').find('img').attr('src','https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/menu_credits.png');

    $('#game-over h2').html('Haruto ran <span id="score"></span> meters!');
    $('#game-over').find('.restart').html('Try Again?');
    $('#game-over').find('.back').html('Main Menu');
    $("#present_title").find('img').attr('src','https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/presentitle.png');

    $("#credits").css('background-image', 'url(https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/credits-bg.png)');

    $('#credits').find(".content").html('<ul><li>Character Art: <a href="https://twitter.com/axenyan/">axe☆</a> & <a href="https://twitter.com/_diesyrae">Yaeeee★</a> @ twitter</li><li>Layout: <a href="https://twitter.com/_diesyrae">Yaeeee★</a> @ twitter</li><li>Game Assets: <a href="https://bayat.itch.io/platform-game-assets">Bayat Games</a></li><li>Base Codes: <a href="https://github.com/straker/endless-runner-html5-game">Steven Lambert</a></li><li>Translation: <a href="https://twitter.com/4ma_0806">しまこ</a> @ Twitter</li><li></li><li>Presented by <a href="https://twitter.com/bundanyaharuto">mochmoch</a> @ Twitter</li></ul>');
     

  }
}

/**
 * Click handlers for the different menu screens
 */
$('.credits').click(function() {
	$("#jumpbutton").fadeOut();
  $('#main').fadeOut();
  $('#credits').fadeIn('slow');
  $('#menu').addClass('credits');
});
$('.back').click(function() {
	$("#jumpbutton").fadeOut();
  $('#credits').fadeOut();
  $('#presents').fadeOut();
  $('#game-over').fadeOut();
  $('#lang').fadeOut();
  //$('#canvas').fadeOut();

  
  languageChange();


  $('#main').fadeIn();
  $('#menu').fadeIn();
  $('#menu').removeClass('credits');
   $('#menu').removeClass('hawwugifts');
});

$('.back_movie').click(function() {

  $('#movie').fadeOut();

});





$('.lang').click(function() {
  $("#jumpbutton").fadeOut();
  $('#main').fadeOut();
  $('#lang').fadeIn();
  $('#menu').addClass('lang');
});


$('.lang_eng').click(function() {
  localStorage.hawwugame_language = "en";
  languageChange();
  $('#lang').fadeOut();
  $('#main').fadeIn();
  $('#menu').removeClass('lang');
});

$('.lang_jpn').click(function() {
  localStorage.hawwugame_language = "jp";
  languageChange();
  $('#lang').fadeOut();
  $('#main').fadeIn();
  $('#menu').removeClass('lang');

});

function shakeChest() {
   if (localStorage.getItem("hawwugame_lasthighest") > 1499) {


    $("#chestbutton").css('background-image', 'url(https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/openchest.png)');   
    $("#chestbutton").effect( "shake", { direction: "up", times: 4, distance: 6}, 1000 );
    $('#chestbutton').click(function() {

        $('#movie').fadeIn();

      });

  }

  
}


function loadGifts() {
  for (var aaa = 0; aaa < checkPoints.length; aaa++) {
    if (localStorage.getItem("hawwugame_lasthighest") >= checkPoints[aaa]) {
      $("#gift"+aaa).find(".centered").remove();
      $("#gift"+aaa).find("img").attr("src",realIMG[aaa]);
      $("#gift"+aaa).addClass("unlocked");
    }
  }

$('.unlocked').click(function() {
  arrNum = $(this).attr('id').split("gift")[1];
 $("#present_bigwindow").html('<div class="nama_hadiah"></div><table id="presentnyaho"><tr><td><img src="https://raw.githubusercontent.com/hbdharuto/hbdharuto.github.io/master/imgs/gifts/faceonly_haruto.png" style="width:70px!important"></td><td class="komentarharuto"></td><td class="ucapannya"></td><td class="gambarucapan"></td></tr></table>');
  $("#present_bigwindow").prepend('<img src="'+ giftIMG[arrNum] +'">');
  $("#present_bigwindow .gambarucapan").append('<img src="'+ faceIMG[arrNum] +'" style="width:70px!important">');
  
  if (localStorage.hawwugame_language == "jp") {
    $("#present_bigwindow .ucapannya").append(ucapanArray_JP[arrNum]);
    $("#present_bigwindow .komentarharuto").append(komentarArray_JP[arrNum]);
    $("#present_bigwindow .nama_hadiah").append(hadiahArray_JP[arrNum]);
  }

  else {
    $("#present_bigwindow .ucapannya").append(ucapanArray[arrNum]);
    $("#present_bigwindow .komentarharuto").append(komentarArray[arrNum]);
    $("#present_bigwindow .nama_hadiah").append(hadiahArray[arrNum]);
  }

  
  $("#present_bigwindow").fadeIn();


});

shakeChest();
}


var newtime = 10000;
setInterval(shakeChest, newtime);

$('.hawwugifts').click(function() {
  
  
  loadGifts();



	$("#jumpbutton").fadeOut();
  $('#main').fadeOut();
  $('#presents').fadeIn();
  $('#menu').addClass('hawwugifts');
});


$('.sound').click(function() {
  var $this = $(this);
  // sound off
  if ($this.hasClass('sound-on')) {
    $this.removeClass('sound-on').addClass('sound-off');
    playSound = false;
  }
  // sound on
  else {
    $this.removeClass('sound-off').addClass('sound-on');
    playSound = true;
  }

  if (canUseLocalStorage) {
    localStorage.setItem('kandi.playSound', playSound);
  }

  // mute or unmute all sounds
  for (var sound in assetLoader.sounds) {
    if (assetLoader.sounds.hasOwnProperty(sound)) {
      assetLoader.sounds[sound].muted = !playSound;
    }
  }
});





$('#present_bigwindow').click(function() {

	$(this).fadeOut();

});





$('.play').click(function() {
  $('#menu').fadeOut();
  $("#jumpbutton").fadeIn();
  startGame();
});
$('.restart').click(function() {

  $('#game-over').fadeOut();
  $("#jumpbutton").fadeIn();
  startGame();
});

/*alert($( window ).height() + ", " + $( window ).width());*/

if ($( window ).height() > $( window ).width()) {

  $(".table").addClass("inpotrait");
  
  if ($(window).width() < 360) {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale='+ (1 * ($(window).width() / 360)) +'">');
  }

  else {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
  }
}


assetLoader.downloadAll();
})(jQuery);

document.addEventListener("touchstart", event => {
    if(event.touches.length > 1) {
        console.log("zoom plz stahp");
        event.preventDefault();
        event.stopPropagation(); // maybe useless
    }
}, {passive: false});



/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/

/* Time to preview a preview */
var BASICPTIME = 3000;
var PREVIEWTIME = 3000;
var DELAYTIME = 1500;

 google.charts.load('current', {packages: ['corechart']});


google.charts.setOnLoadCallback(function()
{
  // Set the opacity for the movie overlay (start screen)
  $("#overlaybg").fadeTo(0, 0.1);
  
  $("#movieoverlay").click(function(){
    $(this).fadeOut(function(){
      setTimeout("animatePreviews()", 500); 
    }); 
  });
});

/* Variable to store which preview is currently viewed */
var currentPreview = -1;

/**
* Animates the previews
*/
function animatePreviews() {
  currentPreview++;
  if (currentPreview == $(".preview").length) {$("#end_thing").fadeIn();}
  
  if( $(".preview:eq("+currentPreview+")").hasClass("prevtext") ) {
    animateTextPreview($(".preview:eq("+currentPreview+")"));
  } else if ( $(".preview:eq("+currentPreview+")").hasClass("previmgtotop") ) {
    animateImagePreviewToTop($(".preview:eq("+currentPreview+")"));
  }else if ( $(".preview:eq("+currentPreview+")").hasClass("previmgtobottom") ) {
    animateImagePreviewToBottom($(".preview:eq("+currentPreview+")"));
  } else if ( $(".preview:eq("+currentPreview+")").hasClass("previmgstay") ){
    animateImagePreviewStay($(".preview:eq("+currentPreview+")"));

  }else if ( $(".preview:eq("+currentPreview+")").hasClass("previmgright") ){
    animateImagePreviewRight($(".preview:eq("+currentPreview+")"));

  }

  else { 
    animateImagePreviewLeft($(".preview:eq("+currentPreview+")"));
  }
}

function animateTextPreview(previewElement) {
  PREVIEWTIME = (7/12) * BASICPTIME;
  $(previewElement)
    .fadeIn("slow")
    .animate({
      letterSpacing : "0px"
    }, PREVIEWTIME)
    .fadeOut("slow", function(){
      animatePreviews();
    });
}

function animateImagePreviewLeft(previewElement) {
PREVIEWTIME = (2/3) * BASICPTIME;
  $(previewElement)
    .fadeIn("slow")
    .children('img').animate({ left : "0px"} , PREVIEWTIME);
  
  setTimeout(function() {
          $(previewElement).fadeOut("slow", function(){
      animatePreviews();
    });
       }, PREVIEWTIME+DELAYTIME);
}
function animateImagePreviewRight(previewElement) {
  PREVIEWTIME = BASICPTIME;
  $(previewElement)
    .fadeIn("slow")
    .children('img').animate({ left : "-100px"} , PREVIEWTIME);
  setTimeout(function() {
          $(previewElement).fadeOut("slow", function(){
      animatePreviews();
    });
       }, PREVIEWTIME+DELAYTIME);
}

function animateImagePreviewToTop(previewElement) {
  PREVIEWTIME = (2/3) * BASICPTIME;
  $(previewElement)
    .fadeIn("slow")
    .children('img').animate({ top : "-200px"} , PREVIEWTIME);
  
  setTimeout(function() {
          $(previewElement).fadeOut("slow", function(){
      animatePreviews();
    });
       }, PREVIEWTIME+DELAYTIME);
}

function animateImagePreviewToBottom(previewElement) {
  PREVIEWTIME = (2/3) * BASICPTIME;
  $(previewElement)
    .fadeIn("slow")
    .children('img').animate({ top : "-100px"} , PREVIEWTIME);
  
  setTimeout(function() {
          $(previewElement).fadeOut("slow", function(){
      animatePreviews();
    });
       }, PREVIEWTIME+DELAYTIME);
}

function animateImagePreviewStay(previewElement) {
  PREVIEWTIME = BASICPTIME;
  if ((currentPreview < 2) && (currentPreview > -1)) {PREVIEWTIME = (2/3) * BASICPTIME;}
  $(previewElement)
    .fadeIn("slow")
    .animate({ marginTop : "0px"} , PREVIEWTIME)
    .fadeOut((BASICPTIME/6), function(){
      animatePreviews();
    });
}

function replayTrailer(){
  
  currentPreview = -1;
  setTimeout("animatePreviews()", 200);
  $(".previmgtobottom img").css({ top: '-200px' });
  $(".previmgright img").css({ left: '0px' });
  $(".previmgleft img").css({ left: '-100px' });
  $(".previmgtotop img").css({ top:'0px' });


}

function changeSpeed(newdivider){
BASICPTIME = 3000 / newdivider;
PREVIEWTIME = BASICPTIME;
DELAYTIME = 1500 / newdivider;
}



