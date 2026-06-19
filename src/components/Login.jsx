import { useState } from 'react'
import './Login.css'

function Login() {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="form-container">
      <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="form-title">
          {isLogin ? 'Tizimga kirish' : "Ro'yxatdan o'tish"}
        </h2>
        <p className="form-subtitle">
          {isLogin 
            ? 'Akkauntingizga kirish uchun ma\'lumotlarni kiriting' 
            : 'Yangi hisob yaratish uchun ma\'lumotlarni to\'ldiring'}
        </p>


        {!isLogin && (
          <div className="input-group">
            <label htmlFor="name">Ism</label>
            <input
              id="name"
              type="text"
              placeholder="Ismingizni kiriting"
              autoComplete="off"
              required
            />
          </div>
        )}


        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="example@mail.com"
            autoComplete="off"
            required
          />
        </div>


        <div className="input-group">
          <label htmlFor="password">Parol</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            autoComplete="off"
            required
          />
        </div>


        {!isLogin && (
          <div className="input-group">
            <label htmlFor="repeat-password">Parolni takrorlang</label>
            <input
              id="repeat-password"
              type="password"
              placeholder="••••••••"
              autoComplete="off"
              required
            />
          </div>
        )}

        
        <button type="submit" className="btn-submit">
          {isLogin ? 'Kirish' : "Ro'yxatdan o'tish"}
        </button>

        
        <div className="form-footer">
          {isLogin ? (
            <span>
              Sizda hali akkaunt yo'qmi?{' '}
              <span className="toggle-link" onClick={() => setIsLogin(false)}>
                Ro'yxatdan o'tish
              </span>
            </span>
          ) : (
            <span>
              Sizda allaqachon akkaunt bormi?{' '}
              <span className="toggle-link" onClick={() => setIsLogin(true)}>
                Kirish
              </span>
            </span>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login










// import './Login.css'

// function Login() {
//   return (
//     <div className="form-container">
//       <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
//         <h2 className="form-title">Tizimga kirish</h2>
//         <p className="form-subtitle">Akkauntingizga kirish uchun ma'lumotlarni kiriting</p>

//         <div className="input-group">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             placeholder="example@mail.com"
//             autoComplete="off"
//             required
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="password">Parol</label>
//           <input
//             id="password"
//             type="password"
//             placeholder="••••••••"
//             autoComplete="off"
//             required
//           />
//         </div>

//         <button type="submit" className="btn-submit">
//           Kirish
//         </button>

//         <div className="form-footer">
//           <span>Sizda hali akkaunt yo'qmi? <a href="#register">Ro'yxatdan o'tish</a></span>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login