// src/MainComponent.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


function MainComponent() {
    const [activePlayer, setActivePlayer] = React.useState(null);
  
    const teamMembers = [
      { name: '山田太郎', position: 'レイダー', description: '俊敏な動きで相手を翻弄する' },
      { name: '鈴木一郎', position: 'コーナー', description: '鉄壁の守備を誇る' },
      { name: '佐藤次郎', position: 'オールラウンダー', description: '攻守両面で活躍するチームの要' },
      { name: '田中花子', position: 'レイダー', description: '驚異的なスピードの持ち主' },
      { name: '高橋健太', position: 'コーナー', description: '相手を寄せ付けない強靭な体幹の持ち主' },
      { name: '伊藤美咲', position: 'オールラウンダー', description: '冷静な判断力でチームを支える' },
    ];
  
    const matches = [
      { date: '2024-05-15', opponent: '能京高校', location: '東京体育館', important: false },
      { date: '2024-06-02', opponent: '奏和高校', location: '大阪アリーナ', important: false },
      { date: '2024-06-20', opponent: '英峰高校', location: '名古屋ドーム', important: true },
    ];
  
    return (
      <div className="font-sans bg-black text-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-75 p-4 flex items-center">
          <h1 className="text-3xl font-bold text-white mt-2">脳筋陣闘部</h1>
        </nav>
  
        <section className="relative h-screen flex items-center justify-center">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/background1.png)`,
                filter: 'brightness(0.6)',
            }}
        ></div>
        <div className="relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">この燃える世界は、<br/>気持ちがいいんだ。</h2>
            <a href="https://www.instagram.com/kabaddian.jp/">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300">参加する</button>
            </a>
          </div>
        </section>
  
        <section className="py-20 px-4 md:px-20 bg-gradient-to-r from-red-900 to-orange-900">
          <h2 className="text-4xl font-bold mb-8">チーム紹介</h2>
          <p className="text-xl mb-8">脳筋陣闘部は2024年3月に結成された、大阪北部に拠点を置く新進気鋭のカバディチームです。設立初年度に2つの大会で優勝。全国の舞台でも戦える実力を見せています。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">練習日</h3>
              <p className="text-4xl font-bold text-red-500">水木日</p>
            </div>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">チーム人数</h3>
              <p className="text-4xl font-bold text-red-500">＞50人</p>
            </div>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">チーム平均年齢</h3>
              <p className="text-4xl font-bold text-red-500">24歳</p>
            </div>
          </div>
        </section>
  
        <section className="py-20 px-4 md:px-20 bg-black">
          <h2 className="text-4xl font-bold mb-12">メンバー紹介</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img src={`${process.env.PUBLIC_URL}/player${index + 1}.jpg`} alt={member.name} className="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-red-500">{member.position}</p>
                  <p className="mt-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <section className="py-20 px-4 md:px-20 bg-gradient-to-r from-orange-900 to-red-900">
          <h2 className="text-4xl font-bold mb-12">試合スケジュール</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {matches.map((match, index) => (
              <div key={index} className={`bg-black p-6 rounded-lg ${match.important ? 'border-2 border-red-500' : ''}`}>
                <p className="text-xl font-bold mb-2">{match.date}</p>
                <h3 className="text-2xl font-bold mb-2">VS {match.opponent}</h3>
                <p className="mb-4">{match.location}</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">チケットを購入</button>
              </div>
            ))}
          </div>
        </section>
  
        <section className="py-20 px-4 md:px-20 bg-black text-center">
          <h2 className="text-4xl font-bold mb-8">チームに参加しよう！</h2>
          <p className="text-xl mb-8">カバディの世界で自分の限界を超えてみませんか？私たちと一緒に歴史を作りましょう。</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 mb-8">お問い合わせ</button>
          <div className="flex justify-center space-x-6">
          <a href="https://x.com/kabaddian_jp" className="text-3xl hover:text-red-500 transition duration-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/* <a href="#" className="text-3xl hover:text-red-500 transition duration-300">
            <FontAwesomeIcon icon={faFacebook} />
          </a> */}
          <a href="https://www.instagram.com/kabaddian.jp/" className="text-3xl hover:text-red-500 transition duration-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          </div>
        </section>
  
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
        `}</style>
      </div>
    );
  }

export default MainComponent;
