# Installation guide
<div style="text-align: justify;">
You can download the source code of the LEPAM package <a href="https://github.com/YauheniTalochkaN/LEPAM"  target="_blank" rel="noopener">here</a>.
Before compiling the LEPAM code, the <a href="https://root.cern/"  target="_blank" rel="noopener">CERN ROOT toolkit</a> and <a href="https://www.openmp.org/"  target="_blank" rel="noopener">OpenMP library</a> must be installed in your system.
After that, the LEPAM toolkit can be compiled as 
```
cd LEPAM
mkdir build
cd build
cmake ../
make -jN
make install
```
</div>