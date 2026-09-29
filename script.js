// 題庫資料 (共 150 題)
const questionBank = [
    // 一、 夏荊山生平與哲學思想
    { q: "本專案的合作對象為何機構？", options: ["故宮博物院", "夏荊山文化藝術基金會", "亞洲大學現代美術館", "法門寺"], answer: "夏荊山文化藝術基金會" },
    { q: "財團法人夏荊山文化藝術基金會創立於哪一年？", options: ["1994年", "2004年", "2014年10月", "2019年"], answer: "2014年10月" },
    { q: "夏荊山居士出生於何年？", options: ["1911年", "1923年", "1933年", "1949年"], answer: "1923年" },
    { q: "夏荊山居士的出生地為何處？", options: ["陝西終南", "山東省濰坊市壽光縣", "江蘇修武", "浙江天台"], answer: "山東省濰坊市壽光縣" },
    { q: "夏居士的字與又名分別為何？", options: ["字光樺，又名楠竺", "字楠竺，又名光樺", "字長壽，又名林長壽", "字鍾魁，又名雅仙"], answer: "字光樺，又名楠竺" },
    { q: "夏居士受哪位恩師的影響，開始學習丹青？", options: ["南亭法師", "南懷瑾", "郭味渠", "胡庸"], answer: "郭味渠" },
    { q: "1949年夏居士隨部隊到台灣時，最初派駐於何處？", options: ["台北", "台中", "嘉義", "斗六"], answer: "嘉義" },
    { q: "1954年，夏居士在台中華嚴蓮舍拜誰為師，從此皈依佛門？", options: ["南懷瑾老師", "南亭法師", "杭立武先生", "郭味渠先生"], answer: "南亭法師" },
    { q: "夏荊山的第一幅參賽畫作是哪一幅？", options: ["《蕉窗雙艷》", "《竹林七賢圖》", "《仕女》", "《觀音坐石》"], answer: "《仕女》" },
    { q: "1958年，夏荊山結緣南懷瑾老師後，隨部隊駐居何處？", options: ["嘉義", "斗六", "台北", "台中"], answer: "斗六" },
    { q: "哪位大師成了夏居士勘輿及易經的啟蒙老師？", options: ["郭味渠大師", "南亭法師", "胡庸大師", "南懷瑾大師"], answer: "胡庸大師" },
    { q: "1988年夏荊山發願餘生只畫殊勝佛像畫的契機為何？", options: ["大病初癒", "閉關十月繪製觀音像體會微妙之境", "參訪世界各大博物館", "恩師南懷瑾的指示"], answer: "閉關十月繪製觀音像體會微妙之境" },
    { q: "被譽為「造像版的大藏經」的巨作是哪一部？", options: ["《荊山美學》", "《佛像典藏》", "《夏荊山藝術論衡》", "《歷代神仙通鑒》"], answer: "《佛像典藏》" },
    { q: "2010年，夏荊山的哪一幅作品受北京故宮博物院典藏？", options: ["《千手千眼觀世音菩薩》", "《靜慮觀音》", "《自在觀音菩薩像》", "《大力金剛達摩》"], answer: "《自在觀音菩薩像》" },
    { q: "2018年，夏荊山的哪一幅代表作受中國國家博物館典藏？", options: ["《大力金剛達摩》", "《千手千眼觀世音菩薩》", "《觀自在觀音菩薩》", "《龍王朝觀音》"], answer: "《大力金剛達摩》" },
    { q: "2014年，夏荊山在台灣成立了什麼機構？", options: ["荊山書畫院", "立康美術有限公司", "財團法人夏荊山文化藝術基金會", "夏荊山佛像繪畫藝術研究中心"], answer: "財團法人夏荊山文化藝術基金會" },
    { q: "1965年，夏荊山為拓展日本市場成立了哪家公司？", options: ["夏氏美術", "立康美術有限公司", "荊山文創", "華嚴蓮舍"], answer: "立康美術有限公司" },
    { q: "夏荊山的人生哲理核心為何？", options: ["藝術為體、佛法為用", "佛法為體、藝術為用", "儒家為體、道家為用", "天人合一、順應自然"], answer: "佛法為體、藝術為用" },
    { q: "夏荊山主張「繪畫靠技巧」，而佛畫靠什麼？", options: ["靈感", "修練", "考究", "設色"], answer: "修練" },
    { q: "東方文化看待人與自然、宇宙的和諧關係被稱為什麼？", options: ["虛實相生", "天人合一", "格物致知", "明心見性"], answer: "天人合一" },
    { q: "夏老師於哪一年在洛杉磯辭世？", options: ["2017年", "2018年", "2019年", "2020年"], answer: "2019年" },
    { q: "2009年3月，哪一本畫冊在中國無錫召開的「第二屆世界佛教論壇」首發？", options: ["《荊山美學》", "《夏荊山藝術論衡》", "《佛像典藏》", "《夏學》"], answer: "《佛像典藏》" },
    { q: "中國政府在2009年於文化部成立了什麼中心？", options: ["夏荊山佛像繪畫藝術研究中心", "荊山書畫院", "佛教藝術保護中心", "東方美學研究室"], answer: "夏荊山佛像繪畫藝術研究中心" },
    { q: "夏老師晚年認為德為萬福基礎，何者為修身養性之根基？", options: ["智", "善", "仁", "勇"], answer: "善" },
    { q: "2019年夏老師受聘擔任哪個論壇的永久榮譽會長？", options: ["洛杉磯美術展", "世界佛教藝術論壇", "兩岸文化交流論壇", "故宮博物院修復委員會"], answer: "世界佛教藝術論壇" },
    { q: "夏荊山透過哪一種形式讓觀者領略智慧與義理？", options: ["音樂與舞蹈", "書法與繪畫", "建築與雕塑", "戲劇與詩歌"], answer: "書法與繪畫" },
    { q: "《文化德善論》中，夏荊山以窄長的字體結構和粗細交錯製造出什麼樣的畫面感？", options: ["狂放不羈", "富有氣韻", "鋒芒畢露", "呆板整齊"], answer: "富有氣韻" },
    { q: "夏老師在《文化德善論》中強調何者是民族的靈魂？", options: ["藝術", "文化", "宗教", "歷史"], answer: "文化" },
    { q: "夏老師的書法特色通常是？", options: ["狂草連綿", "筆畫沈穩，少有鋒芒畢露的表現", "刻意飛白，追求枯澀", "追求極致的對稱與齊頭"], answer: "筆畫沈穩，少有鋒芒畢露的表現" },
    { q: "畢業專題將夏老師的作品透過什麼載體進行數位轉型？", options: ["實體畫冊", "2D/3D虛擬空間與線上博物館", "電視紀錄片", "戶外大型看板"], answer: "2D/3D虛擬空間與線上博物館" },

    // 二、 時代運用與工筆畫技法
    { q: "漢代工筆畫的主要功能是什麼？", options: ["客觀寫實", "承載倫理教化功能", "展現皇室品味", "紀錄歷史"], answer: "承載倫理教化功能" },
    { q: "魏晉南北朝時期工筆畫的發展伴隨著什麼的成熟？", options: ["理學影響", "西洋技法", "美學理論", "造紙術"], answer: "美學理論" },
    { q: "畫家顧愷之處於哪一個歷史時期？", options: ["漢代", "東晉", "唐代", "清朝"], answer: "東晉" },
    { q: "東晉畫家顧愷之的哪一幅作品奠定了人物工筆的基礎？", options: ["《蕉窗雙艷》", "《女史箴圖》", "《遊春圖》", "《桃李夜宴圖》"], answer: "《女史箴圖》" },
    { q: "唐代工筆畫的特點為何？", options: ["注重細節寫實與筆法細膩", "粗獷豪放", "大量留白", "純墨不著色"], answer: "注重細節寫實與筆法細膩" },
    { q: "理學影響下的宋代工筆畫，強調細心觀察萬物之理，這被稱為什麼？", options: ["虛實相生", "散點透視", "格物致知", "天人合一"], answer: "格物致知" },
    { q: "明末的工筆畫受到什麼技法的影響，使得造型更準確？", options: ["水墨潑灑", "膠礬固色", "西洋技法", "礦物顏料"], answer: "西洋技法" },
    { q: "清朝乾隆時代，哪兩類工筆畫發展最為蓬勃？", options: ["枯木竹石與水墨山水", "重彩人物與花鳥", "淡彩風俗與界畫", "寫意人物與道釋畫"], answer: "重彩人物與花鳥" },
    { q: "工筆畫又稱為什麼？", options: ["粗筆畫", "寫意畫", "細畫、細筆畫", "院體畫"], answer: "細畫、細筆畫" },
    { q: "工筆畫常採用哪兩種構圖透視法？", options: ["焦點透視與立體構圖", "散點透視與平面構圖", "線性透視與黃金比例", "魚眼透視與S型構圖"], answer: "散點透視與平面構圖" },
    { q: "工筆畫中「花枝俏」屬於哪一種毛筆？", options: ["狼毫勾線筆", "羊毫染色筆", "兼毫筆", "水筆"], answer: "狼毫勾線筆" },
    { q: "「兼毫」筆是由什麼製作而成的？", options: ["純羊毛", "純黃鼠狼毛", "兩種以上的毛組合", "人造纖維"], answer: "兩種以上的毛組合" },
    { q: "工筆畫中用來沾清水將顏色推開的筆稱為什麼？", options: ["染色筆", "勾線筆", "水筆", "罩染筆"], answer: "水筆" },
    { q: "哪一種墨條的特色是黑亮有光澤？", options: ["松煙墨", "油煙墨", "硃砂墨", "石青墨"], answer: "油煙墨" },
    { q: "中國四大名硯之首，以石質細膩、發墨佳異聞名於世的是？", options: ["歙硯", "洮河硯", "端硯", "澄泥硯"], answer: "端硯" },
    { q: "哪一種紙質較硬、光滑，吸水性弱，墨彩不易洇散？", options: ["生宣紙", "絹布", "熟宣紙", "棉紙"], answer: "熟宣紙" },
    { q: "純墨勾勒不著色的工筆設色手法稱為？", options: ["淡彩", "罩染", "分染", "白描"], answer: "白描" },
    { q: "在工筆設色手法中，色調清雅的被稱為什麼？", options: ["重彩", "淡彩", "白描", "烘染"], answer: "淡彩" },
    { q: "形成由濃至淡漸層陰影的技法稱為？", options: ["罩染", "分染", "統染", "烘染"], answer: "分染" },
    { q: "「三礬九染」的目的是什麼？", options: ["讓畫作快速乾燥", "讓畫作色彩層次更豐富且保持乾淨不混色", "讓線條產生粗糙質感", "製造水墨交融的暈染效果"], answer: "讓畫作色彩層次更豐富且保持乾淨不混色" },
    { q: "在已染底色上重覆渲染礦物顏料，增強色彩厚度與凹凸感的技法是？", options: ["罩染", "烘染", "白描", "復勒"], answer: "罩染" },
    { q: "統一明暗的工筆畫技法稱為什麼？", options: ["統染", "分染", "罩染", "立粉"], answer: "統染" },
    { q: "點染花蕊使其產生立體感的技法是？", options: ["烘染", "復勒", "罩染", "立粉"], answer: "立粉" },
    { q: "工筆畫中，設色後重勾邊緣的技法稱為？", options: ["復勒", "立粉", "統染", "起稿"], answer: "復勒" },
    { q: "周圍淡染以襯托主角的技法稱為？", options: ["烘染", "統染", "分染", "罩染"], answer: "烘染" },
    { q: "工筆畫的「起搞」步驟重點在於什麼？", options: ["觀察描繪對象，畫好底稿，決定整幅畫的佈局與基調", "用毛筆沾墨畫出景物輪廓", "層層疊加上色", "塗上膠礬水"], answer: "觀察描繪對象，畫好底稿，決定整幅畫的佈局與基調" },
    { q: "植物顏料在工筆畫中通常用於什麼目的？", options: ["厚塗與局部提亮", "大面積鋪色與渲染", "勾勒輪廓", "製作膠礬水"], answer: "大面積鋪色與渲染" },
    { q: "礦物顏料在工筆畫中通常用於什麼目的？", options: ["厚塗與局部提亮", "大面積鋪色與渲染", "勾勒輪廓", "製作膠礬水"], answer: "厚塗與局部提亮" },
    { q: "膠水在工筆畫中的主要作用是什麼？", options: ["增加墨色光澤", "讓畫作快速乾燥", "乾透後觸摸不掉色，防止底色與多色暈染滲透", "使線條更粗獷"], answer: "乾透後觸摸不掉色，防止底色與多色暈染滲透" },
    { q: "在傳統繪畫中，用來繪製筆直長線（如樑柱、門窗）的特殊畫筆是？", options: ["白雲筆", "勾線筆", "界筆", "水筆"], answer: "界筆" },

    // 三、 畫作賞析（鍾馗、山水人物與佛像）
    { q: "鍾馗在中國圖像傳統中屬於哪一類範疇？", options: ["文人山水", "釋道佛畫", "風俗畫", "花鳥畫"], answer: "釋道佛畫" },
    { q: "在《霜秋雅遊》中，鍾馗身穿什麼顏色的官袍？", options: ["紅衣", "藍衣", "白衣", "紫袍"], answer: "藍衣" },
    { q: "在《霜秋雅遊》中，隨從小鬼正盯著什麼器皿？", options: ["琴爐", "焚燒燻香的器皿", "酒杯", "畫軸"], answer: "焚燒燻香的器皿" },
    { q: "《鍾馗戲鶴圖》中，鍾馗右手持柿子象徵什麼？", options: ["事事如意", "招財進寶", "松鶴延年", "驅邪避凶"], answer: "事事如意" },
    { q: "古代大臣上朝面聖時所持的工具，被鍾馗放入鞋履中的物品是？", options: ["玉笏(奏板)", "寶劍", "摺扇", "拂塵"], answer: "玉笏(奏板)" },
    { q: "《賞花鍾馗》中鍾馗緊握劍鞘隱喻什麼？", options: ["準備降妖除魔", "權力與金錢虛幻不實", "執劍福來", "威嚴氣勢"], answer: "權力與金錢虛幻不實" },
    { q: "《賞花鍾馗》中紅袍鍾馗頭上的巾帽頗似什麼？", options: ["烏紗帽", "斗笠", "頭盔", "皇冠"], answer: "斗笠" },
    { q: "在《鎮宅納福 ‧ 祛邪真君鍾馗》中，鍾馗身旁伴隨的神獸為何？", options: ["蝙蝠", "麒麟", "犬兒", "青獅"], answer: "犬兒" },
    { q: "《鎮宅納福 ‧ 祛邪真君鍾馗》的畫面以什麼色調為主，突顯正氣？", options: ["冷色", "暖色", "黑白", "青綠"], answer: "暖色" },
    { q: "《納福雙壽祛邪圖》中象徵「福祿綿延，好運不斷」的景物是？", options: ["蝙蝠", "兩棵交織的蒼綠松樹", "牡丹花", "瀑布"], answer: "兩棵交織的蒼綠松樹" },
    { q: "哪一幅畫作中鍾馗雙手合十，呈現虔誠祈福的樣態？", options: ["《霜秋雅遊》", "《鍾馗戲鶴圖》", "《福祿雙全》", "《不語》"], answer: "《福祿雙全》" },
    { q: "麒麟集多種動物特徵於一身，下列何者「不是」傳說中麒麟的特徵？", options: ["龍頭", "鹿角", "熊腰", "象牙"], answer: "象牙" },
    { q: "「魁」字由哪兩個字合成？", options: ["鬼和斗", "鬼和王", "神和斗", "魔和斗"], answer: "鬼和斗" },
    { q: "《引福入室》中紅袍的畫法帶有什麼意趣？", options: ["白描畫法", "沒骨畫法", "潑墨畫法", "點彩畫法"], answer: "沒骨畫法" },
    { q: "在《鍾馗》 (CH-00126-XG 不語) 中，小鬼在鍾馗身後緊緊抱著什麼？", options: ["棋盤", "寶劍", "摺扇", "酒壺"], answer: "寶劍" },
    { q: "《不語》中鍾馗的姿態體現了什麼意義？", options: ["拔劍除魔", "觀棋不語真君子", "引福入室", "迎歲納福"], answer: "觀棋不語真君子" },
    { q: "鍾馗在《雅仙鍾馗》中盤坐於哪種樹下凝視？", options: ["蒼松", "翠竹", "梅花樹", "芭蕉"], answer: "梅花樹" },
    { q: "《樹下飲茶》中落款題跋源自夏荊山以何種文體書寫的學佛心得？", options: ["文言文", "梵文", "白話文", "狂草"], answer: "白話文" },
    { q: "《鍾馗》 (CH-00983) 落款「寒霜林似花」象徵在艱困環境中依然能綻放什麼？", options: ["財富與權力", "生命力與美好", "降妖伏魔的力量", "桃花源"], answer: "生命力與美好" },
    { q: "《鍾馗》 (CH-00570) 的落款提到追求真才要經得起什麼的評判？", options: ["萬人惡笑", "千古流芳", "皇帝賜爵", "閻羅王"], answer: "萬人惡笑" },
    { q: "《鍾馗》 (CH-00582) 的落款提到「時常自覺有缺點，心中自然安逸，知進退也是什麼」？", options: ["慈悲", "勇敢", "智慧", "軟弱"], answer: "智慧" },
    { q: "《遊春圖》描繪了哪種對比來呈現國泰民安？", options: ["仙境與凡間", "權貴與平民", "和尚與道士", "高山與平原"], answer: "權貴與平民" },
    { q: "《遊春圖》中，身著黃袍騎白馬的帝王位居畫面的哪裡？", options: ["對角", "邊緣", "中心", "背景"], answer: "中心" },
    { q: "《松林高仕圖》採用了哪種構圖方式？", options: ["S型構圖", "對角線構圖", "一河兩岸式", "散點透視"], answer: "一河兩岸式" },
    { q: "中國山水畫中，運筆如同劈木、表現堅硬稜角岩石的技法稱為？", options: ["披麻皴", "斧劈皴", "雨點皴", "捲雲皴"], answer: "斧劈皴" },
    { q: "《寒夜雅會》與《秋嬉賞菊》展現了極其細膩的什麼畫風？", options: ["仿唐人", "仿宋人", "仿明人", "仿清人"], answer: "仿宋人" },
    { q: "在《秋嬉賞菊》中，哪一種植物與太湖石相融合，情景交融？", options: ["松樹", "芭蕉", "荷花", "菊花"], answer: "芭蕉" },
    { q: "《竹林七賢》中，夏荊山將人物與動線採S型構圖，有什麼效果？", options: ["產生錯覺", "畫面擁擠", "將所有人物的動線環環相扣", "突出背景"], answer: "將所有人物的動線環環相扣" },
    { q: "夏荊山在《竹林七賢》中放大文人與童僕的人物比例是為了突顯什麼？", options: ["遠近透視", "主賓關係", "階級對立", "宗教神聖"], answer: "主賓關係" },
    { q: "《桃李夜宴圖》畫擬哪位詩人的詩句「浮生若夢，為歡幾何」？", options: ["杜甫", "李白", "蘇軾", "白居易"], answer: "李白" },
    { q: "《桃李夜宴圖》中，文人們在什麼花盛開的庭院聚會？", options: ["牡丹", "菊花", "桃花", "梅花"], answer: "桃花" },
    { q: "《揖禮祝壽》以哪個時代的祝壽活動為故事背景？", options: ["漢代", "唐代", "宋人", "明代"], answer: "宋人" },
    { q: "《漁家樂》中，女性的細長遊絲線條原型來自哪個時期的仕女形象？", options: ["唐代", "宋代", "明清", "民國"], answer: "明清" },
    { q: "《漁家樂》表達了夏荊山對現實人生的什麼態度？", options: ["冷漠避世", "關懷與關注", "悲觀絕望", "追求名利"], answer: "關懷與關注" },
    { q: "《拜請九天》活用了南宋哪位畫家的靈活構圖風格？", options: ["馬遠", "夏圭", "李唐", "劉松年"], answer: "馬遠" },
    { q: "《拜請九天》中，持咒請神的道士身穿什麼顏色的袍子？", options: ["白袍", "黑袍", "紅袍", "黃袍"], answer: "紅袍" },
    { q: "觀音菩薩在出家前的身分號稱為？", options: ["悉達多太子", "不眴太子", "善財童子", "龍女"], answer: "不眴太子" },
    { q: "觀世音菩薩未來將於阿彌陀佛入滅後成佛，號為什麼？", options: ["藥師琉璃光如來", "一切光明功德山王如來", "正法明如來", "大日如來"], answer: "一切光明功德山王如來" },
    { q: "《竹鶴觀音》中，背景岩石與竹林構成的意象與哪個佛教聖地有關？", options: ["五台山", "普陀山", "九華山", "峨嵋山"], answer: "普陀山" },
    { q: "夏荊山在《竹鶴觀音》中配置六鶴，這是結合了明清時期的什麼吉祥圖案？", options: ["松鶴延年", "六鶴迎春", "雙鶴送福", "鶴鳴九皋"], answer: "六鶴迎春" },
    { q: "《自在觀音如意得》中，觀音自在坐於岩石上做什麼？", options: ["彈琴", "賞月", "閱覽經書", "觀瀑"], answer: "閱覽經書" },
    { q: "《觀自在觀音菩薩》中白衣觀音雙手結什麼印？", options: ["與願印", "說法印", "禪定印", "降魔觸地印"], answer: "降魔觸地印" },
    { q: "《觀自在觀音菩薩》引喻學人「不識本心，學法何如」？", options: ["學法無益", "必成正果", "走火入魔", "徒勞無功"], answer: "學法無益" },
    { q: "夏荊山在《靜慮觀音》中，對觀音五官及手足使用什麼顏色敷底？", options: ["硃砂", "赭石", "白色", "金粉"], answer: "白色" },
    { q: "《金禧大千觀音像》中，主尊觀世音菩薩腳踏何物乘祥雲而起？", options: ["青獅", "白象", "蓮花", "巨石"], answer: "蓮花" },
    { q: "夏荊山的佛畫造像準確性受到哪一部經典的影響，但又能活用而不呆板？", options: ["《佛說造像量度經解》", "《歷代名畫記》", "《石渠寶笈》", "《金剛經》"], answer: "《佛說造像量度經解》" },
    { q: "《千手千眼觀世音菩薩》原作為哪一個朝代的畫作？", options: ["唐代", "宋代", "明代", "清代"], answer: "宋代" },
    { q: "夏荊山臨摹的《千手千眼觀世音菩薩》長達多少公尺？", options: ["四公尺", "六公尺", "八公尺", "十公尺"], answer: "八公尺" },
    { q: "千手千眼觀世音菩薩是哪一個教派的重要典型化現？", options: ["顯教", "密教", "禪宗", "淨土宗"], answer: "密教" },
    { q: "在《千手千眼觀世音菩薩》的千手千眼間藏有什麼象徵圖示？", options: ["二十四節氣", "黃道十二宮", "八卦圖", "太極圖"], answer: "黃道十二宮" },
    { q: "觀音菩薩在信仰上被視為何種形象？", options: ["無我無私、救濟人", "威嚴降魔", "掌管財富", "判定生死"], answer: "無我無私、救濟人" },
    { q: "《雲啟龍尊聖觀音》中，觀音雙腳各踏青蓮象徵什麼？", options: ["般若智慧空性與大悲福報資糧具足", "降妖除魔", "長生不老", "升官發財"], answer: "般若智慧空性與大悲福報資糧具足" },
    { q: "在《雲啟龍尊聖觀音》中，龍女捧著什麼與善財童子一同朝禮？", options: ["經書", "寶劍", "淨瓶珊瑚珍寶", "蓮花"], answer: "淨瓶珊瑚珍寶" },
    { q: "《釋迦牟尼佛》中，佛陀頭頂的肉髻象徵什麼？", options: ["權力", "財富", "智慧", "壽命"], answer: "智慧" },
    { q: "《聖善陀佛》描繪的是哪一尊佛？", options: ["釋迦牟尼佛", "藥師佛", "阿彌陀佛", "彌勒佛"], answer: "阿彌陀佛" },
    { q: "藥師佛的代表色為何？", options: ["紅色", "黃色", "藍色", "白色"], answer: "藍色" },
    { q: "《藥師琉璃光如來》中，菩薩下方站立的十二大藥叉護法神頭上有什麼標誌？", options: ["生肖標誌", "星宿標誌", "八卦標誌", "梵文標誌"], answer: "生肖標誌" },
    { q: "夏荊山在《藥師琉璃光如來》中創新畫出了什麼，受到清代宮廷裝飾藝術影響？", options: ["祥雲", "龍柱盤繞", "蓮花座", "寶蓋"], answer: "龍柱盤繞" },
    { q: "《大智慧文殊眾神護》畫面最底層描繪的是什麼？", options: ["祥雲", "波濤洶湧的無邊苦海", "蓮花池", "巍峨高山"], answer: "波濤洶湧的無邊苦海" },
    { q: "《文殊菩薩》中，文殊菩薩乘坐於青獅之上，此造像體系源於？", options: ["顯教", "唐密儀軌", "藏傳佛教", "印度神話"], answer: "唐密儀軌" },
    { q: "普賢菩薩在佛教中象徵什麼？", options: ["智慧", "大行(實踐)", "慈悲", "願力"], answer: "大行(實踐)" },
    { q: "普賢菩薩的座騎「六牙白象」中的六牙象徵什麼？", options: ["六道輪迴", "六度波羅蜜", "六字大明咒", "六根清淨"], answer: "六度波羅蜜" },
    { q: "《大力金剛達摩》寶蓋之上有五尊手持不同手印的如來造像，意在呈現禪宗發展出的什麼結果？", options: ["三教合一", "一花開五葉", "萬法歸宗", "六度萬行"], answer: "一花開五葉" },
    { q: "達摩祖師由印度登商船抵達中國，象徵將什麼帶入東土？", options: ["淨土法門", "天竺禪法", "密宗儀軌", "般若經"], answer: "天竺禪法" },
    { q: "達摩祖師在《紅衣達摩祖師》中身後的一道頭光是用什麼顏料勾勒的？", options: ["石青", "硃砂", "泥金", "墨汁"], answer: "硃砂" },
    { q: "半托迦尊者在《羅漢》畫作中呈現什麼動作？", options: ["雙手合十", "雙手高舉伸懶腰", "單手托缽", "結降魔印"], answer: "雙手高舉伸懶腰" },
    { q: "《梅竹雙樂》中，被稱為「鳥界隱士」的是哪種鳥類？", options: ["丹頂鶴", "藍腹鷴", "喜鵲", "鴛鴦"], answer: "藍腹鷴" },
    { q: "夏荊山在《梅竹雙樂》中特以什麼別名作為題款？", options: ["楠竺", "雅仙", "林長壽", "光樺"], answer: "林長壽" },
    { q: "《松鶴延年》中，松樹被視為何種象徵？", options: ["百花之王", "百木之長", "歲寒三友之首", "仙界使者"], answer: "百木之長" },
    { q: "在唐密儀軌中，哪位神祇時常成為觀音的眷屬？", options: ["龍王", "麒麟", "鳳凰", "玄武"], answer: "龍王" },

    // 四、 晚年回饋社會四大面向
    { q: "1993年，夏老師在大病初癒後獲得家人支持，決心將財產與文化學養帶回何處？", options: ["美國", "東方", "歐洲", "日本"], answer: "東方" },
    { q: "夏老師在台灣早期看到許多藝術家生活辛苦，因此發願進行什麼？", options: ["商業拍賣", "無償教學", "建立博物館", "舉辦比賽"], answer: "無償教學" },
    { q: "1994年，夏老師在北京密雲郊外創辦了什麼機構？", options: ["天明宮", "荊山書畫院", "龍興寺", "國清寺"], answer: "荊山書畫院" },
    { q: "夏老師在荊山書畫院中，包辦了貧困學生的哪些費用？", options: ["只有學費", "只有畫具", "食宿與零用錢", "出國機票"], answer: "食宿與零用錢" },
    { q: "學生們在畫院中親切地稱呼夏老師為何？", options: ["大師", "院長", "爺爺", "恩師"], answer: "爺爺" },
    { q: "從1979年開始，夏老師幫助修復無數古寺，下列何者「不包含」在內？", options: ["法門寺大佛殿", "天台山國清寺", "五台山寺廟", "少林寺"], answer: "少林寺" },
    { q: "1996年被評為十大考古發現的佛教造像寶地是哪一座古寺？", options: ["大覺元寺", "龍興寺", "碧山寺", "天明宮"], answer: "龍興寺" },
    { q: "夏老師出資重建山東青州龍興寺，總投資金額高達新台幣約多少？", options: ["1億元", "5億元", "10億元", "15億元"], answer: "15億元" },
    { q: "夏老師早年駐紮在台灣的哪一個地區，對當地的寺廟古蹟修復有深遠影響？", options: ["台北", "台中", "嘉義", "高雄"], answer: "嘉義" },
    { q: "嘉義地區約有百分之七十的寺廟進行古蹟修復時，是運用什麼作為修復基準？", options: ["歷史照片", "夏老師的畫本", "政府規章", "清代建築圖"], answer: "夏老師的畫本" },
    { q: "夏老師帶領弟子耗費十多年心血繪製的5163幅佛畫作品集結成什麼？", options: ["《佛像典藏》", "《大藏經》", "《法華經》", "《華嚴經》"], answer: "《佛像典藏》" },
    { q: "2009年，《佛像典藏》在哪裡舉行了隆重的迎請法會？", options: ["法門寺", "五台山碧山寺", "香港佛教聯合會", "龍興寺"], answer: "五台山碧山寺" },
    { q: "在迎請法會中，由多少名僧眾護持《佛像典藏》至藏經閣供奉？", options: ["100名", "300名", "500名", "1000名"], answer: "500名" },
    { q: "夏老師在哪一年於台灣創辦「財團法人夏荊山文化藝術基金會」？", options: ["1994年", "2004年", "2009年", "2014年"], answer: "2014年" },
    { q: "「荊山經典文創藝術獎」鼓勵全球年輕人將哪些元素進行結合與創新？", options: ["佛學、儒家與東方經典藝術", "西洋油畫與水墨", "動漫與宗教", "建築與雕塑"], answer: "佛學、儒家與東方經典藝術" },
    { q: "基金會為了提攜年輕世代，啟動了哪一項獎學金？", options: ["藝術傑出獎學金", "社會創新培力獎學金", "荊山書畫獎學金", "文化傳承獎學金"], answer: "社會創新培力獎學金" },
    { q: "夏老師辭世前，高齡幾歲仍持續發放獎學金，為年輕學子提供後盾？", options: ["86歲", "90歲", "96歲", "100歲"], answer: "96歲" },
    { q: "影片結尾提到，受光者亦能發光，希望大愛的微光能在彼此手中如何？", options: ["永遠保存", "薪火相傳", "照亮自己", "創造財富"], answer: "薪火相傳" },
    { q: "書齋試煉場屬於哪一個學習層次的檢測？", options: ["記憶層次", "綜合測驗檢測", "應用層次", "評鑑層次"], answer: "綜合測驗檢測" },
    { q: "單元一「溯源•筆尖的初衷」的主要學習目標為何？", options: ["辨別中華傳統文化", "識別工筆畫技法與特色", "探索自我內化", "3D沈浸式體驗"], answer: "識別工筆畫技法與特色" }
];

// 遊戲狀態變數
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// DOM 元素取得
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQNum = document.getElementById('current-q-num');
const finalScore = document.getElementById('final-score');
const feedbackText = document.getElementById('feedback-text');

// 洗牌演算法 (Fisher-Yates)
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// 遊戲初始化
function startQuiz() {
    const shuffledBank = shuffleArray(questionBank);
    selectedQuestions = shuffledBank.slice(0, 20);
    
    currentQuestionIndex = 0;
    score = 0;

    switchScreen(startScreen, quizScreen);
    loadQuestion();
}

// 載入題目
function loadQuestion() {
    const currentQ = selectedQuestions[currentQuestionIndex];
    currentQNum.textContent = currentQuestionIndex + 1;
    questionText.textContent = `Q: ${currentQ.q}`;
    
    optionsContainer.innerHTML = '';
    const shuffledOptions = shuffleArray(currentQ.options);
    
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('btn', 'option-btn');
        btn.textContent = option;
        btn.addEventListener('click', () => selectOption(btn, option, currentQ.answer));
        optionsContainer.appendChild(btn);
    });

    nextBtn.classList.add('hidden');
    submitBtn.classList.add('hidden');
}

// 處理選項點擊
function selectOption(selectedBtn, selectedText, correctAnswer) {
    const allOptions = optionsContainer.querySelectorAll('.option-btn');
    allOptions.forEach(btn => btn.disabled = true);

    if (selectedText === correctAnswer) {
        selectedBtn.classList.add('correct');
        score += 5; // 每題 5 分 (共 20 題，滿分 100)
    } else {
        selectedBtn.classList.add('wrong');
        allOptions.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }

    if (currentQuestionIndex < selectedQuestions.length - 1) {
        nextBtn.classList.remove('hidden');
    } else {
        submitBtn.classList.remove('hidden');
    }
}

// 結算畫面
function showResult() {
    switchScreen(quizScreen, resultScreen);
    finalScore.textContent = score;

    if (score >= 90) {
        feedbackText.innerHTML = "評語：【天人合一 悟道行者】<br>你的慧眼已能看透畫中禪機，願這份通透伴隨你的人生旅途。";
    } else if (score >= 70) {
        feedbackText.innerHTML = "評語：【皇家畫師】<br>你的基本功十分扎實，對歷史脈絡與匠人工具都有深刻的了解。";
    } else {
        feedbackText.innerHTML = "評語：【潛力賞畫學徒】<br>悟道之路需要耐心，請繼續保持對藝術的熱忱與初衷。";
    }
}

// 畫面切換工具
function switchScreen(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    setTimeout(() => {
        showScreen.classList.add('active');
    }, 280);
}

// ================= 金塵墨霧氛圍動態粒子 (Canvas) =================
function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // 產生 35 顆微光金塵粒子
    for (let i = 0; i < 35; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2.2 + 0.6,
            alpha: Math.random() * 0.45 + 0.15,
            speedY: -(Math.random() * 0.35 + 0.12),
            speedX: (Math.random() - 0.5) * 0.25,
            glow: Math.random() * 8 + 4
        });
    }

    function renderParticles() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            if (p.y < -10) {
                p.y = height + 10;
                p.x = Math.random() * width;
            }

            ctx.save();
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(197, 160, 89, ${p.alpha})`;
            ctx.shadowBlur = p.glow;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
            ctx.fill();
            ctx.restore();
        });
        requestAnimationFrame(renderParticles);
    }

    renderParticles();
}

// 綁定事件監聽器與初始化
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});
submitBtn.addEventListener('click', showResult);
restartBtn.addEventListener('click', () => switchScreen(resultScreen, startScreen));

document.addEventListener('DOMContentLoaded', initAmbientCanvas);