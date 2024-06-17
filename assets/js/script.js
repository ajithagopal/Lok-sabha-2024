/** Load HTML */
$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        alert();
      var file = $(this).data('include')
      $(this).load(file)
    });
  });

var quiz = []

var quizAll = {
    "lok1": [
        {
            q: 'He was known as ‘Dadasaheb’. Jawaharlal Nehru called him the ‘Father of the Lok Sabha’, where he served as its first ever Speaker. Name him.',
            o: [
                {'txt': 'Ganesh Vasudev Mavalankar', 'ans': true},
                {'txt': 'M.A. Ayyangar'},
                {'txt': 'Gurdial Singh Dhillon'}
            ],
            info: 'Mavalankar was instrumental in establishing the rules that would govern Indian parliamentary procedure. Before becoming the Speaker, he was the President of the Central Legislative Assembly.'
        },
        {
            q: 'Which former interim Prime Minister of India was also India’s first minister of planning and river valley schemes?',
            o: [
                {'txt': 'V.V. Giri'},
                {'txt': 'Zakir Hussain'},
                {'txt': 'Gulzari Lal Nanda', 'ans': true}
            ],
            info: 'Nanda, an economist, had also served as union home minister, foreign minister and Deputy Chairman of the Planning Commission.'
        },
        {
            q: 'The Congress party under Jawaharlal Nehru secured a comprehensive victory in India’s first ever general elections. Which party finished the runner up?',
            o: [
                {'txt': 'Communist Party of India', 'ans': true},
                {'txt': 'Socialist Party (India)'},
                {'txt': 'Bharatiya Jan Sangh'}
            ],
            info: 'The Communist Party of India (CPI) emerged as the runner up – winning 16 out of the 49 seats contested in the Lok Sabha.'
        }
    ],
    "lok2": [
        {
            q: 'Who served as the Speaker of the House in the second Lok Sabha?',
            o: [
                {'txt': 'MA Ayyangar', 'ans': true},
                {'txt': 'MN Kaul'},
                {'txt': 'TT Krishnamachari'}
            ],
            info: 'A lawyer and activist during the freedom struggle, Mr. Ayyangar served as a parliamentarian from before Independence, taking a seat in the Central Legislative Assembly in 1934.'
        },
        {
            q: 'Which district recorded the highest voter turnout?',
            o: [
                {'txt': 'Kottayam', 'ans': true},
                {'txt': 'Mehsana'},
                {'txt': 'Chidambaram'}
            ],
            info: 'Kerala’s Kottayam recorded the highest voter turnout, with Punjab’s Kangra recording the lowest.'
        },
        {
            q: 'Name the Act passed by the parliament that consolidated anti-dowry laws passed in different States.',
            o: [
                {'txt': 'Dowry Prohibition Act, 1961', 'ans': true},
                {'txt': 'Dowry Prevention Act, 1960'},
                {'txt': 'Prohibition of Dowry Act, 1958'}
            ],
            info: 'Parliament passed the landmark Dowry Prohibition Act, 1961, which consolidated anti-dowry laws passed in different States.'
        }
    ],
     "lok3": [
        {
            q: 'What important feature in polling was introduced for the first time in the history of the general elections?',
            o: [
                {'txt': 'Use of indelible ink', 'ans': true},
                {'txt': 'The Model Code of Conduct'},
                {'txt': 'Postal ballots'}
            ],
            info: 'The electoral procedure was historic on two accounts: the polling was conducted in under a week between February 19 to February 25, and it was the first-time indelible ink was used in the voting process.'
        },
        {
            q: 'Which of the following ministries was added for the first time, during the third Lok Sabha?',
            o: [
                {'txt': 'Ministry of Labour'},
                {'txt': 'Ministry of Relief and Rehabilitation'},
                {'txt': 'Ministry of Steel and Heavy Industries', 'ans': true}
            ],
            info: 'The size of the cabinet in the third Lok Sabha increased from 12 to 17, with the creation of a new Ministry of Steel and Heavy Industries.'
        },
        {
            q: 'The third Lok Sabha witnessed an unprecedented turn of events, with five swearing-in ceremonies of four Prime Ministers, due to the passing of Jawaharlal Nehru, and later of Lal Bahadur Shastri. Who took over as interim Prime Minister after Shastri’s death?',
            o: [
                {'txt': 'Indira Gandhi'},
                {'txt': 'Gulzarilal Nanda', 'ans': true},
                {'txt': 'VK Krishna Menon'}
            ],
            info: 'Mr. Nanda served again as the acting PM after Mr. Shastri, in 1966, died abruptly under mysterious circumstances in Tashkent, Uzbekistan.'
        }
    ],
     "lok4": [
        {
            q: 'The friction within the Congress party led to Indira Gandhi being expelled from the party in 1969 by the party working committee. What was the rival breakaway party formed by Ms. Gandhi called?',
            o: [
                {'txt': 'Indian National Congress (Requisitionists)', 'ans': true},
                {'txt': 'Indian National Congress (Indira)'},
                {'txt': 'Indian National Congress (Organisation)'}
            ],
            info: 'Mrs. Gandhi was expelled in November 1969 by the party’s working committee for “attempting to capture the Party machine by pressurising the rank and file and subjecting them to false and misleading propaganda to make them toe her line”. The split was institutionalised: Mrs. Gandhi formed the rival Indian National Congress (Requisitionists) group.'
        },
        {
            q: 'Following the split in the Congress party in 1969, who was named as the Leader of the Opposition, making him the first in the history of the Lok Sabha?',
            o: [
                {'txt': 'N. Sanjiva Reddy'},
                {'txt': 'Ram Subagh Singh', 'ans': true},
                {'txt': 'SL Shakdar'}
            ],
            info: 'After the split in 1969, Congress leader Ram Subhag Singh served as the Opposition leader in the fourth Lok Sabha'
        },
        {
            q: 'Which of the following policies was pushed by Indira Gandhi on July 10, 1969, as a solution to the problems of agriculture, industry and financial institutions?',
            o: [
                {'txt': 'Green Revolution'},
                {'txt': 'Higher tax slab for all private manufacturing units'},
                {'txt': 'Nationalisation of banks', 'ans': true}
            ],
            info: 'Mrs. Gandhi on July 10, 1969, proposed bank nationalisation as an answer to the problems of agriculture, industry and financial institutions.'
        }
    ],       
    "lok5": [
        {
            q: 'The fifth Lok Sabha had two Speakers during its tenure. Who was the Speaker during the Emergency months, from January 1976 till March 1977?',
            o: [
                {'txt': 'GS Dhillon'},
                {'txt': 'George Gilbert Swell'},
                {'txt': 'Bali Ram Bhagat', 'ans': true}
            ],
            info: 'G.S. Dhillon served between August 1969 to December 1975, notable for his insistence on maintaining parliamentary decorum during times of political upheaval. Bali Ram Bhagat took over the position in January 1976 and continued till March 1977.'
        },
        {
            q: 'Indira Gandhi’s anti-poverty economic reform plans were known by what slogan?',
            o: [
                {'txt': 'Garibi Hatao', 'ans': true},
                {'txt': 'Vikshit Bharat'},
                {'txt': 'Bharat Bachao'}
            ],
            info: 'Mrs. Gandhi’s government proposed popular economic reforms such as moderate tax increases on higher-income people and promoting the Green Revolution. It aligned itself with the slogan ‘Garibi hatao’.'
        },
        {
            q: 'The Emergency was enforced on the orders of Indira Gandhi on which date?',
            o: [
                {'txt': 'June 25, 1975', 'ans': true},
                {'txt': 'June 25, 1976'},
                {'txt': 'March 12, 1975'}
            ],
            info: 'A few minutes before midnight, a state of Emergency was declared on June 25, 1975.'
        }
    ],
    "lok6": [
        {
            q: ' A humiliating defeat for the Congress post the Emergency saw the Janata Dal storming to power. The sixth Lok Sabha was a short-lived one for the new party though, with India having two Prime Ministers in this period. One was Morarji Desai. Name the other.',
            o: [
                {'txt': 'Jaya Prakash Narayan'},
                {'txt': 'Charan Singh', 'ans': true},
                {'txt': 'Bansi Lal'}
            ],
            info: 'Charan Singh was briefly sworn in as the Prime Minister. The new government couldn’t complete its term, and early elections were called in 1980.'
        },
        {
            q: ' Who was named the Leader of the Opposition in the sixth Lok Sabha?',
            o: [
                {'txt': 'YB Chavan', 'ans' : true},
                {'txt': ' KS Hegde'},
                {'txt': 'Chandra Sekhar'}
            ],
            info: 'Congress now moved to the Opposition, with Y.B. Chavan serving as the Leader of the Opposition'
        },
        {
            q: 'Jagjivan Ram was the chairman of which political party founded in 1977, which was part of the Janata Dal alliance? ',
            o: [
                {'txt': ' Congress for Democracy', 'ans': true},
                {'txt': 'Bharatiya Lok Dal'},
                {'txt': 'Swatantra Party'}
            ],
            info: 'At the age of 81 Also eyeing the position was Jagjivan Ram, the Chairman of the Congress for Democracy.'
        }
    ],
     "lok7": [
        {
            q: ' The polling for the seventh Lok Sabha were the shortest in history. How many days did it cover?',
            o: [
                {'txt': '12 days'},
                {'txt': ' 4 days', 'ans': true},
                {'txt': ' 7 days'}
            ],
            info: 'These were the shortest elections held over four days in January 1980.'
        },
        {
            q: 'Who served as the Speaker of the House, andin the process claimed the title of being the longest serving speaker?',
            o: [
                {'txt': 'Balram Jakhar', 'ans' : true},
                {'txt': ' P. Shiv Shankar'},
                {'txt': 'G. Lakshmanan'}
            ],
            info: 'Agriculturalist and politician Balram Jakhar was the Speaker of the House from January 1980 to 1985. Mr. Jakhar served for a full term for two consecutive terms, claiming the title of being the longest-serving Speaker.'
        },
        {
            q: 'What was the name of the army operation ordered by Indira Gandhi to attack the Golden Temple after talks with Sikh separatists failed?',
            o: [
                {'txt': '. Operation Blue Star', 'ans': true},
                {'txt': 'Operation Vijay'},
                {'txt': 'Operation Typhoon'}
            ],
            info: 'Mrs. Gandhi ordered the army to launch Operation Blue Star after negotiations with militants failed'
        }
    ],
     "lok8": [
        {
            q:    ' Which regional political party, helmed by a former cinema superstar, won 30 seats in the eighth Lok Sabha?',
            o: [
                {'txt': 'All India Anna Dravida Munnetra Kazhagham'},
                {'txt': 'Telugu Desam Party ', 'ans': true},
                {'txt': 'Shiv Sena'}
            ],
            info: 'An exception was the popular appeal of TDP -- led by the filmmaker and politician N.T. Rama Rao -- which won a massive 201 out of total 294 seats.'
        },
        {
            q: ' What was the name of the report, on Indira Gandhi’s assassination, that was tabled in the Lok Sabha, that led to 63 MPs being suspended after it created a stir?',
            o: [
                {'txt': 'Thakkar Commission', 'ans' : true},
                {'txt': 'Shah Commission'},
                {'txt': 'Mandal Commission'}
            ],
            info: 'In 1989, the Thakkar Commission’s report on Indira Gandhi’s assassination was tabled in the Lok Sabha, stirring parliamentary unrest. 63 MPs were suspended, a new record at the time.'
        },
        {
            q: 'Polling in the eighth Lok Sabha was held separately in which two States?',
            o: [
                {'txt': 'Punjab and Assam', 'ans': true},
                {'txt': 'Nagaland and Arunachal Pradesh'},
                {'txt': 'Punjab and Sikkim'}
            ],
            info: 'The elections were conducted for 549 constituencies, 24 States and six Union Territories in two instalments. One between December 24 and 28, 1984, held separately in Punjab and Assam on 25th September and 16th December 1985.'
        }
    ],
     "lok9": [
        {
            q: 'What was the name of the Janata Dal-led coalition that formed the government under VP Singh?',
            o: [
                {'txt': ' United Front'},
                {'txt': 'National Front ', 'ans': true},
                {'txt': 'Forward Bloc'}
            ],
            info: 'The National Front (coalition) formed the Central Government, with outside support from the BJP and the Left Front.'
        },
        {
            q: 'The VP Singh-led government implemented the controversial Mandal Commission report that led to chaos and protests in the streets. What did the report recommend?',
            o: [
                {'txt':' Reservations for Other Backward Classes in government jobs', 'ans' : true},
                {'txt': 'Reduced reservation for women in parliament'},
                {'txt': 'No more loan waivers for farmers'}
            ],
            info: 'It endorsed reservations for Other Backward Classes (OBCs) in government jobs and shaped discourse around affirmative action for marginalised communities.'
        },
        {
            q: 'After the National Front government collapsed, ending VP Singh’s short tenure, who replaced him as Prime Minister?',
            o: [
                {'txt': 'Devi Lal'},
                {'txt': 'Chandra Sekhar', 'ans': true},
                {'txt': ' Bansi Lal'}
            ],
            info: 'Chandra Shekhar replaced Mr. Singh as the Prime Minister with outside support from the Indian National Congress party'
        }
    ],
    "lok10": [
        {
            q: 'Which of the following was unique about the choice of PV Narasimha Rao as the Prime Minister?',
            o: [
                {'txt': 'First PM from the south of India', 'ans': true},
                {'txt': 'First Congress PM not from the Nehru-Gandhi family'},
                {'txt': 'First IAS officer to be PM'}
            ],
            info: 'Mr. Rao has to his name the distinction of being the first Prime Minister from the southern part of India; the second PM from outside the Nehru-Gandhi family, after Lal Bahadur Shastri.'
        },
        {
            q: ' What was introduced for the first time in polling during the 1991 general elections, which has become the norm in voting in State and general elections now?',
            o: [
                {'txt': 'Use of indelible ink'},
                {'txt': 'Postal ballots'},
                {'txt': 'Voting in phases','ans' : true}
            ],
            info: 'The polls were the first of their kind: voting took place in a three-phase poll between May 20, 1991, to February 19, 1992.'
        },
        {
            q: 'As the BJP grew stronger across India, who served as the Leader of the Opposition, a man who made news for spreading a Hindutva wave with his Rath Yatra?',
            o: [
                {'txt': 'LK Advani', 'ans': true},
                {'txt': 'Murli Manohar Joshi'},
                {'txt': 'Arun Jaitley'}
            ],
            info: 'The BJP emerged as the major Opposition party. L.K. Advani, who rode the popularity of the Rath Yatra, served as the Leader of the Opposition.'
        }
    ],
    "lok11": [
        {
            q: 'In a season marked by fractured mandates and unstable governments, who had the dubious distinction of serving as Prime Minister for just 13 days?',
            o: [
                {'txt': 'Inder Kumar Gujral'},
                {'txt': 'HD Deve Gowda'},
                {'txt': 'Atal Bihari Vajpayee', 'ans': true}
            ],
            info: 'With support from its allies, the BJP formed the government with Atal Bihari Vajpayee as the Prime Minister. The government collapsed in 13 days as Mr. Vajpayee struggled to form a government.'
        },
        {
            q: ' What was the name of the Janata Dal-led coalition that held power from 1996 to 1998, under two Prime Ministers?',
            o: [
                {'txt': 'United Front', 'ans' : true},
                {'txt': 'Progressive Front'},
                {'txt': 'United Inclusive Alliance'}
            ],
            info: 'A three-way contest played out between the ruling Congress, BJP and a broad alliance of regional governments under the United Front coalition that pitched alternatives visions of a ‘secular’ government. '
        },
        {
            q: 'The Congress withdrew its support in 1998, resulting in a hung parliament after the Jain Commission’s findings indicted a sitting government. What was the report commissioned to investigate?',
            o: [
                {'txt': 'Rajiv Gandhi’s assassination', 'ans': true},
                {'txt': 'Babri Masjid demolition'},
                {'txt': '1993 Mumbai bomb blasts'} 
            ],
            info: 'The Jain Commission report on Rajiv Gandhi’s assassination indicted the Dravida Munnetra Kazhagam (DMK) government of maintaining links with the Liberation Tigers of Tamil Eelam (LTTE), whose activists killed Mr. Gandhi.'
        }
    ],
    "lok12": [
        {
            q: '– The Speaker of the 12th Lok Sabha held the distinction of being the youngest to hold the post, and was also the first Dalit leader and first member of a regional party to do so. Name him.',
            o: [
                {'txt': 'PA Sangma'},
                {'txt': 'Rabi Ray'},
                {'txt': 'GMC Balayogi', 'ans': true}
            ],
            info: 'The Telugu Desam Party (TDP) politician G. M. C. Balayogi served as the Speaker of the Lok Sabha, his election marking a “precedent-setting event”, the Lok Sabha noted. '
        },
        {
            q: ' Which regional party, which was the second-largest in the BJP-led coalition, withdrew its support in 1999, leading to the collapse of the Vajpayee government after just 13 months in power?',
            o: [
                {'txt': 'Shiv Sena'},
                {'txt': 'AIADMK', 'ans' : true },
                {'txt': 'Telugu Desam Party'}
            ],
            info: 'Mr. Vajpayee’s second stint as PM ended after AIADMK withdrew its support.'
        },
        {
            q: 'Which of the following events/incidents happened during Vajpayee’s second stint as Prime Minister? ',
            o: [
                {'txt': 'Pokhran – II nuclear tests', 'ans': true},
                {'txt': 'Kargil War'},
                {'txt': ' Mangalyaan mission'}
            ],
            info: 'Two months in, Mr. Vajpayee’s government set off a series of five nuclear tests at the Pokhran Test Range in Rajasthan, India’s second attempt at nuclear testing.'
        }
    ],
    "lok13": [
        {
            q: 'What was launched during polling for the 13th Lok Sabha elections?',
            o: [
                {'txt': 'Electronic Voting Machines', 'ans': true},
                {'txt': 'Vote-from-home facility'},
                {'txt': 'Voter slips'}
            ],
            info: 'In addition to the ballot paper, electronic voting machines (EVMs) were piloted during this election'
        },
        {
            q: ' Following the attack on the Parliament in December 2001, what controversial legislation was introduced in the Lok Sabha by the NDA government?',
            o: [
                {'txt': 'Unlawful Activities (Prevention) Act'},
                {'txt': 'Prevention of Terrorism Act', 'ans' : true},
                {'txt': 'Terrorist and Disruptive Activities (Prevention) Act'}
            ],
            info: 'The NDA Government introduced the controversial Prevention of Terrorism Act (POTA) legislation, after the attack on Lok Sabha on December 13, 2001 '
        },
        {
            q: 'The Pradhan Mantri Gram Sadak Yojana was launched by the Vajpayee government for what purpose?  ',
            o: [
                {'txt': 'Developing roads', 'ans': true},
                {'txt': 'Rural employment guarantee'},
                {'txt': 'Subsidised medicines for low income group'} 
            ],
            info: 'The Vajpayee-led government launched infrastructural projects like the Golden Quadrilateral Project and Pradhan Mantri Gram Sadak Yojana, which transformed India’s road connectivity network.'
        }
    ],
    "lok14": [
        {
            q: 'Which of the following statements about the 14th Lok Sabha polling is true?',
            o: [
                {'txt': 'First election for the three new States – Chhattisgarh, Uttarakhand and Jharkhand', 'ans': true},
                {'txt': 'Polling was held in two phases across two weeks in January'},
                {'txt': 'P. Chidambaram was the preferred choice for PM'}
            ],
            info: 'First election for the three new States – Chhattisgarh, Uttarakhand and Jharkhand This was the first election for three newly formed States - Chhattisgarh, Uttarakhand and Jharkhand.'
        },
        {
            q: ' Which parliamentary constituency recorded the highest voter turnout?',
            o: [
                {'txt': 'Nagaland', 'ans' : true},
                {'txt': 'Lakshadweep'},
                {'txt': 'Goa'}
            ],
            info: 'The higher voter turnout was recorded in Nagaland Parliamentary Constituency – a record held for all Lok Sabhas in the history of independent India'
        },
        {
            q: 'Which political party withdrew its support to the coalition after the historic India-United States Civil Nuclear Agreement was signed?',
            o: [
                {'txt': 'CPI (M)', 'ans': true},
                {'txt': 'Samajwadi Party'},
                {'txt': 'Rashtriya Janata Dal'} 
            ],
            info: 'The CPI(M) withdrew support from the coalition over the deal; Mr. Chatterjee, a CPI(M) member and Speaker of the House, was later expelled for refusing to step down'
        }
    ],
    "lok15": [
        {
            q: 'The 15th Lok Sabha had a woman Speaker for the first time in history. A former IFS officer, her father had served as a deputy Prime Minister. Name her.',
            o: [
                {'txt': 'Meira Kumar', 'ans': true},
                {'txt': 'Rita Bahuguna'},
                {'txt': 'Sumitra Mahajan'}
            ],
            info: 'The nation also saw the first woman Speaker of Lok Sabha in Meira Kumar, the daughter of freedom fighter and former Deputy Prime Minister Jagjivan Ram. '
        },
        {
            q: ' What was the name of the Act passed in the Parliament that formally recognised the new State of Telangana?',
             o: [
                {'txt': 'Andhra Pradesh Reorganisation Act', 'ans' : true},
                {'txt': 'Andhra Pradesh Restructuring Act'},
                {'txt': 'Telangana Boundary Act'}
            ],
            info: 'The Andhra Pradesh Re-organisation Bill, which split the State into Telangana, was passed amidst a TV blackout '
        },
        {
            q: 'How many seats did the Congress win, marking its best performance since 1991? ',
            o: [
                {'txt': '252'},
                {'txt': '206', 'ans': true},
                {'txt': '199'} 
            ],
            info: 'With its 206 seats, the party surpassed 2004’s performance and registered its best performance since 1991 – the last time India saw a single-party, minority government. '
        }
    ],
    "lok16": [
        {
            q: 'What feature was added to the Electronic Voting Machines ahead of the 16th Lok Sabha elections?',
            o: [
                {'txt': 'None of the Above option (NOTA)', 'ans': true},
                {'txt': 'Voter-verifiable Paper Audit Trail'},
                {'txt': 'Photographs of candidates'}
            ],
            info: 'Electronic voting machines, for the first time, presented the ‘None of the Above’ (NOTA) option during voting; 1.08% votes were for NOTA, the highest came from the Nilgiris in Tamil Nadu.'
        },
        {
            q: ' How many seats did the Bharatiya Janata Party secure in the 16th Lok Sabha?',
            o: [
                {'txt': '282', 'ans' : true},
                {'txt': '303'},
                {'txt': '261'}
            ],
            info: 'The Bharatiya Janata Party scripted history with 282 seats to its name – the first time since independence that a party, other than Congress, got a clear majority in the Lok Sabha.'
        },
        {
            q: 'Who was the official Leader of the Opposition in the 16th Lok Sabha?',
            o: [
                {'txt': 'Rahul Gandhi'},
                {'txt': 'No leader of opposition', 'ans': true},
                {'txt': 'Shashi Tharoor'} 
            ],
            info: 'Due to the BJPs significant majority and no single opposition party meeting the 10% seat criterion, there was no official Leader of the Opposition'
        }
    ],
    "lok17": [
        {
            q: 'What was the BJP’s vote share in the 17th Lok Sabha, making it the highest for a political party since 1984?',
            o: [
                {'txt': '37.5%', 'ans': true},
                {'txt': '42.2%'},
                {'txt': '46.5%'}
            ],
            info: 'The BJP was elected with a bigger majority than before, capturing 37.5% of the vote share, the highest for a political party since the 1984 elections, and won 303 seats in the Lok Sabha.'
        },
        {
            q: ' This Biju Janata Dal candidate from Odisha won the Keonjhar seat, making her the youngest Lok Sabha MP at 25. Name her.',
            o: [
                {'txt': 'Chandrani Murmu', 'ans' : true},
                {'txt': 'G. Madhavi'},
                {'txt': 'Heena Gavit'}
            ],
            info: 'Biju Janata Dal in Odisha won a fifth term; candidate Chandrani Murmu won the Keonjhar seat in Odisha to become the youngest-ever Lok Sabha MP'
        },
        {
            q: 'The Bharatiya Nyaya (Second) Sanhita Bill  was passed to replace what old law? ',
            o: [
                {'txt': 'Indian Penal Code', 'ans': true},
                {'txt': 'Code of Criminal Procedure'},
                {'txt': 'Indian Evidence Act'}
            ],
            info: 'A special session of the Lok Sabha also passed the three new criminal laws — the Bharatiya Nyaya (Second) Sanhita Bill, the Bharatiya Nagarik Suraksha (Second) Sanhita Bill and the Bharatiya Sakshya (Second) Bill — to replace the Indian Penal Code, Code of Criminal Procedure and the Indian Evidence Act. '
        }
    ],
}

var quizCurrent = 0
var quizScore = 0
var sabhaAudio = document.getElementById("sabhaAudio");

$(document).ready(function(){

    const items = document.querySelectorAll(".slow-intro-element");

    const observer = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){ 
                observer.unobserve(entry.target)
                entry.target.classList.add("active")
            }
        })
    },
    {
        threshold: 0.3,
    })

    items.forEach(item=>{
        observer.observe(item);
    });
    
    var prevScrollpos = window.pageYOffset;
    
    $(this).scroll(function() {
        if ($(this).scrollTop() >  10) {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                // $(".header").addClass("header-move");
                $("#lok-sabha-sticky-navbar").addClass("header-move");
                // $(".header").css("transform", "translateY(0px)");
            } else {
                // $(".header").css("transform", "translateY(-100px)");
            }
            prevScrollpos = currentScrollPos;
        } else {
            // $(".header").removeClass("header-move");
            $("#lok-sabha-sticky-navbar").removeClass("header-move");
            // $(".header").css("transform", "translateY(0px)");
        }
        prevScrollpos = window.pageYOffset;
        
        if ($(this).scrollTop() >  500) {
            let isMuted = $(".audio-floating button").hasClass("muted")
            if(!isMuted) {
                sabhaAudio.play()
            }
            $(".audio-floating").addClass("active")
        }

    });

    $(".audio-floating button").click(function(e) {
        e.preventDefault()
        let status = $(this).hasClass("muted")

        if(status) {
            sabhaAudio.play()
            $(this).removeClass("muted")
        } else {
            sabhaAudio.pause()
            $(this).addClass("muted")
        }
    })


    /* Image Light Box */
    initLightbox()
    
    $(".share-btn").click(function(){ 
        
        var sharetext = $("title").text();
        var shareurl = window.location.href;

        if (navigator.share && typeof sharetext != "undefined" && typeof shareurl != "undefined" && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            navigator.share({
                title: sharetext,
                text: sharetext,
                url: shareurl
            });
        } else {
            $(this).next(".share-list").toggle();
        }
    });

    $( ".movetonext h2 a").click(function(e) {
        e.preventDefault()
        if(!$(this).parent("h2").hasClass("active") ){
            let file = $(this).attr("data-file");  
            $.get(`./assets/files/${file}.html`, function( data ) {
                $( "#dynamic-content" ).html( data );
                transitionElements()
                initLightbox()
                quiz = quizAll[file];
                quizCurrent = 0; 
                quizScore = 0; 
                quizTest(file);
                scrollHere()
            
            }); 
        }  
    })
    

    $(".link-list li a").click(function(e) {
        e.preventDefault()
        if(!$(this).parent("li").hasClass("active") ){
            let file = $(this).attr("data-file");
            // let audioSources = getAudioSourcesForFile(file);
        // let audioDiv = generateAudioElements(audioSources);        
            $.get(`./assets/files/${file}.html`, function( data ) {
                $( "#dynamic-content" ).html( data );
                // $("#dynamic-content").append(audioDiv);
                transitionElements()
                initLightbox()
                // quizTest()
                quiz = quizAll[file];
                quizCurrent = 0; 
                quizScore = 0; 
                quizTest(file);
                scrollHere()
                // playInitialAudio();

            });
            $(".link-list li").removeClass("active")
            $(this).parent("li").addClass("active")
        }
        
    })

    function scrollHere(){
        document.getElementById("scroll-here").scrollIntoView({         
            behavior: 'smooth',
            block: 'start',
            inline: 'start' ,
            inlineOffset: { top : -100 }
       });
    }

    if($( window ).width() > 1200){
        var totalWidth = -3.8;
        var activeLinkWidth = -3.8;
       
        $(".link-list li").each(function(){
            if($(this).hasClass("active")){
                activeLinkWidth = totalWidth;
            }
            totalWidth = totalWidth + $(this).width() + 3.8;
        });
        var link_scroll_length = totalWidth - 1150;
        var scroll_length = 0;
        var total_fold = parseInt((totalWidth - 1150) / 1150);
        var remaining_length = (totalWidth - 1150) % 1150;
        var no_of_fold = total_fold;
        
        if(totalWidth > 1276 ){
            $(".scroll-arrow-btn.right").show();
        } 

        if(activeLinkWidth < 1150){
            scroll_length = 0;
            no_of_fold = total_fold;
        }
        else if((totalWidth - activeLinkWidth) < 1150){
            scroll_length = link_scroll_length;
            no_of_fold = 0;
            $(".link-list").scrollLeft(scroll_length);
            $(".scroll-arrow-btn.left").show();
            $(".scroll-arrow-btn.right").hide();
        }
        else if('activeLinkWidth < 1150' && '(totalWidth - activeLinkWidth) > 1150'){
            no_of_fold = parseInt(activeLinkWidth / 1150);
            scroll_length = (no_of_fold * 1150);
            no_of_fold--;
            $(".link-list").scrollLeft(scroll_length);
            $(".scroll-arrow-btn.left").show();
            $(".scroll-arrow-btn.right").show();
            
        }
    }
    
    $(".scroll-arrow-btn.right").click(function () {
        $(".scroll-arrow-btn.left").show();
        if(no_of_fold > 0){
            scroll_length = scroll_length + 1150;
            if(scroll_length == link_scroll_length){
                $(".scroll-arrow-btn.right").hide();
            }
            $(".link-list").scrollLeft(scroll_length);
            no_of_fold--;
            return 0;
        }
        scroll_length = scroll_length + remaining_length;
        $(".link-list").scrollLeft(scroll_length);
        $(".scroll-arrow-btn.right").hide();
        return false;
    });

    $(".scroll-arrow-btn.left").click(function () { 
        $(".scroll-arrow-btn.right").show();
        if(no_of_fold < total_fold){
            scroll_length = scroll_length - 1150;
            if(scroll_length < remaining_length){
                $(".scroll-arrow-btn.left").hide();
            }
            $(".link-list").scrollLeft(scroll_length);
            no_of_fold++;
            return 0;
        }
        scroll_length = scroll_length - remaining_length;
        $(".link-list").scrollLeft(scroll_length);
        $(".scroll-arrow-btn.left").hide();
        return false;
    });
    
    
    // Simple Quiz
    // $(".simple-quiz .ans-list").on('click', 'li', function(){
    //     $(".simple-quiz .actions .reason").text('')
    //     if($(this).hasClass("correct-ans")){
    //         $(this).addClass("active correct-icon");
    //         $(".simple-quiz .actions .reason").text(`Correct - ${quiz[quizCurrent-1].info}`);
    //         quizScore++;
    //         return false;
    //     }
    //     $(this).addClass("active wrong-icon");
    //     $(".simple-quiz .actions .reason").text(`InCorrect - ${quiz[quizCurrent-1].info}`);
    //     $(".simple-quiz .ans-list li.correct-ans").addClass("correct-icon");
    //     return false;
    // });

    // $(".simple-quiz .next-qustn").click(function(){
    //     if(quiz.length === quizCurrent) {
    //         $(".simple-quiz .quiz-qus").slideUp();
    //         $(".simple-quiz .result").slideDown();
    //         $(".simple-quiz .result-count").html(quizScore+'/'+quiz.length)
    //     } else {
    //         appendQuizItem(quizCurrent)
    //     }
    // });

    // $(".simple-quiz .start-quiz").click(function(){ 
    //     alert();
    //     $(".simple-quiz .qus-img").slideUp();
    //     $(".simple-quiz .quiz-qus").slideDown();
    //     appendQuizItem(quizCurrent)
    //     return false;
    // });

    // $(".simple-quiz .question-result .reload").click(function(e){
    //     e.preventDefault()
    //     quizCurrent = 0
    //     quizScore = 0
    //     $(".simple-quiz .qus-img, .simple-quiz .result").slideUp();
    //     $(".simple-quiz .quiz-qus").slideDown();
    //     appendQuizItem(quizCurrent)
    // })

    $('.owl-carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplay:false,
        touchDrag:true,
        mouseDrag:true,
        dots: false,
        responsive:{
            0:{
                items:1.4,
                nav:false,
                dots:false, 
                slideBy:1
            },
            600:{
                items:2.5,
                nav:false,
                dots:false,
                slideBy:1
            },
            1000:{
                items:3.5,
                nav:false,
                dots:false,
                slideBy:3
            },
            1200:{
                items:4,
                nav:true,
                dots:true,
                navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
                slideBy:4
            },
        }
    });
});

$(document).mouseup(function(e) {
    var container = $(".share-btn");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".share-list").slideUp();
    }
});

function transitionElements() {
    const items = document.querySelectorAll(".slow-intro-element");

    const observer = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){ 
                observer.unobserve(entry.target)
                entry.target.classList.add("active")
            }
        })
    },
    {
        threshold: 0.3,
    })

    items.forEach(item=>{
        observer.observe(item);
    });
}

function initLightbox() {
    /* Image Light Box */
    var totalImgs = $(".article-picture .zoom-img").length;
    var imgIndex = 0;

    $(".light-box .info .counter .current").text(imgIndex + 1);
    $(".light-box .info .counter .total").text(totalImgs);

    if (totalImgs === 1) {
        $(".light-box .info .counter .photo-detail").text('Photo');
    } else {
        $(".light-box .info .counter .photo-detail").text('Photos');
    }

    $(".article-picture .zoom-img").click(function(){ 
        imgIndex = $(this).index(".zoom-img");
        let type = $(this).attr("data-type")
        let src = $(this).attr("data-src")

        $(".light-box .slide").attr("data-type", type)

        $(".light-box .info .current").text(imgIndex + 1);
        $(".light-box").show();
        $("body").addClass("stop-scroll");

        if(type === 'img') {
            $(".light-box .slide img").attr('src', src);
        } else {
            $(".light-box .slide iframe").attr('src', src);
        }

        $(".light-box .info .text").text($(this).nextAll(".caption").text());
        toggleArrows();
    });

    $(".light-box .slide .next").click(function(){ 
        imgIndex = (imgIndex + 1) % totalImgs;
        updateLightboxContent();
    });

    $(".light-box .slide .prev").click(function(){ 
        imgIndex = (imgIndex - 1 + totalImgs) % totalImgs;
        updateLightboxContent();
    });

    $(".light-box .close-lightbox").click(function(){ 
        $(".light-box").hide();
        $("body").removeClass("stop-scroll");
    });

    function updateLightboxContent() {
        let type = $(".article-picture .zoom-img").eq(imgIndex).attr("data-type")
        let src = $(".article-picture .zoom-img").eq(imgIndex).attr("data-src")
        $(".light-box .slide").attr("data-type", type)

        $(".light-box .info .current").text(imgIndex + 1);

        if(type === 'img') {
            $(".light-box .slide img").attr("src", src);
        } else {
            $(".light-box .slide iframe").attr('src', src);
        }

        // $(".light-box .slide img").attr("src", $(".article-picture .zoom-img").eq(imgIndex).find("img").attr('src'));
        $(".light-box .info .text").text($(".article-picture .zoom-img").eq(imgIndex).nextAll(".caption").text());
        
        toggleArrows();
    }

    function toggleArrows() {
        if (totalImgs <= 1) {
            $(".light-box .slide .next, .light-box .slide .prev").hide();
        } else {
            $(".light-box .slide .next, .light-box .slide .prev").show();
        }
    }
}
function quizTest(file){
    // let quizData = quizAll[file];

    $(".simple-quiz .ans-list").on('click', 'li', function() {
        $(".simple-quiz .actions .reason").text('');
        if ($(this).hasClass("correct-ans")) {
            $(this).addClass("active correct-icon");
            $(".simple-quiz .actions .reason").text(`Correct - ${quiz[quizCurrent - 1].info}`);
            quizScore++;
            return false;
        }
        $(this).addClass("active wrong-icon");
        $(".simple-quiz .actions .reason").text(`Incorrect - ${quiz[quizCurrent - 1].info}`);
        $(".simple-quiz .ans-list li.correct-ans").addClass("correct-icon");
        return false;
    });
    
    $(".simple-quiz .next-qustn").click(function() {
        if (quiz.length === quizCurrent) {
            $(".simple-quiz .quiz-qus").slideUp();
            $(".simple-quiz .result").slideDown();
            $(".simple-quiz .result-count").html(quizScore + '/' + quiz.length);
        } else {
            appendQuizItem(quizCurrent);
        }
    });
    
    // $(".link-list-outer .link-list .reload").click(function(e) {
    //     e.preventDefault();
    //     quizCurrent = 0;
    //     quizScore = 0;
    //     $(".simple-quiz .qus-img, .simple-quiz .result").slideUp();
    //     $(".simple-quiz .quiz-qus").slideDown();
    //     appendQuizItem(quizCurrent);
    // });

    $(".simple-quiz .question-result .reload").click(function(e) {
        e.preventDefault();
        quizCurrent = 0;
        quizScore = 0;
        $(".simple-quiz .qus-img, .simple-quiz .result").slideUp();
        $(".simple-quiz .quiz-qus").slideDown();
        appendQuizItem(quizCurrent);
    });
    
    $(".simple-quiz .qus-img").slideUp();
    $(".simple-quiz .quiz-qus").slideDown();
    appendQuizItem(quizCurrent);
   
}

function appendQuizItem(index) {
    $(".simple-quiz .quiz-qus .question").html(`${quizCurrent + 1}/${quiz.length} | ${quiz[index].q}`);
    $("ul.ans-list, .simple-quiz .reason").html('');
    quiz[index].o.forEach(item => {
        $("ul.ans-list").append(`<li class='${item.hasOwnProperty('ans') ? 'correct-ans' : ''}'>${item.txt}</li>`);
    });
    quizCurrent++;
}

var pageURL = window.location.href;
    
function copyToClipboard() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(pageURL).select();
    document.execCommand("copy");
    $temp.remove();
}
function sendEmail() {
    var subject = "Mangoes of India";
    var emailBody = pageURL;
    document.location = "mailto:?subject="+subject+"&body="+emailBody;
}
function openShareLink(pLink) {
    var popUp = window.open(pLink+pageURL, 'popupwindow', 'scrollbars=yes,width=740,height=400');
    popUp.focus();
    $(".share-list").hide();
    return false;
}

var video = document.getElementById('video');
video.onended = function() {
video.play();
};