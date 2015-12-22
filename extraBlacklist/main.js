window.onload = function() {
  var main = document.getElementsByClassName('text_input')[0];
  String.prototype.occurencesOf = function(char, min, max) {
    min = min || 0;
    max = max || this.length;
    var indx = min-1;
    var ret = [];
    while(this.indexOf(char, indx+1) != -1 && this.indexOf(char, indx+1) <= max) {
      ret.push(this.indexOf(char, indx+1));
      indx = this.indexOf(char, indx+1);
    }
    return ret;
  }
  main.onkeydown = function() {
    main.className = "text_input";
    if(main.value === "Bad Words Detected") {
      main.value = "";
    }
  }
  main.onchange = function() {
    var string = main.value;
    var matches = string.match(/(qr\.net|lemde\.fr|vzturl\.com|vurl\.bz|filoops\.info|tweez\.me|7vd\.cn|dft\.ba|aka\.gr|scrnch\.me|virl\.ws|adcraft\.co|viralurl\.com|viralurl\.biz|prettylinkpro.com|x\.co|crisco\.com|yourls\.org|u\.bb|buzurl\.com|u\.to|twitthis\.com|bc\.vc|vur\.me|tinyarrows\.com|q\.gs|ity\.im|adcrun\.ch|ht\.ly|cur\.lv|qr\.ae|db\.tt|bit\.do|0rz\.tw|1link\.in|1url\.com|2\.gp|2big\.at|2tu\.us|3\.ly|307\.to|4ms\.me|4sq\.com|4url\.cc|6url\.com|7\.ly|a\.gg|a\.nf|aa\.cx|abcurl\.net|ad\.vu|adf\.ly|adjix\.com|afx\.cc|all\.fuseurl\.com|alturl\.com|amzn\.to|ar\.gy|arst\.ch|atu\.ca|azc\.cc|b23\.ru|b2l\.me|bacn\.me|bcool\.bz|binged\.it|bit\.ly|bizj\.us|bloat\.me|bravo\.ly|bsa\.ly|budurl\.com|canurl\.com|chilp\.it|chzb\.gr|cl\.lk|cl\.ly|clck\.ru|cli\.gs|cliccami\.info|clickthru\.ca|clop\.in|conta\.cc|cort\.as|cot\.ag|crks\.me|ctvr\.us|cutt\.us|dai\.ly|decenturl\.com|dfl8\.me|digbig\.com|digg\.com|disq\.us|dld\.bz|dlvr\.it|do\.my|doiop\.com|dopen\.us|easyuri\.com|easyurl\.net|eepurl\.com|eweri\.com|fa\.by|fav\.me|fb\.me|fbshare\.me|ff\.im|fff\.to|fire\.to|firsturl\.de|firsturl\.net|flic\.kr|flq\.us|fly2\.ws|fon\.gs|freak\.to|fuseurl\.com|fuzzy\.to|fwd4\.me|fwib\.net|g\.ro\.lt|gizmo\.do|gl\.am|go\.9nl.com|go\.ign.com|go\.usa\.gov|goo\.gl|goshrink\.com|gurl\.es|hex\.io|hiderefer\.com|hmm\.ph|href\.in|hsblinks\.com|htxt\.it|huff\.to|hulu\.com|hurl\.me|hurl\.ws|icanhaz\.com|idek\.net|ilix\.in|its\.my|ix\.lt|j\.mp|jijr\.com|kl\.am|klck\.me|korta\.nu|krunchd\.com|l9k\.net|lat\.ms|liip\.to|liltext\.com|linkbee\.com|linkbun\.ch|liurl\.cn|ln-s\.net|ln-s\.ru|lnk\.gd|lnk\.ms|lnkd\.in|lnkurl\.com|lru\.jp|lt\.tl|lurl\.no|macte\.ch|mash\.to|merky\.de|migre\.me|miniurl\.com|minurl\.fr|mke\.me|moby\.to|moourl\.com|mrte\.ch|myloc\.me|myurl\.in|n\.pr|nbc\.co|nblo\.gs|nn\.nf|not\.my|notlong\.com|nsfw\.in|nutshellurl\.com|nxy\.in|nyti\.ms|o-x\.fr|oc1\.us|om\.ly|omf\.gd|omoikane\.net|on\.cnn\.com|on\.mktw\.net|onforb\.es|orz\.se|ow\.ly|ping\.fm|pli\.gs|pnt\.me|politi\.co|post\.ly|pp\.gg|profile\.to|ptiturl\.com|pub\.vitrue\.com|qlnk\.net|qte\.me|qu\.tc|qy\.fi|r\.im|rb6\.me|read\.bi|readthis\.ca|reallytinyurl\.com|redir\.ec|redirects\.ca|redirx\.com|retwt\.me|ri\.ms|rickroll\.it|riz\.gd|rt\.nu|ru\.ly|rubyurl\.com|rurl\.org|rww\.tw|s4c\.in|s7y\.us|safe\.mn|sameurl\.com|sdut\.us|shar\.es|shink\.de|shorl\.com|short\.ie|short\.to|shortlinks\.co\.uk|shorturl\.com|shout\.to|show\.my|shrinkify\.com|shrinkr\.com|shrt\.fr|shrt\.st|shrten\.com|shrunkin\.com|simurl\.com|slate\.me|smallr\.com|smsh\.me|smurl\.name|sn\.im|snipr\.com|snipurl\.com|snurl\.com|sp2\.ro|spedr\.com|srnk\.net|srs\.li|starturl\.com|su\.pr|surl\.co\.uk|surl\.hu|t\.cn|t\.co|t\.lh\.com|ta\.gd|tbd\.ly|tcrn\.ch|tgr\.me|tgr\.ph|tighturl\.com|tiniuri\.com|tiny\.cc|tiny\.ly|tiny\.pl|tinylink\.in|tinyuri\.ca|tinyurl\.com|tl\.gd|tmi\.me|tnij\.org|tnw\.to|tny\.com|to\.ly|togoto\.us|totc\.us|toysr\.us|tpm\.ly|tr\.im|tra\.kz|trunc\.it|twhub\.com|twirl\.at|twitclicks\.com|twitterurl\.net|twitterurl\.org|twiturl\.de|twurl\.cc|twurl\.nl|u\.mavrev\.com|u\.nu|u76\.org|ub0\.cc|ulu\.lu|updating\.me|ur1\.ca|url\.az|url\.co\.uk|url\.ie|url360\.me|url4\.eu|urlborg\.com|urlbrief\.com|urlcover\.com|urlcut\.com|urlenco\.de|urli\.nl|urls\.im|urlshorteningservicefortwitter\.com|urlx\.ie|urlzen\.com|usat\.ly|use\.my|vb\.ly|vgn\.am|vl\.am|vm\.lc|w55\.de|wapo\.st|wapurl\.co\.uk|wipi\.es|wp\.me|x\.vu|xr\.com|xrl\.in|xrl\.us|xurl\.es|xurl\.jp|y\.ahoo\.it|yatuc\.com|ye\.pe|yep\.it|yfrog\.com|yhoo\.it|yiyd\.com|youtu\.be|yuarel\.com|z0p\.de|zi\.ma|zi\.mu|zipmyurl\.com|zud\.me|zurl\.ws|zz\.gd|zzang\.kr|\u203A\.ws|\u2729\.ws|\u273F\.ws|\u2765\.ws|\u279E\.ws|\u27A1\.ws|\u27A8\.ws|\u27AF\.ws|\u27B9\.ws|\u27BD\.ws|url\.no|electtrump\.com|trumparmy\.com|trumpair\.com|thinklikeatrump\.com|donaldtrumpbed\.com|donaldtrumpmattress\.com|donaldtrumptea\.com|trumpcoffeebeans\.com|trumptats\.com|donaldtrumpcarpet\.com|trumpluxurycandles\.com|donaldtrumpeyewear\.com|trumpshoesmexico\.com|trumpmattresses\.com|trumpmexicocity\.com|trumportunityknocks\.com|donaldtrumpfootwearmexico\.com|donaldtrumpofficechairs\.com|trumpdoll\.com|trumpsteaks\.com|trumphomecrystalgifts\.com|trumpmexico\.com|donaldtrumpangels\.com|trumpandoj\.com|donaldjtrump\.com|isupporttrump\.com|trumpforthewin\.com|forestonline\.org|aebn\.net|xhamster\.com|empflix\.com|spankwire\.com|tnaflix\.com|tube8\.com|extremetube\.com|mofosex\.com|4tube\.com|egbo\.com|deviantclip\.com|xtube\.com|xvideos\.com|brazzers\.com|filthfreaks\.com|punishtube\.com|ebonytugs\.com|gggdevot\.com|sunrisekings\.com|twistys\.com|adultfriendfinder\.com|virginconfession\.com|hdinternethookups\.com|(lesbian|gay|straight)?(adult|sexy?|hot)(cam|chat|girl|boy)|porn|pron|fetish|blowjob|pussy|masturbate|chaturbate|myfreecams|camster|cock|dick|penis|vagina|cunt|fuc?k|shit|piss|bastard|slut|bitch|ni?gge?r|kkk|boner|whore|anal|oral|asshole|butt|erotic|babe|tits|boob|cocaine|heroin|vulva|clitoris|hardcore|xxx|naked|pwn|faggot|dildo|co[nm]dom|prostitute|paedophile|pee|semen|cum|twat|erect|na[zs]i|orga[sz]m|[jg]izz|hentai|(cig|smoker)[a-z\-_]*(mall|store|outlet|cheap|less|shop)[a-z\-_]*|(mall|store|outlet|cheap|less|buy)[a-z\-_]*(cig|smoker)[a-z\-_]*|smokin4free\.com|cigavette\.com|cigarella\.net|smokersassociation.org|smoker[a-z\-_]*club|horny|(large|mega|massive|cut|trim|shrink|short|long|tiny)[a-z\-_]*(link|url|text)|enlar.gr|megaurl.it|(link|url|text)[a-z\-_]*(large|mega|massive|cut|trim|shrink|short|long|tiny)|adult[a-z\-_]*(sites|content|services|tv|only|entertainment|fun|show|joke))/igm)
    var index;
    if(matches) {
      matches.forEach(function(val, own_index, parent) {
        index = string.indexOf(val);
        if(['hardcoreprawnlawncom','scunthorpe','lightwater','canal'].indexOf(string.substring(
            !string.occurencesOf(' ', 0, index).length?0:string.occurencesOf(' ', 0, index)[string.occurencesOf(' ', 0, index).length-1]+1,
            !string.occurencesOf(' ', index).length?string.length:string.occurencesOf(' ', index)[0]
        ).replace(/(!|\.|,|;)/g, "")) != -1) {
          parent.splice(own_index, 1);
        }
      })
      if(matches.length > 0) {
        main.value = "Bad Words Detected!";
        main.className += " bad";
      }
    }
  }
}
