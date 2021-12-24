import './MainPage.css'
import Header from "./Header/Header";

function MainPage() {
    return (
        <>
            <div className={'container-fluid p-0 main'}>

                <div className="col-md-5 ms-5">
                    <p className={'text text-center'}>
                        Abdukarim Mirzayev
                        bilan storytelling kursi...

                        <hr/>

                        <span>
                        Ushbu kurs yordamida jozibali gapirish, sahnada va kamera qarshisida hayajonlanmaslik,
                        vizual kompozitsiya va ovozlashtirish sirlarini bilib olasiz.
                        <button>Guruhga yozilish ➡</button>
                    </span>
                    </p>
                </div>
            </div>
            <div className="col-md-12 videoBox bg-dark">
                <div className="box">
                    <iframe width="100%" height="610" src="https://www.youtube.com/embed/QE4IxoYxlM8"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>

            <div className="col-md-12 textCourse text-center p-5 text-white">
                <div className="row ">
                    <div className="col-md-4">
                        <h1>Kurs
                            <br/>
                            davomiyligi 1 oy</h1>

                    </div>
                    <div className="col-md-4">
                        <h1>Kursda
                            <br/>
                            darslar soni 8ta</h1>
                    </div>
                    <div className="col-md-4">
                        <h1>Kurs
                            <br/>
                            bahosi 1 mln so'm</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-12 bg-dark">
                <div className="container text-white p-1">
                    <div className="row">
                        <div className="col-md-6 p-3 texts">
                            <h4>-01 dars</h4>
                            <h2>Storytelling nima?</h2>
                            <br/>
                            <h5>— Ushbu darsda storytelling nima ekanligi haqida gaplashamiz.
                                Mavzuga umumiy kirish qilamiz.
                                <br/>
                                <br/>
                                Ritorika, qahramon, sayohat,
                                sarguzasht kabi asosiy tushunchalar haqida to'xtalamiz.
                            </h5>
                        </div>

                        <div className="col-md-6 p-3 texts">
                            <h4>-02 dars</h4>
                            <h2>Kopirayterlik va hikoya jozibasi</h2>
                            <br/>
                            <h5>
                                — 02 dars

                                Kopirayterlik va hikoya jozibasi
                                — Qaysi mavzuda yozamiz?
                                Mavzu borasida bir to'xtamga kelgandan keyingi harakatlarimiz nimalardan iborat bo'ladi?

                                <br/>
                                <br/>
                                — Ushbu darsda biz mavzuni tadqiq qilish, ma'lumot to'plash, g'oyalar yaratish, yozuvlar
                                va fikrlarni tartibga solish kabi jarayonlarni qanday amalga oshirish haqida
                                gaplashamiz.
                            </h5>
                        </div>

                        <div className="col-md-6 p-3 texts">
                            <h4>-03 dars</h4>
                            <h2>Mavzu topish va tadqiq qilish</h2>
                            <br/>
                            <h5>
                                — Tinglovchi va tomoshabinning qiziqishini saqlab qolish uchun qanday usullardan foydalanamiz?
                                <br/>
                                <br/>
                                — Tomoshabinlarning e'tiborini mavzuga jalb qilish va uni doimo faol tarzda ushlab turish uchun nima qilish zarur?
                                <br/>
                                <br/>
                                — Qanday qilib biz kutilmagan burilishlar, aql oyinlari, keskinlik va noaniqlik kabi vositalar bilan ravon maʼlumot bera olamiz?
                                Darsimizda matnni qayta yozish
                                , tuzatish, qisqartirish, sayqallash va jozibali sarlavha qoʻyish haqida so`z yuritamiz.
                            </h5>
                        </div>

                        <div className="col-md-6 p-3 texts">
                            <h4>-04 dars</h4>
                            <h2>Nutq va gapirish usullari</h2>
                            <br/>
                            <h5>
                                — Bu darsda notiqlik san'ati bilan qisqacha tanishib chiqamiz. Hikoyachining eng kuchli vositasi uning ovozidir.
                                Ushbu dars davomida jonli auditoriya oldida qanday gapirish va taqdimot paytida nimalarga
                                e'tibor qaratish lozimligini bilib olasiz. Ikkinchi qismda esa ovozlashtirish haqida gaplashamiz.
                                <br/>
                                <br/>
                                — Ovozingizni tuzatish va tildagi dangasalikdan xalos bo'lish, ovozga ishlov berish, tartibga solish, audio chastotalar,
                                ekvalayzer, kompressor, filtrlar va ulardan qayerda va qanday foydalanish haqida ma'lumotlar beriladi.
                            </h5>
                        </div>

                        <div className="col-md-6 p-3 texts">
                            <h4>-05 dars</h4>
                            <h2>Kamera qarshisida ishlash</h2>
                            <br/>
                            <h5>
                                — Tasvirga tushirishdan oldingi eng soʻnggi tayyorgarliklar nimalar? Kamera qarshisida gapirishning sirlari.
                                Obyektiv qarshisida oʻzingizdagi eng yaxshi holatni topa olish uchun nimalar qilish kerak?
                                <br/>
                                <br/>
                                — Matnlarni yodlash kerakmi yoki oʻqishmi? Teleprompterdan qayerda va qanday foydalanamiz?
                            </h5>
                        </div>

                        <div className="col-md-6 p-3 texts">
                            <h4>-06 dars</h4>
                            <h2>Tasvirga olish vositalari va vizual kompozitsiya</h2>
                            <br/>
                            <h5>
                                — Ushbu darsda biz kamera turlari,
                                kameraning anatomiyasi, muhim sozlamalar, fokuslash, obyektiv turlari va ulardan
                                foydalanish texnikalari bilan tanishib chiqamiz.
                                <br/>
                                <br/>
                                — Muvozanat, boʻshliqlar, kompozitsiya qurish usullari, 180 daraja qoidasi kabi tushunchalar haqida to‘xtalamiz.
                            </h5>
                        </div>

                        <div className="col-md-6 p-3 texts">
                            <h4>-07 dars</h4>
                            <h2>Studiya sharoitida ishlash</h2>
                            <br/>
                            <h5>
                                — Yorugʻlik – tasvirning asosidir. Ushbu darsda ichki va tashqi yoritish usullarini misollar bilan
                                koʻrib chiqamiz. Dastlabki darslarda oʻrgangan narsalarimizni amalda qoʻllaymiz.
                                <br/>
                                <br/>
                                — Tayyorgarlik jarayoni tugagach, birgalikda namuna tarzida koʻrsatuvni tasvirga tushiramiz.                            </h5>
                        </div>

                        <div className="col-md-6 p-3 texts">
                            <h4>-08 dars</h4>
                            <h2>Montaj asoslari va uning tartibi</h2>
                            <br/>
                            <h5>
                                — Ushbu darsda montaj asoslari va uning tartibi haqida gaplashamiz. Kadrlarning keraksiz qismlarini tozalash,
                                yordamchi kadrlar va animatsiyalar bilan boyitish, ranglardan toʻgʻri foydalanish,
                                qoʻshimcha ovozlar va effektlar ishlatishni oʻrganamiz.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;