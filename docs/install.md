# Installation guide
<div style="text-align: justify;">
The data are available from <a href="https://github.com/YauheniTalochkaN"  target="_blank" rel="noopener">the author</a> upon reasonable request.
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