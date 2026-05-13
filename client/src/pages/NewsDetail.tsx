/**
 * News Detail Page
 */
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar } from "lucide-react";
import SAIFSLogo from "../components/SAIFSLogo";

const newsData: Record<string, {
  date: string;
  title: string;
  content: string;
  images?: string[];
  showHeader?: boolean;
}> = {
  "15": {
    date: "2024-03-13",
    title: "SAIFS华师大智金院｜启航：人工智能与金融的深度融合之旅",
    content: "<div style='text-align: center;'><span style='font-size: 48px; font-weight: bold; color: #4F4FF6; font-family: Georgia, serif;'>01</span> <span style='font-size: 24px;'>学院简介 About SAIFS</span></div><br/>上海人工智能金融学院（简称SAIFS）于2023年在华东师范大学成立，是全球首家围绕人工智能与金融跨界交叉打造的教育和研究机构。SAIFS强调在超越知识点的通识教育的基础上，培养集金融知识、人工智能技术和实践经验于一身的新一代人工智能金融（AI-Fin）领军型卓越人才，并坚持扎根在学术研究的前沿，探索AI在金融中的新应用，驱动AI-Fin的发展。同时，SAIFS致力于与全球的学术机构、金融机构、科技公司和政府部门建立广泛的合作网络，通过推广AI与金融的交叉研究和应用，改善金融服务的效率和质量，为社会创造价值。<br/><br/>在AI-Fin以外，SAIFS还将打造人工智能金融（AI-Fin）研究中心和人工智能伦理与治理（AI-PPE）研究中心。人工智能金融研究中心将开发识别、量化、预测和减轻先进人工智能技术应用系统性风险的先进模型，未来将向政府部门和各大金融机构输出关于AI的内控合规理论与研究成果。而AI-PPE研究中心将致力于推进AI时代的全球哲学-政治学-经济学(PPE)思想前沿问题的研究，并打造一套全新的AI4Social Science教学体系重新激活哲学-政治学-经济学服务现代社会的动能。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/2SAIFS华师大智金院｜启航：人工智能与金融的深度融合之旅_with_images/image2.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><br/><div style='text-align: center;'><span style='font-size: 48px; font-weight: bold; color: #4F4FF6; font-family: Georgia, serif;'>02</span> <span style='font-size: 24px;'>人工智能金融MBA项目 About AI-Fin MBA Program</span></div><br/>在当今数字化和智能化的时代，金融行业正迎来巨大的变革。人工智能技术正在重新定义金融服务、风险管理、投资决策和市场预测等领域。作为中国第一家设立人工智能金融（AI-Fin）MBA课程的高校，我们致力于培养未来的金融领导者和人工智能技术创新者，帮助学生掌握最前沿的技术和行业趋势，成为人工智能与金融跨界的领航员。<br/><br/><div style='text-align: center;'><span style='font-size: 48px; font-weight: bold; color: #4F4FF6; font-family: Georgia, serif;'>03</span> <span style='font-size: 24px;'>人才培养目标 About SAIFS's Educational Goals</span></div><br/><em>英才导向的智能教育，打造具备深厚金融知识和先进人工智能技术的新一代领导者。</em><br/><br/><span style='color: #4F4FF6; font-weight: bold;'>金融与人工智能的深度融合</span><br/>通过专业课程和实践项目，使学生深度理解人工智能技术在金融领域的应用，掌握人工智能技术与金融业务的融合。<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>跨学科学习的整合提炼</span><br/>融合金融、计算机科学、数据科学等多个学科领域的知识，培养学生具备跨学科的视野和思维能力。<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>全球化视野的深度拓展</span><br/>引入纽约大学、哥伦比亚大学等世界一流国际合作院校资源，通过国际化课程设置和交流项目，拓展学生的国际视野，使其具备在全球范围内工作和竞争的能力。<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>通识教育为基础的学习体验</span><br/>以通识教育为基础，为学生提供全面的学习体验，使他们能够跨越多个领域，并拥有扎实的基础知识。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/2SAIFS华师大智金院｜启航：人工智能与金融的深度融合之旅_with_images/image3.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><br/><div style='text-align: center;'><span style='font-size: 48px; font-weight: bold; color: #4F4FF6; font-family: Georgia, serif;'>04</span> <span style='font-size: 24px;'>人工智能金融MBA特色课程 About AI-Fin MBA Program's Courses</span></div><br/><em>打造个性化方向，引领未来金融与人工智能融合之路。</em><br/><br/><span style='color: #4F4FF6; font-weight: bold;'>人工智能及大语言模型通识课</span><br/>由SAIFS院长开设课程并主讲：为学生提供人工智能和大语言模型的全面介绍，深入探讨其在金融领域的应用前景和影响。<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>机器学习/神经网络基础</span><br/>人工智能领域院士指导课程：联合人工智能领域的院士设计课程，深入讲解机器学习和神经网络的基础理论，帮助学生建立深厚的技术基础。<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>人工智能在金融中的应用--华尔街案例集</span><br/>华尔街高管案例课：学习来自华尔街高管和全球最大资产管理公司的实际案例，探索人工智能在金融领域的应用和创新。<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>金融大语言模型(FinLLM)实验室工作坊</span><br/>与哥伦比亚大学同步的上机实践课：学生将与哥伦比亚大学同步进行实验室工作坊，深入探索金融大语言模型的实际操作和应用。<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>人工智能的社会，经济与伦理影响</span><br/>院士和长江学者指导课程：院士和人文领域长江学者等专家联合设计课程，探讨人工智能对社会、经济和伦理的影响，引导学生思考未来发展的方向。<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>人工智能技术在金融中的合规管理</span><br/>金融合规领域国内外专家指导课程：联合金融合规领域的国内外专家设计课程，探讨人工智能技术在金融领域的合规管理，培养学生的法律意识和风险管理能力。<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>人工智能领导力与变革管理</span><br/>国际领导力专家课：学习国际领导力专家的教导，探索人工智能时代的领导力要求和变革管理策略。<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>人工智能时代的创新与创业</span><br/>顶级国际院校创业导师课：由斯坦福大学等一流国际院校的创业导师授课，引导学生在人工智能时代探索创新与创业的机会和挑战。<br/><br/><div style='text-align: right;'>文字提供｜华师大智金院<br/>图片来源｜华师大官网</div><br/><div style='text-align: center;'>联系智金院：saifsadministration@sem.ecnu.edu.cn<br/>华东师范大学(中山北路校区)理科大楼A座5楼，上海人工智能金融学院SAIFS</div><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/2SAIFS华师大智金院｜启航：人工智能与金融的深度融合之旅_with_images/image4.png' alt='' style='max-width: 60%; height: auto;'/></div><div style='display: flex; justify-content: center;'><img src='/avatars/新闻动态/2SAIFS华师大智金院｜启航：人工智能与金融的深度融合之旅_with_images/image5.png' alt='' style='max-width: 60%; height: auto;'/></div>",
    images: [],
    showHeader: true
  },
  "16": {
    date: "2024-03-18",
    title: "常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪",
    content: "<div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image2.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; color: #666; font-size: 14px;'>（图：普林斯顿校友们和华师大学子们与作家彭英之合照）</p><br/>3月16日周六下午，由普林斯顿上海校友会和上海人工智能金融学院联合举办的首场常春藤国际视野系列活动之“普林斯顿校友新书分享会：写给当代人看的丝绸之路”在中北校区的理科大楼三楼顺利举行。智金院推动该系列活动旨在通过常春藤校友们分享他们的人生故事、行业洞见及生活经验，为华师大的学生们展现广阔的国际视野以及跨界人生的无限可能性。<br/><br/>本次活动智金院荣幸地邀请到<span style='color: #4F4FF6; font-weight: bold;'>普林斯顿大学2010届数学系校友、作家彭英之</span>前来分享他的旅行文学作品《丝路北道》。此次分享采用英文进行，共吸引了多名来自上海和杭州的普林斯顿校友及华师大6个不同学院的数名学生参加。该活动纳入华师大第二课堂的“人文素养”模块。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image3.png' alt='' style='max-width: 60%; height: auto;'/></div><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image4.png' alt='' style='max-width: 60%; height: auto;'/></div><br/>作者彭英之在2015年与师兄兼同事一起设计了旅途时间长达一个月的陆路出行计划，并于2017年与同时代创业者、律师、工程师朋友一起整装出发。彭英之既是旅行的亲历者，也是旁观者，从起点西安一直到德黑兰，旅途期间经历了伙伴们的加入与离开，他将沿途的感悟写成了《丝路北道》。<br/><br/>本次分享会由<span style='color: #4F4FF6; font-weight: bold;'>普林斯顿大学2006届经济系校友徐秋瑜</span>担任主持人，并在一段由她和彭英之引人入胜的相互介绍和对话中揭开了序幕。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image5.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; color: #666; font-size: 14px;'>（左：彭英之；右：徐秋瑜）</p><br/>彭英之不仅分享了他的丝路经历、挑战与惊喜以及在旅途中对于跨文化的理解，也分享了他在不同行业角色转换的经历和构建他职业框架的养分来源。他的分享激发了在场听众对旅行的热爱，并向他们展示了如何利用旅行经历在不同领域进行探索和成长。他还讲述了自己的探索旅程如何激发他的跨界思考，并为未来的职业发展做铺垫，以及他是如何从金融领域的佼佼者转变为多元发展的斜杠青年。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image6.png' alt='' style='max-width: 60%; height: auto;'/></div><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image7.png' alt='' style='max-width: 60%; height: auto;'/></div><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image8.png' alt='' style='max-width: 60%; height: auto;'/></div><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image9.png' alt='' style='max-width: 60%; height: auto;'/></div><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image10.png' alt='' style='max-width: 60%; height: auto;'/></div><br/><div style='text-align: center;'><strong style='font-size: 20px;'>听华师大学子们说</strong><br/><em style='color: #666;'>ECNUer's Sharing</em></div><br/><span style='color: #4F4FF6; font-weight: bold;'>经管学院2022级信息管理与信息系统专业倪同学：</span><br/>“这场分享会让我印象最深的地方在于作者的广泛涉猎和从不间断的好奇心。从年轻时抱有单纯的乐趣到为寻求知识及背后的故事，再到通过旅行保持敏锐、跳出舒适区，以保护好奇心和探索欲。他在不同维度上的人生体验分享非常打动我，过程中我不断有‘人生原来还可以这样’的感慨，这也为我以后的选择拓宽了道路。”<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>经管学院2022级旅游管理专业敖同学：</span><br/>“在旅途中，会面临各种挑战和未知，而正是这些经历让作者和他的旅伴们学会适应、学会独立，同时也让他们更加珍惜和感激生活中的点滴。我更值得欣赏的是作者将这一段经历写成文字。”<br/><br/><span style='color: #4F4FF6; font-weight: bold;'>公管学院2022级行政管理专业蒋同学：</span><br/>“作者这本旅行文学作品带我们领略自然的浩瀚绮丽、历史的源远流长，让我们更加积极地去探索生活中的美好与幸福。”<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image11.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image12.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><br/>在对话尾声，彭英之也分享了他对华师大学子们在跨界探索人生方面的建议。“You should try to enjoy life more and pursue things not just for practical reasons but also for the joy and enrichment they bring to your life. This approach helps you endure tough times, like the challenging situations you might face in your career.”（翻译：你应该尝试更多地享受生活，并追求那些不仅仅是出于实际原因，而是因为它们能给你的生活带来欢乐和丰富的事物。这种方法能够帮助你渡过艰难时期，比如你可能在未来职场面临的挑战性情况。）<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image13.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><br/><div style='text-align: right;'>文字撰写和图文编辑｜华师大智金院<br/>审核｜普林斯顿上海校友会，华师大智金院</div><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image14.png' alt='' style='max-width: 60%; height: auto;'/></div><div style='display: flex; justify-content: center;'><img src='/avatars/新闻动态/3常春藤国际视野系列｜普林斯顿校友新书分享会：丝路见闻和跨文化视野下的启迪_with_images/images/image15.png' alt='' style='max-width: 60%; height: auto;'/></div>",
    images: [],
    showHeader: true
  },
  "17": {
    date: "2024-03-19",
    title: "开启人工智能金融新纪元：人工智能金融MBA项目发布会暨2025年MBA入学招生政策发布会",
    content: "随着AI技术的不断突破，我们正站在一场前所未有的产业变革潮头。这一浪潮不仅正在重塑行业生态，更深刻地改变着我们的生活、工作方式，乃至全球经济的底层结构。华师大人工智能金融MBA项目发布会、人工智能时代的经济未来与产业变革圆桌对话暨华师大MBA2025年入学招生政策发布会将于本周日3月24日重磅开启！<br/><br/>本次活动汇聚学术界权威教授与行业内顶尖专家，共同探讨人工智能如何引领经济新潮流，重塑产业结构，以及如何在新一轮科技革命中把握机遇，应对挑战。同时，将隆重发布人工智能金融MBA项目，该项目专注于智能金融领域的创新与发展，致力于培养未来的金融领导者和人工智能技术创新者。<br/><br/>届时，上海人工智能金融学院（SAIFS）创院院长邵怡蕾教授将主持人工智能金融MBA项目的发布仪式，并介绍该项目人才培养目标、项目优势及课程特色等，MBA中心也将为报考同学们讲解2025年招生政策并进行答疑。<br/><br/><div style='text-align: center;'><strong style='font-size: 20px;'>发布会议程</strong><br/><em style='color: #666;'>Conference Agenda</em></div><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/4开启人工智能金融新纪元：人工智能金融MBA项目发布会暨2025年MBA入学招生政策发布会_with_images/images/image3.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; color: #666; font-size: 14px;'>转载自公众号华东师范大学MBA</p><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/4开启人工智能金融新纪元：人工智能金融MBA项目发布会暨2025年MBA入学招生政策发布会_with_images/images/image4.png' alt='' style='max-width: 60%; height: auto;'/></div><div style='display: flex; justify-content: center;'><img src='/avatars/新闻动态/4开启人工智能金融新纪元：人工智能金融MBA项目发布会暨2025年MBA入学招生政策发布会_with_images/images/image5.png' alt='' style='max-width: 60%; height: auto;'/></div>",
    images: [],
    showHeader: true
  },
  "18": {
    date: "2024-03-29",
    title: "创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！",
    content: "<div style='display: flex; justify-content: center; margin-bottom: 16px;'><video src='/avatars/新闻动态/5创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！_with_images/13423139079639702.mp4' controls style='max-width: 60%; height: auto;'></video></div><br/>3月24日周日下午，华东师范大学人工智能金融MBA项目发布会、人工智能时代的经济未来与产业变革圆桌对话暨华师大MBA2025年入学招生政策发布会在普陀校区逸夫楼一楼报告厅圆满举行。华东师范大学经济与管理学院院长殷德生教授，华东师范大学上海人工智能金融学院（SAIFS）创院院长邵怡蕾教授，华东师范大学政治与国际关系学院余南平教授，UCloud创始人兼董事长季昕华先生，华东师范大学经济与管理学院副院长杨勇教授，MBA教育中心执行主任、副研究员欧丽慧老师，MBA教育中心招生负责人潘雨老师应邀出席。发布会由欧丽慧老师主持，现场气氛热烈，高潮迭起。<br/><br/><div style='text-align: center;'><strong style='font-size: 20px;'>人工智能金融MBA项目</strong><br/><em style='color: #666;'>AI-Fin MBA Program</em></div><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/5创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！_with_images/images/image2.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><br/>在人工智能金融MBA项目发布会上，上海人工智能金融学院创院院长邵怡蕾教授详细阐述了学院未来的发展愿景和战略规划。她认为，人工智能技术正在改变金融服务、风险管理、投资决策和市场预测等领域，同时特别强调了人工智能与金融结合的跨学科重要性，并对如何推进这一领域的教学与科研进行了深入展望。上海人工智能金融学院作为全球首家专注于人工智能与金融交叉领域的教育和研究机构，旨在培养具备全球视野、创新能力和社会责任感的领域变革者、领导者和创新者。学院也将承担在人工智能伦理和治理研究领域的使命。<br/><br/><em style='color: #4F4FF6;'>邵院长说，“我们需要在学生心目中种下创新的种子，使他们能够在人工智能加速变革中引领世界前沿。我希望智金院能够培养未来行业的领袖，而这些领袖不仅要精通技术，还需具备深厚的道德责任感。”</em><br/><br/>在发布会中，邵院长引用了包括OpenAI在内的创新开发实例，展示了人工智能技术在跨模态学习能力和复杂逻辑处理能力方面的潜力，以及其在不同领域的知识整合和创新促进上的巨大潜力。此外，她还强调了人工智能对经济社会的影响。邵院长认为，在AI时代，教育需重新塑造，当代教育者应倡导培养学生的跨学科理解能力、创新思维能力和问题解决能力。未来，学院将致力于建立开放且国际化的学习环境，开展一系列国际合作，引进大师课程和实操项目，加强学生的应用能力和全球视野。同时，在与企业合作方面，邵院长指出，“我们计划与企业建立紧密的合作关系，让学生能够在实际工作环境中学习和应用人工智能技术，从而更好地为未来的职业生涯发展做前期充分的准备。”学院将不断探索教育与研究的新路径，共同开启人工智能与金融相互融合发展的新篇章。<br/><br/><div style='text-align: center;'><strong style='font-size: 20px;'>主题演讲分享</strong><br/><em style='color: #666;'>Sharing on Key Speech</em></div><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/5创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！_with_images/images/image3.webp' alt='' style='max-width: 60%; height: auto;'/></div><br/>华师大经济与管理学院院长殷德生教授在主题为<span style='color: #4F4FF6;'>《人工智能、新质生产力与高质量发展》</span>的分享中强调了新质生产力的重要性。他指出，要把握新一轮科技革命和产业变革的关键方向，探索新领域、开拓新市场、增强新动能、塑造新优势，并在未来产业竞争中占据制高点。这要求我们不断优化产业链和供应链，深化数字经济的创新和发展，加强“人工智能+”行动的实施。殷教授强调，中国数字经济发展的战略转变不仅涉及信息通信技术的发展，还包括经济社会各领域的深度融合。我们要培养以数据为核心的新型经济社会发展模式，重视数字经济的发展，规范平台经济，完善数据要素市场。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/5创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！_with_images/images/image4.webp' alt='' style='max-width: 60%; height: auto;'/></div><br/>华师大政治与国际关系学院余南平教授在<span style='color: #4F4FF6;'>《通用人工智能时代的国际政治经济变局》</span>主题分享中，深入剖析了信息技术的飞速发展带给全球的深刻影响。他指出，随着通用人工智能的兴起，我们正见证一个信息升级和工作岗位替换的时代。这一变革不仅仅是技术层面的，更是触及到了生产范式的根本，它要求我们重新定义生产和经营的方式。余教授结合了多个企业案例，生动地展示了如何在实践中应对这些挑战。他分析了企业如何通过采纳新技术来优化流程、提高效率，并在此过程中创造新的就业机会，尽管同时也可能导致某些传统职业的消失。面对未来，余教授认为国际政治经济正经历百年未见的大变局。随着国家间互依加深和全球治理体系进化，人工智能等新兴技术的突破预计将重新塑造国际力量对比，并在政治、经济和安全领域引发重大变革。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/5创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！_with_images/images/image5.webp' alt='' style='max-width: 60%; height: auto;'/></div><br/>UCloud创始人、董事长、上海市人大代表季昕华先生以<span style='color: #4F4FF6;'>《人工智能赋能千行百业》</span>为题，深入探讨了人类生产力的变革，并分析了国内主要AI创业公司的现状。他强调大模型技术在B端市场的快速渗透，并围绕基础模型、行业模型、智能体/机器人以及应用等方面，剖析了AIGC领域的潜在机会。季昕华指出，构建基础模型需要大量高质量数据、核心算法和强大计算资源；而行业模型则具备行业性、私密性、价值性和可持续性四个特点。他还讨论了Agent/机器人的能力、需求及应用场景，强调加速人工智能在各行业的应用转化是推动产业升级的关键。<br/><br/><div style='text-align: center;'><strong style='font-size: 20px;'>MBA项目培养目标</strong><br/><em style='color: #666;'>Introduction on MBA Program's Goals</em></div><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/5创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！_with_images/images/image6.webp' alt='' style='max-width: 60%; height: auto;'/></div><br/>华师大经济与管理学院副院长杨勇教授详细介绍了学校和学院的历史发展及主要成就。华东师范大学是新中国成立后建立的第一所综合性师范大学，也是全国首批16所重点大学之一。经济与管理学院具有悠久的办学传统，其前身可追溯到1924年成立的大夏大学和1925年成立的光华大学的商科。<span style='color: #4F4FF6;'>学院以“培养具有创新能力、国际视野与社会责任感的英才，创造商学新知，推动中国社会经济发展”为使命，致力于“成为世界一流的经济和管理学科重镇”。</span>杨教授强调，近年来学院在国际认证方面取得了显著进展，学院师资力量雄厚，教学体系完善，开设了人力资源与应用心理、投资与资本管理、商业数据分析与数字管理、人工智能金融和通用管理等五大特色方向。此外，业界高管也全面参与到课程中，为学生提供实战经验和行业洞察。最后，杨教授表示，MBA不仅仅是Master of Business Administration，还是beyond administration，欢迎考生们加入华东师大，开启终身学习之旅。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/5创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！_with_images/images/image7.webp' alt='' style='max-width: 60%; height: auto;'/></div><br/>华师大经济与管理学院MBA教育中心执行主任、副研究员欧丽慧老师就华东师大MBA项目的培养内涵展开介绍。她从三位一体的案例教学体系，进阶式实践训练体系，全育人的学生活动平台及多元化的国际交流平台等方面对MBA项目的培养特色和内涵作了全面的解读，特别提到产教融合下校企实践育人体系的构建，闭环式的双创教育体系，以及分类导向的职业发展体系，为学生的创新实践能力培养创设了丰富且高质量的育人平台。在案例教学、实践训练、思政育人及产教融合机制等领域，华东师大MBA先后多次获得上海市教学成果一等奖和二等奖，MBA学生也在全国各类研究生赛事斩获多个特等奖和一等奖，取得了很好的育人效果和社会效应。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/5创新引领，打造世界前沿商业教育｜华东师大人工智能金融MBA项目，全新推出！_with_images/images/image8.webp' alt='' style='max-width: 60%; height: auto;'/></div><br/>华师大经济与管理学院MBA教育中心招生负责人潘雨老师对2025年华东师大MBA最新招生政策进行了全方位介绍，包括报考流程、录取规则、奖学金等。潘老师详细介绍了申请预面试中考核标准、所需材料等，并建议考生尽早申请，早做规划，争取获得优异成绩。<br/><br/><div style='text-align: right;'>文字提供｜华师大MBA、智金院SAIFS<br/>图片来源｜华师大MBA</div><br/><strong style='color: #4F4FF6; text-align: center; display: block;'>上海人工智能金融学院简介</strong><br/><br/><em>上海人工智能金融学院（简称SAIFS）于2023年在华东师范大学成立，是全球首家围绕人工智能与金融跨界交叉打造的教育和研究机构。SAIFS强调在超越知识点的通识教育的基础上，培养集金融知识、人工智能技术和实践经验于一身的新一代人工智能金融（AI-Fin）领军型卓越人才，并坚持扎根在学术研究的前沿，探索AI在金融中的新应用，驱动AI-Fin的发展。同时，SAIFS致力于与全球的学术机构、金融机构、科技公司和政府部门建立广泛的合作网络，通过推广AI与金融的交叉研究和应用，改善金融服务的效率和质量，为社会创造价值。</em><br/><br/><em>SAIFS还将打造人工智能金融（AI-Fin）研究中心和人工智能伦理与治理（AI-PPE）研究中心。人工智能金融研究中心将开发识别、量化、预测和减轻先进人工智能技术应用系统性风险的先进模型，未来将向政府部门和各大金融机构输出关于AI的内控合规理论与研究成果。而AI-PPE研究中心将致力于推进AI时代的全球哲学-政治学-经济学(PPE)思想前沿问题的研究，并打造一套全新的AI4Social Science教学体系重新激活哲学-政治学-经济学服务现代社会的动能。</em>",
    images: [],
    showHeader: true
  },
  "19": {
    date: "2024-04-07",
    title: "以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行",
    content: "<div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/6以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行_with_images/images/image1.png' alt='' style='max-width: 60%; height: auto;'/></div><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/6以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行_with_images/images/image2.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; font-size: 12px; color: #1a56db;'>华东师大智金院第一届理事会第一次会议合影</p><br/>4月3日周三上午，华东师范大学上海人工智能金融学院（简称\"智金院SAIFS\"）第一届理事会第一次会议在普陀校区理科大楼A508会议室召开。华东师范大学校长、智金院理事会理事长钱旭红，党委副书记、智金院理事会副理事长孟钟捷出席会议并讲话，智金院院长、理事会执行理事长邵怡蕾介绍智金院近期工作，会议由经济与管理学院党委书记、智金院理事会理事岳华主持。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/6以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行_with_images/images/image3.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; font-size: 12px; color: #1a56db;'>岳华主持会议</p><br/>经济与管理学院院长殷德生全面汇报了依托经济与管理学院的校管科研平台上海人工智能金融学院的筹建过程和功能定位，强调在人工智能和新一轮科技革命浪潮下发展人工智能金融学科，是增强金融服务实体经济能力、服务上海国际金融中心新一轮建设的重要引擎。殷德生院长就打造人工智能金融交叉学科高地提出了具体规划，开设人工智能金融研究生学位点，强化与政府部门、行业巨头等在人工智能金融领域深化合作，全面实施人工智能+金融、人工智能+管理等学科提升行动，聚焦人工智能金融大语言模型实验室建设和系列垂类大模型产品的发布，为学校\"数智跃升\"计划贡献力量。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/6以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行_with_images/images/image4.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; font-size: 12px; color: #1a56db;'>殷德生介绍智金院筹建工作情况</p><br/>智金院院长邵怡蕾重点介绍学院近期工作情况。在智金院组织架构方面，将更好发挥理事会决策咨询作用，赋能智金院建设发展。智金院将设立由海内外专家学者组成的学术委员会，为智金院学术发展提供指导和支持。另外，智金院将设立专项基金，推进学院未来的建设和人工智能金融学科领域的创新发展。<br/><br/>邵怡蕾还详细介绍了即将在5月31日至6月1日于华东师大普陀校区举办的2024SAIFS学术年会。本次学术年会的主题为\"新生：人工智能与金融世界的对话\"，学院将邀请来自4大洲的18位重磅嘉宾，设立3大主题，共计18个主题报告和3场圆桌论坛。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/6以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行_with_images/images/image5.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; font-size: 12px; color: #1a56db;'>邵怡蕾介绍智金院组织架构及近期工作</p><br/>在理事会成员讨论智金院工作过程中，大家围绕人工智能金融学位点建设拓展、人工智能金融学位项目招生、人才引进、实验室建设以及学术年会等事宜开展了交流，理事会成员为智金院建设发展积极建言献策。<br/><br/>研究生院副院长杨福义对智金院推动建立交叉二级学科学位点工作表示支持，同时对人工智能金融MBA项目的交叉性和特色性表示赞同。在未来发展规划方面，华东师范大学发展规划部部长段纯刚充分肯定智金院的规划方向和工作思路。在人才引进工作方面，华东师范大学人事处处长濮晓龙提出相关建议。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/6以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行_with_images/images/image6.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; font-size: 12px; color: #1a56db;'>自左向右：杨福义、段纯刚、濮晓龙讲话</p><br/>在外专来访方面，华东师范大学国际交流处副处长周勇指出智金院未来可申请高端外专项目。华东师范大学科技处处长杨海波认为，智金院未来可考虑建设新型研发机构。此外，华东师范大学人文与社会科学研究院院长吕志峰对建设\"人工智能+人文\"省部级实验室也提出了宝贵意见。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/6以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行_with_images/images/image7.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; font-size: 12px; color: #1a56db;'>自左向右：周勇、杨海波、吕志峰、吴冠军讲话</p><br/>在会议总结环节，华东师范大学党委副书记、智金院理事会副理事长孟钟捷首先肯定了智金院邵怡蕾院长作为人工智能金融领域运营型人才，为管理工作带来了新面貌。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/6以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行_with_images/images/image8.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; font-size: 12px; color: #1a56db;'>孟钟捷讲话</p><br/>最后，华东师范大学校长、智金院理事会理事长钱旭红作总结讲话，他高度评价智金院建设规划，并对经济与管理学院给予智金院建设的支持予以肯定。他强调，在快速变革的人工智能时代，针对人工智能金融领域，人才评价体系亟需更新。<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/6以问题为导向，以创新为根本｜华东师大智金院第一届理事会第一次会议顺利举行_with_images/images/image9.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; font-size: 12px; color: #1a56db;'>钱旭红作总结讲话</p><br/>据悉，学校于2023年批准成立的华东师范大学上海人工智能金融学院，作为科研型新型学院，将通过系统整合相关力量，赋能经济管理等学科实现跨越式发展。此次学校上海人工智能金融学院第一届理事会第一次会议的顺利召开也是进一步深化举措推动智金院建设的一项重要工作。<br/><br/><div style='text-align: right;'>图文提供｜华师大智金院SAIFS、华师大经管学院</div><br/><div style='text-align: center;'><strong style='color: #4F4FF6;'>附：华东师范大学上海人工智能金融学院</strong><br/><strong style='color: #4F4FF6;'>第一届理事会名单</strong><br/><br/>理事长：钱旭红<br/>副理事长：孟钟捷<br/>执行理事长：邵怡蕾<br/><br/>理事（按姓氏笔画排序）：<br/>吕志峰　杜震宇　杨海波　吴冠军<br/>吴　健　张桂戌　邵怡蕾　岳　华<br/>孟钟捷　段纯刚　钱旭红　殷德生<br/>唐玉光　濮晓龙</div>",
    images: [],
    showHeader: true
  },
  "14": {
    date: "2024-03-13",
    title: "U7国际视野系列 | 普林斯顿校友新书分享会：写给当代人看的丝绸之路",
    content: "<div style='text-align: center;'><strong>普林斯顿上海校友会 x 上海人工智能金融学院 <span style='color: #4F4FF6;'>新书分享会</span></strong></div><br/>讲座语言：英文<br/>时间：3月16日周六 2:00-4:30 PM<br/>地点：上海市普陀区中山北路3663号理科大楼3楼，华东师范大学上海人工智能金融学院<br/><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/1U7国际视野系列 _ 普林斯顿校友新书分享会：写给当代人看的丝绸之路_with_images/image2.png' alt='' style='max-width: 60%; height: auto;'/></div><strong>简介</strong><div style='border: 1px dashed #ccc; padding: 12px; margin-bottom: 16px; border-radius: 4px;'>2015年作者彭英之与师兄兼同事一起设计了时长为一个月的陆路出行计划，2017年出发，从西安抵达德黑兰，并将这段经历写成《丝路北道》，将沿途当代见闻与历史交织，以人物为核心展开故事，既是旁观者，又是亲历者。同时代创业者、律师、工程师朋友在途中加入，又在途中离开，构成了一部带着公路小说质感的非虚构作品。</div><br/><strong>作者和主持人简介</strong><div style='border: 1px dashed #ccc; padding: 12px; margin-bottom: 16px; border-radius: 4px;'><strong>作者彭英之</strong>毕业于普林斯顿大学数学系，现为一家全球知名量化交易机构的中国业务负责人，有译著《妙思统计》。他同时是上海好戏信息技术有限公司合伙人，制作电影《Some Freaks》等入选第二十届上海国际电影节。<strong>主持人徐秋瑜</strong>毕业于普林斯顿大学经济系和哈佛商学院，现为电影制片人。在华尔街操盘数年后转投文娱产业，曾任好莱坞最大的经纪公司Creative Artists Agency经纪人兼跨境业务负责人，代理艺人包括林志玲，卢靖姗，昆凌等。</div><br/><strong>名家荐语</strong><div style='border: 1px dashed #ccc; padding: 12px; margin-bottom: 16px; border-radius: 4px;'>几个不同文化背景的年轻人，结伴重走丝绸之路。行前有研究，有预案；行中有观察，有应对；行后有感悟，有思考。他们的钩沉和体验使悠远的丝路变得邻近，古老的文化变得年轻。他们的叙述还展现了当今和未来。——葛剑雄（复旦大学中国历史地理研究所教授）沿着丝绸之路探访文明的当下和过往。在现代记忆的迷雾中，以活泼且富有智慧的语言雕刻出一个个历史与现实对话的空间。《丝路北道》为\"丝绸之路\"留下了一份属于当代的记录。缓慢行走中的身体，既是历史与当下对话的载体，也是回忆与见证的媒介，更是抗拒速度和效率的自我觉解。本书在行走、体验和思考的生命律动中，激活了我们对异域的好奇以及壮游的梦想。——顾春芳（北京大学艺术学院教授）</div><br/><strong>分享会介绍</strong><br/><strong>切入点</strong><div style='border: 1px dashed #ccc; padding: 12px; margin-bottom: 16px; border-radius: 4px;'>作者将在轻松互动的氛围中与读者分享：1. 丝路旅程 - 计划攻略，寻找旅伴，旅程上的见闻与对古今政治经济历史的人文思考。2. 写作旅程 - 从写给自己的旅行日志到面向读者的出版刊物，从传统意义的游记到\"带公路小说质感\"的非虚构作品。3. 人生旅程 - 金融学霸到斜杠青年的转型，通过大学教育、工作经历和不同人生体验不断拓展人生的宽度。</div><br/><strong>内容</strong><div style='border: 1px dashed #ccc; padding: 12px; margin-bottom: 16px; border-radius: 4px;'>主要分为四个部分：作者介绍、作者对话、观众互动、新书签售</div><br/><div style='display: flex; justify-content: center; margin-bottom: 16px;'><img src='/avatars/新闻动态/1U7国际视野系列 _ 普林斯顿校友新书分享会：写给当代人看的丝绸之路_with_images/image3.png' alt='' style='max-width: 60%; height: auto;'/></div>",
    images: [],
    showHeader: true
  },
  "11": {
    date: "2026-05-08",
    title: "文理交叉跨学科培育项目 | 汤傲成助理教授：《AI职业暴露与劳动力市场重构——多维异质性分析与多智能体动态仿真》",
    content: `以大语言模型为核心的生成式人工智能技术自2022年底以来快速扩散，深刻改变了全球劳动力市场的任务分工结构。在此背景下，<strong>智金院助理教授汤傲成撰写的《AI职业暴露与劳动力市场重构——多维异质性分析与多智能体动态仿真》</strong>入选华东师范大学文理交叉跨学科培育项目。本项目旨在构建系统刻画人工智能对就业结构影响的多维分析框架，重点揭示高暴露与低暴露岗位群体之间的结构性分化机制及其对就业结构转型的深层含义，为相关政策制定提供基于扎实实证的科学依据。`,
    images: [
      "/avatars/新闻动态/文理交叉跨学科培育项目 _ 汤傲成助理教授：《AI职业暴露与劳动力市场重构——多维异质性分析与多智能体动态仿真》_with_images/image2.png"
    ],
    showHeader: true
  },
  "12": {
    date: "2026-05-08",
    title: "精品力作培育项目 | 邵怡蕾教授：《硅基经济学——面向AGI时代的中国自主经济学理论体系建构》",
    content: `当下，建立在西方新古典经济学碳基假设之上的既有理论框架已难以有效解释AGI带来的深层冲击，中国在AGI经济学领域也面临自主理论体系的缺位。在此背景下，<strong>智金院邵怡蕾教授主持撰写的《硅基经济学——面向AGI时代的中国自主经济学理论体系建构》</strong>入选华东师范大学中国自主知识体系精品力作培育项目。项目将以此为契机，致力于建立硅基经济学基础理论框架，为中国AGI时代的政策制定提供理论依据，并为构建AGI时代中国自主经济学知识体系奠定学科基础。`,
    images: [
      "/avatars/新闻动态/精品力作培育项目 _ 邵怡蕾教授：《硅基经济学——面向AGI时代的中国自主经济学理论体系建构》_with_images/image2.jpeg"
    ],
    showHeader: true
  },
  "13": {
    date: "2026-03-24",
    title: "华东师范大学校长马余刚院士一行调研上海人工智能金融学院",
    content: `2026年3月24日上午，华东师范大学校长、中国科学院院士马余刚率队赴上海人工智能金融学院（SAIFS）开展专项调研，副校长雷启立、学术委员会秘书长唐玉光陪同调研。学术委员会、发展规划部、研究生院、财务处、科技处、人文与社会科学研究院、人事处、国际合作与交流处等职能部门负责人参加调研。座谈会在中北校区理科大楼举行，由学院院长助理汤傲成主持。

调研座谈会上，学院院长邵怡蕾作"智金院近期工作情况与学院'十五五'规划报告"，全面汇报了学院自2024年5月成立近两年来的发展历程与核心成果。报告重点展示了学院在构建"硅基经济学"自主知识体系、推进与中国农业银行上海市分行等的产学研合作、发布"全球金融科技中心发展指数（GFTCI）"与"全球AI金融科技中心指数（GAIFC）"、深度参与2025世界人工智能大会（WAIC）等标志性成果。同时，报告对学院"十五五"期间聚焦高级别国际合作、深化"硅基经济学"理论研究、创新人才培养等重点工作进行了规划与展望。经济与管理学院党委书记岳华及学院班子成员参与交流。

调研交流环节，与会领导还点评了智金院学生创业团队的"智能体咖啡"项目，亲身体验了学院的创新创业氛围。

马余刚校长在听取汇报后，对上海人工智能金融学院在成立不到两年内取得的成绩予以肯定。面向未来，希望学院进一步聚焦人工智能与金融交叉领域的前沿科学问题与国家战略需求，不断强化自身特色，深化有组织科研，整合校内外资源。他鼓励学院师生继续凝心聚力，力争在经济学理论体系构建、高级别国际合作项目、重大产学研项目及拔尖创新人才培养等方面，产出一批有影响力的标志性成果，为服务国家新质生产力发展和上海国际金融中心建设发挥积极作用。`,
  },
  "2": {
    date: "2026-03-18",
    title: "你的工作，AI还需要多久才能接手？",
    content: `上周，Andrej Karpathy（特斯拉前 AI 总监）给 342 个美国职业打了 AI 替代风险分，高暴露岗位涉及工资总额高达 3.7 万亿美元。马斯克转发后，网站 6 小时后因流量过大删库，迅速在 AI 圈刷屏。我们团队用了48 小时，做了一个中国版。结果出乎意料：中国劳动力平均AI 暴露度只有 2.7 分（美国为 4.9 分）。77% 的就业人口目前处于极低暴露区间，但是高暴露岗位涉及工资总额:7.1万亿元人民币。这并不代表安全，而是意味着我们拥有一个"暂时的缓冲期"。

在过去的48 小时里，我们从国家统计局、卫健委、教育部、交通运输部等十余个官方来源，重新构建了一套中国劳动力数据，覆盖42 个代表性职业、4.2 亿就业人口。随后，我们使用大语言模型对每个职业进行了AI 暴露度双视角评分：

近期实际暴露度：基于中国目前的AI 实际渗透率，评估到 2027 年的真实就业冲击。

理论上限暴露度：假设技术完全成熟，评估5-10 年后的替代天花板。

关于数据可信度：我们同时用两个模型进行了交叉验证。结果显示，在67% 的职业上模型存在分歧，在 4 个职业上甚至出现了 2 分以上的差异。这说明，对于"AI 对职业的影响"，即使是最先进的模型也没有绝对确定性的答案。因此，我们对每个数据标注了置信度（H/M/L），部分基于估算的就业量在图中用 ~ 进行了明确标注。

最终，我们产出了这张交互式图谱。矩形的面积是就业体量，颜色深浅是AI 渗透程度，右上角的圆点是技术可行上限。你可以点击任何一个格子，查看该职业的详细评分和打分逻辑。

如何体验：点击文末【阅读原文】，即可直达交互式数据地图。

为什么这个项目与众不同？市面上关于"AI 会取代哪些工作"的文章一抓一大把，但大部分都有一个缺陷：直接把美国的数据套在中国头上。中国劳动力市场的结构与美国有着根本性的差异：1.67 亿农业从业者、4550 万建筑工人、3000 万家政服务员……这些体力密集型的庞大群体，在中国就业版图里的权重远高于美国。

这就是为什么你会在这张图里看到一个反直觉的结论：中国就业加权的平均AI 暴露度（2.7分），远低于美国同口径数据。这并非因为中国的AI 发展慢，而是中国的就业结构决定了——大部分人从事的工作，AI 短期内根本无从下手。

我们还做了另一件别人没做的事：把"理论可能"和"当前现实"拆开来打分。不管是Karpathy 的原版，还是 Anthropic 的报告，大多采用单一分数。Anthropic 自己也承认：Computer & Math 类职业的理论 AI 覆盖率高达 94%，但实测只有 33% 的工作任务实际使用了 AI。这个差距，才是真正值得关注的地方。

下一步与开源计划 本项目的代码、数据、打分Prompt 已在 GitHub 全面开源。我们计划每季度更新就业和薪资数据，每年重新进行 AI 暴露度评估。

在线体验图谱 点击文末【阅读原文】直接访问，或复制下方链接至浏览器：https://saifs-aihub.github.io/ChinaJob/ChinaAIExposure.html

开源项目地址 https://github.com/SAIFS-AIHub/ChinaJob

如果你发现数据有误，欢迎通过GitHub Issues 提交；如果你对某个职业有一手信息，也欢迎直接在后台留言联系我们。

#今日互动# 你觉得AI 对你所在行业的影响，是被高估了，还是被低估了？点开图谱找到你的职业，在评论区和我们聊聊你的看法。

团队信息 作者：郝牧青 机构：华东师范大学人工智能金融学院（SAIFS） 引用参考：郝牧青, 胡忠博, 吴宗翰, 邵怡蕾 (2026). 中国职业AI暴露度分析. SAIFS. 数据版本：V1 灵感来源：Andrej Karpathy · AI Exposure of US Job Market；Anthropic 劳动力市场报告（2026） 敬请标明出处· 欢迎分享至朋友圈`,
  },
  "3": {
    date: "2026-03-04",
    title: "邵怡蕾｜AI改写历史终结：从技术-治理双曲线到人工智能素养与人文素养并进的双框架",
    content: `本期精彩华东师范大学学报（教科版）2026年第3期目录人工智能时代的教育转型赵勇, 尼尔·金斯顿, 里克·金斯伯格｜人工智能时代教育研究的死亡与重生：问题与前景AI改写"历史终结"：从技术–治理双曲线到人工智能素养与人文素养并进的双框架邵怡蕾华东师范大学上海人工智能金融学院

摘要：人工智能正在重启被福山宣告终结的历史。以"技术–治理"双曲线为核心框架展开分析，可以发现技术指数攀升与治理线性迟滞之间存在"合法性鸿沟"，而弥合这一鸿沟是应对全球危机的关键。AI驱动的当今社会正进行三大结构性变革：意识形态竞争从"理念–制度"转向"技术–治理"赛道；算力、数据与智能成为重塑国家能力的三大"政治顺差"；个体陷入"最后之人"与"被预测之人"的双重困境。由此产生的解释、规范与秩序的三重缺口，亟须人文社会科学与教育的系统性回应。基于拉图尔的行动者网络理论，可发现教育承担着双重使命：培育人工智能素养以实现人机协同，重建人文素养以赋予公民审计算法、质疑决策、参与治理的能力。唯有双轨并进，方能植入社会纠偏韧性，重构人机共生时代的信任网络与合法性。

关键词：人工智能; 硅基经济学; 政治盈余; 技术–治理双曲线; 人工智能素养

本文发表在《华东师范大学学报（教育科学版）》2026年第3期 #人工智能时代的教育转型 栏目

作者简介 邵怡蕾，教授，华东师范大学上海人工智能金融学院院长，华东师范大学上海人工智能金融产业研究院及孵化器主任，联合国大学-华东师范大学人工智能金融联合研究中心主任，普林斯顿大学计算机科学博士。

目录 一、导论："历史终结"的再审与AI变量 二、AI技术带来的三大奇点性变革：从意识形态回潮到个人境况再造 三、"技术–治理"双曲线的张力空间：构建AI时代的信任 四、算法合宪性（algorithmic constitutionalism）：从合法性新标尺到"信任"网络 五、人工智能教育（AI Literacy）与人文素养教育（Humanistic Literacy）的双重责任 六、教育范式的结构性挑战：人工智能素养与人文素养并进的双框架

一、导论："历史终结"的再审与AI变量 自2022年11月30日ChatGPT问世以来的这段时间，既是AI作为突破性技术井喷的时刻，也是AI全面嵌入社会的关键性奇点时刻：以ChatGPT和DeepSeek为代表的基础模型迅速在全球普及，大模型的推理与生成成本每三个月都会骤降，全产业链开放的智能嵌入全面提速。在美国，白宫于 2025 年发布了America's AI Action Plan，其中提出 90 多项政策举措，涵盖三大支柱：加速创新、建设本土 AI 基础设施以及在外交与安全中保持领导地位（美国白宫，2025）。在我国，2025 年 8 月国务院印发《关于深入实施"人工智能+"行动的意见》，提出要大力发展"智能原生技术、产品和服务体系"，培育智能原生企业，探索全新商业模式，催生智能原生新业态（中华人民共和国国务院，2025）。在 联合国层面，2024 年 3 月联合国大会一致通过首份全球性人工智能决议，强调保护个人数据、监控 AI 风险与保障人权（联合国，2024）。

然而，全球、全社会、全民AI化的目下却也是"合法性断裂"再次浮现的思想真空节点。1992年，福山在《历史的终结与最后之人》一书中宣称，自由民主制度在冷战后的胜利，标志着人类意识形态演化的终点——不再有对抗其正当性的替代选项（Fukuyama，1992）。在这个意义上，我们都已是"最后之人"。 这一判断自提出以来就不断遭遇挑战与更新：亨廷顿在《文明的冲突》（Huntington, 1996）中指出，冷战后世界的主要矛盾并非自由民主的普世化，而是文明、宗教与文化之间的深层裂痕。与此同时，舒穆尔·艾森施塔特（Eisenstadt, 2000）提出"多元现代性"框架，强调现代性并非单一路径；查尔斯·泰勒（Taylor, 2004）则通过"社会想象"的概念进一步揭示，不同文明可以依据各自的文化基础与价值观，构建各具特色的现代社会秩序。

进入 21 世纪后，批判理论与政治经济学领域的学者进一步揭示了新自由主义秩序的危机。大卫·哈维（Harvey, 2005）指出，新自由主义全球化并未带来制度巩固，反而加剧了不平等与社会撕裂。2008 年金融危机、欧美民粹主义浪潮以及全球反全球化运动，都在事实层面动摇了"自由民主作为终点"的论断。穆克（Mounk, 2018）与莱维茨基、齐布拉特（Levitsky, 2018）更是直言，自由民主正在经历衰退，其内部合法性正遭受侵蚀。同时，非西方世界的崛起也提出了制度替代的可能。`,
  },
};

export default function NewsDetail() {
  const params = useParams<{ id: string }>();
  const news = newsData[params.id];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [params.id]);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display text-foreground mb-4">新闻未找到</h1>
          <Link href="/news" className="text-primary hover:underline">
            返回新闻动态
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              返回新闻动态
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <Calendar size={16} className="text-primary" />
              <time className="text-sm text-primary font-medium">{news.date}</time>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-8 leading-tight">
              {news.title}
            </h1>

            <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-transparent mb-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="glass-card rounded-2xl p-8 lg:p-12">
                {news.showHeader && (
                  <div className="flex items-center justify-center gap-4 mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <SAIFSLogo className="h-16 w-auto" />
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">Shanghai AI-Finance School, Ecnu</p>
                        <p className="text-lg font-bold text-gray-800">华东师范大学上海人工智能金融学院</p>
                      </div>
                    </div>
                  </div>
                )}
                <p className="text-base text-foreground leading-relaxed whitespace-pre-line mb-8" dangerouslySetInnerHTML={{ __html: news.content }} />
                {news.images && news.images.length > 0 && (
                  <div className={`grid gap-6 mt-8 ${news.images.length === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {news.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className={news.images.length === 1 ? 'w-full max-w-2xl' : ''}
                      >
                        <img
                          src={image}
                          alt={`图片 ${index + 1}`}
                          className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
