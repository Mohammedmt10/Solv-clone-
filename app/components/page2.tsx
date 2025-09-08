"use client"
import { motion } from "motion/react";
import RightArrow from "../icons/rightArrow";
import FlowerIcon from "../icons/flowerIcon";
import PlusIcon from "../icons/plusIcon";
import IndianFlag from "../icons/IndiaFlag";
export default function Page2() {
  
  const heroLines = ["Build for your next", "gen of payment"];
  
  const paragraphLines1 = ["<b>Experiance seamless integration </b>of technology and<br>","finance, build for your success and convenience.<br>"];
  
  const paragraphLines2 = ["<b>The power of an ERP, </b>with none of the legacy baggage.<br>","Servio. gives mid-market finance & accounting teams<br>","an intuitive platform for audit-readiness, multi-entity."];
  
  const blueBoxHeading = ["Control spend", "effortlessly at any size"];

  const blueBoxParagraph = ["Issue corporate cards and reimburse expenses" , "Set company-wide spend policies in minutes"];

  const greenBoxText = ["Fuel your growth with " , "friendly Venture Debt"]
  
  return <div className="h-screen pt-10 flex flex-col justify-between px-10 text-[#303405]">
    <div className="bg-neutral-200 w-fit mx-auto px-4 py-2 rounded-full font-medium">
      Join over 500 businesses already growing with Servio.
    </div>
    <div className="pb-10 flex justify-between">
    <div>
      {heroLines.map((line , j) => (
         <div key={j} className="flex">
            {line.split(' ').map((word , i) => (
            <motion.div
            key={word}
            initial = {{
                y : 20,
                opacity : 0
            }}
            whileInView = {{
                y : -20,
                opacity : 1,
                transition : {
                    delay : (j == 0) ? i * 0.1 : 0.4 + i * 0.1
                }
            }}
            className="text-6xl font-semibold">
                    {word}<span>&nbsp;</span>
            </motion.div>

            ))}
        </div>
       ))}
    <br />
    <div className="flex gap-3">
      <motion.button
      initial = {{
        y : 20,
        opacity : 0
      }}
      whileInView={{
        y : -1,
        opacity : 1,
        transition : {
          delay : 0.5
        }
      }}
       className="flex items-center bg-[#303405] text-white gap-2 p-3 rounded-full ">Start banking <RightArrow /></motion.button>
      <motion.button
      initial = {{
        y : 20,
        opacity : 0
      }}
      whileInView={{
        y : -1,
        opacity : 1,
        transition : {
          delay : 0.6
        }
      }}
      className="border-1 border-[#303405] p-3 rounded-full font-medium">Learn More</motion.button>
    </div>
    <br />
    <div>
      {paragraphLines1.map((line, i) => (
          <motion.div
          initial = {{
            y : 10,
            opacity : 0
          }}
          whileInView = {{
            y : -1,
            opacity : 1,
            transition : {
              delay : 0.8 + 0.1 * i
            }
          }}
          key={i} dangerouslySetInnerHTML={{__html : line}} />
      ))}
      <br />
      {paragraphLines2.map((line, i) => (
          <motion.div
          initial = {{
            y : 10,
            opacity : 0
          }}
          whileInView = {{
            y : -1,
            opacity : 1,
            transition : {
              delay : 1.4 + 0.1 * i
            }
          }}
          key={i} dangerouslySetInnerHTML={{__html : line}} />
      ))}
    </div>
    </div>
      <div className="flex gap-4">
        <motion.div 
        initial = {{
          height : 10
        }}
        whileInView={{
          height : "fit-content",
          transition : {
            duration : 0.3
          }
        }}
        className="bg-[#d4e8eb] text-2xl h-fit font-semibold mt-auto px-8 pr-18 py-6 rounded-3xl">
          <motion.div>
             {blueBoxHeading.map((line , i) => (
              <motion.div key={i} className="flex gap-1.5">
                  {line.split(' ').map((word , j) => (
                    <motion.div
                    initial = {{
                      y : 10,
                      opacity : 0
                    }}
                    whileInView={{
                      y : -1,
                      opacity : 1,
                      transition : {
                        delay : 0.4 * i + 0.4 + 0.1 * j
                      }
                    }}
                    key={j}>
                      {word}
                    </motion.div>
                  ))}
                  <br />
              </motion.div>
             ))}
          </motion.div>
          <br />
          <div className="font-normal text-sm">
            {blueBoxParagraph.map((line , i) => (
              <motion.div
              initial = {{
                y : 10,
                opacity : 0
              }}
              whileInView={{
                y : -1,
                opacity : 1,
                transition : {
                  delay : 1.3 + i * 0.1
                }
              }}
              className="flex items-center gap-1" key={i}>
              <RightArrow size={"sm"} />{line}
              </motion.div>
            ))}
          </div>
          <div className="mt-6">
            <motion.button 
            initial = {{
              y : 10,
              opacity : 0
            }}
            whileInView={{
              y : -1,
              opacity : 1,
              transition : {
                delay : 1.6
              }
            }}
            className="flex items-center gap-2 font-normal text-lg text-white bg-[#2e3501] px-4 py-2 rounded-full cursor-pointer">Manage expenses <RightArrow /></motion.button>
          </div>
        </motion.div>
        <motion.div
        initial = {{
          height : 40
        }}
        whileInView={{
          height : "fit-content"
        }}
        className="bg-[#141901] justify-between relative z-[10] w-fit overflow-clip flex flex-col bottom-0 mt-auto rounded-3xl">
          <div className="w-full">
            <div className="absolute z-[-1] -m-10 -mx-40"><FlowerIcon /></div>
            <div className="flex justify-between w-full">
              <motion.div
              initial = {{
                x : 333,
              }}
              whileInView={{
                x : -1,
                transition : {
                  duration : 1.2,
                  delay : 1
                }
              }}
              className=" bg-[#acb18c] w-fit m-10 ml-6 mx-4 p-3 flex flex-col gap-3 h-fit pr-12 rounded-2xl">
                <button className="bg-white text-[#141901] rounded-full w-fit px-3 py-1">Send money</button>
                
                <div className="flex w-full">
                  <img src="https://images.pexels.com/photos/16251528/pexels-photo-16251528.jpeg" className="h-10 w-10 rounded-full" />
                  <img src="https://images.pexels.com/photos/16251528/pexels-photo-16251528.jpeg" className="h-10 w-10 rounded-full absolute ml-6" />
                  <img src="https://images.pexels.com/photos/16251528/pexels-photo-16251528.jpeg" className="h-10 w-10 rounded-full absolute ml-12" />
                  <div className="h-10 w-10 bg-[#fefeff] ml-18 absolute rounded-full">
                    <div className="px-3 pt-3">
                      <PlusIcon />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
              initial = {{
                x : 145
              }}
              whileInView={{
                x : -1,
                transition : {
                  duration : 1.2,
                  delay : 1.6
                }
              }}
              className="border-[#e0f562] border-2 rounded-l-2xl mt-20 border-r-0 h-fit w-fit p-2 pr-0 flex flex-col gap-3 relative">
                <button className="bg-[#e0f562] rounded-r-none rounded-full px-2">Exchange money</button>
                <div className="flex justify-end -mr-3">              
                  <div className="ml-2"><IndianFlag /></div>
                  <div className="-ml-2"><IndianFlag /></div>
                  <div className="-ml-4"><IndianFlag /></div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="text-[#e0f562] text-2xl my-8 mx-10">
              {greenBoxText.map((line , i) => (
                <div key={i} className="flex">
                  {line.split(' ').map((word , j) => (
                    <motion.div
                    className="pr-2"
                    key={j}
                    initial = {{
                      y : 10,
                      opacity : 0
                    }}
                    whileInView={{
                      y : -1,
                      opacity : 1,
                      transition : {
                        delay : 1 + 0.4 * i + 0.4 + 0.1 * j,
                        duration : 0.3
                      }
                    }}
                    >
                      {word}
                    </motion.div>
                  ))}
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
}
