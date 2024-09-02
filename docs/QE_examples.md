<div style="text-align: justify;">
Here the input files for QE executables to evaluate material properties are presented using GaN crystal.
The unit cell parameters for a certain crystal can be obtained from <a href="https://next-gen.materialsproject.org/materials"  target="_blank" rel="noopener">the Material Project database</a>.
</div>

## SCF calculations

```
pw.x < gan_scf.in > gan_scf.out
```

```
 &control
    calculation = 'scf'
    prefix      = 'gan'
    outdir      = './outdir'
    pseudo_dir  = '/opt/QE/qe-7.3.1/pseudo/abinit/'
 /
 &system
    a           =  3.21629e+00
    c           =  5.23996e+00
    degauss     =  1.00000e-02
    ecutrho     =  2.25000e+02
    ecutwfc     =  2.50000e+01
    ibrav       = 4
    nat         = 4
    ntyp        = 2
    occupations = 'smearing'
    smearing    = 'gaussian'
 /
 &electrons
    conv_thr         =  1.00000e-06
    electron_maxstep = 200
    mixing_beta      =  7.00000e-01
    startingpot      = 'atomic'
    startingwfc      = 'atomic+random'
 /
ATOMIC_SPECIES
  Ga  69.72300  Ga_ONCV_PBE_fr.upf
  N  14.00674  N_ONCV_PBE_fr.upf
ATOMIC_POSITIONS {angstrom}
  Ga     -0.000000   1.856926   5.235351
  Ga      1.608145   0.928463   2.615370
  N      -0.000000   1.856926   1.969597
  N       1.608145   0.928463   4.589578
K_POINTS {automatic}
12  12  6  0 0 0
```

## nSCF calculations

```
pw.x < gan_nscf.in > gan_nscf.out
```

```
 &control
    calculation = 'nscf'
    prefix      = 'gan'
    outdir      = './outdir'
    pseudo_dir  = '/opt/QE/qe-7.3.1/pseudo/abinit/'
 /
 &system
    a           =  3.21629e+00
    c           =  5.23996e+00
    degauss     =  1.00000e-02
    ecutrho     =  2.25000e+02
    ecutwfc     =  2.50000e+01
    ibrav       = 4
    nat         = 4
    ntyp        = 2
    nbnd        = 100
    occupations = 'smearing'
    smearing    = 'gaussian'
 /
 &electrons
    conv_thr         =  1.00000e-06
    electron_maxstep = 200
    mixing_beta      =  7.00000e-01
    startingpot      = 'atomic'
    startingwfc      = 'atomic+random'
 /
ATOMIC_SPECIES
  Ga  69.72300  Ga_ONCV_PBE_fr.upf
  N  14.00674  N_ONCV_PBE_fr.upf
ATOMIC_POSITIONS {angstrom}
  Ga     -0.000000   1.856926   5.235351
  Ga      1.608145   0.928463   2.615370
  N      -0.000000   1.856926   1.969597
  N       1.608145   0.928463   4.589578
K_POINTS {automatic}
12  12  6  0 0 0
```

## Band calculations

```
pw.x < gan_bands.in > gan_bands.out
```

```
 &control
    calculation = 'bands'
    prefix      = 'gan'
    outdir      = './outdir'
    pseudo_dir  = '/opt/QE/qe-7.3.1/pseudo/abinit/'
 /
 &system
    a           =  3.21629e+00
    c           =  5.23996e+00
    degauss     =  1.00000e-02
    ecutrho     =  2.25000e+02
    ecutwfc     =  2.50000e+01
    ibrav       = 4
    nat         = 4
    ntyp        = 2
    nbnd        = 100
    occupations = 'smearing'
    smearing    = 'gaussian'
 /
 &electrons
    conv_thr         =  1.00000e-06
    electron_maxstep = 200
    mixing_beta      =  7.00000e-01
    startingpot      = 'atomic'
    startingwfc      = 'atomic+random'
 /
ATOMIC_SPECIES
  Ga  69.72300  Ga_ONCV_PBE_fr.upf
  N  14.00674  N_ONCV_PBE_fr.upf
ATOMIC_POSITIONS {angstrom}
  Ga     -0.000000   1.856926   5.235351
  Ga      1.608145   0.928463   2.615370
  N      -0.000000   1.856926   1.969597
  N       1.608145   0.928463   4.589578
K_POINTS {tpiba_b}
8
gG     20
M      20
K      20
gG     20
A      20
L      20
H      20
A      0
```

## Band post-processing

```
bands.x < gan_bands.pp.in > gan_bands.pp.out
```

```
 &bands
    outdir='./outdir'
    prefix='gan'
    filband='gan.bands.data'
 /
```

```
plotband.x < gan_plotband.in > gan_plotband.out
```

```
gan.bands.data
1.0 20.0
gan.bands.xmgr
gan.bands.ps
10.0317
1.0 10.0317
```