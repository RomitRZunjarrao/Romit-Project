import React, { Component } from 'react';


class Blog1 extends Component {
  render() {
    return (
      <div className="item1">
      <table>
      <tr><td className="date2" ><h1>AMD</h1></td><td className="date1">Date : 21/6/17</td></tr>
      <tr ><td colspan="2"><p>Advanced Micro Devices, Inc. (AMD) is an American multinational semiconductor company based in Santa Clara, California, that develops computer processors and related technologies for business and consumer markets. While initially it manufactured its own processors, the company later outsourced its manufacturing, a practice known as fabless, after GlobalFoundries was spun off in 2009. AMDs main products include microprocessors, motherboard chipsets, embedded processors and graphics processors for servers, workstations and personal computers, and embedded systems applications. AMD is the second-largest supplier and only significant rival to Intel in the market for x86-based microprocessors. Since acquiring ATI in 2006, AMD and its competitor Nvidia have dominated the discrete Graphics Processing Unit (GPU) market.
  </p></td></tr>
  <tr><td className="date2"><h1>INTEL</h1></td><td className="date1" >Date : 21/6/17</td></tr>

      <tr><td colspan="2"><p>Intel Corporation also known as Intel, stylized as intel is an American multinational corporation and technology company headquartered in Santa Clara, California, in the Silicon Valley. It is the worlds second largest and second highest valued semiconductor chip makers based on revenue after being overtaken by Samsung, and is the inventor of the x86 series of microprocessors, the processors found in most personal computers (PCs). Intel supplies processors for computer system manufacturers such as Apple, Lenovo, HP, and Dell. Intel also manufactures motherboard chipsets, network interface controllers and integrated circuits, flash memory, graphics chips, embedded processors and other devices related to communications and computing.</p></td></tr>
<tr><td className="date2"><h1>NVIDIA</h1></td><td className="date1">Date : 21/6/17</td></tr>
      <tr><td colspan="2"><p >Nvidia Corporation most commonly referred to as Nvidia, stylized as NVIDIA, nVIDIA, or nVidia is an American technology company incorporated in Delaware and based in Santa Clara, California. It designs graphics processing units (GPUs) for the gaming, cryptocurrency, and professional markets, as well as system on a chip units (SoCs) for the mobile computing and automotive market. Its primary GPU product line, labeled "GeForce", is in direct competition with Advanced Micro Devices (AMD) "Radeon" products. Nvidia expanded its presence in the gaming industry with its handheld Shield Portable, Shield Tablet and Shield Android TV.
Since 2014,Nvidia has shifted to become a platform company focused on four markets – gaming, professional visualization, data centers and auto. Nvidia is also now focused on artificial intelligence.
In addition to GPU manufacturing, Nvidia provides parallel processing capabilities to researchers and scientists that allow them to efficiently run high-performance applications.
</p></td></tr>
</table>


      </div>
    );
  }
}

export default Blog1;
