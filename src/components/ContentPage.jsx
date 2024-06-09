import React from 'react';
import InfoBox from './InfoBox.jsx';
import ImportantBox from './ImportantBox.jsx';
import MathJaxComponent from './MathJaxComponent.jsx';
import MultiColumnSentences from './MultiColumnSentences.jsx';
import './ContentPage.css';
import logo from './logo.png';
import wp from './wp.png';
import A1 from './Images/1_1_1.png';
import A2 from './Images/1_1_2.png';
import A3 from './Images/1_1_3.png';

const ContentPage = () => {
  const mathExpressionA = '\\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\]'; //Простая формула (в середине с новой строки)
  const mathExpressionB = '\\(E = mc^2\\)'; //Инлайн-формула (на левом краю с новой строки)
  const mathExpressionC = '\\[\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}\\]'; //Формула с выравниванием
  const mathExpressionD = '\\[\\int_{a}^{b} f(x) dx\\]'; //Формула с крупными операторами
  const mathExpressionE = '\\[\\frac{dy}{dx}\\]'; //Формула с дробью
  const mathExpressionF = '\\[\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\]'; //Формула с матрицей
  const mathExpressionG = '\\[\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}\\]'; //Формула с интегралом
  const mathExpressionH = '\\[x_{1}^{2} + x_{2}^{2} = r^{2}\\]'; //Формула с индексами и степенями
  const test = '\\[y = kg\\]';

  const mathExpressionWp = '\\(W(p) = \\large \\frac{Y(p)}{G(p)} = \\frac{b_{m}p^{m}+b_{m-1}p^{m-1}+...+b_{1}p+b_{0}}{a_{n}p^{n}+a_{n-1}p^{n-1}+...+a_{1}p+a_{0}} \\qquad  \\text{ (1)} \\)';

  return (
    <div className="content-container">
      <header>
        <div className='headers'>
            <img src={logo} alt="Logo" className="logo" />
            <div className="header-text">
                <h1>ТЕОРИЯ АВТОМАТИЧЕСКОГО УПРАВЛЕНИЯ</h1>
                <p>САЙТ-ПОМОЩНИК ДЛЯ СТУДЕНТОВ</p>
            </div>
        </div>
      </header>
      <div className="content">
        <p>
        {"\\[       \\]"}
        {"\\[   T\\frac{dy}{dt}+y=ku    \\]"}
        {"\\[   y(t)=y_1(t- \\tau)    \\]"}
        {"\\[    e^{-\\tau p}   \\]"}
        {"\\[    Y(p)=W(p)e^{-\\tau p}U(p)   \\]"}
        {"\\[    W_{\\tau}(p)= e^{-\\tau p}  \\]"}
        {"\\[   W(p)=W_1(p)e^{-\\tau p}=\\frac{K(p)}{D(p)}e^{-\\tau p}    \\]"}
        {"\\[   W(p)=\\frac{W_1(p)e^{-\\tau p}}{1+W_1(p)e^{-\\tau p}}=\\frac{K(p)e^{-\\tau p}}{D(p)+K(p)e^{-\\tau p}}=\\frac{K(p)e^{-\\tau p}}{D_{\\tau}(p)}    \\]"}
        {"\\[   W(p)=\\frac{W_1(p)}{1+W_1(p)e^{-\\tau p}}=\\frac{K(p)}{D(p)+K(p)e^{-\\tau p}}=\\frac{K(p)}{D_{\\tau}(p)}    \\]"}
        {"\\[   D_{\\tau}(p)=D(p)+K(p)e^{-\\tau p}    \\]"}
        {"\\[   W_{\\tau}(p)=e^{-\\tau p}    \\]"}
        {"\\[   p=j \\omega    \\]"}
        {"\\[   W_{\\tau}(p)=e^{- j \\omega  \\tau}=(cos(\\omega \\tau)-jsin(\\omega \\tau))    \\]"}
        {"\\[   W_1(p)=\\frac{k_1}{T_1p+1}     \\]"}
        {"\\[   W_2(p)=\\frac{k_2}{T_2^2p^2+2 \\zeta T_2p+1}    \\]"}
        {"\\[   W_3(p)=\\frac{k_3}{T_3p+1}    \\]"}
        {"\\[   W_{зам}(p)    \\]"}
        {"\\[   \\Delta T_i   \\]"}
        {"\\[   \\tau = \\sum \\Delta T_i \\approx  N * \\Delta T    \\]"}
        {"\\[    W(s)=\\frac{1}{(1+ \\Delta Ts)^N}= (1+ \\Delta Ts)^{-N}=[1+\\frac{\\tau}{N}s]^{-N} \\approx  [1+\\frac{\\tau s}{1!}+\\frac{(\\tau s)^2}{2!}+...]^{-1}  \\]"}
        {"\\[   N->\\infty    \\]"}
        {"\\[    W(s) \\approx e^{-\\tau s}   \\]"}
        {"\\[    N= 8 \\div 10   \\]"}
        {"\\[    e^{-\\tau s}   \\]"}
        {"\\[    D(p)+K(p)e^{-\\tau p}=0   \\]"}
        {"\\[    e^{- j \\omega  \\tau}   \\]"}
        {"\\[    W(j \\omega) =A(\\omega)e^{j \\phi (\\omega)}  \\]"}
        {"\\[    A(\\omega)=\\sqrt{(ReW(j \\omega))^2+(ImW(j \\omega))^2}   \\]"}
        {"\\[    \\phi = arctg\\frac{ImW(j \\omega)}{ReW(j \\omega)} \\pm \\begin{cases} 0 \\text{  } ReW(j \\omega) \\geq 0 \\\\ \\pi \\text{  } ImW(j \\omega) < 0 \\end{cases} \\]"}
        {"\\[    W_p(j \\omega)=W_0(j \\omega)e^{- \\tau j \\omega}=A_0(\\omega)e^{j \\varphi_0 (\\omega) }e^{- \\tau j \\omega}=A_0(\\omega)e^{j(\\varphi_0(\\omega)-\\tau \\omega)}   \\]"}
        {"\\[    \\omega \\tau \\]"}
        {"\\[    \\omega   \\]"}
        {"\\[    W_0(j \\omega)   \\]"}
        {"\\[    \\tau_{кр}   \\]"}
        {"\\[    \\omega_{кр}   \\]"}
        {"\\[    A(\\omega_{кр})=1 \\varphi (\\omega_{кр})= -\\pi (2i+1)  \\]"}
        {"\\[    \\varphi_1   \\]"}
        {"\\[     \\tau =0  \\]"}
        {"\\[   \\varphi (\\omega_{кр})=\\varphi_1 (\\omega_{кр}) - \\tau_{кр} \\omega_{кр} =  -(2i+1)\\pi  \\]"}
        {"\\[    \\tau_{кр}=\\frac{\\pi (2i+1)+ \\varphi_1 (\\omega_{кр})}{\\omega_{кр}}   \\]"}
        {"\\[   \\phi(\\omega_{кр})    \\]"}
        {"\\[   W_p(j \\omega_{кр}) = W_0(j \\omega_{кр})\\ell^{-j\\tau_{кр} \\omega_{кр}} = A_0(\\omega_{кр})e^{j (\\phi_0(\\omega_{кр})-\\tau_{кр} \\omega_{кр}) }=-1    \\]"}
        {"\\[    A_0(\\omega)=1   \\]"}
        {"\\[    \\phi_0(\\omega_{кр})-\\tau_{кр} \\omega_{кр}=-\\pi   \\]"}
        {"\\[   \\tau_{кр} =\\frac{\\pi +\\phi_0 (\\omega_{кр})}{\\omega_{кр}}    \\]"}
        {"\\[   W(p)=\\frac{k}{p(Tp+1)}e^{-\\tau p}    \\]"}
        {"\\[   W_1(j \\omega) = \\frac{k}{j \\omega}    \\]"}
        {"\\[   A_1( \\omega)=   \\frac{k}{j \\omega}  \\]"}
        {"\\[   W_0(j \\omega)=W_1(j \\omega)W_2(j \\omega)=A_1( \\omega)e^{j \\varphi_1 (\\omega)}A_2( \\omega)e^{j \\varphi_2 (\\omega)} = A_1(\\omega)A_2(\\omega)e^{(\\varphi_1(\\omega)+\\varphi_2(\\omega))j}  = A(\\omega)e^{j\\varphi (\\omega)} \\]"}
        {"\\[    A_1(\\omega)=\\frac{k}{j \\omega} \\qquad A_2(\\omega)=\\frac{1}{\\sqrt{T^2\\omega^2 +1}}   \\]"}
        {"\\[    \\varphi_1 (\\omega)=-\\frac{\\pi}{2} \\qquad  \\varphi_2 (\\omega)= -arctg \\omega \\]"}
        {"\\[   \\omega_{кр}    \\]"}
        {"\\[    A(\\omega)=1   \\]"}
        {"\\[    \\frac{k}{\\omega \\sqrt{T^2\\omega^2 +1}}=1   \\]"}
        {"\\[    (T^2\\omega^2 +1)\\omega^2 = k^2   \\]"}
        {"\\[   \\varphi(\\omega_{кр})= -\\frac{\\pi}{2} - arctgT \\omega = -1.99788  \\]"}
        {"\\[    \\tau_{кр}=\\frac{\\pi + \\phi_0 (\\omega_{кр})}{\\omega_{кр}} = 0.125658   \\]"}
        {"\\[    \\tau = \\tau_{кр}   \\]"}
        {"\\[    \\tau_{кр} = \\frac{\\gamma}{\\omega_{кр}} =0.125  \\]"}
        {"\\[    W(p) = W_0(p)e^{-\\tau p}   \\]"}
        {"\\[    W_0(p)  \\]"}
        {"\\[    W(p) = W_1(p)e^{-\\tau_1 p} W_2(p)e^{-\\tau_2 p} = W_1(p)W_2(p)e^{-(\\tau_1 + \\tau_2 )p} \\]"}
        {"\\[    W(p)=\\frac{-W_2(p)}{1-(-W_2(p))W_1(p)}   \\]"}
        {"\\[    W(p)=-\\frac{W_2(p)}{1+W_1(p)W_2(p)W_3(p)}e^{-\\tau p}   \\]"}
        {"\\[    k_1 =1.0, k_2=0.5, k_3=3.0, T=2.0   \\]"}
        {"\\[    W_{зам}(p) = W_0(p)e^{-\\tau p}    \\]"}
        {"\\[    W_0(p)   \\]"}
        {"\\[    W_1(p)=\\frac{k_1}{p}; W_2(p)=\\frac{k_2}{Tp+1}; W_3(p)=1   \\]"}
        {"\\[    W(p)= - \\frac{\\frac{k_2}{Tp+1}}{1+\\frac{k_1}{p}\\frac{k_2}{Tp+1}}k_3e^{-\\tau p} =-\\frac{k_2p}{p(Tp+1)+k_1+k_2}k_3e^{-\\tau p}   \\]"}
        {"\\[    W(j \\omega) =  -\\frac{k_2 k_3 j \\omega}{j \\omega(Tj \\omega+1)+k_1+k_2}e^{-\\tau j \\omega} = W_0(j \\omega)e^{-\\tau j \\omega}  \\]"}
        {"\\[    \\tau_{кр}   \\]"}
        {"\\[    Re(\\omega)   \\]"}
        {"\\[    Im(\\omega)   \\]"}
        {"\\[    W_0(j \\omega) = Re(\\omega)+ Im(\\omega)j   \\]"}
        {"\\[    W_0(j \\omega) = \\frac{-k_2 k_3 j \\omega}{-T \\omega^2 + j \\omega +k_1k_2} = \\frac{-k_2 k_3 j \\omega}{(k_1k_2-T \\omega^2 ) + j \\omega} \\frac{(k_1k_2-T \\omega^2 ) - j \\omega}{(k_1k_2-T \\omega^2 ) - j \\omega} = \\frac{-k_2 k_3 j \\omega (k_1k_2-T \\omega^2 - j \\omega)}{(k_1k_2-T \\omega^2)^2 +\\omega^2} \\]"}
        {"\\[    Re(\\omega)=\\frac{-k_2 k_3 \\omega^2}{(k_1k_2-T \\omega^2)^2 +\\omega^2}   \\]"}
        {"\\[    Im(\\omega)= \\frac{-\\omega k_1k_2^2k_3 + \\omega^3 k_2k_3T}{(k_1k_2-T \\omega^2)^2 +\\omega^2}   \\]"}
        {"\\[    A(\\omega) = \\sqrt{(Re(\\omega))^2+(Im(\\omega))^2} =  \\frac{k_2 k_3 \\omega}{\\sqrt{(k_1k_2-T \\omega^2)^2 +\\omega^2}} \\]"}
        {"\\[    \\phi (\\omega) = arctg \\frac{Im(\\omega)}{Re(\\omega)} + \\begin{cases} \\pi \\text{  }  Re(j \\omega) < 0 Im(j \\omega) \\geq 0 \\\\ - \\pi   \\text{  }  Re(j \\omega) < 0 Im(j \\omega) < 0  \\\\ 0  \\text{  } Re(j \\omega) \\geq 0 \\end{cases} = \\begin{cases} arctg\\frac{\\omega^2 T-k_1k_2}{\\omega} + \\pi  \\text{  } Re(j \\omega) < 0 Im(j \\omega) \\geq 0 \\\\  arctg\\frac{\\omega^2 T-k_1k_2}{\\omega} - \\pi  \\text{  } Re(j \\omega) < 0 Im(j \\omega) < 0 \\\\ arctg\\frac{\\omega^2 T-k_1k_2}{\\omega} \\text{  } Re(j \\omega) \\geq 0 \\end{cases} \\]"}
        {"\\[    W_0(j \\omega)   \\]"}
        {"\\[    \\tau_1 < \\tau_2   \\]"}
        {"\\[    0 \\leq \\tau < \\tau_1  \\]"}
        {"\\[    \\tau = \\tau_1   \\]"}
        {"\\[    \\tau_1 < \\tau < \\tau2   \\]"}
        {"\\[    \\tau = \\tau_2   \\]"}
        {"\\[    \\tau_2 < \\tau   \\]"}
        {"\\[    \\tau_1 < \\tau < \\tau_2   \\]"}
        {"\\[    \\tau = 2 < \\tau_{кр1}   \\]"}
        {"\\[    \\tau = \\tau_{кр1}   \\]"}
        {"\\[    \\tau_{кр1} <  \\tau = 5  < \\tau_{кр2}  \\]"}
        {"\\[   \\tau = \\tau_{кр2}   \\]"}
        {"\\[    \\tau_{кр2} < \\tau = 8    \\]"}
        {"\\[    \\tau_{кр1}   \\]"}
        {"\\[    \\tau_{кр2}   \\]"}
        {"\\[    \\tau = \\tau_{кр1}   \\]"}
        {"\\[    \\tau = \\tau_{кр2}   \\]"}
        {"\\[     \\tau = 2 <  \\tau_{кр1}  \\]"}
        {"\\[    \\tau = \\tau_{кр1}   \\]"}
        {"\\[    \\tau_{кр1} <  \\tau = 5 <  \\tau_{кр2} \\]"}
        {"\\[    \\tau t = \\tau_{кр2}    \\]"}
        {"\\[    \\tau_{кр2} < t = 8   \\]"}
        </p>
      <strong>Безинерционным звеном </strong>(пропорциональным или усилительным звеном) называют звено, 
        поведение которого описывает алгебраическое уравнение.<br/> Ниже представлены:<br />
        <ul>
          <li>уравнение звена:<MathJaxComponent mathExpression={mathExpressionB} /></li>
          <li>передаточная функция звена:<MathJaxComponent mathExpression={mathExpressionB} /></li>
          <li>функции и графики:
          </li>
          </ul>

        <table>
          <tr>
            <td>
            переходной функции <br/>
            {"\\(h(t) = k * 1(t)\\)"}
            <p className='center-img'>
            <img src={A1} alt="A1"></img>
            </p>
            </td>
            <td>
            весовой функции <br/>
            {"\\(w(t) = k * \\delta(t)\\)"}
            <p className='center-img'>
            <img src={A2} alt="A2"></img>	
            </p>
            </td>
            <td>
            частотной передаточной функции <br/>
            {"\\(W(j\\omega) = k\\)"}
          <p className='center-img'>
            <img src={A3} alt="A3"></img>
          </p>
            </td>
          </tr>
        </table>
        
        <MultiColumnSentences>
        <div>
          <p>переходной функции<br/>
          {"\\(h(t) = k * 1(t)\\)"}

          <p className='center-img'>
            <img src={A1} alt="A1"></img>
          </p>
          </p>
        </div>
        <div>
          <p>весовой функции<br/>
          {"\\(w(t) = k * \\delta(t)\\)"}
          <p className='center-img'>
            <img src={A2} alt="A2"></img>
          </p>
          </p>
        </div>
        <div>
          <p>частотной передаточной функции<br/>
          {"\\(W(j\\omega) = k\\)"}
          <p className='center-img'>
            <img src={A3} alt="A3"></img>
          </p>
          </p>
        </div>
      </MultiColumnSentences>

        <h2>
            Это пример заголовка глобальной темы
        </h2>
        <h3>
            Это пример заголовка поменбше (для подтемы)
        </h3>
        <p>
          Это пример большого текста. Известны различные способы моделирования таких передаточных функций, среди которых наибольшее распространение нашли способы,
           позволяющие осуществлять моделирование при заранее неизвестном законе изменения входного сигнала и избегать применения численного дифференцирования, 
           которое, как известно, весьма восприимчиво к неточностям представления тех или иных координат звеньев, автоматических систем:
        </p>
        <ImportantBox>
          Это пример куска текста который можно обернуть в рамочку, чтобы подчеркнуть какие либо особо важные детали.
        </ImportantBox>
        <p>
          Это пример нумерованного списка
        </p>
        <ol>
          <li>Первый элемент</li>
          <li>Второй элемент</li>
          <li>Третий элемент</li>
        </ol>
        <p>
          Это пример списка с маркерами
        </p>
        <ul>
          <li>Элемент списка с маркером</li>
          <li>Еще один элемент списка с маркером</li>
          <li>И еще один элемент списка с маркером</li>
        </ul>
        <InfoBox title="Заголовок инфоблока">
          Пример текста внутри ифноблока для выделения определений или просто какой либо инфы 
          (задумывался как блок для определений, чтобы писать в заголовок определение чего, а здесь само определение)
        </InfoBox>
        <InfoBox >
          Однако эти инфоблоки можно использовать и без заголовка  если его попросту не указывать.
        </InfoBox>
        <p>
          Это пример картинки, их можно настраивать инвидидуально
        </p>
        <p className='center-img'>
          <img src={wp} alt="wp"></img>
        </p>
        <h3>
          Примеры использования формулы через MathJax
        </h3>
        <p>
          Это пример текста с формулой отдельно от текста: <MathJaxComponent mathExpression={mathExpressionA} />
          Тут какой то текст дальше идет 
        </p>

        <p>
        Это пример текста с формулой прямо внутри текста: <span style={{ display: 'inline-block' }}><MathJaxComponent mathExpression={mathExpressionB} /></span>,
        где \(E\) - энергия, \(m\) - масса, \(c\) - скорость света в вакууме. 
        Это продолжение текста после формулы без перехода на новую строку.
        </p>
        <MathJaxComponent mathExpression={mathExpressionC} />
        <MathJaxComponent mathExpression={mathExpressionD} />
        <MathJaxComponent mathExpression={mathExpressionE} />
        <MathJaxComponent mathExpression={mathExpressionF} />
        <MathJaxComponent mathExpression={mathExpressionG} />
        <MathJaxComponent mathExpression={mathExpressionH} />
        <MathJaxComponent mathExpression={test} />

        <h3>
          Пример инфоблока с определением передаточной функции
        </h3>
        <InfoBox title="W(p)">
          <p>
          W(p) - передаточная функция - отношение изображений выходного сигнала к входному при нулевых начальных условиях.
          </p>
          <MathJaxComponent mathExpression={mathExpressionWp} />
          <p>
            Где: \(b_m\), {"\\(b_{m-1}\\)"}, ... , \(b_1\), \(b_0\), {"\\(a_{n-1}\\)"}, ... , \(a_1\), \(a_0\) заданные постоянные коэффиценты;
          </p>
          <p>
          {"\\(n \\leq m\\)"} - порядок числителя и знаменателя, соответственно;
          </p>
          <p>
          {"\\(p=\\alpha \\pm \\beta j  \\)"} - комплексная переменная.
          </p>
          <p>
           Y(p) - изображение выходного сигнала
           </p>
           <p>
           G(p) - изображение входного сигнала
           </p>
        </InfoBox>
        <p>
          Это примеры текста с разделенями на столбцы
        </p>
        <p align="center">
        Ваш заголовок может быть тута 
      </p>
      <MultiColumnSentences>
        <div>
          <p>Примеры текста для первого столбца. Примеры текста для первого столбца.  Примеры текста для первого столбца. Примеры текста для первого столбца. Примеры текста для первого столбца. Примеры текста для первого столбца.</p>
        </div>
        <div>
          <p> Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца.</p>
        </div>
        <div>
          <p>Пример текста для третьего столбца. Пример текста для третьего столбца. Пример текста для третьего столбца. Пример текста для третьего столбца. Пример текста для третьего столбца. Пример текста для третьего столбца. </p>
        </div>
      </MultiColumnSentences>
      <p align="center">
        Ваш заголовок может быть тута 
      </p>
      <MultiColumnSentences>
        <div>
          <p>Примеры текста для первого столбца. Примеры текста для первого столбца.  Примеры текста для первого столбца. Примеры текста для первого столбца. Примеры текста для первого столбца. Примеры текста для первого столбца.</p>
        </div>
        <div>
          <p> Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца.</p>
        </div>
      </MultiColumnSentences>
      <p align="center">
        Ваш заголовок может быть тута 
      </p>
      <MultiColumnSentences>
        <div>
          <p>Примеры текста для первого столбца. Примеры текста для первого столбца.  Примеры текста для первого столбца. Примеры текста для первого столбца. Примеры текста для первого столбца. Примеры текста для первого столбца.</p>
        </div>
        <div>
          <p> Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца.</p>
        </div>
        <div>
          <p> Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца.</p>
        </div>
        <div>
          <p> Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца. Примеры текста для второго столбца.</p>
        </div>
      </MultiColumnSentences>


      </div>
    </div>
  );
}

export default ContentPage;
