var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'m-item'])
Z([[2,'+'],[1,'message'],[[7],[3,'id']]])
Z([[2,'=='],[[6],[[7],[3,'message']],[3,'user']],[1,'home']])
Z([[2,'=='],[[6],[[7],[3,'message']],[3,'user']],[1,'customer']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'m-input-view'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'clearable_']],[[2,'!'],[[7],[3,'displayable_']]]],[[6],[[7],[3,'value']],[3,'length']]])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'#666666'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'clear']]]]]]]]])
Z([3,'20'])
Z([3,'clear'])
Z([3,'1'])
Z([[7],[3,'displayable_']])
Z(z[2])
Z(z[3])
Z([[2,'?:'],[[7],[3,'showPassword']],[1,'#cccccc'],[1,'#666666']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'display']]]]]]]]])
Z(z[6])
Z([3,'eye'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'__e'])
Z([3,'uni-noticebar'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showClose']],[1,'true']],[[2,'==='],[[7],[3,'showClose']],[1,true]]])
Z([3,'__l'])
Z([3,'12'])
Z([3,'closefill'])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'uni-noticebar__content']],[[7],[3,'setContenClass']]]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showIcon']],[1,'true']],[[2,'==='],[[7],[3,'showIcon']],[1,true]]])
Z(z[6])
Z([[7],[3,'color']])
Z([3,'14'])
Z([3,'sound'])
Z([3,'2'])
Z([[2,'||'],[[2,'==='],[[7],[3,'showGetMore']],[1,'true']],[[2,'==='],[[7],[3,'showGetMore']],[1,true]]])
Z(z[1])
Z([3,'uni-noticebar__content-more'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clickMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'width:'],[[2,'?:'],[[7],[3,'moreText']],[1,'180upx'],[1,'20px']]],[1,';']])
Z([[7],[3,'moreText']])
Z(z[6])
Z(z[14])
Z([3,'arrowright'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-70cb052d'])
Z([3,'__e'])
Z([3,'user-section data-v-70cb052d'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'hid']]]]]]]]])
Z(z[1])
Z([3,'data-v-70cb052d'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dynInfo']])
Z(z[8])
Z(z[5])
Z([3,'userInfo data-v-70cb052d'])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'following']],[1,0]],[[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,0]]],[[2,'=='],[[7],[3,'following']],[1,false]]])
Z(z[1])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[1,'behaviour']]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,0]])
Z([3,'option-section data-v-70cb052d'])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'isLike']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'isLike']],[1,0]])
Z([[7],[3,'doomm']])
Z([[2,'!'],[[7],[3,'doomm']]])
Z([3,'daily-seciton data-v-70cb052d'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,1]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,0]],[[2,'=='],[[6],[[7],[3,'item']],[3,'following']],[1,1]]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'following']],[1,0]],[[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,0]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'following']],[1,0]])
Z([[7],[3,'showComment']])
Z(z[1])
Z([3,'comment-section data-v-70cb052d'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveHandle']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'ind'])
Z([3,'ite'])
Z([[7],[3,'commentInfo']])
Z(z[33])
Z(z[1])
Z([3,'comment-section-comm data-v-70cb052d'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'replyComm']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'$1']],[1,'$2']]]],[[4],[[5],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'commentInfo']],[1,'']],[[7],[3,'ind']]],[1,'id']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'commentInfo']],[1,'']],[[7],[3,'ind']]],[1,'name']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'commentInfo']],[1,'']],[[7],[3,'ind']]],[1,'uid']]]]]]]]]]]]]]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'ite']],[3,'replyName']],[1,'']],[[2,'!='],[[6],[[7],[3,'ite']],[3,'replyContent']],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-7a7f93c1'])
Z([3,'__e'])
Z(z[1])
Z([3,'scroll data-v-7a7f93c1 vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[1,'scrolltolower']]]]]]]],[[4],[[5],[[5],[1,'scrolltoupper']],[[4],[[5],[[4],[[5],[[5],[1,'scrolltoupper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'scroll'])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z(z[7])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dynInfo']])
Z(z[9])
Z([3,'user data-v-7a7f93c1'])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'following']],[1,0]],[[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,0]]],[[2,'=='],[[7],[3,'following']],[1,false]]])
Z(z[1])
Z([3,'right data-v-7a7f93c1'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'behaviour']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'dynInfo']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,0]])
Z([[7],[3,'showComment']])
Z([3,'ind'])
Z([3,'ite'])
Z([[7],[3,'commentInfo']])
Z(z[20])
Z(z[1])
Z([3,'comment-section-comm data-v-7a7f93c1'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'replyComm']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'$1']],[1,'$2']]]],[[4],[[5],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'commentInfo']],[1,'']],[[7],[3,'ind']]],[1,'id']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'commentInfo']],[1,'']],[[7],[3,'ind']]],[1,'name']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'commentInfo']],[1,'']],[[7],[3,'ind']]],[1,'uid']]]]]]]]]]]]]]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'ite']],[3,'replyName']],[1,'']],[[2,'!='],[[6],[[7],[3,'ite']],[3,'replyContent']],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input-group data-v-1b61bf40'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-1b61bf40'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'name']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'酒吧織名稱'])
Z([3,'text'])
Z([[6],[[7],[3,'barInfo']],[3,'name']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'phone']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'11'])
Z([3,'聯係電話'])
Z([3,'number'])
Z([[6],[[7],[3,'barInfo']],[3,'phone']])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'location']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'詳細地址'])
Z(z[6])
Z([[6],[[7],[3,'barInfo']],[3,'location']])
Z([3,'3'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'intro']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'酒吧簡介'])
Z(z[6])
Z([[6],[[7],[3,'barInfo']],[3,'intro']])
Z([3,'4'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'username']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'申請人姓名'])
Z(z[6])
Z([[6],[[7],[3,'barInfo']],[3,'username']])
Z([3,'5'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'userphone']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'申請人聯係方式'])
Z(z[15])
Z([[6],[[7],[3,'barInfo']],[3,'userphone']])
Z([3,'6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pages-content data-v-425bd3f4'])
Z([[2,'!='],[[6],[[7],[3,'picture']],[1,1]],[1,'undefined']])
Z([[2,'!='],[[6],[[7],[3,'picture']],[1,2]],[1,'undefined']])
Z([[2,'!='],[[6],[[7],[3,'picture']],[1,3]],[1,'undefined']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-17e103f4'])
Z([[7],[3,'showComment']])
Z([3,'comment data-v-17e103f4'])
Z([3,'true'])
Z([[2,'!'],[[6],[[7],[3,'commList']],[3,'length']]])
Z([3,'ind'])
Z([3,'ite'])
Z([[7],[3,'commList']])
Z(z[5])
Z([3,'idx'])
Z([3,'it'])
Z([[6],[[7],[3,'ite']],[3,'reply']])
Z(z[9])
Z([[2,'!='],[[6],[[7],[3,'ite']],[3,'reply']],[1,'']])
Z([[7],[3,'showLoadMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-column'])
Z([3,'index'])
Z([3,'message'])
Z([[7],[3,'messages']])
Z(z[1])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'message']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[5])
Z([3,'__e'])
Z(z[10])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^sendMessage']],[[4],[[5],[[4],[[5],[1,'getInputMessage']]]]]]]],[[4],[[5],[[5],[1,'^focus']],[[4],[[5],[[4],[[5],[1,'inputGetFocus']]]]]]]]])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pages-content data-v-3ce3a3db'])
Z([3,'true'])
Z([[2,'!'],[[7],[3,'created']]])
Z(z[2])
Z(z[2])
Z(z[2])
Z([[7],[3,'created']])
Z([[7],[3,'height']])
Z([[7],[3,'createImg']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[10])
Z([3,'pan-poster data-v-3ce3a3db'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^success']],[[4],[[5],[[4],[[5],[1,'saveImg']]]]]]]],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[1,'save']]]]]]]]])
Z([3,'http://47.244.27.153/images/static/img/poster/poster.png'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pan-list data-v-0a73e13c'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listInfo']])
Z(z[1])
Z([3,'pan-list-ul _ul data-v-0a73e13c'])
Z([[2,'=='],[[7],[3,'labelList']],[1,'budget']])
Z([[2,'=='],[[7],[3,'labelList']],[1,'task']])
Z([3,'data-v-0a73e13c'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,0]])
Z(z[7])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'isShow']],[[2,'=='],[[7],[3,'labelList']],[1,'budget']]],[[2,'=='],[[7],[3,'isShow']],[1,true]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'focus-list data-v-01f450a6'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listInfo']])
Z(z[1])
Z([3,'focus-list-ul _ul data-v-01f450a6'])
Z([[2,'=='],[[7],[3,'labelList']],[1,'budget']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'labelList']],[1,'task']],[[2,'=='],[[7],[3,'index']],[1,0]]])
Z([[2,'=='],[[7],[3,'labelList']],[1,'task']])
Z([3,'data-v-01f450a6'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,0]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'labelList']],[1,'budget']],[[2,'!='],[[7],[3,'isShow']],[1,true]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'潘多拉星球歡迎您'])
Z([3,'1'])
Z([3,'input-group'])
Z(z[1])
Z([3,'__e'])
Z([3,'m-input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'使用手機號/郵箱登錄'])
Z([3,'text'])
Z([[7],[3,'account']])
Z([3,'2'])
Z(z[1])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'請輸入密碼'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-5af6e2ae'])
Z([[7],[3,'showComment']])
Z([3,'comment data-v-5af6e2ae'])
Z([3,'true'])
Z([[2,'!'],[[6],[[7],[3,'commList']],[3,'length']]])
Z([3,'ind'])
Z([3,'ite'])
Z([[7],[3,'commList']])
Z(z[5])
Z([3,'idx'])
Z([3,'it'])
Z([[6],[[7],[3,'ite']],[3,'reply']])
Z(z[9])
Z([[2,'!='],[[6],[[7],[3,'ite']],[3,'reply']],[1,'']])
Z([[7],[3,'showLoadMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-a9758abe vue-ref'])
Z([3,'page'])
Z([[7],[3,'showComment']])
Z([3,'__e'])
Z([3,'comment data-v-a9758abe'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveHandle']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([[2,'!'],[[6],[[7],[3,'commList']],[3,'length']]])
Z([3,'ind'])
Z([3,'ite'])
Z([[7],[3,'commList']])
Z(z[8])
Z([3,'idx'])
Z([3,'it'])
Z([[6],[[7],[3,'ite']],[3,'reply']])
Z(z[12])
Z([[2,'!='],[[6],[[7],[3,'ite']],[3,'reply']],[1,'']])
Z([[7],[3,'showLoadMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pages-content data-v-e1c10514'])
Z([3,'__e'])
Z([3,'vote data-v-e1c10514'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'vote']],[[4],[[5],[[5],[1,'1']],[1,'$0']]]],[[4],[[5],[1,'voteList.status']]]]]]]]]]])
Z([[7],[3,'btnStatus']])
Z([3,'hover-primary'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'voteList']],[3,'iswell']],[1,1]],[[2,'=='],[[6],[[7],[3,'voteList']],[3,'status']],[1,1]]])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'vote']],[[4],[[5],[[5],[1,'0']],[1,'$0']]]],[[4],[[5],[1,'voteList.status']]]]]]]]]]])
Z(z[4])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'voteList']],[3,'iswell']],[1,0]],[[2,'=='],[[6],[[7],[3,'voteList']],[3,'status']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'asset data-v-56ef90b9'])
Z([[2,'!'],[[7],[3,'isHidden']]])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'eyeIcon data-v-56ef90b9'])
Z([[7],[3,'changColor']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'assetHidden']]]]]]]]])
Z([3,'20'])
Z([3,'eye'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'找回或修改密碼'])
Z([3,'1'])
Z([[2,'=='],[[7],[3,'succ']],[1,false]])
Z([3,'input-group'])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'輸入注冊的郵箱/手機'])
Z([3,'text'])
Z([[7],[3,'account']])
Z([3,'2'])
Z(z[1])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'regCode']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'6'])
Z([3,'輸入驗證碼'])
Z([3,'number'])
Z([[7],[3,'regCode']])
Z([3,'3'])
Z([[2,'=='],[[7],[3,'succ']],[1,true]])
Z(z[5])
Z(z[1])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'6位數以上由字母和數字組成的密碼'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'4'])
Z(z[1])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'verifyPwd']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'確認您的密碼'])
Z(z[27])
Z([[7],[3,'verifyPwd']])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'移民潘多拉星球'])
Z([3,'1'])
Z([3,'input-group'])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([[7],[3,'regType']])
Z([[7],[3,'account']])
Z([3,'2'])
Z(z[1])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'regCode']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'6'])
Z([3,'輸入驗證碼'])
Z([3,'number'])
Z([[7],[3,'regCode']])
Z([3,'3'])
Z(z[1])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'6位數以上由字母和數字組成的密碼'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'4'])
Z(z[1])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'verifyPwd']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'確認您的密碼'])
Z(z[23])
Z([[7],[3,'verifyPwd']])
Z([3,'5'])
Z(z[1])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'inviteCode']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'邀請碼(選填)'])
Z([3,'text'])
Z([[7],[3,'inviteCode']])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-2284d3b2'])
Z([[7],[3,'showComment']])
Z([3,'comment data-v-2284d3b2'])
Z([3,'true'])
Z([[2,'!'],[[6],[[7],[3,'commList']],[3,'length']]])
Z([3,'ind'])
Z([3,'ite'])
Z([[7],[3,'commList']])
Z(z[5])
Z([3,'idx'])
Z([3,'it'])
Z([[6],[[7],[3,'ite']],[3,'reply']])
Z(z[9])
Z([[2,'!='],[[6],[[7],[3,'ite']],[3,'reply']],[1,'']])
Z([[7],[3,'showLoadMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input-group'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'name']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z([3,'text'])
Z([[6],[[7],[3,'userInfo']],[3,'name']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'stature']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z([3,'3'])
Z([3,'number'])
Z([[6],[[7],[3,'userInfo']],[3,'stature']])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'weight']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z(z[10])
Z(z[11])
Z([[6],[[7],[3,'userInfo']],[3,'weight']])
Z(z[10])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'age']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z(z[11])
Z([[6],[[7],[3,'userInfo']],[3,'age']])
Z([3,'4'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'site']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z(z[4])
Z([[6],[[7],[3,'userInfo']],[3,'site']])
Z([3,'5'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'signature']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z(z[4])
Z([[6],[[7],[3,'userInfo']],[3,'signature']])
Z([3,'6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input-group data-v-3170f6f6'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-3170f6f6'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'name']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'公益組織名稱'])
Z([3,'text'])
Z([[6],[[7],[3,'barInfo']],[3,'name']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'phone']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'11'])
Z([3,'聯係電話'])
Z([3,'number'])
Z([[6],[[7],[3,'barInfo']],[3,'phone']])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'location']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'詳細地址'])
Z(z[6])
Z([[6],[[7],[3,'barInfo']],[3,'location']])
Z([3,'3'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'intro']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'公益組織簡介'])
Z(z[6])
Z([[6],[[7],[3,'barInfo']],[3,'intro']])
Z([3,'4'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'username']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'申請人姓名'])
Z(z[6])
Z([[6],[[7],[3,'barInfo']],[3,'username']])
Z([3,'5'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'userphone']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'申請人聯係方式'])
Z(z[15])
Z([[6],[[7],[3,'barInfo']],[3,'userphone']])
Z([3,'6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pages-content data-v-612e34a2'])
Z([[2,'!='],[[6],[[7],[3,'picture']],[1,1]],[1,'undefined']])
Z([[2,'!='],[[6],[[7],[3,'picture']],[1,2]],[1,'undefined']])
Z([[2,'!='],[[6],[[7],[3,'picture']],[1,3]],[1,'undefined']])
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/im-chat/chatinput.wxml','./components/im-chat/messageshow.wxml','./components/loading/loading.wxml','./components/loading8.wxml','./components/logo.wxml','./components/m-icon/m-icon.wxml','./components/m-input.wxml','./components/uni-icon/uni-icon.wxml','./components/uni-notice-bar/uni-notice-bar.wxml','./components/wm-poster/wm-poster.wxml','./pages/auth/auth.wxml','./pages/base/base.wxml','./pages/daily/daily.wxml','./pages/daily/publish.wxml','./pages/daily/topicDetails.wxml','./pages/daily/userInfo.wxml','./pages/entertain/entertain.wxml','./pages/entertain/entertainApplication.wxml','./pages/entertain/entertainDetail.wxml','./pages/entertain/entertainUpload.wxml','./pages/game/game.wxml','./pages/im-chat/im-chat.wxml','./pages/index/index.wxml','./pages/invite/invite.wxml','./pages/ledger/asset.wxml','./pages/ledger/focus.wxml','./pages/login/login.wxml','./pages/main/main.wxml','./pages/msg/msg.wxml','./pages/nearby/nearby.wxml','./pages/pact/pact.wxml','./pages/pact/pactVoteDetail.wxml','./pages/pan/donateList.wxml','./pages/pan/ixx.wxml','./pages/pan/pan.wxml','./pages/passport/passport.wxml','./pages/publish/publish.wxml','./pages/purse/blockChain.wxml','./pages/purse/password.wxml','./pages/purse/purse.wxml','./pages/pwd/pwd.wxml','./pages/reg/Privacypolicy.wxml','./pages/reg/reg.wxml','./pages/reg/termsofservice.wxml','./pages/setting/introduce.wxml','./pages/setting/setting.wxml','./pages/store/store.wxml','./pages/strategy/strategy.wxml','./pages/user/album.wxml','./pages/user/fansList.wxml','./pages/user/followList.wxml','./pages/user/update.wxml','./pages/user/user.wxml','./pages/welfare/welfare.wxml','./pages/welfare/welfareApplication.wxml','./pages/welfare/welfareDetail.wxml','./pages/welfare/welfareUpload.wxml','./pagesA/settingChat/settingChat.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var lK=_n('view')
_rz(z,lK,'class',0,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,1,e,s,gg)){aL.wxVkey=1
var eN=_mz(z,'m-icon',['bind:__l',2,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(aL,eN)
}
var tM=_v()
_(lK,tM)
if(_oz(z,9,e,s,gg)){tM.wxVkey=1
var bO=_mz(z,'m-icon',['bind:__l',10,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(tM,bO)
}
aL.wxXCkey=1
aL.wxXCkey=3
tM.wxXCkey=1
tM.wxXCkey=3
_(r,lK)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oR=_v()
_(r,oR)
if(_oz(z,0,e,s,gg)){oR.wxVkey=1
var fS=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,5,e,s,gg)){cT.wxVkey=1
var hU=_mz(z,'uni-icon',['bind:__l',6,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(cT,hU)
}
var oV=_n('view')
_rz(z,oV,'class',10,e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,11,e,s,gg)){cW.wxVkey=1
var lY=_mz(z,'uni-icon',['bind:__l',12,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(cW,lY)
}
var oX=_v()
_(oV,oX)
if(_oz(z,17,e,s,gg)){oX.wxVkey=1
var aZ=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,22,e,s,gg)){t1.wxVkey=1
}
var e2=_mz(z,'uni-icon',['bind:__l',23,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(aZ,e2)
t1.wxXCkey=1
_(oX,aZ)
}
cW.wxXCkey=1
cW.wxXCkey=3
oX.wxXCkey=1
oX.wxXCkey=3
_(fS,oV)
cT.wxXCkey=1
cT.wxXCkey=3
_(oR,fS)
}
oR.wxXCkey=1
oR.wxXCkey=3
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var x5=_mz(z,'loading',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,x5)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var c8=_n('view')
_rz(z,c8,'class',0,e,s,gg)
var o0=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var cAB=_mz(z,'swiper',['bindchange',4,'class',1,'data-event-opts',2,'vertical',3],[],e,s,gg)
var oBB=_v()
_(cAB,oBB)
var lCB=function(tEB,aDB,eFB,gg){
var oHB=_n('swiper-item')
_rz(z,oHB,'class',12,tEB,aDB,gg)
var xIB=_n('view')
_rz(z,xIB,'class',13,tEB,aDB,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,14,tEB,aDB,gg)){oJB.wxVkey=1
}
var fKB=_mz(z,'view',['catchchange',15,'class',1,'data-event-opts',2],[],tEB,aDB,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,18,tEB,aDB,gg)){cLB.wxVkey=1
}
cLB.wxXCkey=1
_(xIB,fKB)
oJB.wxXCkey=1
_(oHB,xIB)
var hMB=_n('view')
_rz(z,hMB,'class',19,tEB,aDB,gg)
var oNB=_v()
_(hMB,oNB)
if(_oz(z,20,tEB,aDB,gg)){oNB.wxVkey=1
}
var cOB=_v()
_(hMB,cOB)
if(_oz(z,21,tEB,aDB,gg)){cOB.wxVkey=1
}
var oPB=_v()
_(hMB,oPB)
if(_oz(z,22,tEB,aDB,gg)){oPB.wxVkey=1
}
var lQB=_v()
_(hMB,lQB)
if(_oz(z,23,tEB,aDB,gg)){lQB.wxVkey=1
}
oNB.wxXCkey=1
cOB.wxXCkey=1
oPB.wxXCkey=1
lQB.wxXCkey=1
_(oHB,hMB)
var aRB=_n('view')
_rz(z,aRB,'class',24,tEB,aDB,gg)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,25,tEB,aDB,gg)){tSB.wxVkey=1
}
else{tSB.wxVkey=2
var eTB=_v()
_(tSB,eTB)
if(_oz(z,26,tEB,aDB,gg)){eTB.wxVkey=1
}
else{eTB.wxVkey=2
var bUB=_v()
_(eTB,bUB)
if(_oz(z,27,tEB,aDB,gg)){bUB.wxVkey=1
}
else{bUB.wxVkey=2
var oVB=_v()
_(bUB,oVB)
if(_oz(z,28,tEB,aDB,gg)){oVB.wxVkey=1
}
oVB.wxXCkey=1
}
bUB.wxXCkey=1
}
eTB.wxXCkey=1
}
tSB.wxXCkey=1
_(oHB,aRB)
_(eFB,oHB)
return eFB
}
oBB.wxXCkey=2
_2z(z,10,lCB,e,s,gg,oBB,'item','index','index')
_(o0,cAB)
_(c8,o0)
var h9=_v()
_(c8,h9)
if(_oz(z,29,e,s,gg)){h9.wxVkey=1
var xWB=_mz(z,'view',['catchtouchmove',30,'class',1,'data-event-opts',2],[],e,s,gg)
var oXB=_v()
_(xWB,oXB)
var fYB=function(h1B,cZB,o2B,gg){
var o4B=_mz(z,'view',['bindtap',37,'class',1,'data-event-opts',2],[],h1B,cZB,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,40,h1B,cZB,gg)){l5B.wxVkey=1
}
l5B.wxXCkey=1
_(o2B,o4B)
return o2B
}
oXB.wxXCkey=2
_2z(z,35,fYB,e,s,gg,oXB,'ite','ind','ind')
_(h9,xWB)
}
h9.wxXCkey=1
_(r,c8)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var e8B=_n('view')
_rz(z,e8B,'class',0,e,s,gg)
var o0B=_mz(z,'scroll-view',['bindscrolltolower',1,'bindscrolltoupper',1,'class',2,'data-event-opts',3,'data-ref',4,'scrollTop',5,'scrollWithAnimation',6,'scrollY',7],[],e,s,gg)
var xAC=_v()
_(o0B,xAC)
var oBC=function(cDC,fCC,hEC,gg){
var cGC=_n('view')
_rz(z,cGC,'class',13,cDC,fCC,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,14,cDC,fCC,gg)){oHC.wxVkey=1
}
var lIC=_mz(z,'view',['catchchange',15,'class',1,'data-event-opts',2],[],cDC,fCC,gg)
var aJC=_v()
_(lIC,aJC)
if(_oz(z,18,cDC,fCC,gg)){aJC.wxVkey=1
}
aJC.wxXCkey=1
_(cGC,lIC)
oHC.wxXCkey=1
_(hEC,cGC)
return hEC
}
xAC.wxXCkey=2
_2z(z,11,oBC,e,s,gg,xAC,'item','index','index')
_(e8B,o0B)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,19,e,s,gg)){b9B.wxVkey=1
var tKC=_v()
_(b9B,tKC)
var eLC=function(oNC,bMC,xOC,gg){
var fQC=_mz(z,'view',['bindtap',24,'class',1,'data-event-opts',2],[],oNC,bMC,gg)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,27,oNC,bMC,gg)){cRC.wxVkey=1
}
cRC.wxXCkey=1
_(xOC,fQC)
return xOC
}
tKC.wxXCkey=2
_2z(z,22,eLC,e,s,gg,tKC,'ite','ind','ind')
}
b9B.wxXCkey=1
_(r,e8B)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oVC=_n('view')
_rz(z,oVC,'class',0,e,s,gg)
var lWC=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',1,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(oVC,lWC)
var aXC=_mz(z,'m-input',['clearable',-1,'bind:__l',9,'bind:input',1,'class',2,'data-event-opts',3,'maxlength',4,'placeholder',5,'type',6,'value',7,'vueId',8],[],e,s,gg)
_(oVC,aXC)
var tYC=_mz(z,'m-input',['clearable',-1,'bind:__l',18,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(oVC,tYC)
var eZC=_mz(z,'m-input',['clearable',-1,'bind:__l',26,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(oVC,eZC)
var b1C=_mz(z,'m-input',['clearable',-1,'bind:__l',34,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(oVC,b1C)
var o2C=_mz(z,'m-input',['clearable',-1,'bind:__l',42,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(oVC,o2C)
_(r,oVC)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var o4C=_n('view')
_rz(z,o4C,'class',0,e,s,gg)
var f5C=_v()
_(o4C,f5C)
if(_oz(z,1,e,s,gg)){f5C.wxVkey=1
}
var c6C=_v()
_(o4C,c6C)
if(_oz(z,2,e,s,gg)){c6C.wxVkey=1
}
var h7C=_v()
_(o4C,h7C)
if(_oz(z,3,e,s,gg)){h7C.wxVkey=1
}
f5C.wxXCkey=1
c6C.wxXCkey=1
h7C.wxXCkey=1
_(r,o4C)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var o0C=_n('view')
_rz(z,o0C,'class',0,e,s,gg)
var lAD=_v()
_(o0C,lAD)
if(_oz(z,1,e,s,gg)){lAD.wxVkey=1
var tCD=_mz(z,'scroll-view',['class',2,'scrollY',1],[],e,s,gg)
var eDD=_v()
_(tCD,eDD)
if(_oz(z,4,e,s,gg)){eDD.wxVkey=1
}
var bED=_v()
_(tCD,bED)
var oFD=function(oHD,xGD,fID,gg){
var hKD=_v()
_(fID,hKD)
var oLD=function(oND,cMD,lOD,gg){
var tQD=_v()
_(lOD,tQD)
if(_oz(z,13,oND,cMD,gg)){tQD.wxVkey=1
}
tQD.wxXCkey=1
return lOD
}
hKD.wxXCkey=2
_2z(z,11,oLD,oHD,xGD,gg,hKD,'it','idx','idx')
return fID
}
bED.wxXCkey=2
_2z(z,7,oFD,e,s,gg,bED,'ite','ind','ind')
eDD.wxXCkey=1
_(lAD,tCD)
}
var aBD=_v()
_(o0C,aBD)
if(_oz(z,14,e,s,gg)){aBD.wxVkey=1
}
lAD.wxXCkey=1
aBD.wxXCkey=1
_(r,o0C)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var bSD=_n('view')
_rz(z,bSD,'class',0,e,s,gg)
var oTD=_v()
_(bSD,oTD)
var xUD=function(fWD,oVD,cXD,gg){
var oZD=_mz(z,'message-show',['bind:__l',5,'id',1,'message',2,'vueId',3],[],fWD,oVD,gg)
_(cXD,oZD)
return cXD
}
oTD.wxXCkey=4
_2z(z,3,xUD,e,s,gg,oTD,'message','index','index')
var c1D=_mz(z,'chat-input',['bind:__l',9,'bind:focus',1,'bind:sendMessage',2,'data-event-opts',3,'vueId',4],[],e,s,gg)
_(bSD,c1D)
_(r,bSD)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var a4D=_mz(z,'view',['class',0,'scrollY',1],[],e,s,gg)
var t5D=_v()
_(a4D,t5D)
if(_oz(z,2,e,s,gg)){t5D.wxVkey=1
}
var e6D=_v()
_(a4D,e6D)
if(_oz(z,3,e,s,gg)){e6D.wxVkey=1
}
var b7D=_v()
_(a4D,b7D)
if(_oz(z,4,e,s,gg)){b7D.wxVkey=1
}
var o8D=_v()
_(a4D,o8D)
if(_oz(z,5,e,s,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(a4D,x9D)
if(_oz(z,6,e,s,gg)){x9D.wxVkey=1
var o0D=_mz(z,'wm-poster',['Height',7,'QrSrc',1,'bind:__l',2,'bind:success',3,'bind:tap',4,'class',5,'data-event-opts',6,'imgSrc',7,'vueId',8],[],e,s,gg)
_(x9D,o0D)
}
t5D.wxXCkey=1
e6D.wxXCkey=1
b7D.wxXCkey=1
o8D.wxXCkey=1
x9D.wxXCkey=1
x9D.wxXCkey=3
_(r,a4D)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var cBE=_n('view')
_rz(z,cBE,'class',0,e,s,gg)
var cEE=_v()
_(cBE,cEE)
var oFE=function(aHE,lGE,tIE,gg){
var bKE=_n('view')
_rz(z,bKE,'class',5,aHE,lGE,gg)
var oLE=_v()
_(bKE,oLE)
if(_oz(z,6,aHE,lGE,gg)){oLE.wxVkey=1
}
var xME=_v()
_(bKE,xME)
if(_oz(z,7,aHE,lGE,gg)){xME.wxVkey=1
var oNE=_n('view')
_rz(z,oNE,'class',8,aHE,lGE,gg)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,9,aHE,lGE,gg)){fOE.wxVkey=1
}
var cPE=_v()
_(oNE,cPE)
if(_oz(z,10,aHE,lGE,gg)){cPE.wxVkey=1
}
fOE.wxXCkey=1
cPE.wxXCkey=1
_(xME,oNE)
}
oLE.wxXCkey=1
xME.wxXCkey=1
_(tIE,bKE)
return tIE
}
cEE.wxXCkey=2
_2z(z,3,oFE,e,s,gg,cEE,'item','index','index')
var hCE=_v()
_(cBE,hCE)
if(_oz(z,11,e,s,gg)){hCE.wxVkey=1
}
var oDE=_v()
_(cBE,oDE)
if(_oz(z,12,e,s,gg)){oDE.wxVkey=1
}
hCE.wxXCkey=1
oDE.wxXCkey=1
_(r,cBE)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var oRE=_n('view')
_rz(z,oRE,'class',0,e,s,gg)
var oTE=_v()
_(oRE,oTE)
var lUE=function(tWE,aVE,eXE,gg){
var oZE=_n('view')
_rz(z,oZE,'class',5,tWE,aVE,gg)
var x1E=_v()
_(oZE,x1E)
if(_oz(z,6,tWE,aVE,gg)){x1E.wxVkey=1
}
var o2E=_v()
_(oZE,o2E)
if(_oz(z,7,tWE,aVE,gg)){o2E.wxVkey=1
}
var f3E=_v()
_(oZE,f3E)
if(_oz(z,8,tWE,aVE,gg)){f3E.wxVkey=1
var c4E=_n('view')
_rz(z,c4E,'class',9,tWE,aVE,gg)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,10,tWE,aVE,gg)){h5E.wxVkey=1
}
var o6E=_v()
_(c4E,o6E)
if(_oz(z,11,tWE,aVE,gg)){o6E.wxVkey=1
}
h5E.wxXCkey=1
o6E.wxXCkey=1
_(f3E,c4E)
}
x1E.wxXCkey=1
o2E.wxXCkey=1
f3E.wxXCkey=1
_(eXE,oZE)
return eXE
}
oTE.wxXCkey=2
_2z(z,3,lUE,e,s,gg,oTE,'item','index','index')
var cSE=_v()
_(oRE,cSE)
if(_oz(z,12,e,s,gg)){cSE.wxVkey=1
}
cSE.wxXCkey=1
_(r,oRE)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var o8E=_n('view')
_rz(z,o8E,'class',0,e,s,gg)
var l9E=_mz(z,'logo',['bind:__l',1,'slogan',1,'vueId',2],[],e,s,gg)
_(o8E,l9E)
var a0E=_n('view')
_rz(z,a0E,'class',4,e,s,gg)
var tAF=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',5,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(a0E,tAF)
var eBF=_mz(z,'m-input',['displayable',-1,'bind:__l',13,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(a0E,eBF)
_(o8E,a0E)
_(r,o8E)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var xEF=_n('view')
_rz(z,xEF,'class',0,e,s,gg)
var oFF=_v()
_(xEF,oFF)
if(_oz(z,1,e,s,gg)){oFF.wxVkey=1
var cHF=_mz(z,'scroll-view',['class',2,'scrollY',1],[],e,s,gg)
var hIF=_v()
_(cHF,hIF)
if(_oz(z,4,e,s,gg)){hIF.wxVkey=1
}
var oJF=_v()
_(cHF,oJF)
var cKF=function(lMF,oLF,aNF,gg){
var ePF=_v()
_(aNF,ePF)
var bQF=function(xSF,oRF,oTF,gg){
var cVF=_v()
_(oTF,cVF)
if(_oz(z,13,xSF,oRF,gg)){cVF.wxVkey=1
}
cVF.wxXCkey=1
return oTF
}
ePF.wxXCkey=2
_2z(z,11,bQF,lMF,oLF,gg,ePF,'it','idx','idx')
return aNF
}
oJF.wxXCkey=2
_2z(z,7,cKF,e,s,gg,oJF,'ite','ind','ind')
hIF.wxXCkey=1
_(oFF,cHF)
}
var fGF=_v()
_(xEF,fGF)
if(_oz(z,14,e,s,gg)){fGF.wxVkey=1
}
oFF.wxXCkey=1
fGF.wxXCkey=1
_(r,xEF)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var oXF=_mz(z,'view',['class',0,'data-ref',1],[],e,s,gg)
var cYF=_v()
_(oXF,cYF)
if(_oz(z,2,e,s,gg)){cYF.wxVkey=1
var l1F=_mz(z,'scroll-view',['catchtouchmove',3,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var a2F=_v()
_(l1F,a2F)
if(_oz(z,7,e,s,gg)){a2F.wxVkey=1
}
var t3F=_v()
_(l1F,t3F)
var e4F=function(o6F,b5F,x7F,gg){
var f9F=_v()
_(x7F,f9F)
var c0F=function(oBG,hAG,cCG,gg){
var lEG=_v()
_(cCG,lEG)
if(_oz(z,16,oBG,hAG,gg)){lEG.wxVkey=1
}
lEG.wxXCkey=1
return cCG
}
f9F.wxXCkey=2
_2z(z,14,c0F,o6F,b5F,gg,f9F,'it','idx','idx')
return x7F
}
t3F.wxXCkey=2
_2z(z,10,e4F,e,s,gg,t3F,'ite','ind','ind')
a2F.wxXCkey=1
_(cYF,l1F)
}
var oZF=_v()
_(oXF,oZF)
if(_oz(z,17,e,s,gg)){oZF.wxVkey=1
}
cYF.wxXCkey=1
oZF.wxXCkey=1
_(r,oXF)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var eHG=_n('view')
_rz(z,eHG,'class',0,e,s,gg)
var bIG=_mz(z,'button',['bindtap',1,'class',1,'data-event-opts',2,'disabled',3,'hoverClass',4],[],e,s,gg)
var oJG=_v()
_(bIG,oJG)
if(_oz(z,6,e,s,gg)){oJG.wxVkey=1
}
oJG.wxXCkey=1
_(eHG,bIG)
var xKG=_mz(z,'button',['bindtap',7,'class',1,'data-event-opts',2,'disabled',3],[],e,s,gg)
var oLG=_v()
_(xKG,oLG)
if(_oz(z,11,e,s,gg)){oLG.wxVkey=1
}
oLG.wxXCkey=1
_(eHG,xKG)
_(r,eHG)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var hOG=_mz(z,'loading',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,hOG)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var cQG=_n('view')
_rz(z,cQG,'class',0,e,s,gg)
var oRG=_v()
_(cQG,oRG)
if(_oz(z,1,e,s,gg)){oRG.wxVkey=1
}
var lSG=_mz(z,'m-icon',['bind:__l',2,'bind:click',1,'class',2,'color',3,'data-event-opts',4,'size',5,'type',6,'vueId',7],[],e,s,gg)
_(cQG,lSG)
oRG.wxXCkey=1
_(r,cQG)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var tUG=_mz(z,'loading',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,tUG)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var oXG=_mz(z,'loading',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,oXG)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var oZG=_mz(z,'loading',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,oZG)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var c2G=_v()
_(r,c2G)
if(_oz(z,0,e,s,gg)){c2G.wxVkey=1
}
c2G.wxXCkey=1
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var o4G=_n('view')
_rz(z,o4G,'class',0,e,s,gg)
var l7G=_mz(z,'logo',['bind:__l',1,'slogan',1,'vueId',2],[],e,s,gg)
_(o4G,l7G)
var c5G=_v()
_(o4G,c5G)
if(_oz(z,4,e,s,gg)){c5G.wxVkey=1
var a8G=_n('view')
_rz(z,a8G,'class',5,e,s,gg)
var t9G=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',6,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(a8G,t9G)
var e0G=_mz(z,'m-input',['clearable',-1,'bind:__l',13,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(a8G,e0G)
_(c5G,a8G)
}
var o6G=_v()
_(o4G,o6G)
if(_oz(z,21,e,s,gg)){o6G.wxVkey=1
var bAH=_n('view')
_rz(z,bAH,'class',22,e,s,gg)
var oBH=_mz(z,'m-input',['displayable',-1,'bind:__l',23,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(bAH,oBH)
var xCH=_mz(z,'m-input',['displayable',-1,'bind:__l',30,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(bAH,xCH)
_(o6G,bAH)
}
c5G.wxXCkey=1
c5G.wxXCkey=3
o6G.wxXCkey=1
o6G.wxXCkey=3
_(r,o4G)
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var cFH=_n('view')
_rz(z,cFH,'class',0,e,s,gg)
var hGH=_mz(z,'logo',['bind:__l',1,'slogan',1,'vueId',2],[],e,s,gg)
_(cFH,hGH)
var oHH=_n('view')
_rz(z,oHH,'class',4,e,s,gg)
var cIH=_mz(z,'m-input',['clearable',-1,'bind:__l',5,'bind:input',1,'data-event-opts',2,'placeholder',3,'value',4,'vueId',5],[],e,s,gg)
_(oHH,cIH)
var oJH=_mz(z,'m-input',['clearable',-1,'bind:__l',11,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(oHH,oJH)
var lKH=_mz(z,'m-input',['displayable',-1,'bind:__l',19,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(oHH,lKH)
var aLH=_mz(z,'m-input',['displayable',-1,'bind:__l',26,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(oHH,aLH)
var tMH=_mz(z,'m-input',['clearable',-1,'bind:__l',33,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(oHH,tMH)
_(cFH,oHH)
_(r,cFH)
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var oRH=_n('view')
_rz(z,oRH,'class',0,e,s,gg)
var fSH=_v()
_(oRH,fSH)
if(_oz(z,1,e,s,gg)){fSH.wxVkey=1
var hUH=_mz(z,'scroll-view',['class',2,'scrollY',1],[],e,s,gg)
var oVH=_v()
_(hUH,oVH)
if(_oz(z,4,e,s,gg)){oVH.wxVkey=1
}
var cWH=_v()
_(hUH,cWH)
var oXH=function(aZH,lYH,t1H,gg){
var b3H=_v()
_(t1H,b3H)
var o4H=function(o6H,x5H,f7H,gg){
var h9H=_v()
_(f7H,h9H)
if(_oz(z,13,o6H,x5H,gg)){h9H.wxVkey=1
}
h9H.wxXCkey=1
return f7H
}
b3H.wxXCkey=2
_2z(z,11,o4H,aZH,lYH,gg,b3H,'it','idx','idx')
return t1H
}
cWH.wxXCkey=2
_2z(z,7,oXH,e,s,gg,cWH,'ite','ind','ind')
oVH.wxXCkey=1
_(fSH,hUH)
}
var cTH=_v()
_(oRH,cTH)
if(_oz(z,14,e,s,gg)){cTH.wxVkey=1
}
fSH.wxXCkey=1
cTH.wxXCkey=1
_(r,oRH)
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
return r
}
e_[x[50]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var tEI=_n('view')
_rz(z,tEI,'class',0,e,s,gg)
var eFI=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',1,'bind:input',1,'data-event-opts',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(tEI,eFI)
var bGI=_mz(z,'m-input',['clearable',-1,'bind:__l',7,'bind:input',1,'data-event-opts',2,'maxlength',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(tEI,bGI)
var oHI=_mz(z,'m-input',['clearable',-1,'bind:__l',14,'bind:input',1,'data-event-opts',2,'maxlength',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(tEI,oHI)
var xII=_mz(z,'m-input',['clearable',-1,'bind:__l',21,'bind:input',1,'data-event-opts',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(tEI,xII)
var oJI=_mz(z,'m-input',['clearable',-1,'bind:__l',27,'bind:input',1,'data-event-opts',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(tEI,oJI)
var fKI=_mz(z,'m-input',['clearable',-1,'bind:__l',33,'bind:input',1,'data-event-opts',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(tEI,fKI)
_(r,tEI)
return r
}
e_[x[51]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
return r
}
e_[x[52]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
return r
}
e_[x[53]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
var cOI=_n('view')
_rz(z,cOI,'class',0,e,s,gg)
var oPI=_mz(z,'m-input',['clearable',-1,'focus',-1,'bind:__l',1,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(cOI,oPI)
var lQI=_mz(z,'m-input',['clearable',-1,'bind:__l',9,'bind:input',1,'class',2,'data-event-opts',3,'maxlength',4,'placeholder',5,'type',6,'value',7,'vueId',8],[],e,s,gg)
_(cOI,lQI)
var aRI=_mz(z,'m-input',['clearable',-1,'bind:__l',18,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(cOI,aRI)
var tSI=_mz(z,'m-input',['clearable',-1,'bind:__l',26,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(cOI,tSI)
var eTI=_mz(z,'m-input',['clearable',-1,'bind:__l',34,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(cOI,eTI)
var bUI=_mz(z,'m-input',['clearable',-1,'bind:__l',42,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(cOI,bUI)
_(r,cOI)
return r
}
e_[x[54]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
var xWI=_n('view')
_rz(z,xWI,'class',0,e,s,gg)
var oXI=_v()
_(xWI,oXI)
if(_oz(z,1,e,s,gg)){oXI.wxVkey=1
}
var fYI=_v()
_(xWI,fYI)
if(_oz(z,2,e,s,gg)){fYI.wxVkey=1
}
var cZI=_v()
_(xWI,cZI)
if(_oz(z,3,e,s,gg)){cZI.wxVkey=1
}
oXI.wxXCkey=1
fYI.wxXCkey=1
cZI.wxXCkey=1
_(r,xWI)
return r
}
e_[x[55]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
return r
}
e_[x[56]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
return r
}
e_[x[57]]={f:m57,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/login/login","pages/reg/reg","pages/reg/termsofservice","pages/reg/Privacypolicy","pages/pwd/pwd","pages/im-chat/im-chat","pages/main/main","pages/pact/pact","pages/pact/pactVoteDetail","pages/daily/daily","pages/daily/publish","pages/daily/userInfo","pages/store/store","pages/game/game","pages/nearby/nearby","pages/publish/publish","pages/entertain/entertain","pages/entertain/entertainDetail","pages/entertain/entertainApplication","pages/entertain/entertainUpload","pages/user/user","pages/user/update","pages/msg/msg","pages/pan/pan","pages/pan/ixx","pages/pan/donateList","pages/ledger/asset","pages/ledger/focus","pages/purse/purse","pages/purse/blockChain","pages/purse/password","pages/passport/passport","pages/auth/auth","pages/invite/invite","pages/base/base","pages/strategy/strategy","pages/welfare/welfare","pages/setting/setting","pages/setting/introduce","pages/user/album","pages/user/followList","pages/user/fansList","pages/daily/topicDetails","pages/welfare/welfareApplication","pages/welfare/welfareDetail","pages/welfare/welfareUpload","pagesA/settingChat/settingChat"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#000000","backgroundColor":"#fbf9fe"},"tabBar":{"color":"#767676","selectedColor":"#EFEFF4","backgroundColor":"#000000","list":[{"pagePath":"pages/main/main","text":"首頁","iconPath":"static/img/tabbar/home.png","selectedIconPath":"static/img/tabbar/homeHL.png"},{"pagePath":"pages/msg/msg","text":"通訊","iconPath":"static/img/tabbar/msg.png","selectedIconPath":"static/img/tabbar/msgHL.png"},{"pagePath":"pages/pan/pan","text":"PAN","iconPath":"static/img/tabbar/PAN.png","selectedIconPath":"static/img/tabbar/PANHL.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/tabbar/user.png","selectedIconPath":"static/img/tabbar/userHL.png"}]},"networkTimeout":{"request":6000,"uploadFile":10000},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Pandla","compilerVersion":"2.1.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/im-chat/chatinput.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/im-chat/chatinput.wxml']=$gwx('./components/im-chat/chatinput.wxml');

__wxAppCode__['components/im-chat/messageshow.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/im-chat/messageshow.wxml']=$gwx('./components/im-chat/messageshow.wxml');

__wxAppCode__['components/loading/loading.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/loading/loading.wxml']=$gwx('./components/loading/loading.wxml');

__wxAppCode__['components/loading8.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/loading8.wxml']=$gwx('./components/loading8.wxml');

__wxAppCode__['components/logo.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/logo.wxml']=$gwx('./components/logo.wxml');

__wxAppCode__['components/m-icon/m-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-icon/m-icon.wxml']=$gwx('./components/m-icon/m-icon.wxml');

__wxAppCode__['components/m-input.json']={"usingComponents":{"m-icon":"/components/m-icon/m-icon"},"component":true};
__wxAppCode__['components/m-input.wxml']=$gwx('./components/m-input.wxml');

__wxAppCode__['components/uni-icon/uni-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icon/uni-icon.wxml']=$gwx('./components/uni-icon/uni-icon.wxml');

__wxAppCode__['components/uni-notice-bar/uni-notice-bar.json']={"usingComponents":{"uni-icon":"/components/uni-icon/uni-icon"},"component":true};
__wxAppCode__['components/uni-notice-bar/uni-notice-bar.wxml']=$gwx('./components/uni-notice-bar/uni-notice-bar.wxml');

__wxAppCode__['components/wm-poster/wm-poster.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/wm-poster/wm-poster.wxml']=$gwx('./components/wm-poster/wm-poster.wxml');

__wxAppCode__['pages/auth/auth.json']={"navigationBarTitleText":"實名認證","bounce":"none","usingComponents":{"loading":"/components/loading8"}};
__wxAppCode__['pages/auth/auth.wxml']=$gwx('./pages/auth/auth.wxml');

__wxAppCode__['pages/base/base.json']={"navigationBarTitleText":"星球基地","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/base/base.wxml']=$gwx('./pages/base/base.wxml');

__wxAppCode__['pages/daily/daily.json']={"enablePullDownRefresh":false,"navigationBarTitleText":"","animationType":"slide-in-left","titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/daily/daily.wxml']=$gwx('./pages/daily/daily.wxml');

__wxAppCode__['pages/daily/publish.json']={"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"發表","fontSize":"35upx"}]},"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/daily/publish.wxml']=$gwx('./pages/daily/publish.wxml');

__wxAppCode__['pages/daily/topicDetails.json']={"navigationBarTitleText":"话题","titleNView":{"buttons":[{"text":"","fontSrc":"/static/font/iconfont.ttf","color":" #4CD964"}]},"bounce":"none","usingComponents":{"loading":"/components/loading/loading"}};
__wxAppCode__['pages/daily/topicDetails.wxml']=$gwx('./pages/daily/topicDetails.wxml');

__wxAppCode__['pages/daily/userInfo.json']={"navigationBarTitleText":"個人主頁","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/daily/userInfo.wxml']=$gwx('./pages/daily/userInfo.wxml');

__wxAppCode__['pages/entertain/entertain.json']={"navigationBarTitleText":"位置 | 活動","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/entertain/entertain.wxml']=$gwx('./pages/entertain/entertain.wxml');

__wxAppCode__['pages/entertain/entertainApplication.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/entertain/entertainApplication.wxml']=$gwx('./pages/entertain/entertainApplication.wxml');

__wxAppCode__['pages/entertain/entertainDetail.json']={"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"編輯","fontSize":"35upx"}]},"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/entertain/entertainDetail.wxml']=$gwx('./pages/entertain/entertainDetail.wxml');

__wxAppCode__['pages/entertain/entertainUpload.json']={"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"提交","fontSize":"35upx"}]},"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/entertain/entertainUpload.wxml']=$gwx('./pages/entertain/entertainUpload.wxml');

__wxAppCode__['pages/game/game.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"星球遊戲","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/game/game.wxml']=$gwx('./pages/game/game.wxml');

__wxAppCode__['pages/im-chat/im-chat.json']={"navigationBarTitleText":"聊天","bounce":"none","usingComponents":{"chat-input":"/components/im-chat/chatinput","message-show":"/components/im-chat/messageshow"}};
__wxAppCode__['pages/im-chat/im-chat.wxml']=$gwx('./pages/im-chat/im-chat.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"","bounce":"none","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/invite/invite.json']={"navigationBarTitleText":"邀請好友移民星球","titleNView":{"buttons":[{"text":"","type":"share"}]},"bounce":"none","usingComponents":{"wm-poster":"/components/wm-poster/wm-poster"}};
__wxAppCode__['pages/invite/invite.wxml']=$gwx('./pages/invite/invite.wxml');

__wxAppCode__['pages/ledger/asset.json']={"navigationBarTitleText":"資產賬本","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/ledger/asset.wxml']=$gwx('./pages/ledger/asset.wxml');

__wxAppCode__['pages/ledger/focus.json']={"navigationBarTitleText":"原力賬本","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/ledger/focus.wxml']=$gwx('./pages/ledger/focus.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{"m-input":"/components/m-input","logo":"/components/logo"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/main/main.json']={"navigationBarTitleText":"","titleNView":false,"bounce":"none","usingComponents":{"uni-notice-bar":"/components/uni-notice-bar/uni-notice-bar"}};
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

__wxAppCode__['pages/msg/msg.json']={"navigationBarTitleText":"通訊","navigationBarBackgroundColor":"#E1E1E1","navigationBarTextStyle":"black","enablePullDownRefresh":true,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/msg/msg.wxml']=$gwx('./pages/msg/msg.wxml');

__wxAppCode__['pages/nearby/nearby.json']={"navigationBarTitleText":"附近居民","onReachBottomDistance":50,"enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/nearby/nearby.wxml']=$gwx('./pages/nearby/nearby.wxml');

__wxAppCode__['pages/pact/pact.json']={"navigationBarTitleText":"星球公約","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/pact/pact.wxml']=$gwx('./pages/pact/pact.wxml');

__wxAppCode__['pages/pact/pactVoteDetail.json']={"navigationBarTitleText":"","usingComponents":{}};
__wxAppCode__['pages/pact/pactVoteDetail.wxml']=$gwx('./pages/pact/pactVoteDetail.wxml');

__wxAppCode__['pages/pan/donateList.json']={"navigationBarTitleText":"捐贈榜單","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/pan/donateList.wxml']=$gwx('./pages/pan/donateList.wxml');

__wxAppCode__['pages/pan/ixx.json']={"navigationBarTitleText":"ixx註冊","bounce":"none","usingComponents":{"loading":"/components/loading8"}};
__wxAppCode__['pages/pan/ixx.wxml']=$gwx('./pages/pan/ixx.wxml');

__wxAppCode__['pages/pan/pan.json']={"navigationBarTitleText":"","titleNView":false,"bounce":"none","usingComponents":{"m-icon":"/components/m-icon/m-icon"}};
__wxAppCode__['pages/pan/pan.wxml']=$gwx('./pages/pan/pan.wxml');

__wxAppCode__['pages/passport/passport.json']={"navigationBarTitleText":"星球護照","bounce":"none","usingComponents":{"loading":"/components/loading8"}};
__wxAppCode__['pages/passport/passport.wxml']=$gwx('./pages/passport/passport.wxml');

__wxAppCode__['pages/publish/publish.json']={"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"發布","fontSize":"35upx"}]},"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/publish/publish.wxml']=$gwx('./pages/publish/publish.wxml');

__wxAppCode__['pages/purse/blockChain.json']={"navigationBarTitleText":"區塊鏈地址","bounce":"none","usingComponents":{"loading":"/components/loading8"}};
__wxAppCode__['pages/purse/blockChain.wxml']=$gwx('./pages/purse/blockChain.wxml');

__wxAppCode__['pages/purse/password.json']={"navigationBarTitleText":"資金密碼","bounce":"none","usingComponents":{"loading":"/components/loading8"}};
__wxAppCode__['pages/purse/password.wxml']=$gwx('./pages/purse/password.wxml');

__wxAppCode__['pages/purse/purse.json']={"navigationBarTitleText":"我的錢包","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/purse/purse.wxml']=$gwx('./pages/purse/purse.wxml');

__wxAppCode__['pages/pwd/pwd.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{"m-input":"/components/m-input","logo":"/components/logo"}};
__wxAppCode__['pages/pwd/pwd.wxml']=$gwx('./pages/pwd/pwd.wxml');

__wxAppCode__['pages/reg/Privacypolicy.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/reg/Privacypolicy.wxml']=$gwx('./pages/reg/Privacypolicy.wxml');

__wxAppCode__['pages/reg/reg.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{"m-input":"/components/m-input","logo":"/components/logo"}};
__wxAppCode__['pages/reg/reg.wxml']=$gwx('./pages/reg/reg.wxml');

__wxAppCode__['pages/reg/termsofservice.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/reg/termsofservice.wxml']=$gwx('./pages/reg/termsofservice.wxml');

__wxAppCode__['pages/setting/introduce.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/setting/introduce.wxml']=$gwx('./pages/setting/introduce.wxml');

__wxAppCode__['pages/setting/setting.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/setting/setting.wxml']=$gwx('./pages/setting/setting.wxml');

__wxAppCode__['pages/store/store.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"星球特供","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/store/store.wxml']=$gwx('./pages/store/store.wxml');

__wxAppCode__['pages/strategy/strategy.json']={"navigationBarTitleText":"星球攻略","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/strategy/strategy.wxml']=$gwx('./pages/strategy/strategy.wxml');

__wxAppCode__['pages/user/album.json']={"navigationBarTitleText":"相冊","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/album.wxml']=$gwx('./pages/user/album.wxml');

__wxAppCode__['pages/user/fansList.json']={"navigationBarTitleText":"粉絲列表","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/fansList.wxml']=$gwx('./pages/user/fansList.wxml');

__wxAppCode__['pages/user/followList.json']={"navigationBarTitleText":"關注列表","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/followList.wxml']=$gwx('./pages/user/followList.wxml');

__wxAppCode__['pages/user/update.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{"m-input":"/components/m-input","logo":"/components/logo"}};
__wxAppCode__['pages/user/update.wxml']=$gwx('./pages/user/update.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"","titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

__wxAppCode__['pages/welfare/welfare.json']={"navigationBarTitleText":"星球公益","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/welfare/welfare.wxml']=$gwx('./pages/welfare/welfare.wxml');

__wxAppCode__['pages/welfare/welfareApplication.json']={"usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/welfare/welfareApplication.wxml']=$gwx('./pages/welfare/welfareApplication.wxml');

__wxAppCode__['pages/welfare/welfareDetail.json']={"usingComponents":{}};
__wxAppCode__['pages/welfare/welfareDetail.wxml']=$gwx('./pages/welfare/welfareDetail.wxml');

__wxAppCode__['pages/welfare/welfareUpload.json']={"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"提交","fontSize":"35upx"}]},"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/welfare/welfareUpload.wxml']=$gwx('./pages/welfare/welfareUpload.wxml');

__wxAppCode__['pagesA/settingChat/settingChat.json']={"navigationBarTitleText":"提醒设置","navigationBarBackgroundColor":"#E1E1E1","navigationBarTextStyle":"black","titleNView":{},"usingComponents":{}};
__wxAppCode__['pagesA/settingChat/settingChat.wxml']=$gwx('./pagesA/settingChat/settingChat.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"17a7":function(t,n,e){"use strict";e.r(n);var u=e("c932"),o=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=o.a},"313e":function(t,n,e){"use strict";var u=e("f6db"),o=e.n(u);o.a},"50ef":function(t,n,e){"use strict";var u=e("fa86"),o=e.n(u);o.a},c4dd:function(t,n,e){"use strict";e.r(n);var u=e("17a7");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("313e"),e("50ef");var a,r,c=e("2877"),f=Object(c["a"])(u["default"],a,r,!1,null,null,null);n["default"]=f.exports},c932:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={mounted:function(){this.$request.interceptors.response(function(t){return t&&(t.data.status&&t.data.status.code,t.statusCode,401==t.statusCode&&console.log("token失效"," at App.vue:30")),t})}};n.default=u},f6db:function(t,n,e){},fa86:function(t,n,e){}},[["4be6","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (n) {
  function e(e) {
    for (var o, r, a = e[0], u = e[1], s = e[2], m = 0, p = []; m < a.length; m++) {
      r = a[m], i[r] && p.push(i[r][0]), i[r] = 0;
    }

    for (o in u) {
      Object.prototype.hasOwnProperty.call(u, o) && (n[o] = u[o]);
    }

    l && l(e);

    while (p.length) {
      p.shift()();
    }

    return c.push.apply(c, s || []), t();
  }

  function t() {
    for (var n, e = 0; e < c.length; e++) {
      for (var t = c[e], o = !0, r = 1; r < t.length; r++) {
        var a = t[r];
        0 !== i[a] && (o = !1);
      }

      o && (c.splice(e--, 1), n = u(u.s = t[0]));
    }

    return n;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      c = [];

  function a(n) {
    return u.p + "" + n + ".js";
  }

  function u(e) {
    if (o[e]) return o[e].exports;
    var t = o[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, u), t.l = !0, t.exports;
  }

  u.e = function (n) {
    var e = [],
        t = {
      "components/logo": 1,
      "components/m-input": 1,
      "components/im-chat/chatinput": 1,
      "components/im-chat/messageshow": 1,
      "components/uni-notice-bar/uni-notice-bar": 1,
      "components/m-icon/m-icon": 1,
      "components/loading8": 1,
      "components/loading/loading": 1,
      "components/uni-icon/uni-icon": 1
    };
    r[n] ? e.push(r[n]) : 0 !== r[n] && t[n] && e.push(r[n] = new Promise(function (e, t) {
      for (var o = ({
        "components/logo": "components/logo",
        "components/m-input": "components/m-input",
        "components/im-chat/chatinput": "components/im-chat/chatinput",
        "components/im-chat/messageshow": "components/im-chat/messageshow",
        "components/uni-notice-bar/uni-notice-bar": "components/uni-notice-bar/uni-notice-bar",
        "components/m-icon/m-icon": "components/m-icon/m-icon",
        "components/loading8": "components/loading8",
        "components/wm-poster/wm-poster": "components/wm-poster/wm-poster",
        "components/loading/loading": "components/loading/loading",
        "components/uni-icon/uni-icon": "components/uni-icon/uni-icon"
      }[n] || n) + ".wxss", i = u.p + o, c = document.getElementsByTagName("link"), a = 0; a < c.length; a++) {
        var s = c[a],
            m = s.getAttribute("data-href") || s.getAttribute("href");
        if ("stylesheet" === s.rel && (m === o || m === i)) return e();
      }

      var p = document.getElementsByTagName("style");

      for (a = 0; a < p.length; a++) {
        s = p[a], m = s.getAttribute("data-href");
        if (m === o || m === i) return e();
      }

      var l = document.createElement("link");
      l.rel = "stylesheet", l.type = "text/css", l.onload = e, l.onerror = function (e) {
        var o = e && e.target && e.target.src || i,
            c = new Error("Loading CSS chunk " + n + " failed.\n(" + o + ")");
        c.request = o, delete r[n], l.parentNode.removeChild(l), t(c);
      }, l.href = i;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(l);
    }).then(function () {
      r[n] = 0;
    }));
    var o = i[n];
    if (0 !== o) if (o) e.push(o[2]);else {
      var c = new Promise(function (e, t) {
        o = i[n] = [e, t];
      });
      e.push(o[2] = c);
      var s,
          m = document.createElement("script");
      m.charset = "utf-8", m.timeout = 120, u.nc && m.setAttribute("nonce", u.nc), m.src = a(n), s = function s(e) {
        m.onerror = m.onload = null, clearTimeout(p);
        var t = i[n];

        if (0 !== t) {
          if (t) {
            var o = e && ("load" === e.type ? "missing" : e.type),
                r = e && e.target && e.target.src,
                c = new Error("Loading chunk " + n + " failed.\n(" + o + ": " + r + ")");
            c.type = o, c.request = r, t[1](c);
          }

          i[n] = void 0;
        }
      };
      var p = setTimeout(function () {
        s({
          type: "timeout",
          target: m
        });
      }, 12e4);
      m.onerror = m.onload = s, document.head.appendChild(m);
    }
    return Promise.all(e);
  }, u.m = n, u.c = o, u.d = function (n, e, t) {
    u.o(n, e) || Object.defineProperty(n, e, {
      enumerable: !0,
      get: t
    });
  }, u.r = function (n) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(n, "__esModule", {
      value: !0
    });
  }, u.t = function (n, e) {
    if (1 & e && (n = u(n)), 8 & e) return n;
    if (4 & e && "object" === typeof n && n && n.__esModule) return n;
    var t = Object.create(null);
    if (u.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: n
    }), 2 & e && "string" != typeof n) for (var o in n) {
      u.d(t, o, function (e) {
        return n[e];
      }.bind(null, o));
    }
    return t;
  }, u.n = function (n) {
    var e = n && n.__esModule ? function () {
      return n["default"];
    } : function () {
      return n;
    };
    return u.d(e, "a", e), e;
  }, u.o = function (n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }, u.p = "/", u.oe = function (n) {
    throw console.error(n), n;
  };
  var s = global["webpackJsonp"] = global["webpackJsonp"] || [],
      m = s.push.bind(s);
  s.push = e, s = s.slice();

  for (var p = 0; p < s.length; p++) {
    e(s[p]);
  }

  var l = m;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0672":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("da45"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"082a":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("9393"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0877":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("cb96"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0988":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("4b70"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"09a1":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("b5b0"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0b8b":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("0132"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0be9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createDyn=e.upload=e.getImgTemp=e.upPicture=e.getCountPan=e.passValidation=e.getinviteCount=e.getInvCode=e.findById=e.getBenfitList=e.createBenfit=e.getBarlocation=e.upLogo=e.setBar=e.getBarInfo=e.getBarList=e.sysVote=e.isVote=e.toTreIndex=e.signinMsg=e.signin=e.checkForTaskList=e.getForBill=e.getForBalance=e.getChange_24h=e.checkTaskList=e.getBill=e.getBalance=e.getPollTop=e.donate=e.getIndex=e.topicReply=e.topicComment=e.createTopic=e.getReply=e.getAllComment=e.topicLike=e.getLikeNumber=e.checkTopicList=e.deleteDyn=e.reply=e.getBullet=e.likeCount=e.like=e.concern=e.addComment=e.getComment=e.findAllDyn=e.getFans=e.getFollow=e.getAlbum=e.getDyn=e.getInfo=e.upInfo=e.getAllSocialInfo=e.findByID=e.changePwd=e.register=e.sendCode=e.login=void 0;var n=t.getStorageSync("USERS_KEY").token,r="http://pandla.io:8080/v1/",o=r+"system/",i=r+"fans/",a=r+"dyn/",u=r+"benfit/",s=r+"poll/",c=r+"pan/",f=r+"force/",l=r+"tre/",d=r+"bar/",p=r+"inv/",h=r+"topic/",v="https://q.ixex.io/v1/market/tickers?period=1h&pairs=PAN_USDT",g="https://restapi.amap.com/v3/geocode/geo?",y=function(e,r){t.request({url:o+"login",method:"POST",data:{name:e,password:r},header:{"content-type":"application/json"},success:function(e){console.log(e.data.data," at api\\api.js:32"),200==e.data.status?(t.setStorageSync("USERS_KEY",e.data.data),n=t.getStorageSync("USERS_KEY").token,console.log(n," at api\\api.js:36"),setTimeout(function(){t.reLaunch({url:"../main/main"})},500)):t.showToast({icon:"none",title:e.data.msg})},fail:function(e){t.showToast({icon:"none",title:"登錄失敗，請稍后重試"})}})};e.login=y;var m=function(e,n,r){t.request({url:o+"sendCode",data:{parame:e},success:function(){return t.showToast({icon:"none",title:"發送成功"}),r=setInterval(function(){var t=n.codeTime;t--,n.codeTime=t,n.text="重發("+t+")秒",t<1&&(clearInterval(r),n.text="重新獲取",n.codeTime="60",n.btnStatus=!1)},1e3),!1},fail:function(){t.showToast({icon:"none",title:"發送失败了，请稍后重试"})}})};e.sendCode=m;var _=function(e,n,r,i){t.request({url:o+"register",method:"POST",data:{password:e,account:n,regCode:r,inviteCode:i},header:{"content-type":"application/json"},success:function(e){console.log(e.data," at api\\api.js:108"),200==e.data.status?(t.showToast({icon:"none",title:"注冊成功"}),t.setStorageSync("USERS_KEY",e.data.data),t.reLaunch({url:"../user/update"})):t.showToast({icon:"none",title:e.data.msg})},fail:function(e){t.showToast({icon:"none",title:"發送失败了，请稍后重试"})}})};e.register=_;var w=function(e,n,r){t.request({url:o+"changePwd",method:"POST",data:{parame:n,code:r,password:e},success:function(e){1==e.data?t.redirectTo({url:"../login/login"}):t.showToast({icon:"none",title:"修改失敗，新密碼不可以與舊密碼相同"})},fail:function(){t.showToast({icon:"none",title:"修改失敗，請稍後重試"})}})};e.changePwd=w;var b=function(){return new Promise(function(e,r){t.request({url:o+"findByID",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.findByID=b;var k=function(){return new Promise(function(e,r){t.request({url:i+"getAllFans",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getAllSocialInfo=k;var P=function(e,n){return new Promise(function(r,i){t.request({url:o+"updata",method:"POST",data:{acctType:e.acctType,age:e.age,name:e.name,race:e.race,signature:e.signature,site:e.site,stature:e.stature,weight:e.weight,id:n},header:{"content-type":"application/json"},success:function(e){200==e.data.status?(t.getStorageSync("USERS_KEY").token?t.switchTab({url:"user"}):t.reLaunch({url:"../login/login"}),r(e.data.status)):t.showToast({icon:"none",title:"提交失败，没有修改"})},fail:function(e){t.showToast({icon:"none",title:e.data.msg})}})})};e.upInfo=P;var T=function(e){return new Promise(function(r,o){t.request({url:a+"getInfo?uid="+e,header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getInfo=T;var $=function(e){return new Promise(function(r,o){t.request({url:a+"getDyn?uid="+e,header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getDyn=$;var O=function(){return new Promise(function(e,r){t.request({url:a+"checkMeAllDyn",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getAlbum=O;var A=function(){return new Promise(function(e,r){t.request({url:i+"checkAllConcern",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getFollow=A;var x=function(){return new Promise(function(e,r){t.request({url:i+"checkAllFans",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getFans=x;var E=function(e){return new Promise(function(r,o){t.request({url:a+"findAllDyn?pageSize="+e,header:{token:n},success:function(e){console.log(e.data," at api\\api.js:390"),200==e.data.status&&r(e.data.data),404==e.data.status&&t.showToast({icon:"none",title:"没有更多数据了"})},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.findAllDyn=E;var j=function(e){return new Promise(function(r,o){t.request({url:a+"getComment?did="+e,header:{token:n},success:function(t){console.log(t.data.data," at api\\api.js:419"),200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getComment=j;var S=function(e,r){return new Promise(function(o,i){t.request({url:a+"createCom?did="+r+"&content="+e,header:{token:n},success:function(t){200==t.data.status&&o(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.addComment=S;var M=function(e,r){return new Promise(function(o,a){t.request({url:i+"concern?gid="+r+"&type="+e,header:{token:n},success:function(n){200==n.data.status&&(2==e&&t.showToast({icon:"none",title:"已取消關注"}),o(n.data.data))},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),a(e)}})})};e.concern=M;var C=function(e,r){return new Promise(function(o,i){t.request({url:a+"like?did="+e+"&likeNumber="+r,method:"POST",header:{token:n},success:function(e){200==e.data.status&&o(e.data.data),404==e.data.status&&t.showToast({icon:"none",title:"余额不足"}),403==e.data.status&&t.showToast({icon:"none",title:"超过点赞次数"})},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.like=C;var I=function(e){return new Promise(function(r,o){t.request({url:a+"refreshLike?did="+e,method:"GET",header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.likeCount=I;var B=function(e){return new Promise(function(r,o){t.request({url:a+"getBullet?did="+e,header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getBullet=B;var D=function(e,r){return new Promise(function(o,i){t.request({url:a+"reply?cid="+e+"&content="+r,header:{token:n},success:function(t){200==t.data.status&&o(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.reply=D;var L=function(e){return new Promise(function(r,o){t.request({url:a+"deleteDyn?did="+e,header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.deleteDyn=L;var N=function(e,r){return new Promise(function(o,i){t.request({url:h+"checkTopicList?tid="+e+"&pageSize="+r,method:"GET",header:{token:n},success:function(t){200==t.data.status&&o(t.data.data),404==t.data.status&&o(0)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.checkTopicList=N;var R=function(e){return new Promise(function(r,o){t.request({url:h+"getLikeNumber?tid="+e,method:"GET",header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getLikeNumber=R;var V=function(e){return new Promise(function(r,o){t.request({url:h+"topicLike?tid="+e,method:"GET",header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.topicLike=V;var q=function(e){return new Promise(function(r,o){t.request({url:h+"getAllComment?tid="+e,method:"GET",header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getAllComment=q;var U=function(e){return new Promise(function(r,o){t.request({url:h+"getReply?cid="+e,method:"GET",header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getReply=U;var F=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"广州",o=arguments.length>2?arguments[2]:void 0;return new Promise(function(i,a){t.request({url:h+"createTopic",method:"POST",header:{token:n,"content-type":"application/json"},data:{content:e,location:r,tid:o},success:function(t){200==t.data.status&&i(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),a(e)}})})};e.createTopic=F;var H=function(e,r){return new Promise(function(o,i){t.request({url:h+"topicComment?tid="+e+"&content="+r,method:"POST",header:{token:n},success:function(t){200==t.data.status&&o(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.topicComment=H;var G=function(e,r){return new Promise(function(o,i){t.request({url:h+"reply?cid="+e+"&content="+r,method:"POST",header:{token:n},success:function(t){200==t.data.status&&o(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.topicReply=G;var z=function(){return new Promise(function(e,r){console.log(n," at api\\api.js:807"),t.request({url:s+"getIndex",header:{token:n},success:function(t){console.log(t.data," at api\\api.js:815"),200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getIndex=z;var K=function(e){return new Promise(function(r,o){t.request({url:s+"donate?number="+e,method:"POST",header:{token:n},success:function(e){200==e.data.status&&(t.showToast({icon:"none",title:e.data.data}),r(e.data.data)),404==e.data.status&&(t.showToast({icon:"none",title:e.data.msg}),r(e.data.data))},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.donate=K;var J=function(){return new Promise(function(e,r){t.request({url:s+"getPollTop",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getPollTop=J;var W=function(){return new Promise(function(e,r){t.request({url:c+"getBalance",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getBalance=W;var Y=function(e){return new Promise(function(r,o){t.request({url:c+"getBill?pageSize="+e,header:{token:n},success:function(e){200==e.data.status&&r(e.data.data),404==e.data.status&&(r(null),t.showToast({icon:"none",title:"暫無更多數據"}))},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getBill=Y;var X=function(){return new Promise(function(e,r){t.request({url:c+"checkTaskList",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.checkTaskList=X;var Q=function(){return new Promise(function(e,r){t.request({url:v,header:{token:n},success:function(t){e(t.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getChange_24h=Q;var Z=function(){return new Promise(function(e,r){t.request({url:f+"getBalance",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getForBalance=Z;var tt=function(e){return new Promise(function(r,o){t.request({url:f+"getBill?pageSize="+e,header:{token:n},success:function(e){200==e.data.status&&r(e.data.data),404==e.data.status&&(r(null),t.showToast({icon:"none",title:"暫無更多數據"}))},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getForBill=tt;var et=function(){return new Promise(function(e,r){t.request({url:f+"checkTaskList",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.checkForTaskList=et;var nt=function(e,r){return new Promise(function(o,i){t.request({url:f+"signin?force="+e+"&day="+r,header:{token:n},success:function(e){200==e.data.status&&o(e.data.data),404==e.data.status&&(o(null),t.showToast({icon:"none",title:"簽到時間未滿24小時"}))},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.signin=nt;var rt=function(){return new Promise(function(e,r){t.request({url:f+"signinMsg",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.signinMsg=rt;var ot=function(){return new Promise(function(e,r){t.request({url:l+"toTreIndex",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.toTreIndex=ot;var it=function(e){return new Promise(function(r,o){t.request({url:l+"isVote?tid="+e,method:"POST",header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.isVote=it;var at=function(e,r){return new Promise(function(o,i){t.request({url:l+"sysVote?tid="+e+"&isWell="+r,method:"POST",header:{token:n},success:function(t){console.log(t.data," at api\\api.js:1167"),200==t.data.status&&o(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.sysVote=at;var ut=function(e){return new Promise(function(r,o){t.request({url:d+"getBarList?location="+e,header:{token:n},success:function(t){console.log(t.data," at api\\api.js:1190"),200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getBarList=ut;var st=function(e){return new Promise(function(r,o){t.request({url:d+"getBarInfo?id="+e,header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getBarInfo=st;var ct=function(e){return new Promise(function(r,o){t.request({url:d+"setBar",method:"POST",header:{token:n},data:{intro:e.intro,license:e.license,location:e.location,logo:e.logo,name:e.name,phone:e.phone,picture:e.picture+","+e.picture1+","+e.picture2+","+e.picture3,userName:e.username,userPhone:e.userphone},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.setBar=ct;var ft=function(e,r){return new Promise(function(o,i){t.uploadFile({url:d+"upLogo?type="+r,header:{token:n},filePath:e,name:"file",success:function(e){var n=JSON.parse(e.data);o(n.data),3==r&&t.showToast({icon:"none",title:"上传成功,請等待審核"}).then(function(e){t.redirectTo({url:"entertain"})})},fail:function(e){console.log("uploadImage fail",e," at api\\api.js:1286"),t.showToast({icon:"none",title:"上传失败,请勿选择超过4M的图片"})}})})};e.upLogo=ft;var lt=function(e){return new Promise(function(n,r){t.request({url:g+"key=7378b20d4bff8e0470db31f1b0a83d99&address="+e,header:{},success:function(t){1==t.data.status&&n(t.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getBarlocation=lt;var dt=function(e){return new Promise(function(r,o){t.request({url:u+"createBenfit",method:"POST",header:{token:n},data:{intro:e.intro,license:e.license,location:e.location,logo:e.logo,name:e.name,phone:e.phone,picture:e.picture+","+e.picture1+","+e.picture2+","+e.picture3,userName:e.username,userPhone:e.userphone},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.createBenfit=dt;var pt=function(){return new Promise(function(e,r){t.request({url:u+"getBenfitList",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getBenfitList=pt;var ht=function(e){return new Promise(function(r,o){t.request({url:u+"findById?id="+e,header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.findById=ht;var vt=function(){return new Promise(function(e,r){t.request({url:p+"getInvCode",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)}})})};e.getInvCode=vt;var gt=function(){return new Promise(function(e,r){t.request({url:p+"getinviteCount",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)}})})};e.getinviteCount=gt;var yt=function(){return new Promise(function(e,r){t.request({url:p+"passValidation",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)}})})};e.passValidation=yt;var mt=function(){return new Promise(function(e,r){t.request({url:p+"getCountPan",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)}})})};e.getCountPan=mt;var _t=function(e){return new Promise(function(n,r){t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(r){var i=r.tempFilePaths,a=t.uploadFile({url:o+"pic/upPicture?id="+e,filePath:i[0],name:"file",success:function(e){console.log(e.data," at api\\api.js:1470");var r=JSON.parse(e.data);console.log("uploadImage success, res is:",r.data," at api\\api.js:1472"),t.showToast({title:"上传成功",icon:"success",duration:1e3}),n(r.data)},fail:function(e){console.log("uploadImage fail",e," at api\\api.js:1482"),t.showToast({icon:"none",title:"上传失败,请勿选择超过4M的图片"})}});a.onProgressUpdate(function(t){console.log("上传进度"+t.progress," at api\\api.js:1490"),console.log("已经上传的数据长度"+t.totalBytesSent," at api\\api.js:1491"),console.log("预期需要上传的数据总长度"+t.totalBytesExpectedToSend," at api\\api.js:1492")})}})})};e.upPicture=_t;var wt=function(){return new Promise(function(e,n){t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var n=t.tempFilePaths;e(n[0])},fail:function(){t.showToast({icon:"none",title:"出錯了，請稍後重試"})}})})};e.getImgTemp=wt;var bt=function(e){return new Promise(function(r,o){t.uploadFile({url:a+"upload",header:{token:n},filePath:e,name:"file",success:function(t){var e=JSON.parse(t.data);r(e.data.id)},fail:function(e){console.log("uploadImage fail",e," at api\\api.js:1534"),t.showToast({icon:"none",title:"上传失败,请勿选择超过4M的图片"})}})})};e.upload=bt;var kt=function(e,r){return new Promise(function(o,i){t.request({url:a+"createDyn",method:"POST",header:{token:n,"content-type":"application/json"},data:{content:e,location:"",path:r},success:function(e){200==e.data.status&&(t.showToast({icon:"success",title:"發表成功"}),o(e.data.data))},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.createDyn=kt}).call(this,n("6e42")["default"])},"0cad":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("cc40"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0e92":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("397d"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},1044:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("7247"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"11b2":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("66fd")),o=i(n("2f62"));function i(t){return t&&t.__esModule?t:{default:t}}r.default.use(o.default);var a=new o.default.Store({state:{requireAuth:!1,hasLogin:""!=t.getStorageSync("USERS_KEY").token,voteValue:{voteName:"",voteId:0,voteStatus:0},imgTemp:"",isHidden:!!t.getStorageSync("ASSET_KEY")},mutations:{setBarText:function(t,e){t.voteValue="",t.voteValue=e},logout:function(t){t.token="",t.hasLogin=!1},setImgTemp:function(t,e){t.imgTemp=e}}}),u=a;e.default=u}).call(this,n("6e42")["default"])},1868:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("eef9"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},1992:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("2747"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2389:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("7587"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"260b":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("1ddb"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"274e":function(t,e,n){},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,u){var s,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=s):o&&(s=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var f=c.render;c.render=function(t,e){return s.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2c5c":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("3d14"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return h}),n.d(e,"install",function(){return x}),n.d(e,"mapState",function(){return E}),n.d(e,"mapMutations",function(){return j}),n.d(e,"mapGetters",function(){return S}),n.d(e,"mapActions",function(){return M}),n.d(e,"createNamespacedHelpers",function(){return C});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function u(t){return null!==t&&"object"===typeof t}function s(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,f);var l=function(t){this.register([],t,!1)};function d(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;d(t.concat(r),e.getChild(r),n.modules[r])}}l.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},l.prototype.update=function(t){d([],this.root,t)},l.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new c(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var p;var h=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!==typeof window&&window.Vue&&x(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var a=this,u=this,s=u.dispatch,c=u.commit;this.dispatch=function(t,e){return s.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=r,_(this,o,[],this._modules.root),m(this,o),n.forEach(function(t){return t(e)}),p.config.devtools&&i(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;_(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var u=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:i}),p.config.silent=u,t.strict&&$(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),p.nextTick(function(){return r.$destroy()}))}function _(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var u=O(e,n.slice(0,-1)),s=n[n.length-1];t._withCommit(function(){p.set(u,s,r.state)})}var c=r.context=w(t,a,n);r.forEachMutation(function(e,n){var r=a+n;k(t,r,e,c)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;P(t,r,o,c)}),r.forEachGetter(function(e,n){var r=a+n;T(t,r,e,c)}),r.forEachChild(function(r,i){_(t,e,n.concat(i),r,o)})}function w(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=A(n,r,o),a=i.payload,u=i.options,s=i.type;return u&&u.root||(s=e+s),t.dispatch(s,a)},commit:r?t.commit:function(n,r,o){var i=A(n,r,o),a=i.payload,u=i.options,s=i.type;u&&u.root||(s=e+s),t.commit(s,a,u)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return O(t.state,n)}}}),o}function b(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function k(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function P(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return s(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function T(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function $(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function O(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function A(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function x(t){p&&t===p||(p=t,r(p))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},h.prototype.commit=function(t,e,n){var r=this,o=A(t,e,n),i=o.type,a=o.payload,u=(o.options,{type:i,payload:a}),s=this._mutations[i];s&&(this._withCommit(function(){s.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(u,r.state)}))},h.prototype.dispatch=function(t,e){var n=this,r=A(t,e),o=r.type,i=r.payload,a={type:o,payload:i},u=this._actions[o];if(u)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),u.length>1?Promise.all(u.map(function(t){return t(i)})):u[0](i)},h.prototype.subscribe=function(t){return g(t,this._subscribers)},h.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},h.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},h.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},h.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},h.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=O(e.state,t.slice(0,-1));p.delete(n,t[t.length-1])}),y(this)},h.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},h.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(h.prototype,v);var E=B(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=D(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),j=B(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=D(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),S=B(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||D(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),M=B(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=D(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),C=function(t){return{mapState:E.bind(null,t),mapGetters:S.bind(null,t),mapMutations:j.bind(null,t),mapActions:M.bind(null,t)}};function I(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function B(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function D(t,e,n){var r=t._modulesNamespaceMap[n];return r}var L={Store:h,install:x,version:"3.0.1",mapState:E,mapMutations:j,mapGetters:S,mapActions:M,createNamespacedHelpers:C};e["default"]=L},"2fbd":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("9567"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"32c8":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("855d"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},3850:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,o,i,a){try{var u=t[i](a),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,s,"next",t)}function s(t){a(i,r,o,u,s,"throw",t)}u(void 0)})}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var l=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),this.config={},this.config.baseUrl=n.baseUrl?n.baseUrl:"",this.config.dataType=n.dataType?n.dataType:"json",this.config.responseType=n.responseType?n.responseType:"text",this.config.header=n.header?n.header:{},this.reqInterceptors=null,this.resInterceptors=null,this.interceptors={request:function(e){t.reqInterceptors=e},response:function(e){t.resInterceptors=e}}}return f(e,[{key:"get",value:function(){var t=u(o.default.mark(function t(e){var n,r=arguments;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.abrupt("return",this._request("get",e,n));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"post",value:function(){var t=u(o.default.mark(function t(e){var n,r=arguments;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.abrupt("return",this._request("post",e,n));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"put",value:function(){var t=u(o.default.mark(function t(e){var n,r=arguments;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.abrupt("return",this._request("put",e,n));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=u(o.default.mark(function t(e){var n,r=arguments;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.abrupt("return",this._request("delete",e,n));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"setConfig",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config=Object.assign({},this._merge(this.config,t))}},{key:"_request",value:function(e,n,r){var o=this,i=Object.assign({},this._merge(this.config,r)),a={};if(this.reqInterceptors&&"function"===typeof this.reqInterceptors){var u=this.reqInterceptors(i);if(!u)return!1;a=Object.assign({},u)}else a=Object.assign({},i);return new Promise(function(r,i){t.request({url:o._formatUrl(a.baseUrl,n),method:e,data:a.data?a.data:{},header:a.header,dataType:a.dataType,responseType:a.responseType,complete:function(t){var e=t;if(!e.statusCode||200!==e.statusCode){var n=o.resInterceptors(e);return e=n,void i(e)}if(o.resInterceptors&&"function"===typeof o.resInterceptors){var a=o.resInterceptors(e);if(!a)return void i("返回值已被您拦截！");e=a}r(e)}})})}},{key:"_formatUrl",value:function(t,e){if(!t)return e;var n="",r=t.endsWith("/"),o=e.startsWith("/");return n=r&&o?t+e.substring(1):r||o?t+e:t+"/"+e,n}},{key:"_merge",value:function(t,e){var n=Object.assign({},t);if(!e||!Object.keys(e).length)return n;for(var r in e)if("header"!==r)n[r]=e[r];else if("[object Object]"===Object.prototype.toString.call(e[r]))for(var o in e[r])n[r][o]=e[r][o];return n}}]),e}();r.$request||(r.$request=new l);var d=r.$request;e.default=d}).call(this,n("6e42")["default"],n("c8ba"))},"3c06":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("0995"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"3d8b":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("b574"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"3ee4":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("6f85"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"42cb":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("5bf2"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"470c":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("396d"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},4941:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("5955"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4be6":function(t,e,n){"use strict";(function(t){n("274e");var e=s(n("66fd")),r=s(n("c4dd")),o=s(n("11b2")),i=s(n("98c6")),a=s(n("e3c4"));n("de66");var u=s(n("3850"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.prototype.api=a.default,e.default.prototype.$request=u.default,e.default.config.productionTip=!1,e.default.prototype.$store=o.default,Object.keys(i.default).forEach(function(t){e.default.filter(t,i.default[t])}),r.default.mpType="app";var l=new e.default(c({store:o.default},r.default));t(l).$mount()}).call(this,n("6e42")["createApp"])},"4fef":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("25fa"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"606d":function(t,e,n){"use strict";var r=function(t,e){var n=236,r=17,o=t,a=i[e],s=null,p=0,h=null,v=new Array,g={},m=function(t,e){p=4*o+17,s=function(t){for(var e=new Array(t),n=0;n<t;n+=1){e[n]=new Array(t);for(var r=0;r<t;r+=1)e[n][r]=null}return e}(p),_(0,0),_(p-7,0),_(0,p-7),k(),b(),T(t,e),o>=7&&P(t),null==h&&(h=A(o,a,v)),$(h,e)},_=function(t,e){for(var n=-1;n<=7;n+=1)if(!(t+n<=-1||p<=t+n))for(var r=-1;r<=7;r+=1)e+r<=-1||p<=e+r||(s[t+n][e+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},w=function(){for(var t=0,e=0,n=0;n<8;n+=1){m(!0,n);var r=u.getLostPoint(g);(0==n||t>r)&&(t=r,e=n)}return e},b=function(){for(var t=8;t<p-8;t+=1)null==s[t][6]&&(s[t][6]=t%2==0);for(var e=8;e<p-8;e+=1)null==s[6][e]&&(s[6][e]=e%2==0)},k=function(){for(var t=u.getPatternPosition(o),e=0;e<t.length;e+=1)for(var n=0;n<t.length;n+=1){var r=t[e],i=t[n];if(null==s[r][i])for(var a=-2;a<=2;a+=1)for(var c=-2;c<=2;c+=1)s[r+a][i+c]=-2==a||2==a||-2==c||2==c||0==a&&0==c}},P=function(t){for(var e=u.getBCHTypeNumber(o),n=0;n<18;n+=1){var r=!t&&1==(e>>n&1);s[Math.floor(n/3)][n%3+p-8-3]=r}for(n=0;n<18;n+=1){r=!t&&1==(e>>n&1);s[n%3+p-8-3][Math.floor(n/3)]=r}},T=function(t,e){for(var n=a<<3|e,r=u.getBCHTypeInfo(n),o=0;o<15;o+=1){var i=!t&&1==(r>>o&1);o<6?s[o][8]=i:o<8?s[o+1][8]=i:s[p-15+o][8]=i}for(o=0;o<15;o+=1){i=!t&&1==(r>>o&1);o<8?s[8][p-o-1]=i:o<9?s[8][15-o-1+1]=i:s[8][15-o-1]=i}s[p-8][8]=!t},$=function(t,e){for(var n=-1,r=p-1,o=7,i=0,a=u.getMaskFunction(e),c=p-1;c>0;c-=2){6==c&&(c-=1);while(1){for(var f=0;f<2;f+=1)if(null==s[r][c-f]){var l=!1;i<t.length&&(l=1==(t[i]>>>o&1));var d=a(r,c-f);d&&(l=!l),s[r][c-f]=l,o-=1,-1==o&&(i+=1,o=7)}if(r+=n,r<0||p<=r){r-=n,n=-n;break}}}},O=function(t,e){for(var n=0,r=0,o=0,i=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s+=1){var f=e[s].dataCount,l=e[s].totalCount-f;r=Math.max(r,f),o=Math.max(o,l),i[s]=new Array(f);for(var d=0;d<i[s].length;d+=1)i[s][d]=255&t.getBuffer()[d+n];n+=f;var p=u.getErrorCorrectPolynomial(l),h=c(i[s],p.getLength()-1),v=h.mod(p);a[s]=new Array(p.getLength()-1);for(d=0;d<a[s].length;d+=1){var g=d+v.getLength()-a[s].length;a[s][d]=g>=0?v.getAt(g):0}}var y=0;for(d=0;d<e.length;d+=1)y+=e[d].totalCount;var m=new Array(y),_=0;for(d=0;d<r;d+=1)for(s=0;s<e.length;s+=1)d<i[s].length&&(m[_]=i[s][d],_+=1);for(d=0;d<o;d+=1)for(s=0;s<e.length;s+=1)d<a[s].length&&(m[_]=a[s][d],_+=1);return m},A=function(t,e,o){for(var i=f.getRSBlocks(t,e),a=l(),s=0;s<o.length;s+=1){var c=o[s];a.put(c.getMode(),4),a.put(c.getLength(),u.getLengthInBits(c.getMode(),t)),c.write(a)}var d=0;for(s=0;s<i.length;s+=1)d+=i[s].dataCount;if(a.getLengthInBits()>8*d)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+8*d+")");a.getLengthInBits()+4<=8*d&&a.put(0,4);while(a.getLengthInBits()%8!=0)a.putBit(!1);while(1){if(a.getLengthInBits()>=8*d)break;if(a.put(n,8),a.getLengthInBits()>=8*d)break;a.put(r,8)}return O(a,i)};return g.addData=function(t){var e=d(t);v.push(e),h=null},g.isDark=function(t,e){if(t<0||p<=t||e<0||p<=e)throw new Error(t+","+e);return s[t][e]},g.getModuleCount=function(){return p},g.make=function(){m(!1,w())},g.createTableTag=function(t,e){t=t||2,e="undefined"==typeof e?4*t:e;var n="";n+='<table style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: "+e+"px;",n+='">',n+="<tbody>";for(var r=0;r<g.getModuleCount();r+=1){n+="<tr>";for(var o=0;o<g.getModuleCount();o+=1)n+='<td style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: 0px;",n+=" width: "+t+"px;",n+=" height: "+t+"px;",n+=" background-color: ",n+=g.isDark(r,o)?"#000000":"#ffffff",n+=";",n+='"/>';n+="</tr>"}return n+="</tbody>",n+="</table>",n},g.createImgTag=function(t,e,n){t=t||2,e="undefined"==typeof e?4*t:e;var r=e,o=g.getModuleCount()*t+e;return y(n,n,function(e,n){if(r<=e&&e<o&&r<=n&&n<o){var i=Math.floor((e-r)/t),a=Math.floor((n-r)/t);return g.isDark(a,i)?0:1}return 1})},g};r.stringToBytes=function(t){for(var e=new Array,n=0;n<t.length;n+=1){var r=t.charCodeAt(n);e.push(255&r)}return e},r.createStringToBytes=function(t,e){var n=function(){var n=v(t),r=function(){var t=n.read();if(-1==t)throw new Error;return t},o=0,i={};while(1){var a=n.read();if(-1==a)break;var u=r(),s=r(),c=r(),f=String.fromCharCode(a<<8|u),l=s<<8|c;i[f]=l,o+=1}if(o!=e)throw new Error(o+" != "+e);return i}(),r="?".charCodeAt(0);return function(t){for(var e=new Array,o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)e.push(i);else{var a=n[t.charAt(o)];"number"==typeof a?(255&a)==a?e.push(a):(e.push(a>>>8),e.push(255&a)):e.push(r)}}return e}};var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},i={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},u=function(){var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,r=21522,i={},u=function(t){var e=0;while(0!=t)e+=1,t>>>=1;return e};return i.getBCHTypeInfo=function(t){var n=t<<10;while(u(n)-u(e)>=0)n^=e<<u(n)-u(e);return(t<<10|n)^r},i.getBCHTypeNumber=function(t){var e=t<<12;while(u(e)-u(n)>=0)e^=n<<u(e)-u(n);return t<<12|e},i.getPatternPosition=function(e){return t[e-1]},i.getMaskFunction=function(t){switch(t){case a.PATTERN000:return function(t,e){return(t+e)%2==0};case a.PATTERN001:return function(t,e){return t%2==0};case a.PATTERN010:return function(t,e){return e%3==0};case a.PATTERN011:return function(t,e){return(t+e)%3==0};case a.PATTERN100:return function(t,e){return(Math.floor(t/2)+Math.floor(e/3))%2==0};case a.PATTERN101:return function(t,e){return t*e%2+t*e%3==0};case a.PATTERN110:return function(t,e){return(t*e%2+t*e%3)%2==0};case a.PATTERN111:return function(t,e){return(t*e%3+(t+e)%2)%2==0};default:throw new Error("bad maskPattern:"+t)}},i.getErrorCorrectPolynomial=function(t){for(var e=c([1],0),n=0;n<t;n+=1)e=e.multiply(c([1,s.gexp(n)],0));return e},i.getLengthInBits=function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:return 8;case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},i.getLostPoint=function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r+=1)for(var o=0;o<e;o+=1){for(var i=0,a=t.isDark(r,o),u=-1;u<=1;u+=1)if(!(r+u<0||e<=r+u))for(var s=-1;s<=1;s+=1)o+s<0||e<=o+s||0==u&&0==s||a==t.isDark(r+u,o+s)&&(i+=1);i>5&&(n+=3+i-5)}for(r=0;r<e-1;r+=1)for(o=0;o<e-1;o+=1){var c=0;t.isDark(r,o)&&(c+=1),t.isDark(r+1,o)&&(c+=1),t.isDark(r,o+1)&&(c+=1),t.isDark(r+1,o+1)&&(c+=1),0!=c&&4!=c||(n+=3)}for(r=0;r<e;r+=1)for(o=0;o<e-6;o+=1)t.isDark(r,o)&&!t.isDark(r,o+1)&&t.isDark(r,o+2)&&t.isDark(r,o+3)&&t.isDark(r,o+4)&&!t.isDark(r,o+5)&&t.isDark(r,o+6)&&(n+=40);for(o=0;o<e;o+=1)for(r=0;r<e-6;r+=1)t.isDark(r,o)&&!t.isDark(r+1,o)&&t.isDark(r+2,o)&&t.isDark(r+3,o)&&t.isDark(r+4,o)&&!t.isDark(r+5,o)&&t.isDark(r+6,o)&&(n+=40);var f=0;for(o=0;o<e;o+=1)for(r=0;r<e;r+=1)t.isDark(r,o)&&(f+=1);var l=Math.abs(100*f/e/e-50)/5;return n+=10*l,n},i}(),s=function(){for(var t=new Array(256),e=new Array(256),n=0;n<8;n+=1)t[n]=1<<n;for(n=8;n<256;n+=1)t[n]=t[n-4]^t[n-5]^t[n-6]^t[n-8];for(n=0;n<255;n+=1)e[t[n]]=n;var r={glog:function(t){if(t<1)throw new Error("glog("+t+")");return e[t]},gexp:function(e){while(e<0)e+=255;while(e>=256)e-=255;return t[e]}};return r}();function c(t,e){if("undefined"==typeof t.length)throw new Error(t.length+"/"+e);var n=function(){var n=0;while(n<t.length&&0==t[n])n+=1;for(var r=new Array(t.length-n+e),o=0;o<t.length-n;o+=1)r[o]=t[o+n];return r}(),r={getAt:function(t){return n[t]},getLength:function(){return n.length},multiply:function(t){for(var e=new Array(r.getLength()+t.getLength()-1),n=0;n<r.getLength();n+=1)for(var o=0;o<t.getLength();o+=1)e[n+o]^=s.gexp(s.glog(r.getAt(n))+s.glog(t.getAt(o)));return c(e,0)},mod:function(t){if(r.getLength()-t.getLength()<0)return r;for(var e=s.glog(r.getAt(0))-s.glog(t.getAt(0)),n=new Array(r.getLength()),o=0;o<r.getLength();o+=1)n[o]=r.getAt(o);for(o=0;o<t.getLength();o+=1)n[o]^=s.gexp(s.glog(t.getAt(o))+e);return c(n,0).mod(t)}};return r}var f=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e=function(t,e){var n={};return n.totalCount=t,n.dataCount=e,n},n={},r=function(e,n){switch(n){case i.L:return t[4*(e-1)+0];case i.M:return t[4*(e-1)+1];case i.Q:return t[4*(e-1)+2];case i.H:return t[4*(e-1)+3];default:return}};return n.getRSBlocks=function(t,n){var o=r(t,n);if("undefined"==typeof o)throw new Error("bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:"+t+"/errorCorrectLevel:"+n);for(var i=o.length/3,a=new Array,u=0;u<i;u+=1)for(var s=o[3*u+0],c=o[3*u+1],f=o[3*u+2],l=0;l<s;l+=1)a.push(e(c,f));return a},n}(),l=function(){var t=new Array,e=0,n={getBuffer:function(){return t},getAt:function(e){var n=Math.floor(e/8);return 1==(t[n]>>>7-e%8&1)},put:function(t,e){for(var r=0;r<e;r+=1)n.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return e},putBit:function(n){var r=Math.floor(e/8);t.length<=r&&t.push(0),n&&(t[r]|=128>>>e%8),e+=1}};return n},d=function(t){for(var e=o.MODE_8BIT_BYTE,n=t,r=[],i={},a=0,u=n.length;a<u;a++){var s=[],c=n.charCodeAt(a);c>65536?(s[0]=240|(1835008&c)>>>18,s[1]=128|(258048&c)>>>12,s[2]=128|(4032&c)>>>6,s[3]=128|63&c):c>2048?(s[0]=224|(61440&c)>>>12,s[1]=128|(4032&c)>>>6,s[2]=128|63&c):c>128?(s[0]=192|(1984&c)>>>6,s[1]=128|63&c):s[0]=c,r.push(s)}r=Array.prototype.concat.apply([],r),r.length!=n.length&&(r.unshift(191),r.unshift(187),r.unshift(239));var f=r;return i.getMode=function(){return e},i.getLength=function(t){return f.length},i.write=function(t){for(var e=0;e<f.length;e+=1)t.put(f[e],8)},i},p=function(){var t=new Array,e={writeByte:function(e){t.push(255&e)},writeShort:function(t){e.writeByte(t),e.writeByte(t>>>8)},writeBytes:function(t,n,r){n=n||0,r=r||t.length;for(var o=0;o<r;o+=1)e.writeByte(t[o+n])},writeString:function(t){for(var n=0;n<t.length;n+=1)e.writeByte(t.charCodeAt(n))},toByteArray:function(){return t},toString:function(){var e="";e+="[";for(var n=0;n<t.length;n+=1)n>0&&(e+=","),e+=t[n];return e+="]",e}};return e},h=function(){var t=0,e=0,n=0,r="",o={},i=function(t){r+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw new Error("n:"+t)};return o.writeByte=function(r){t=t<<8|255&r,e+=8,n+=1;while(e>=6)i(t>>>e-6),e-=6},o.flush=function(){if(e>0&&(i(t<<6-e),t=0,e=0),n%3!=0)for(var o=3-n%3,a=0;a<o;a+=1)r+="="},o.toString=function(){return r},o},v=function(t){var e=t,n=0,r=0,o=0,i={read:function(){while(o<8){if(n>=e.length){if(0==o)return-1;throw new Error("unexpected end of file./"+o)}var t=e.charAt(n);if(n+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(r=r<<6|a(t.charCodeAt(0)),o+=6)}var i=r>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw new Error("c:"+t)};return i},g=function(t,e){var n=t,r=e,o=new Array(t*e),i={setPixel:function(t,e,r){o[e*n+t]=r},write:function(t){t.writeString("GIF87a"),t.writeShort(n),t.writeShort(r),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(n),t.writeShort(r),t.writeByte(0);var e=2,o=u(e);t.writeByte(e);var i=0;while(o.length-i>255)t.writeByte(255),t.writeBytes(o,i,255),i+=255;t.writeByte(o.length-i),t.writeBytes(o,i,o.length-i),t.writeByte(0),t.writeString(";")}},a=function(t){var e=t,n=0,r=0,o={write:function(t,o){if(t>>>o!=0)throw new Error("length over");while(n+o>=8)e.writeByte(255&(t<<n|r)),o-=8-n,t>>>=8-n,r=0,n=0;r|=t<<n,n+=o},flush:function(){n>0&&e.writeByte(r)}};return o},u=function(t){for(var e=1<<t,n=1+(1<<t),r=t+1,i=s(),u=0;u<e;u+=1)i.add(String.fromCharCode(u));i.add(String.fromCharCode(e)),i.add(String.fromCharCode(n));var c=p(),f=a(c);f.write(e,r);var l=0,d=String.fromCharCode(o[l]);l+=1;while(l<o.length){var h=String.fromCharCode(o[l]);l+=1,i.contains(d+h)?d+=h:(f.write(i.indexOf(d),r),i.size()<4095&&(i.size()==1<<r&&(r+=1),i.add(d+h)),d=h)}return f.write(i.indexOf(d),r),f.write(n,r),f.flush(),c.toByteArray()},s=function(){var t={},e=0,n={add:function(r){if(n.contains(r))throw new Error("dup key:"+r);t[r]=e,e+=1},size:function(){return e},indexOf:function(e){return t[e]},contains:function(e){return"undefined"!=typeof t[e]}};return n};return i},y=function(t,e,n,r){for(var o=g(t,e),i=0;i<e;i+=1)for(var a=0;a<t;a+=1)o.setPixel(a,i,n(a,i));var u=p();o.write(u);for(var s=h(),c=u.toByteArray(),f=0;f<c.length;f+=1)s.writeByte(c[f]);s.flush();var l="";return l+="data:image/gif;base64,",l+=s,l},m=function(t,e){e=e||{};var n,o=e.typeNumber||4,i=e.errorCorrectLevel||"M",a=e.size||500;try{n=r(o,i||"M"),n.addData(t),n.make()}catch(c){if(o>=40)throw new Error("Text too long to encode");return gen(t,{size:a,errorCorrectLevel:i,typeNumber:o+1})}var u=parseInt(a/n.getModuleCount()),s=parseInt((a-n.getModuleCount()*u)/2);return n.createImgTag(u,s,a)};t.exports={createQrCodeImg:m}},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function s(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function h(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function w(t,e){return _.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var k=/-(\w)/g,P=b(function(t){return t.replace(k,function(t,e){return e?e.toUpperCase():""})}),T=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),$=/\B([A-Z])/g,O=b(function(t){return t.replace($,"-$1").toLowerCase()});function A(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var E=Function.prototype.bind?x:A;function j(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function S(t,e){for(var n in e)t[n]=e[n];return t}function M(t){for(var e={},n=0;n<t.length;n++)t[n]&&S(e,t[n]);return e}function C(t,e,n){}var I=function(t,e,n){return!1},B=function(t){return t};function D(t,e){if(t===e)return!0;var n=s(t),r=s(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return D(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),u=Object.keys(e);return a.length===u.length&&a.every(function(n){return D(t[n],e[n])})}catch(c){return!1}}function L(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function N(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var R=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:C,parsePlatformTagName:B,mustUseProp:I,async:!0,_lifecycleHooks:V},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+U.source+".$_\\d]");function z(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,J="__proto__"in{},W="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Y&&WXEnvironment.platform.toLowerCase(),Q=W&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===X),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(W)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(no){}var ot=function(){return void 0===K&&(K=!W&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},it=W&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var ut,st="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);ut="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=C,ft=0,lt=function(){this.id=ft++,this.subs=[]};lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){m(this.subs,t)},lt.prototype.depend=function(){lt.target&&lt.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.target=null;var dt=[];function pt(t){dt.push(t),lt.target=t}function ht(){dt.pop(),lt.target=dt[dt.length-1]}var vt=function(t,e,n,r,o,i,a,u){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=u,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,gt);var yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function mt(t){return new vt(void 0,void 0,void 0,String(t))}function _t(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var wt=Array.prototype,bt=Object.create(wt),kt=["push","pop","shift","unshift","splice","sort","reverse"];kt.forEach(function(t){var e=wt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var Pt=Object.getOwnPropertyNames(bt),Tt=!0;function $t(t){Tt=t}var Ot=function(t){this.value=t,this.dep=new lt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(J?At(t,bt):xt(t,bt,Pt),this.observeArray(t)):this.walk(t)};function At(t,e){t.__proto__=e}function xt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function Et(t,e){var n;if(s(t)&&!(t instanceof vt))return w(t,"__ob__")&&t.__ob__ instanceof Ot?n=t.__ob__:Tt&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ot(t)),e&&n&&n.vmCount++,n}function jt(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var u=a&&a.get,s=a&&a.set;u&&!s||2!==arguments.length||(n=t[e]);var c=!o&&Et(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=u?u.call(t):n;return lt.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var r=u?u.call(t):n;e===r||e!==e&&r!==r||u&&!s||(s?s.call(t,e):n=e,c=!o&&Et(e),i.notify())}})}}function St(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(jt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}Ot.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)jt(t,e[n])},Ot.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Et(t[e])};var It=q.optionMergeStrategies;function Bt(t,e){if(!e)return t;for(var n,r,o,i=st?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],w(t,n)?r!==o&&f(r)&&f(o)&&Bt(r,o):St(t,n,o));return t}function Dt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Bt(r,o):o}:e?t?function(){return Bt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Lt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Nt(n):n}function Nt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Rt(t,e,n,r){var o=Object.create(t||null);return e?S(o,e):o}It.data=function(t,e,n){return n?Dt(t,e,n):e&&"function"!==typeof e?t:Dt(t,e)},V.forEach(function(t){It[t]=Lt}),R.forEach(function(t){It[t+"s"]=Rt}),It.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in S(o,t),e){var a=o[i],u=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(u):Array.isArray(u)?u:[u]}return o},It.props=It.methods=It.inject=It.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return S(o,t),e&&S(o,e),o},It.provide=Dt;var Vt=function(t,e){return void 0===e?t:e};function qt(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=P(o),a[i]={type:null})}else if(f(n))for(var u in n)o=n[u],i=P(u),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function Ut(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?S({from:i},a):{from:a}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),qt(e,n),Ut(e,n),Ft(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Ht(t,e.mixins[r],n);var i,a={};for(i in t)u(i);for(i in e)w(t,i)||u(i);function u(r){var o=It[r]||Vt;a[r]=o(t[r],e[r],n,r)}return a}function Gt(t,e,n,r){if("string"===typeof n){var o=t[e];if(w(o,n))return o[n];var i=P(n);if(w(o,i))return o[i];var a=T(i);if(w(o,a))return o[a];var u=o[n]||o[i]||o[a];return u}}function zt(t,e,n,r){var o=e[t],i=!w(n,t),a=n[t],u=Yt(Boolean,o.type);if(u>-1)if(i&&!w(o,"default"))a=!1;else if(""===a||a===O(t)){var s=Yt(String,o.type);(s<0||u<s)&&(a=!0)}if(void 0===a){a=Kt(r,o,t);var c=Tt;$t(!0),Et(a),$t(c)}return a}function Kt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Jt(e.type)?r.call(t):r}}function Jt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Wt(t,e){return Jt(t)===Jt(e)}function Yt(t,e){if(!Array.isArray(e))return Wt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Wt(e[n],t))return n;return-1}function Xt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(no){Zt(no,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{ht()}}function Qt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&p(i)&&!i._handled&&(i.catch(function(t){return Xt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(no){Xt(no,r,o)}return i}function Zt(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(no){no!==t&&te(no,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!W&&!Y||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],re=!1;function oe(){re=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();ee=function(){ie.then(oe),et&&setTimeout(C)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(oe)}:function(){setTimeout(oe,0)};else{var ae=1,ue=new MutationObserver(oe),se=document.createTextNode(String(ae));ue.observe(se,{characterData:!0}),ee=function(){ae=(ae+1)%2,se.data=String(ae)}}function ce(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(no){Xt(no,e,"nextTick")}else n&&n(e)}),re||(re=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var fe=new ut;function le(t){de(t,fe),fe.clear()}function de(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!s(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)de(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)de(t[r[n]],e)}}}var pe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Qt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Qt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function ve(t,e,n,o,a,u){var s,c,f,l;for(s in t)c=t[s],f=e[s],l=pe(s),r(c)||(r(f)?(r(c.fns)&&(c=t[s]=he(c,u)),i(l.once)&&(c=t[s]=a(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[s]=f));for(s in e)r(t[s])&&(l=pe(s),o(l.name,e[s],l.capture))}function ge(t,e,n){var i=e.options.props;if(!r(i)){var a={},u=t.attrs,s=t.props;if(o(u)||o(s))for(var c in i){var f=O(c);ye(a,s,c,f,!0)||ye(a,u,c,f,!1)}return a}}function ye(t,e,n,r,i){if(o(e)){if(w(e,n))return t[n]=e[n],i||delete e[n],!0;if(w(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function me(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return u(t)?[mt(t)]:Array.isArray(t)?be(t):void 0}function we(t){return o(t)&&o(t.text)&&a(t.isComment)}function be(t,e){var n,a,s,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(s=f.length-1,c=f[s],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),we(a[0])&&we(c)&&(f[s]=mt(c.text+a[0].text),a.shift()),f.push.apply(f,a)):u(a)?we(c)?f[s]=mt(c.text+a):""!==a&&f.push(mt(a)):we(a)&&we(c)?f[s]=mt(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function ke(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Pe(t){var e=Te(t.$options.inject,t);e&&($t(!1),Object.keys(e).forEach(function(n){jt(t,n,e[n])}),$t(!0))}function Te(t,e){if(t){for(var n=Object.create(null),r=st?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,u=e;while(u){if(u._provided&&w(u._provided,a)){n[i]=u._provided[a];break}u=u.$parent}if(!u)if("default"in t[i]){var s=t[i].default;n[i]="function"===typeof s?s.call(e):s}else 0}}return n}}function $e(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(i);else{var u=a.slot,s=n[u]||(n[u]=[]);"template"===i.tag?s.push.apply(s,i.children||[]):s.push(i)}}for(var c in n)n[c].every(Oe)&&delete n[c];return n}function Oe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ae(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,u=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&u===r.$key&&!i&&!r.$hasNormal)return r;for(var s in o={},t)t[s]&&"$"!==s[0]&&(o[s]=xe(e,s,t[s]))}else o={};for(var c in e)c in o||(o[c]=Ee(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",a),H(o,"$key",u),H(o,"$hasNormal",i),o}function xe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Ee(t,e){return function(){return t[e]}}function je(t,e){var n,r,i,a,u;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(s(t))if(st&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)u=a[r],n[r]=e(t[u],u,r);return o(n)||(n=[]),n._isVList=!0,n}function Se(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=S(S({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Me(t){return Gt(this.$options,"filters",t,!0)||B}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,o){var i=q.keyCodes[e]||n;return o&&r&&!q.keyCodes[e]?Ce(o,r):i?Ce(i,t):r?O(r)!==e:void 0}function Be(t,e,n,r,o){if(n)if(s(n)){var i;Array.isArray(n)&&(n=M(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var u=t.attrs&&t.attrs.type;i=r||q.mustUseProp(e,u,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var s=P(a),c=O(a);if(!(s in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var u in n)a(u)}else;return t}function De(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ne(r,"__static__"+t,!1),r)}function Le(t,e,n){return Ne(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ne(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Re(t[r],e+"_"+r,n);else Re(t,e,n)}function Re(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ve(t,e){if(e)if(f(e)){var n=t.on=t.on?S({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function qe(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?qe(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Ue(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Le,t._n=v,t._s=h,t._l=je,t._t=Se,t._q=D,t._i=L,t._m=De,t._f=Me,t._k=Ie,t._b=Be,t._v=mt,t._e=yt,t._u=qe,t._g=Ve,t._d=Ue,t._p=Fe}function Ge(t,e,r,o,a){var u,s=this,c=a.options;w(o,"_uid")?(u=Object.create(o),u._original=o):(u=o,o=o._original);var f=i(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Te(c.inject,o),this.slots=function(){return s.$slots||Ae(t.scopedSlots,s.$slots=$e(r,o)),s.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ae(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Ae(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=on(u,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return on(u,t,e,n,r,l)}}function ze(t,e,r,i,a){var u=t.options,s={},c=u.props;if(o(c))for(var f in c)s[f]=zt(f,c,e||n);else o(r.attrs)&&Je(s,r.attrs),o(r.props)&&Je(s,r.props);var l=new Ge(r,s,a,i,t),d=u.render.call(null,l._c,l);if(d instanceof vt)return Ke(d,r,l.parent,u,l);if(Array.isArray(d)){for(var p=_e(d)||[],h=new Array(p.length),v=0;v<p.length;v++)h[v]=Ke(p[v],r,l.parent,u,l);return h}}function Ke(t,e,n,r,o){var i=_t(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Je(t,e){for(var n in e)t[P(n)]=e[n]}He(Ge.prototype);var We={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;We.prepatch(n,n)}else{var r=t.componentInstance=Qe(t,Tn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;xn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Mn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):jn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Sn(e,!0):e.$destroy())}},Ye=Object.keys(We);function Xe(t,e,n,a,u){if(!r(t)){var c=n.$options._base;if(s(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=vn(f,c),void 0===t))return hn(f,e,n,a,u);e=e||{},pr(t),o(e.model)&&en(t.options,e);var l=ge(e,t,u);if(i(t.options.functional))return ze(t,l,e,n,a);var d=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}Ze(e);var h=t.options.name||u,v=new vt("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:d,tag:u,children:a},f);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ye.length;n++){var r=Ye[n],o=e[r],i=We[r];o===i||o&&o._merged||(e[r]=o?tn(i,o):i)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],u=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(u):a!==u)&&(i[r]=[u].concat(a)):i[r]=u}var nn=1,rn=2;function on(t,e,n,r,o,a){return(Array.isArray(n)||u(n))&&(o=r,r=n,n=void 0),i(a)&&(o=rn),an(t,e,n,r,o)}function an(t,e,n,r,i){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,u,s;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===rn?r=_e(r):i===nn&&(r=me(r)),"string"===typeof e)?(u=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),a=q.isReservedTag(e)?new vt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(s=Gt(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):Xe(s,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(u)&&un(a,u),o(n)&&sn(n),a):yt()}function un(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,u=t.children.length;a<u;a++){var s=t.children[a];o(s.tag)&&(r(s.ns)||i(n)&&"svg"!==s.tag)&&un(s,e,n)}}function sn(t){s(t.style)&&le(t.style),s(t.class)&&le(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=$e(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return on(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return on(t,e,n,r,o,!0)};var i=r&&r.data;jt(t,"$attrs",i&&i.attrs||n,null,!0),jt(t,"$listeners",e._parentListeners||n,null,!0)}var fn,ln=null;function dn(t){He(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=Ae(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(no){Xt(no,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=o,t}}function pn(t,e){return(t.__esModule||st&&"Module"===t[Symbol.toStringTag])&&(t=t.default),s(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=yt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function vn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=ln;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],u=!0,c=null,f=null;n.$on("hook:destroyed",function(){return m(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},d=N(function(n){t.resolved=pn(n,e),u?a.length=0:l(!0)}),h=N(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(d,h);return s(v)&&(p(v)?r(t.resolved)&&v.then(d,h):p(v.component)&&(v.component.then(d,h),o(v.error)&&(t.errorComp=pn(v.error,e)),o(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&h(null)},v.timeout)))),u=!1,t.loading?t.loadingComp:t.resolved}}function gn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||gn(n)))return n}}function mn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&kn(t,e)}function _n(t,e){fn.$on(t,e)}function wn(t,e){fn.$off(t,e)}function bn(t,e){var n=fn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function kn(t,e,n){fn=t,ve(e,n||{},_n,wn,bn,t),fn=void 0}function Pn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var u=a.length;while(u--)if(i=a[u],i===e||i.fn===e){a.splice(u,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?j(n):n;for(var r=j(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Qt(n[i],e,r,e,o)}return e}}var Tn=null;function $n(t){var e=Tn;return Tn=t,function(){Tn=e}}function On(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function An(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=$n(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Mn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Mn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function xn(t,e,r,o,i){var a=o.data.scopedSlots,u=t.$scopedSlots,s=!!(a&&!a.$stable||u!==n&&!u.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||s);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){$t(!1);for(var f=t._props,l=t.$options._propKeys||[],d=0;d<l.length;d++){var p=l[d],h=t.$options.props;f[p]=zt(p,h,e,t)}$t(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,kn(t,r,v),c&&(t.$slots=$e(i,o.context),t.$forceUpdate())}function En(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function jn(t,e){if(e){if(t._directInactive=!1,En(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)jn(t.$children[n]);Mn(t,"activated")}}function Sn(t,e){if((!e||(t._directInactive=!0,!En(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Sn(t.$children[n]);Mn(t,"deactivated")}}function Mn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Qt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Cn=[],In=[],Bn={},Dn=!1,Ln=!1,Nn=0;function Rn(){Nn=Cn.length=In.length=0,Bn={},Dn=Ln=!1}var Vn=Date.now;if(W&&!Z){var qn=window.performance;qn&&"function"===typeof qn.now&&Vn()>document.createEvent("Event").timeStamp&&(Vn=function(){return qn.now()})}function Un(){var t,e;for(Vn(),Ln=!0,Cn.sort(function(t,e){return t.id-e.id}),Nn=0;Nn<Cn.length;Nn++)t=Cn[Nn],t.before&&t.before(),e=t.id,Bn[e]=null,t.run();var n=In.slice(),r=Cn.slice();Rn(),Gn(n),Fn(r),it&&q.devtools&&it.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Mn(r,"updated")}}function Hn(t){t._inactive=!1,In.push(t)}function Gn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,jn(t[e],!0)}function zn(t){var e=t.id;if(null==Bn[e]){if(Bn[e]=!0,Ln){var n=Cn.length-1;while(n>Nn&&Cn[n].id>t.id)n--;Cn.splice(n+1,0,t)}else Cn.push(t);Dn||(Dn=!0,ce(Un))}}var Kn=0,Jn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Kn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ut,this.newDepIds=new ut,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Jn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(no){if(!this.user)throw no;Xt(no,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),ht(),this.cleanupDeps()}return t},Jn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Jn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Jn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zn(this)},Jn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||s(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(no){Xt(no,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Jn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Jn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Jn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Wn={enumerable:!0,configurable:!0,get:C,set:C};function Yn(t,e,n){Wn.get=function(){return this[e][n]},Wn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Wn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&ar(t,e.methods),e.data?Zn(t):Et(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&ur(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||$t(!1);var a=function(i){o.push(i);var a=zt(i,e,n,t);jt(r,i,a),i in t||Yn(t,"_props",i)};for(var u in e)a(u);$t(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&w(r,i)||F(i)||Yn(t,"_data",i)}Et(e,!0)}function tr(t,e){pt();try{return t.call(e,e)}catch(no){return Xt(no,e,"data()"),{}}finally{ht()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Jn(t,a||C,C,er)),o in t||rr(t,o,i)}}function rr(t,e,n){var r=!ot();"function"===typeof n?(Wn.get=r?or(e):ir(n),Wn.set=C):(Wn.get=n.get?r&&!1!==n.cache?or(e):ir(n.get):C,Wn.set=n.set||C),Object.defineProperty(t,e,Wn)}function or(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?C:E(e[n],t)}function ur(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)sr(t,n,r[o]);else sr(t,n,r)}}function sr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=St,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return sr(r,t,e,n);n=n||{},n.user=!0;var o=new Jn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Xt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var fr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=fr++,e._isVue=!0,t&&t._isComponent?dr(e,t):e.$options=Ht(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,On(e),mn(e),cn(e),Mn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Pe(e),Xn(e),"mp-toutiao"!==e.mpHost&&ke(e),"mp-toutiao"!==e.mpHost&&Mn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function dr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&S(t.extendOptions,o),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function vr(t){this._init(t)}function gr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=j(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function mr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Ht(n.options,t),a["super"]=n,a.options.props&&_r(a),a.options.computed&&wr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,R.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=S({},a.options),o[r]=a,a}}function _r(t){var e=t.options.props;for(var n in e)Yn(t.prototype,"_props",n)}function wr(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function br(t){R.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function kr(t){return t&&(t.Ctor.options.name||t.tag)}function Pr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Tr(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var u=kr(a.componentOptions);u&&!e(u)&&$r(n,i,r,o)}}}function $r(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,m(n,e)}lr(vr),cr(vr),Pn(vr),An(vr),dn(vr);var Or=[String,RegExp,Array],Ar={name:"keep-alive",abstract:!0,props:{include:Or,exclude:Or,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)$r(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Tr(t,function(t){return Pr(e,t)})}),this.$watch("exclude",function(e){Tr(t,function(t){return!Pr(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=kr(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!Pr(i,r))||a&&r&&Pr(a,r))return e;var u=this,s=u.cache,c=u.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;s[f]?(e.componentInstance=s[f].componentInstance,m(c,f),c.push(f)):(s[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&$r(s,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},xr={KeepAlive:Ar};function Er(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:S,mergeOptions:Ht,defineReactive:jt},t.set=St,t.delete=Mt,t.nextTick=ce,t.observable=function(t){return Et(t),t},t.options=Object.create(null),R.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,S(t.options.components,xr),gr(t),yr(t),mr(t),br(t)}Er(vr),Object.defineProperty(vr.prototype,"$isServer",{get:ot}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:Ge}),vr.version="2.6.10";var jr="[object Array]",Sr="[object Object]";function Mr(t,e){var n={};return Cr(t,e),Ir(t,e,"",n),n}function Cr(t,e){if(t!==e){var n=Dr(t),r=Dr(e);if(n==Sr&&r==Sr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Cr(i,e[o])}}else n==jr&&r==jr&&t.length>=e.length&&e.forEach(function(e,n){Cr(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var o=Dr(t),i=Dr(e);if(o==Sr)if(i!=Sr||Object.keys(t).length<Object.keys(e).length)Br(r,n,t);else{var a=function(o){var i=t[o],a=e[o],u=Dr(i),s=Dr(a);if(u!=jr&&u!=Sr)i!=e[o]&&Br(r,(""==n?"":n+".")+o,i);else if(u==jr)s!=jr?Br(r,(""==n?"":n+".")+o,i):i.length<a.length?Br(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ir(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(u==Sr)if(s!=Sr||Object.keys(i).length<Object.keys(a).length)Br(r,(""==n?"":n+".")+o,i);else for(var c in i)Ir(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var u in t)a(u)}else o==jr?i!=jr?Br(r,n,t):t.length<e.length?Br(r,n,t):t.forEach(function(t,o){Ir(t,e[o],n+"["+o+"]",r)}):Br(r,n,t)}}function Br(t,e,n){t[e]=n}function Dr(t){return Object.prototype.toString.call(t)}function Lr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Nr(t){return Cn.find(function(e){return t._watcher===e})}function Rr(t,e){if(!t.__next_tick_pending&&!Nr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(no){Xt(no,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Vr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var qr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Vr(this)}catch(u){console.error(u)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Mr(o,i);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Lr(n)})):Lr(this)}};function Ur(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Ur),t.$options.render||(t.$options.render=Ur),"mp-toutiao"!==t.mpHost&&Mn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Jn(t,r,C,{before:function(){t._isMounted&&!t._isDestroyed&&Mn(t,"beforeUpdate")}},!0),n=!1,t}function Hr(t,e){return o(t)||o(e)?Gr(t,zr(e)):""}function Gr(t,e){return t?e?t+" "+e:t:e||""}function zr(t){return Array.isArray(t)?Kr(t):s(t)?Jr(t):"string"===typeof t?t:""}function Kr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=zr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Jr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Wr=b(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Yr(t){return Array.isArray(t)?M(t):"string"===typeof t?Wr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Qr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:j(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Rr(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=ke,t.prototype.__init_injections=Pe,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,u=o.length;a<u;a++)r=Qt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qr(e||this,t)},t.prototype.__get_class=function(t,e){return Hr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Yr(t),r=e?S(e,n):n;return Object.keys(r).map(function(t){return O(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(s(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var to=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eo(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==to.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;to.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=to}vr.prototype.__patch__=qr,vr.prototype.$mount=function(t,e){return Fr(this,t,e)},eo(vr),Zr(vr),e["default"]=vr}.call(this,n("c8ba"))},"677b":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("574f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"680a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.skipIndex=void 0;var n=function(){var e="";t.getStorage({key:"USERS_KEY",success:function(t){e=t.data.token}}),e&&t.switchTab({url:"../main/main"})};e.skipIndex=n}).call(this,n("6e42")["default"])},"6c33":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("4fd8"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=he,e.createPage=Pe,e.createComponent=Te,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return s(t)||u(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(s){o=!0,i=s}finally{try{r||null==u["return"]||u["return"]()}finally{if(o)throw i}}return n}function s(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return p(t)||d(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var h=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function m(t){return"[object Object]"===h.call(t)}function _(t,e){return v.call(t,e)}function w(){}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var k=/-(\w)/g,P=b(function(t){return t.replace(k,function(t,e){return e?e.toUpperCase():""})}),T=["invoke","success","fail","complete","returnValue"],$={},O={};function A(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?x(n):n}function x(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function E(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function j(t,e){Object.keys(e).forEach(function(n){-1!==T.indexOf(n)&&g(e[n])&&(t[n]=A(t[n],e[n]))})}function S(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==T.indexOf(n)&&g(e[n])&&E(t[n],e[n])})}function M(t,e){"string"===typeof t&&m(e)?j(O[t]||(O[t]={}),e):m(t)&&j($,t)}function C(t,e){"string"===typeof t?m(e)?S(O[t],e):delete O[t]:m(t)&&S($,t)}function I(t){return function(e){return t(e)||e}}function B(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function D(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(I(o));else{var i=o(e);if(B(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){D(t[n],e).then(function(t){return g(r)&&r(t)||t})}}}),e}function N(t,e){var n=[];Array.isArray($.returnValue)&&n.push.apply(n,f($.returnValue));var r=O[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function R(t){var e=Object.create(null);Object.keys($).forEach(function(t){"returnValue"!==t&&(e[t]=$[t].slice())});var n=O[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function V(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=R(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var u=D(a.invoke,n);return u.then(function(t){return e.apply(void 0,[L(a,t)].concat(o))})}return e.apply(void 0,[L(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var q={returnValue:function(t){return B(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},U=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,H=/^on/;function G(t){return F.test(t)}function z(t){return U.test(t)}function K(t){return H.test(t)}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function W(t){return!(G(t)||z(t)||K(t))}function Y(t,e){return W(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return g(n.success)||g(n.fail)||g(n.complete)?N(t,V.apply(void 0,[t,e,n].concat(o))):N(t,J(new Promise(function(r,i){V.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var X=1e-4,Q=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Z="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Q*(e||tt);return n<0&&(n=-n),n=Math.floor(n+X),0===n?1!==et&&Z?.5:1:t<0?-n:n}var ot={promiseInterceptor:q},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:M,removeInterceptor:C}),at={},ut=[],st=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(dt(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(e)){var i=!0===o?e:{};for(var a in g(n)&&(n=n(e,i)||{}),e)if(_(n,a)){var u=n[a];g(u)&&(u=u(e[a],e,i)),u?y(u)?i[u]=e[a]:m(u)&&(i[u.name?u.name:a]=u.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return g(e)&&(e=ft(t,e,r)),e}function dt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function pt(t,e){if(_(at,t)){var n=at[t];return n?function(e,r){var o=n;g(n)&&(o=n(e)),e=lt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return z(t)?dt(t,a,o.returnValue,G(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var ht=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(o),g(r)&&r(o)}}vt.forEach(function(t){ht[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function mt(t,e,n){return t[e].apply(t,n)}function _t(){return mt(yt(),"$on",Array.prototype.slice.call(arguments))}function wt(){return mt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return mt(yt(),"$once",Array.prototype.slice.call(arguments))}function kt(){return mt(yt(),"$emit",Array.prototype.slice.call(arguments))}var Pt=Object.freeze({$on:_t,$off:wt,$once:bt,$emit:kt});function Tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var o=t.show,i=t.hide,a=t.close,u=function(){r.setStyle({mask:n})},s=function(){r.setStyle({mask:"none"})};t.show=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){s(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function $t(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Tt(e),e}function Ot(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var At=Object.freeze({requireNativePlugin:Ot,getSubNVueById:$t}),xt=Page,Et=Component,jt=/:/g,St=b(function(t){return P(t.replace(jt,"-"))});function Mt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[St(n)].concat(o))}}}function Ct(t,e){var n=e[t];e[t]=n?function(){Mt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Mt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("onLoad",t),xt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("created",t),Et(t)};var It=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Bt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){_(n,e)&&(t[e]=n[e])})}function Dt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Dt(t,e)}):void 0}function Lt(t,e,n){e.forEach(function(e){Dt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Nt(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Rt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function qt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return m(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(n,t)||(n[t]=r[t])}),n}var Ut=[String,Number,Boolean,Object,Array,null];function Ft(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(r)&&r.props&&a.push(e({properties:zt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){m(t)&&t.props&&a.push(e({properties:zt(t.props,!0)}))}),a}function Gt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function zt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueId={type:String,value:""},r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:Ft(t)}}):m(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(m(o)){var i=o["default"];g(i)&&(i=i()),o.type=Gt(e,o.type,i,n),r[e]={type:-1!==Ut.indexOf(o.type)?o.type:null,value:i,observer:Ft(e)}}else{var a=Gt(e,o,null,n);r[e]={type:-1!==Ut.indexOf(a)?a:null,observer:Ft(e)}}}),r}function Kt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=w,t.preventDefault=w,t.target=t.target||{},_(t,"detail")||(t.detail={}),m(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],u=r?t.__get_value(r,n):n;Number.isInteger(u)?n=o:i?Array.isArray(u)?n=u.find(function(e){return t.__get_value(i,e)===o}):m(u)?n=Object.keys(u).find(function(e){return t.__get_value(i,u[e])===o}):console.error("v-for 暂不支持循环数据：",u):n=u[o],a&&(n=t.__get_value(a,n))}}),n}function Wt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Jt(t,e)}),r}function Yt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Xt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var u=Wt(t,r,e),s=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?s.push(e.detail.__args__[0]):s.push(e):s.push(e.target.value):Array.isArray(t)&&"o"===t[0]?s.push(Yt(t)):"string"===typeof t&&_(u,t)?s.push(u[t]):s.push(t)}),s}var Qt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Kt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type;r.forEach(function(n){var r=n[0],i=n[1],a=r.charAt(0)===Zt;r=a?r.slice(1):r;var u=r.charAt(0)===Qt;r=u?r.slice(1):r,i&&te(o,r)&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var i=o[r];if(!g(i))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(i.once)return;i.once=!0}i.apply(o,Xt(e.$vm,t,n[1],n[2],a,r))}})})}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Bt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},Lt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function ue(){return!!this.route}function se(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function le(t){return re(t,{mocks:oe,initRefs:ce})}var de=["onUniNViewMessage"];function pe(t){var e=le(t);return Lt(e,de),e}function he(t){return App(pe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Nt(r.default,t),u=i(a,2),s=u[0],c=u[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:qt(c,r.default.prototype),behaviors:Ht(c,ae),properties:zt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Vt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new s(e),Rt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return n?f:[f,s]}function ge(t){return ve(t,{isPage:ue,initRelation:se})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var me=["onShow","onHide","onUnload"];function _e(t,e){var n=e.isPage,r=e.initRelation,o=ye(t,{isPage:n,initRelation:r});return Lt(o.methods,me,t),o.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},o}function we(t){return _e(t,{isPage:ue,initRelation:se})}me.push.apply(me,It);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function ke(t){var e=we(t);return Lt(e.methods,be),e}function Pe(t){return Component(ke(t))}function Te(t){return Component(ye(t))}ut.forEach(function(t){at[t]=!1}),st.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var $e={};Object.keys(it).forEach(function(t){$e[t]=it[t]}),Object.keys(Pt).forEach(function(t){$e[t]=Pt[t]}),Object.keys(At).forEach(function(t){$e[t]=Y(t,At[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(at,t))&&($e[t]=Y(t,pt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=$e,t.UniEmitter=Pt),wx.createApp=he,wx.createPage=Pe,wx.createComponent=Te;var Oe=$e,Ae=Oe;e.default=Ae}).call(this,n("c8ba"))},"70b6":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("4788"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"793d":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("13d7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"7eac":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("cd5b"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"815e":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("db7c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},8242:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("89db"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"852b":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("f27b"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8a3b":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("1211"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8fd3":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("528f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},9406:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("c412"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},9521:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("dd1d"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",c="object"===typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{f=e.regeneratorRuntime=c?t.exports:{},f.wrap=w;var l="suspendedStart",d="suspendedYield",p="executing",h="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(M([])));m&&m!==r&&o.call(m,a)&&(g=m);var _=T.prototype=k.prototype=Object.create(g);P.prototype=_.constructor=T,T.constructor=P,T[s]=P.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===P||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,T):(t.__proto__=T,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(_),t},f.awrap=function(t){return{__await:t}},$(O.prototype),O.prototype[u]=function(){return this},f.AsyncIterator=O,f.async=function(t,e,n,r){var o=new O(w(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},$(_),_[s]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=M,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:M(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=A(t,n,a),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function P(){}function T(){}function $(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){function e(n,r,i,a){var u=b(t[n],t,r);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"===typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(u.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function A(t,e,n){var r=l;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return C()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=b(t,e,n);if("normal"===s.type){if(r=n.done?h:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}function x(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,x(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"98c6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t,e){return Number(t).toFixed(e)},o={toFixed:r};e.default=o},"996b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={throttle:function(t,e){var n=this,r=arguments,o=0;return function(){var i=+new Date;i-o>e&&(t.apply(n,r),o=+new Date)}},debounce:function(t,e){var n=null;return function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(r,o)},e)}}};e.default=r},"9b17":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("ccdf"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9c0a":function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("b021"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a251:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("b784"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a34a:function(t,e,n){t.exports=n("bbdd")},a83f:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("7652"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ae57:function(t,e,n){"use strict";(function(e){var n="http://47.244.27.153/images/json/",r=function(){return new Promise(function(t,r){e.request({url:n+"slider.json",success:function(e){t(e.data.index)}})})},o=function(){return new Promise(function(t,r){e.request({url:n+"slider.json",success:function(e){t(e.data.main)}})})},i=function(){return new Promise(function(t,r){e.request({url:n+"user.json",success:function(e){t(e.data.invList)}})})};t.exports={indexSlider:r,mainSlider:o,invList:i}}).call(this,n("6e42")["default"])},b47e:function(t,e,n){"use strict";function r(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(e)){var i=n[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:o(i))}return e}function o(t){return("00"+t).substr(t.length)}Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=r},b73e:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("fbd5"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c1f8:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("a7a7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d535:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("fc96"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d63b:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("6f51"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d68e:function(t,e,n){"use strict";function r(t){return new Promise(function(e,n){if("object"===typeof window&&"document"in window){var r=document.createElement("canvas"),o=r.getContext("2d"),i=new Image;return i.onload=function(){r.width=i.width,r.height=i.height,o.drawImage(i,0,0),e(r.toDataURL())},i.onerror=n,void(i.src=t)}if("object"!==typeof plus)"object"===typeof wx&&wx.canIUse("getFileSystemManager")?wx.getFileSystemManager().readFile({filePath:t,encoding:"base64",success:function(t){e("data:image/png;base64,"+t.data)},fail:function(t){n(t)}}):n(new Error("not support"));else{var a=new plus.nativeObj.Bitmap("bitmap"+Date.now());a.load(t,function(){try{var t=a.toBase64Data()}catch(r){n(r)}a.clear(),e(t)},function(t){a.clear(),n(t)})}})}function o(t){return new Promise(function(e,n){if("object"===typeof window&&"document"in window){t=t.split(",");var r=t[0].match(/:(.*?);/)[1],o=atob(t[1]),i=o.length,a=new Uint8Array(i);while(i--)a[i]=o.charCodeAt(i);return e((window.URL||window.webkitURL).createObjectURL(new Blob([a],{type:r})))}var u=t.match(/data\:\S+\/(\S+);/);u?u=u[1]:n(new Error("base64 error"));var s=Date.now()+"."+u;if("object"!==typeof plus)if("object"===typeof wx&&wx.canIUse("getFileSystemManager")){var c=wx.env.USER_DATA_PATH+"/"+s;wx.getFileSystemManager().writeFile({filePath:c,data:t.replace(/^data:\S+\/\S+;base64,/,""),encoding:"base64",success:function(){e(c)},fail:function(t){n(t)}})}else n(new Error("not support"));else{var f=new plus.nativeObj.Bitmap("bitmap"+Date.now());f.loadBase64Data(t,function(){var t="_doc/uniapp_temp/"+s;f.save(t,{},function(){f.clear(),e(t)},function(t){f.clear(),n(t)})},function(t){f.clear(),n(t)})}})}Object.defineProperty(e,"__esModule",{value:!0}),e.pathToBase64=r,e.base64ToPath=o},d932:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),o=i(n("3850"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,o,i,a){try{var u=t[i](a),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,s,"next",t)}function s(t){a(i,r,o,u,s,"throw",t)}u(void 0)})}}var s=function(t){return{getIndexPan:function(){var e=u(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.default.get("/v1/pan/getIndexPan",{header:{token:t}}).then(function(t){return t},function(t){console.log("error",t," at api\\modules\\homeToken.js:17")});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),takePan:function(){var e=u(r.default.mark(function e(n){var i,a,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=n.numbers,a=n.id,e.next=3,o.default.get("/v1/pan/takePan",{data:{numbers:i,id:a},header:{token:t}}).then(function(t){return t},function(t){console.log("error",t," at api\\modules\\homeToken.js:37")});case 3:return u=e.sent,e.abrupt("return",u);case 5:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}()}},c=s;e.default=c},db0f:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("991c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},de66:function(t,e,n){"use strict";var r,o=i(n("3850"));function i(t){return t&&t.__esModule?t:{default:t}}console.log("生产环境"," at api\\apiUrl.js:7"),r="http://pandla.io:8080/",o.default.setConfig({baseUrl:r,dataType:"json",responseType:"text",header:{"content-type":"application/json"}})},e3c4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("d932"));function o(t){return t&&t.__esModule?t:{default:t}}var i={homeToken:r.default};e.default=i},e564:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("9d86"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e7dc:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.barValidate=e.userValidate=e.pwdValidate=e.codeValidate=e.joinValidate=e.emailValidate=e.phoneValidate=void 0;var n=/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,r=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,o=function(e){return""==e.length?(t.showToast({icon:"none",title:"手機號碼不能爲空"}),!1):!(!n.exec(e)||e.length<8)||(t.showToast({icon:"none",title:"手機號碼格式不正確"}),!1)};e.phoneValidate=o;var i=function(e){return""==e.length?(t.showToast({icon:"none",title:"郵箱不能爲空"}),!1):!!r.exec(e)||(console.log("郵箱格式正確"," at common\\js\\validate.js:39"),t.showToast({icon:"none",title:"郵箱格式不正確"}),!1)};e.emailValidate=i;var a=function(e){return""==e.length?(t.showToast({icon:"none",title:"請輸入注冊的郵箱/手機"}),!1):!(!n.exec(e)&&!r.exec(e))||(t.showToast({icon:"none",title:"格式不正確"}),!1)};e.joinValidate=a;var u=function(e){return""==e.length?(t.showToast({icon:"none",title:"驗證碼不能爲空"}),!1):!(e.length<6)||(t.showToast({icon:"none",title:"驗證碼格式不正確"}),!1)};e.codeValidate=u;var s=function(e,n){return""==e.length?(t.showToast({icon:"none",title:"密碼不能爲空"}),!1):e.length<6?(t.showToast({icon:"none",title:"密碼最短為6個字符"}),!1):n==e||(t.showToast({icon:"none",title:"與上次密碼不一致"}),!1)};e.pwdValidate=s;var c=function(e){return e.name.length<2?(t.showToast({icon:"none",title:"賬戶名最短為2個字符"}),!1):""==e.stature?(t.showToast({icon:"none",title:"請輸入身高"}),!1):e.stature<50||e.stature>300?(t.showToast({icon:"none",title:"身高範圍(cm):50~300"}),!1):""==e.weight?(t.showToast({icon:"none",title:"請輸入體重"}),!1):e.weight<5||e.weight>700?(t.showToast({icon:"none",title:"體重範圍(kg):5~700"}),!1):""==e.age?(t.showToast({icon:"none",title:"請輸入年龄"}),!1):e.age<18||e.age>150?(t.showToast({icon:"none",title:"年龄範圍:18~150"}),!1):""!=e.site||(t.showToast({icon:"none",title:"請輸入居住地址"}),!1)};e.userValidate=c;var f=function(e,r){return""==e.name?(t.showToast({icon:"none",title:"請填寫酒吧名稱"}),!1):""==e.phone.length?(t.showToast({icon:"none",title:"聯係電話不能爲空"}),!1):!n.exec(e.phone)||e.phone.length<8?(t.showToast({icon:"none",title:"联系电话格式不正確"}),!1):""==e.location?(t.showToast({icon:"none",title:"請填寫詳細地址"}),!1):""==e.intro?(t.showToast({icon:"none",title:"請填寫酒吧簡介"}),!1):""==e.username?(t.showToast({icon:"none",title:"請填寫申請人姓名"}),!1):""==e.userphone?(t.showToast({icon:"none",title:"請填寫申請人聯係方式"}),!1):!n.exec(e.userphone)||e.userphone.length<8?(t.showToast({icon:"none",title:"聯係方式格式不正確"}),!1):0!=r||(t.showToast({icon:"none",title:"請上傳酒吧LOGO"}),!1)};e.barValidate=f}).call(this,n("6e42")["default"])},ec38:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("c17a"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f25f:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("cdc7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f689:function(t,e,n){"use strict";(function(t){n("274e");r(n("66fd"));var e=r(n("e94d"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}}]);
});
define('static/font/iconfont.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

!function (i) {
  var t,
      c = '<svg><symbol id="icon-fenxiang" viewBox="0 0 1024 1024"><path d="M972.8 549.9136v294.7584A128.0768 128.0768 0 0 1 844.8 972.8H179.2a128 128 0 0 1-128-128V179.2c0-70.7328 57.1904-128 127.872-128h202.3168a25.6 25.6 0 0 0 0-51.2H179.072A179.072 179.072 0 0 0 0 179.2v665.6a179.2 179.2 0 0 0 179.2 179.2h665.6c98.944 0 179.2-80.2816 179.2-179.328V549.9136a25.6 25.6 0 0 0-51.2 0z"  ></path><path d="M960 128c-353.4592 0-640 286.5408-640 640a25.6 25.6 0 0 0 51.2 0c0-325.1968 263.6032-588.8 588.8-588.8a25.6 25.6 0 0 0 0-51.2z"  ></path><path d="M720.1024 62.1568l256 102.4a25.6 25.6 0 0 0 18.9952-47.5136l-256-102.4a25.6 25.6 0 0 0-18.9952 47.5136z"  ></path><path d="M808.8064 348.4672l194.6368-189.312a25.6 25.6 0 1 0-35.6864-36.7104L773.12 311.7568a25.6 25.6 0 1 0 35.6864 36.7104z"  ></path></symbol><symbol id="icon-z" viewBox="0 0 1024 1024"><path d="M667.925495 342.761099a12.47933 12.47933 0 0 1-11.40757-7.409992l-23.209407-52.188103c-6.66762-14.990917-26.906293-28.140252-43.313331-28.140252H434.002317c-16.40579 0-36.64571 13.149336-43.312082 28.140252l-23.20816 52.188103c-2.799802 6.295811-10.173611 9.130547-16.470669 6.330746s-9.130547-10.173611-6.330746-16.470669l23.20816-52.188103c10.711362-24.086529 39.751194-42.953998 66.11225-42.953998h155.994117c26.361056 0 55.400888 18.867469 66.11225 42.953998l23.209408 52.188103c2.801049 6.295811-0.033687 13.670867-6.329499 16.470669a12.429422 12.429422 0 0 1-5.061851 1.079246z" fill="" ></path><path d="M811.315514 839.239293H212.685734c-32.917632 0-59.699157-26.780277-59.699158-59.697909V377.502844c0-32.917632 26.780277-59.699157 59.699158-59.699157h144.398147v24.953669H212.685734c-19.158179 0-34.745488 15.587309-34.745489 34.745488v402.03854c0 19.156932 15.587309 34.744241 34.745489 34.74424h598.62978c19.158179 0 34.745488-15.586062 34.745488-34.74424V377.502844c0-19.158179-15.586062-34.745488-34.745488-34.745488H666.918614v-24.953669h144.3969c32.91888 0 59.699157 26.780277 59.699157 59.699157v402.03854c0 32.917632-26.780277 59.69791-59.699157 59.697909z" fill="" ></path><path d="M512 722.048131c-86.597964 0-157.050905-70.452941-157.050905-157.050905s70.452941-157.050905 157.050905-157.050906 157.050905 70.452941 157.050905 157.050906-70.451693 157.050905-157.050905 157.050905z m0-289.148142c-72.838512 0-132.097236 59.258725-132.097236 132.097237s59.258725 132.097236 132.097236 132.097236 132.097236-59.258725 132.097236-132.097236-59.258725-132.097236-132.097236-132.097237z" fill="#1afa29" ></path></symbol><symbol id="icon-logo" viewBox="0 0 1177 1024"><path d="M875.909313 568.788436c-28.850846 4.704975-59.519681 8.775953-91.66751 12.103935-63.922658 6.640964-133.549285 10.434944-206.370896 10.725943v0.077h-18.6109v-0.077c-72.79961-0.291998-142.441238-4.085978-206.367896-10.705943-31.446832-3.271982-61.487671-7.244961-89.773519-11.811937 0.428998 0.444998 0.935995 0.869995 1.481992 1.259994 26.783857 18.6059 62.912663 34.175817 105.126437 45.925754a586.067864 586.067864 0 0 0 25.125866 6.368966c52.494719 12.139935 112.812396 18.861899 175.431061 18.861899v0.036h0.041c88.406527 0 172.425077-13.398928 236.409735-36.709804 12.543933-4.551976 24.36587-9.507949 35.291811-14.83292 10.884942-5.303972 20.950888-10.976941 30.059839-16.99791 0.117999-0.077 0.235999-0.153999 0.368998-0.250998l0.02-0.02c1.520992-1.043994 2.692986-2.421987 3.435982-3.952979zM348.034137 88.153008c-56.571697 54.389709-91.685509 129.458307-91.685509 212.078865h-0.059v55.125705c0 0.347998 0.039 0.715996 0.078 1.064995l-0.019 0.793995h-0.059v0.019h0.059c0.019 24.20287 36.888803 44.649761 96.503484 58.126689 36.751803 8.305956 88.934524 14.88992 140.454248 18.103903v-20.311891c-49.685734-3.174983-100.190464-9.564949-135.674274-17.580906-49.549735-11.21094-80.195571-24.861867-80.215571-38.337795h0.058c0-64.283656 582.162885-80.238571 582.223884-0.019l-0.041 0.019c0 20.059893-66.073646 35.142812-80.19457 38.337795-53.918711 12.197935-128.460313 19.749894-210.819872 19.749894v-0.038999h-0.137999v0.038999c-25.983861 0-51.163726-0.754996-75.199598-2.168988v20.311891c24.071871 1.393993 49.256736 2.129989 75.199598 2.129989v0.039h0.137999v-0.039c84.13655 0 160.393142-7.744959 215.617846-20.233892 59.596681-13.475928 96.501484-33.923818 96.501484-58.126689v-0.019c0-2.516987 0.041-4.936974 0.040999-7.37696v-49.626735h-0.040999c0-82.600558-35.112812-157.669156-91.66251-212.058865-122.490344-117.78237-319.105292-117.278372-441.06664 0z m370.09802 26.449859c-4.525976-3.387982-5.406971-9.641948-1.95099-14.075925 3.64498-4.685975 9.927947-5.208972 14.765921-2.013989 1.387993 1.025995 2.769985 2.051989 4.115978 3.136983 0.839996 0.638997 2.144989 1.683991 3.880979 3.078984a268.063565 268.063565 0 0 1 19.061898 16.999909c4.054978 4.007979 3.957979 10.436944-0.214998 14.347923-4.177978 3.910979-10.869942 3.81398-14.92492-0.193999a247.231677 247.231677 0 0 0-17.479907-15.644916c-0.757996-0.599997-1.95099-1.528992-3.629981-2.845985a206.451895 206.451895 0 0 0-3.62498-2.787985zM700.166253 78.588059c5.052973 2.787985 6.788964 9.003952 3.900979 13.843926-2.907984 4.859974-9.34395 6.524965-14.396923 3.73698-79.671574-44.107764-179.41104-40.777782-256.251628 8.615954-7.607959 4.917974-14.86392 10.145946-21.711884 15.702916a234.972743 234.972743 0 0 0-19.428896 17.542906l-0.117 0.116-0.019 0.019c-3.881979 4.162978-10.572943 4.511976-14.90392 0.754996-4.349977-3.75598-4.700975-10.184945-0.799996-14.347924l0.019-0.019c0.175999-0.193999 0.370998-0.387998 0.565997-0.561997a271.781546 271.781546 0 0 1 21.106887-19.013898 265.512579 265.512579 0 0 1 23.564874-17.038909c83.628552-53.750712 191.815973-57.293693 278.47151-9.35195zM251.315655 479.644913c-65.564649-11.036941-121.298351-25.480864-162.127132-42.635772-5.344971-2.226988-11.567938 0.115999-13.889926 5.246972-2.340987 5.150972 0.116999 11.13394 5.442971 13.360929 42.486773 17.851904 99.858466 32.780825 166.926107 44.068764 213.763856 35.955808 502.065313 32.259827 698.897259-11.036941 19.798894-4.356977 38.527794-9.119951 56.022701-14.250924 17.596906-5.169972 33.63282-10.649943 47.912743-16.380912v-0.019l0.173999-0.058h0.041c5.324972-2.245988 7.761958-8.228956 5.442971-13.359928-2.303988-5.111973-8.427955-7.45496-13.731927-5.304972l-0.02-0.019c-13.966925 5.59597-29.337843 10.861942-45.941754 15.740916-16.695911 4.917974-34.974813 9.526949-54.619707 13.863926-219.247827 48.231742-511.235264 40.970781-690.528305 10.784942z m241.990705-37.001802a1289.581099 1289.581099 0 0 0 65.952647 2.090989v0.077h18.6319v-0.077c38.000797-0.251999 74.500601-2.109989 108.190421-5.265972 37.744798-3.543981 71.730616-8.732953 100.187464-15.160919 31.313832-7.086962 56.729696-16.147914 74.306603-26.719857 15.057919-9.080951 26.551858-17.212908 28.814845-31.173833l0.680997-58.513687c15.410918 2.710985 30.253838 5.59597 44.517761 8.674954 20.305891 4.375977 39.111791 9.041952 56.334699 13.959925 93.014502 26.565858 146.190218 62.657665 146.190218 101.963454l-0.041 0.019c0 43.817766-65.504649 82.13856-171.335083 108.664419-101.749455 25.497864-242.164704 41.276779-397.114875 41.276779v0.041h-0.097v-0.041c-154.967171 0-295.401419-15.779916-397.152874-41.276779C65.544649 514.654726 0.058 476.334931 0.038 432.517165v-0.019c0-8.518954 2.398987-16.84491 7.061962-24.938866 4.310977-7.43496 10.494944-14.637922 18.473901-21.530885 36.517805-31.560831 113.98239-59.288683 221.469815-78.128582l1.384993 58.513687c3.335982 11.636938 13.04993 22.091882 28.109849 31.173833 17.575906 10.571943 42.97477 19.633895 74.284603 26.719857 28.481848 6.428966 62.482666 11.617938 100.230463 15.160919a1167.492752 1167.492752 0 0 0 36.127807 2.806985l6.124967 0.367998zM476.276451 690.606784h47.627745v238.137726h-47.627745V690.606784z m142.883236 0h-47.627746V1024h47.627746V690.606784z m47.627745 0h47.627745v238.137726h-47.627745V690.606784z" fill="#1afa29" ></path></symbol></svg>',
      e = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (e && !i.__iconfont__svg__cssinject__) {
    i.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  !function (t) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);else {
        var e = function e() {
          document.removeEventListener("DOMContentLoaded", e, !1), t();
        };

        document.addEventListener("DOMContentLoaded", e, !1);
      }
    } else document.attachEvent && (n = t, a = i.document, l = !1, (_o = function o() {
      try {
        a.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(_o, 50);
      }

      c();
    })(), a.onreadystatechange = function () {
      "complete" == a.readyState && (a.onreadystatechange = null, c());
    });

    function c() {
      l || (l = !0, n());
    }

    var n, a, l, _o;
  }(function () {
    var t, e;
    (t = document.createElement("div")).innerHTML = c, c = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", function (t, e) {
      e.firstChild ? function (t, e) {
        e.parentNode.insertBefore(t, e);
      }(t, e.firstChild) : e.appendChild(t);
    }(e, document.body));
  });
}(window);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/im-chat/chatinput';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/im-chat/chatinput.js';

define('components/im-chat/chatinput.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/im-chat/chatinput"], {
  "024e": function e(t, n, _e) {
    "use strict";

    _e.r(n);

    var u = _e("4d35"),
        a = _e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        _e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = a.a;
  },
  "38e6": function e6(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  "4d35": function d35(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "chat-input",
      data: function data() {
        return {
          inputValue: ""
        };
      },
      methods: {
        startRecognize: function startRecognize() {
          var t = {},
              n = this;
          t.engine = "iFly", n.inputValue = "", plus.speech.startRecognize(t, function (t) {
            console.log(t, " at components\\im-chat\\chatinput.vue:30"), n.inputValue += t;
          }, function (t) {
            console.log("语音识别失败：" + t.message, " at components\\im-chat\\chatinput.vue:33");
          });
        },
        sendMessge: function sendMessge() {
          var t = this;
          "" == t.inputValue.trim() ? t.inputValue = "" : (this.$emit("send-message", {
            type: "text",
            content: t.inputValue
          }), t.inputValue = "");
        }
      }
    };
    n.default = u;
  },
  "578d": function d(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("38e6"),
        a = e("024e");

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    e("737f");
    var c = e("2877"),
        o = Object(c["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  "737f": function f(t, n, e) {
    "use strict";

    var u = e("d4c1"),
        a = e.n(u);
    a.a;
  },
  d4c1: function d4c1(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/im-chat/chatinput-create-component', {
  'components/im-chat/chatinput-create-component': function componentsImChatChatinputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("578d"));
  }
}, [['components/im-chat/chatinput-create-component']]]);
});
require('components/im-chat/chatinput.js');
__wxRoute = 'components/im-chat/messageshow';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/im-chat/messageshow.js';

define('components/im-chat/messageshow.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/im-chat/messageshow"], {
  "0361": function _(n, t, e) {
    "use strict";

    var u = e("d482"),
        a = e.n(u);
    a.a;
  },
  "4d4e": function d4e(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  8182: function _(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      props: ["message", "id"]
    };
    t.default = u;
  },
  abb2: function abb2(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("4d4e"),
        a = e("c6dd");

    for (var r in a) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    e("0361");
    var c = e("2877"),
        o = Object(c["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  c6dd: function c6dd(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("8182"),
        a = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  d482: function d482(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/im-chat/messageshow-create-component', {
  'components/im-chat/messageshow-create-component': function componentsImChatMessageshowCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("abb2"));
  }
}, [['components/im-chat/messageshow-create-component']]]);
});
require('components/im-chat/messageshow.js');
__wxRoute = 'components/loading/loading';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/loading/loading.js';

define('components/loading/loading.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/loading/loading"], {
  "0d7f": function d7f(t, n, e) {},
  "34a0": function a0(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("83ee"),
        u = e.n(a);

    for (var r in a) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "48c8": function c8(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("9a8a"),
        u = e("34a0");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("96a9");
    var o = e("2877"),
        f = Object(o["a"])(u["default"], a["a"], a["b"], !1, null, "d9691428", null);
    n["default"] = f.exports;
  },
  "83ee": function ee(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = {
      props: {
        title: {
          type: String,
          default: "????..."
        }
      }
    };
    n.default = a;
  },
  "96a9": function a9(t, n, e) {
    "use strict";

    var a = e("0d7f"),
        u = e.n(a);
    u.a;
  },
  "9a8a": function a8a(t, n, e) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return a;
    }), e.d(n, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/loading/loading-create-component', {
  'components/loading/loading-create-component': function componentsLoadingLoadingCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("48c8"));
  }
}, [['components/loading/loading-create-component']]]);
});
require('components/loading/loading.js');
__wxRoute = 'components/loading8';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/loading8.js';

define('components/loading8.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/loading8"], {
  "0bbd": function bbd(n, t, e) {
    "use strict";

    var u = e("f9f5"),
        a = e.n(u);
    a.a;
  },
  3305: function _(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  "4c38": function c38(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("3305"),
        a = e("b454");

    for (var r in a) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    e("0bbd");
    var c = e("2877"),
        f = Object(c["a"])(a["default"], u["a"], u["b"], !1, null, "aec82222", null);
    t["default"] = f.exports;
  },
  b454: function b454(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("c852"),
        a = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  c852: function c852(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "loading7",
      data: function data() {
        return {};
      }
    };
    t.default = u;
  },
  f9f5: function f9f5(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/loading8-create-component', {
  'components/loading8-create-component': function componentsLoading8CreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4c38"));
  }
}, [['components/loading8-create-component']]]);
});
require('components/loading8.js');
__wxRoute = 'components/logo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/logo.js';

define('components/logo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/logo"], {
  5130: function _(n, t, u) {
    "use strict";

    var a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        e = [];

    u.d(t, "a", function () {
      return a;
    }), u.d(t, "b", function () {
      return e;
    });
  },
  "678f": function f(n, t, u) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = {
      data: function data() {
        return {};
      },
      props: ["slogan"]
    };
    t.default = a;
  },
  "707b": function b(n, t, u) {
    "use strict";

    var a = u("d2df"),
        e = u.n(a);
    e.a;
  },
  "98cb": function cb(n, t, u) {
    "use strict";

    u.r(t);
    var a = u("5130"),
        e = u("aab2");

    for (var r in e) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(r);
    }

    u("707b");
    var o = u("2877"),
        f = Object(o["a"])(e["default"], a["a"], a["b"], !1, null, "e0a46544", null);
    t["default"] = f.exports;
  },
  aab2: function aab2(n, t, u) {
    "use strict";

    u.r(t);
    var a = u("678f"),
        e = u.n(a);

    for (var r in a) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    t["default"] = e.a;
  },
  d2df: function d2df(n, t, u) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/logo-create-component', {
  'components/logo-create-component': function componentsLogoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("98cb"));
  }
}, [['components/logo-create-component']]]);
});
require('components/logo.js');
__wxRoute = 'components/m-icon/m-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-icon/m-icon.js';

define('components/m-icon/m-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-icon/m-icon"], {
  2702: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("9fc0"),
        c = e("9899");

    for (var r in c) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(r);
    }

    e("d0ab");
    var i = e("2877"),
        a = Object(i["a"])(c["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  "64fc": function fc(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        type: String,
        color: String,
        size: {
          type: [Number, String],
          default: 24
        }
      },
      computed: {
        fontSize: function fontSize() {
          var t = Number(this.size);
          return t = isNaN(t) ? 24 : t, "".concat(t, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  "7aaf": function aaf(t, n, e) {},
  9899: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("64fc"),
        c = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = c.a;
  },
  "9fc0": function fc0(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return c;
    });
  },
  d0ab: function d0ab(t, n, e) {
    "use strict";

    var u = e("7aaf"),
        c = e.n(u);
    c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-icon/m-icon-create-component', {
  'components/m-icon/m-icon-create-component': function componentsMIconMIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2702"));
  }
}, [['components/m-icon/m-icon-create-component']]]);
});
require('components/m-icon/m-icon.js');
__wxRoute = 'components/m-input';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-input.js';

define('components/m-input.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-input"], {
  "1a9b": function a9b(t, n, e) {},
  2909: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("bc1b"),
        i = e.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    n["default"] = i.a;
  },
  bc1b: function bc1b(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("components/m-icon/m-icon").then(e.bind(null, "2702"));
    },
        i = {
      components: {
        mIcon: u
      },
      props: {
        type: String,
        value: String,
        placeholder: String,
        clearable: {
          type: [Boolean, String],
          default: !1
        },
        displayable: {
          type: [Boolean, String],
          default: !1
        },
        focus: {
          type: [Boolean, String],
          default: !1
        }
      },
      model: {
        prop: "value",
        event: "input"
      },
      data: function data() {
        return {
          showPassword: !1,
          isFocus: !1
        };
      },
      computed: {
        inputType: function inputType() {
          var t = this.type;
          return "password" === t ? "text" : t;
        },
        clearable_: function clearable_() {
          return "false" !== String(this.clearable);
        },
        displayable_: function displayable_() {
          return "false" !== String(this.displayable);
        },
        focus_: function focus_() {
          return "false" !== String(this.focus);
        }
      },
      methods: {
        clear: function clear() {
          this.$emit("input", "");
        },
        display: function display() {
          this.showPassword = !this.showPassword;
        },
        onFocus: function onFocus() {
          this.isFocus = !0;
        },
        onBlur: function onBlur() {
          var t = this;
          this.$nextTick(function () {
            t.isFocus = !1;
          });
        },
        onInput: function onInput(t) {
          this.$emit("input", t.target.value);
        }
      }
    };

    n.default = i;
  },
  bd49: function bd49(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  cf47: function cf47(t, n, e) {
    "use strict";

    var u = e("1a9b"),
        i = e.n(u);
    i.a;
  },
  edc7: function edc7(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("bd49"),
        i = e("2909");

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    e("cf47");
    var r = e("2877"),
        a = Object(r["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = a.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-input-create-component', {
  'components/m-input-create-component': function componentsMInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("edc7"));
  }
}, [['components/m-input-create-component']]]);
});
require('components/m-input.js');
__wxRoute = 'components/uni-icon/uni-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icon/uni-icon.js';

define('components/uni-icon/uni-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icon/uni-icon"], {
  "044d": function d(n, t, e) {},
  "084c": function c(n, t, e) {
    "use strict";

    var u = e("044d"),
        i = e.n(u);
    i.a;
  },
  1517: function _(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("54b3"),
        i = e.n(u);

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    t["default"] = i.a;
  },
  "54b3": function b3(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "uni-icon",
      props: {
        type: String,
        color: String,
        size: [Number, String]
      },
      computed: {
        fontSize: function fontSize() {
          return "".concat(this.size, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  6754: function _(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("e444"),
        i = e("1517");

    for (var c in i) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(c);
    }

    e("084c");
    var o = e("2877"),
        r = Object(o["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  e444: function e444(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        i = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return i;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icon/uni-icon-create-component', {
  'components/uni-icon/uni-icon-create-component': function componentsUniIconUniIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6754"));
  }
}, [['components/uni-icon/uni-icon-create-component']]]);
});
require('components/uni-icon/uni-icon.js');
__wxRoute = 'components/uni-notice-bar/uni-notice-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-notice-bar/uni-notice-bar.js';

define('components/uni-notice-bar/uni-notice-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-notice-bar/uni-notice-bar"], {
  "4f2a": function f2a(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return o;
    });
  },
  "7a0e": function a0e(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("4f2a"),
        o = n("fa03");

    for (var a in o) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(a);
    }

    n("8eaa");
    var l = n("2877"),
        c = Object(l["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  "82d8": function d8(t, e, n) {},
  8917: function _(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;

      var i = function i() {
        return n.e("components/uni-icon/uni-icon").then(n.bind(null, "6754"));
      },
          o = {
        name: "uni-notice-bar",
        components: {
          uniIcon: i
        },
        props: {
          text: String,
          moreText: String,
          backgroundColor: {
            type: String,
            default: "#fffbe8"
          },
          speed: {
            type: [String, Number],
            default: 100
          },
          color: {
            type: String,
            default: "#de8c17"
          },
          single: {
            type: [String, Boolean],
            default: !1
          },
          scrollable: {
            type: [String, Boolean],
            default: !1
          },
          showIcon: {
            type: [String, Boolean],
            default: !1
          },
          showGetMore: {
            type: [String, Boolean],
            default: !1
          },
          showClose: {
            type: [String, Boolean],
            default: !1
          }
        },
        data: function data() {
          var t = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
          return {
            elId: t,
            show: !0,
            animation: ""
          };
        },
        watch: {
          text: function text(t, e) {
            var n = this;
            this.$nextTick(function () {
              setTimeout(n.setAnimation, 200);
            });
          }
        },
        computed: {
          setTextClass: function setTextClass() {
            var t = [];
            return !0 === this.scrollable || "true" === this.scrollable ? t.push("uni-noticebar--scrollable") : ("true" === this.single || !0 === this.single || this.moreText) && t.push("uni-noticebar--single"), t;
          },
          setContenClass: function setContenClass() {
            var t = [];
            return (!0 === this.scrollable || "true" === this.scrollable || "true" === this.single || !0 === this.single || this.moreText) && t.push("uni-noticebar--flex"), t;
          }
        },
        onReady: function onReady() {
          this.setAnimation();
        },
        methods: {
          clickMore: function clickMore() {
            this.$emit("getmore");
          },
          onClick: function onClick(e) {
            var n = e.touches ? e.touches[0] ? e.touches[0].clientX : e.changedTouches[0].clientX : e.detail.clientX;
            t.upx2px(48) + 12 > n && "true" === String(this.showClose) && (this.show = !1, this.$emit("close")), this.$emit("click");
          },
          setAnimation: function setAnimation() {
            var e = this;
            !1 !== this.scrollable && "false" !== this.scrollable && t.createSelectorQuery().select("#".concat(this.elId)).boundingClientRect().exec(function (t) {
              e.animation = "notice ".concat(t[0].width / e.speed, "s linear infinite both");
            });
          }
        }
      };

      e.default = o;
    }).call(this, n("6e42")["default"]);
  },
  "8eaa": function eaa(t, e, n) {
    "use strict";

    var i = n("82d8"),
        o = n.n(i);
    o.a;
  },
  fa03: function fa03(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("8917"),
        o = n.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    e["default"] = o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-notice-bar/uni-notice-bar-create-component', {
  'components/uni-notice-bar/uni-notice-bar-create-component': function componentsUniNoticeBarUniNoticeBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7a0e"));
  }
}, [['components/uni-notice-bar/uni-notice-bar-create-component']]]);
});
require('components/uni-notice-bar/uni-notice-bar.js');
__wxRoute = 'components/wm-poster/wm-poster';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/wm-poster/wm-poster.js';

define('components/wm-poster/wm-poster.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/wm-poster/wm-poster"], {
  "1dfe": function dfe(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("7cbd"),
        r = n.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    e["default"] = r.a;
  },
  "657e": function e(t, _e, n) {
    "use strict";

    n.r(_e);
    var a = n("da92"),
        r = n("1dfe");

    for (var i in r) {
      "default" !== i && function (t) {
        n.d(_e, t, function () {
          return r[t];
        });
      }(i);
    }

    var u = n("2877"),
        c = Object(u["a"])(r["default"], a["a"], a["b"], !1, null, null, null);
    _e["default"] = c.exports;
  },
  "7cbd": function cbd(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var a,
          r = i(n("a34a"));

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function u(t, e, n, a, r, i, u) {
        try {
          var c = t[i](u),
              o = c.value;
        } catch (f) {
          return void n(f);
        }

        c.done ? e(o) : Promise.resolve(o).then(a, r);
      }

      function c(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (a, r) {
            var i = t.apply(e, n);

            function c(t) {
              u(i, a, r, c, o, "next", t);
            }

            function o(t) {
              u(i, a, r, c, o, "throw", t);
            }

            c(void 0);
          });
        };
      }

      var o = {
        name: "wm-poster",
        props: {
          CanvasID: {
            Type: String,
            default: "PosterCanvas"
          },
          imgSrc: {
            Type: String,
            default: ""
          },
          QrSrc: {
            Type: String,
            default: ""
          },
          Title: {
            Type: String,
            default: ""
          },
          TitleColor: {
            Type: String,
            default: "#333333"
          },
          LineType: {
            Type: [String, Boolean],
            default: !0
          },
          PriceTxt: {
            Type: String,
            default: ""
          },
          PriceColor: {
            Type: String,
            default: "#000000"
          },
          OriginalTxt: {
            Type: String,
            default: ""
          },
          OriginalColor: {
            Type: String,
            default: "#b8b8b8"
          },
          Width: {
            Type: String,
            default: 750
          },
          Height: {
            Type: String,
            default: 750
          },
          CanvasBg: {
            Type: String,
            default: "#ffffff"
          },
          Referrer: {
            Type: String,
            default: ""
          },
          ViewDetails: {
            Type: String,
            default: ""
          }
        },
        data: function data() {
          return {
            canvasW: 0,
            canvasH: 0,
            canvasImgSrc: "",
            ctx: null
          };
        },
        methods: {
          OnCanvas: function () {
            var e = c(r.default.mark(function e() {
              var n, i, u, c, o, f, s, l;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return t.showLoading({
                        title: "生成海報中"
                      }), a.ctx = t.createCanvasContext(a.CanvasID, this), n = t.upx2px(a.Width), i = t.upx2px(0), u = t.upx2px(200), 0, e.next = 6, a.getImageInfo({
                        imgSrc: a.imgSrc
                      });

                    case 6:
                      return c = e.sent, e.next = 9, a.getImageInfo({
                        imgSrc: a.QrSrc
                      });

                    case 9:
                      o = e.sent, this.canvasH = c.height, f = [c.width, c.height], s = [o.width, o.height], l = n, f[0] != l && (f[1] = Math.floor(l / f[0] * f[1]), f[0] = l), s[0] != u && (s[1] = Math.floor(u / s[0] * s[1]), s[0] = u), a.canvasW = n, a.canvasH = f[1], a.ctx.setFillStyle(a.CanvasBg), a.ctx.fillRect(0, 0, n, a.canvasH), a.ctx.drawImage(c.path, i, i, f[0], f[1]), a.ctx.drawImage(o.path, this.canvasW / 2 - 50, c.height / 3 + 50, s[0], s[1]), setTimeout(function () {
                        a.ctx.draw(!0, function (t) {
                          a.getNewImage();
                        });
                      }, 300);

                    case 23:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n() {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          getImageInfo: function () {
            var e = c(r.default.mark(function e(n) {
              var a;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return a = n.imgSrc, e.abrupt("return", new Promise(function (e, n) {
                        t.getImageInfo({
                          src: a,
                          success: function success(t) {
                            e(t);
                          },
                          fail: function fail(t) {
                            n("err===>", t);
                          }
                        });
                      }));

                    case 2:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n(t) {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          getNewImage: function getNewImage() {
            t.canvasToTempFilePath({
              canvasId: a.CanvasID,
              quality: 1,
              complete: function complete(e) {
                t.hideLoading(), a.$emit("success", e);
              }
            }, this);
          }
        },
        mounted: function mounted() {
          a = this, a.OnCanvas();
        }
      };
      e.default = o;
    }).call(this, n("6e42")["default"]);
  },
  da92: function da92(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/wm-poster/wm-poster-create-component', {
  'components/wm-poster/wm-poster-create-component': function componentsWmPosterWmPosterCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("657e"));
  }
}, [['components/wm-poster/wm-poster-create-component']]]);
});
require('components/wm-poster/wm-poster.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"00d2":function(e,n,t){"use strict";t.r(n);var r=t("22e3"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);n["default"]=i.a},"1a6c":function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return i})},"22e3":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("680a"),i=t("ae57"),a={data:function(){return{slides:"",indicatorDots:!1,autoplay:!0,interval:3e3,duration:1e3,circular:!0,currentSwiper:0,sliderPercent:25}},methods:{getIndexSlider:function(){var e=this;(0,i.indexSlider)().then(function(n){e.slides=n})},sliderChange:function(){100==this.sliderPercent?this.sliderPercent=25:this.sliderPercent+=25}},onLoad:function(){(0,r.skipIndex)(),this.getIndexSlider()}};n.default=a},"6adc":function(e,n,t){},"6f51":function(e,n,t){"use strict";t.r(n);var r=t("1a6c"),i=t("00d2");for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);t("e50d");var u=t("2877"),d=Object(u["a"])(i["default"],r["a"],r["b"],!1,null,"21203d27",null);n["default"]=d.exports},e50d:function(e,n,t){"use strict";var r=t("6adc"),i=t.n(r);i.a}},[["d63b","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"3f00":function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},c=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return c})},"8c0c":function(n,t,o){"use strict";var e=o("d2cc"),c=o.n(e);c.a},a3fa:function(n,t,o){"use strict";o.r(t);var e=o("a707"),c=o.n(e);for(var u in e)"default"!==u&&function(n){o.d(t,n,function(){return e[n]})}(u);t["default"]=c.a},a707:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o("0be9"),c=o("e7dc"),u=function(){return o.e("components/logo").then(o.bind(null,"98cb"))},a=function(){return o.e("components/m-input").then(o.bind(null,"edc7"))},i={components:{mInput:a,logo:u},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},methods:{bindLogin:function(){(0,c.joinValidate)(this.account)&&(0,c.pwdValidate)(this.password,this.password)&&(0,e.login)(this.account,this.password)}}};t.default=i},b021:function(n,t,o){"use strict";o.r(t);var e=o("3f00"),c=o("a3fa");for(var u in c)"default"!==u&&function(n){o.d(t,n,function(){return c[n]})}(u);o("8c0c");var a=o("2877"),i=Object(a["a"])(c["default"],e["a"],e["b"],!1,null,null,null);t["default"]=i.exports},d2cc:function(n,t,o){}},[["9c0a","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/reg/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reg/reg.js';

define('pages/reg/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{4312:function(t,e,n){"use strict";var i=n("fb23"),r=n.n(i);r.a},"945a":function(t,e,n){"use strict";n.r(e);var i=n("f7c4"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},be56:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},da45:function(t,e,n){"use strict";n.r(e);var i=n("be56"),r=n("945a");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("4312");var s=n("2877"),u=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},f7c4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("0be9"),r=n("e7dc"),o=function(){return n.e("components/m-input").then(n.bind(null,"edc7"))},s=function(){return n.e("components/logo").then(n.bind(null,"98cb"))},u={components:{mInput:o,logo:s},data:function(){return{nickname:"",password:"",account:"",phone:"",email:"",verifyPwd:"",regCode:"",inviteCode:"",pRegister:!0,regType:"手機注冊",btnType:"郵箱注冊",regCodeBtn:{text:"獲取驗證碼",btnStatus:!1,codeTime:60},regBtn:!0,timerId:null}},methods:{getRegCode:function(){var t=!1;t=this.pRegister?(0,r.phoneValidate)(this.account):(0,r.emailValidate)(this.account),this.regCodeBtn.btnStatus=!0,t&&((0,i.sendCode)(this.account,this.regCodeBtn,this.timerId),this.regBtn=!1)},bindRegister:function(){(0,r.codeValidate)(this.regCode)&&(0,r.pwdValidate)(this.password,this.verifyPwd)&&(0,i.register)(this.password,this.account,this.regCode,this.inviteCode)},changeRegType:function(){1==this.pRegister?(this.regType="郵箱注冊",this.btnType="手機注冊",this.pRegister=!1):(this.regType="手機注冊",this.btnType="郵箱注冊",this.pRegister=!0),this.regBtn=!0}}};e.default=u},fb23:function(t,e,n){}},[["0672","common/runtime","common/vendor"]]]);
});
require('pages/reg/reg.js');
__wxRoute = 'pages/reg/termsofservice';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reg/termsofservice.js';

define('pages/reg/termsofservice.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/termsofservice"],{"2b17":function(e,n,t){"use strict";var o=t("a94e"),a=t.n(o);a.a},9567:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement;e._self._c},a=[],c=(t("2b17"),t("2877")),l={},r=Object(c["a"])(l,o,a,!1,null,null,null);n["default"]=r.exports},a94e:function(e,n,t){}},[["2fbd","common/runtime","common/vendor"]]]);
});
require('pages/reg/termsofservice.js');
__wxRoute = 'pages/reg/Privacypolicy';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reg/Privacypolicy.js';

define('pages/reg/Privacypolicy.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/Privacypolicy"],{"436a":function(n,e,a){"use strict";var c=a("b0d2"),o=a.n(c);o.a},b0d2:function(n,e,a){},fbd5:function(n,e,a){"use strict";a.r(e);var c=function(){var n=this,e=n.$createElement;n._self._c},o=[],t=(a("436a"),a("2877")),l={},r=Object(t["a"])(l,c,o,!1,null,null,null);e["default"]=r.exports}},[["b73e","common/runtime","common/vendor"]]]);
});
require('pages/reg/Privacypolicy.js');
__wxRoute = 'pages/pwd/pwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pwd/pwd.js';

define('pages/pwd/pwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pwd/pwd"],{"26b2":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},"3af2":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("0be9"),u=e("e7dc"),c=function(){return e.e("components/m-input").then(e.bind(null,"edc7"))},i=function(){return e.e("components/logo").then(e.bind(null,"98cb"))},r={components:{mInput:c,logo:i},data:function(){return{account:"",password:"",verifyPwd:"",regCode:"",regCodeBtn:{text:"獲取驗證碼",btnStatus:!1,codeTime:60},changeBtn:!1,nextBtn:!0,timerId:null,succ:!1}},methods:{getRegCode:function(){(0,u.joinValidate)(this.account)&&(this.nextBtn=!1,(0,o.sendCode)(this.account,this.regCodeBtn,this.timerId))},nextChange:function(){(0,u.codeValidate)(this.regCode)&&(this.succ=!0)},findPassword:function(){(0,u.pwdValidate)(this.password,this.verifyPwd)&&(0,o.changePwd)(this.password,this.account,this.regCode)}}};n.default=r},"5c0f":function(t,n,e){"use strict";e.r(n);var o=e("3af2"),u=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=u.a},7247:function(t,n,e){"use strict";e.r(n);var o=e("26b2"),u=e("5c0f");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);var i=e("2877"),r=Object(i["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports}},[["1044","common/runtime","common/vendor"]]]);
});
require('pages/pwd/pwd.js');
__wxRoute = 'pages/im-chat/im-chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/im-chat/im-chat.js';

define('pages/im-chat/im-chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/im-chat/im-chat"],{"0a5f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/im-chat/chatinput").then(n.bind(null,"578d"))},i=function(){return n.e("components/im-chat/messageshow").then(n.bind(null,"abb2"))},c={data:function(){return{name:"xcecd@qq.com",style:{pageHeight:0,contentViewHeight:0,footViewHeight:90,mitemHeight:0},scrollTop:0,messages:[{user:"home",type:"head",content:"你好!"}]}},components:{chatInput:o,messageShow:i},onLoad:function(){var e=t.getSystemInfoSync();this.style.pageHeight=e.windowHeight,this.style.contentViewHeight=e.windowHeight-t.getSystemInfoSync().screenWidth/750*100},methods:{getInputMessage:function(t){this.addMessage("customer",t.content,!1),this.toRobot(t.content)},addMessage:function(t,e,n,o){var i=this;i.messages.push({user:t,content:e,hasSub:n,subcontent:o})},scrollToBottom:function(){var e=this,n=t.createSelectorQuery();n.selectAll(".m-item").boundingClientRect(),n.select("#scrollview").boundingClientRect(),n.exec(function(t){e.style.mitemHeight=0,t[0].forEach(function(t){e.style.mitemHeight=e.style.mitemHeight+t.height+20}),e.style.mitemHeight>e.style.contentViewHeight&&(e.scrollTop=e.style.mitemHeight-e.style.contentViewHeight)})},toRobot:function(e){var n=this,o="http://www.tuling123.com/openapi/api";t.request({url:o,data:{key:"acfbca724ea1b5db96d2eef88ce677dc",info:e,userid:"uni-test"},success:function(t){console.log("s",t," at pages\\im-chat\\im-chat.vue:93"),n.addMessage("home",t.data.text,!1),n.scrollToBottom(),console.log("request success:"+t.data.text," at pages\\im-chat\\im-chat.vue:96")},fail:function(e){console.log("request fail",e," at pages\\im-chat\\im-chat.vue:99"),t.showModal({content:e.errMsg,showCancel:!1})}})}}};e.default=c}).call(this,n("6e42")["default"])},"39c9":function(t,e,n){},6116:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"9d86":function(t,e,n){"use strict";n.r(e);var o=n("6116"),i=n("a4db");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("d737");var s=n("2877"),a=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},a4db:function(t,e,n){"use strict";n.r(e);var o=n("0a5f"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=i.a},d737:function(t,e,n){"use strict";var o=n("39c9"),i=n.n(o);i.a}},[["e564","common/runtime","common/vendor"]]]);
});
require('pages/im-chat/im-chat.js');
__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"3d14":function(A,M,I){"use strict";I.r(M);var g=I("7a5f"),i=I("a6d2");for(var C in i)"default"!==C&&function(A){I.d(M,A,function(){return i[A]})}(C);I("4f9e");var D=I("2877"),E=Object(D["a"])(i["default"],g["a"],g["b"],!1,null,"8ef4b116",null);M["default"]=E.exports},"4f9e":function(A,M,I){"use strict";var g=I("f802"),i=I.n(g);i.a},"7a5f":function(A,M,I){"use strict";var g=function(){var A=this,M=A.$createElement,I=(A._self._c,A._f("toFixed")(A.panBalance,4)),g=Math.random(),i=Math.random();A.$mp.data=Object.assign({},{$root:{f0:I,g0:g,g1:i}})},i=[];I.d(M,"a",function(){return g}),I.d(M,"b",function(){return i})},"8a0d":function(A,M,I){"use strict";(function(A){Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var g=D(I("a34a")),i=I("ae57"),C=(I("2f62"),I("0be9"));function D(A){return A&&A.__esModule?A:{default:A}}function E(A,M,I,g,i,C,D){try{var E=A[C](D),z=E.value}catch(a){return void I(a)}E.done?M(z):Promise.resolve(z).then(g,i)}function z(A){return function(){var M=this,I=arguments;return new Promise(function(g,i){var C=A.apply(M,I);function D(A){E(C,g,i,D,z,"next",A)}function z(A){E(C,g,i,D,z,"throw",A)}D(void 0)})}}var a=function(){return I.e("components/uni-notice-bar/uni-notice-bar").then(I.bind(null,"7a0e"))},N=A.getStorageSync("USERS_KEY").token,t={data:function(){return{slides:"",indicatorDots:!1,autoplay:!1,interval:2e3,duration:500,circular:!1,currentSwiper:0,tokens:[],tokenList:[],bgColor:"",bgColor1:"",bgImage1:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjM5cHgiIGhlaWdodD0iMTgycHgiIHZpZXdCb3g9IjAgMCAyMzkgMTgyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+5pif55CDMTExMTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMC4zODg2Mzc0MzcgMC45MTA4NjI4NTggMTgwLjQ5NzAyNyAwLjkxMDg2Mjg1OCAxODAuNDk3MDI3IDE4MS42NDIyMjkgMC4zODg2Mzc0MzcgMTgxLjY0MjIyOSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaYn+eQgzExMTEiPgogICAgICAgICAgICA8ZyBpZD0i5YiG57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgLTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMzLjI4OTYzLDY1IEMyMzEuMjExNDA4LDY1IDIyOS4zMTAzMDgsNjMuNjE4NTEzMiAyMjguNzQ3NDU2LDYxLjUyMzQxMDYgQzIyNy45MzI2OTksNTguNDk1MTE4MiAyMjMuNzU2NTc1LDU1LjgzODAxMDYgMjE2Ljk5MDU0Nyw1NC4wMzY5ODA1IEMyMTUuOTY3MTgsNTMuNzY2NDMzOCAyMTQuODkxMzMzLDUzLjUxNDE4NTEgMjEzLjc2NDMxNyw1My4yODU0NjIxIEMyMTEuMjE5MDIxLDUyLjc2NjU4NzYgMjA5LjU3NjM4Niw1MC4yODk4NDQ0IDIxMC4wOTU5NDEsNDcuNzUxNjcyOCBDMjEwLjYxODEyMSw0NS4yMTYxMTUxIDIxMy4wOTY1MDUsNDMuNTcwNjE2NiAyMTUuNjUwOTg2LDQ0LjA5ODYzOTkgQzIxNi45NjI5OTQsNDQuMzY2NTcyNSAyMTguMjE5ODk5LDQ0LjY1OTMzOCAyMTkuNDE3NzYzLDQ0Ljk3ODI0MzIgQzIyOS44NjkyMjMsNDcuNzU4MjA3NyAyMzYuMDY1ODQsNTIuNTA3ODAzOSAyMzcuODM4MzY0LDU5LjA5NzYzOTkgQzIzOC41MTE0MjQsNjEuNTk3OTA4OSAyMzcuMDIwOTgyLDY0LjE2ODc1NTMgMjM0LjUxMTExLDY0LjgzNzkzMzQgQzIzNC4xMDMwNzUsNjQuOTQ5MDI3NCAyMzMuNjkzNzI4LDY1IDIzMy4yODk2Myw2NSIgaWQ9IkZpbGwtMSIgZmlsbD0iIzJGMjcyNSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS43NTk0NzcwOSwxMjEuMDI1OTMzIEM5LjY0ODQ5ODA3LDEyMC42MTQ1OTMgOS41OTIzNDAwMSwxMjAuMTk1MzE2IDkuNTkyMzQwMDEsMTE5LjczMTA3IEM5LjU4Njk5MTYyLDExOC41NDU5ODcgOS45OTA3OTQ4MywxMTYuOTY4MDc5IDExLjA5NTIzNjcsMTE1LjAxOTgzMyBDMTIuOTk5MjYyNCwxMTEuNjE1MzYzIDE3LjAzMzI4MzIsMTA3LjMzMTMzNyAyMi44OTExMDM5LDEwMi44OTM4ODYgQzI2LjU4NDE2NSwxMDAuMDc5MzEyIDMwLjk4NTg4NzMsOTcuMTg2NzAyNiAzNiw5NC4yNzgyMjEzIEwzNC43NTExNTE3LDg0IEMyNS4zOTE0NzQ3LDg5LjEzNDQ4MTQgMTYuMzk1NDg4MSw5NS4wODIzODUzIDkuNjI1NzY3NDIsMTAxLjcyNTk5NyBDNi43NDI5ODY5MiwxMDQuNTYzMDU2IDQuNDExMDkwMjYsMTA3LjQxNDY2NCAyLjcyNjM0ODQxLDExMC4zODEzNDEgQzEuMDUwOTY2MjMsMTEzLjMzODc2IDAuMDA0MDE5NTA5NDMsMTE2LjQ3MDc2NyA4LjIxOTMwNDY0ZS0wNiwxMTkuNzMxMDcgQy0wLjAwMTMyODg3NzQsMTIwLjk5MDIyMiAwLjE2MDQ1OTgyNCwxMjIuMjUzMzQxIDAuNDkzMzk2OTA1LDEyMy40ODA3NSBDMS4xODA2NjQ2MSwxMjYuMDEyMjc5IDMuODEwNzMzODQsMTI3LjUxNDc5NiA2LjM2ODU5OTg0LDEyNi44Mzc2MDUgQzguOTI3ODAyOTQsMTI2LjE1OTA5MiAxMC40NDU0MDc3LDEyMy41NTc0NjMgOS43NTk0NzcwOSwxMjEuMDI1OTMzIiBpZD0iRmlsbC0zIiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJGaWxsLTUtQ2xpcHBlZCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InBhdGgtMSI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTAuNDM4NDMzNiwxMC40MjE4ODg2IEw5MC40Mzg0MzM2LDEwLjQyMTg4ODYgQzgzLjQ0NjgxMzEsMTAuNDIxODg4NiA3Ni40MzkzMzg3LDExLjMzNDA3NzQgNjkuNTkxNzI1NSwxMy4xNzQzNjUxIEMyNi42ODE1MTM5LDI0LjcxMzI4NzEgMS4xMjQ4NDIzNCw2OS4xMzQ3NTYxIDEyLjYyMTY0NTMsMTEyLjE5NzIyMyBDMTcuNTk0NTIxMiwxMzAuODI1NDk1IDI5LjA2MDkzNzIsMTQ3LjA4MTgxMiA0NC45MDcwMjQ4LDE1Ny45Njk3MzkgQzY0LjM1MTk3MzcsMTcxLjMzMDM4NyA4OC41NDkxNjM1LDE3NS40ODQyOTMgMTExLjI5NDM5LDE2OS4zNjk0NDYgQzE1NC4yMDU5MjMsMTU3LjgzMDUyNCAxNzkuNzYxMjczLDExMy40MDkwNTUgMTY4LjI2NDQ3LDcwLjM0NTI2MjQgQzE2Mi4xNjg2MDEsNDcuNTE4MDA1IDE0Ni40ODUwMTgsMjguNTY2MjIzOCAxMjUuMjMyNzExLDE4LjM0Nzg1NCBDMTE0LjMwMjY4OSwxMy4wOTM0ODc5IDEwMi4zOTg5NjYsMTAuNDIxODg4NiA5MC40Mzg0MzM2LDEwLjQyMTg4ODYgTTkwLjQyMzkwMDcsMTgxLjY0Mjg5MiBDNzIuNDUwNzMyOCwxODEuNjQyODkyIDU0LjcxMDA5MDUsMTc2LjIzMjA3NSAzOS41NTEwMTAyLDE2NS44MTg4MDUgQzIxLjg0MDc1NDcsMTUzLjY0ODc3NSA5LjAyNTQyNjI4LDEzNS40NzkyNDkgMy40NjcyNzI5OSwxMTQuNjU5MzM3IEMtOS4zODM3MjcwMSw2Ni41Mjk0NDk3IDE5LjE3ODYwMTUsMTYuODgyNzgzNCA2Ny4xMzgzMTY4LDMuOTg2MTg1MTMgQzg3Ljg4NTkzNzIsLTEuNTkwMzYzOSAxMDkuOTczMjIyLDAuNDYyMDYwNzA4IDEyOS4zMjgzMzEsOS43Njk1Njc2NSBDMTUzLjA3NzY0NSwyMS4xODkxNjI3IDE3MC42MDgyMjIsNDIuMzcxMDMzMiAxNzcuNDE4ODQyLDY3Ljg4NDQ3NDIgQzE5MC4yNjg1MjEsMTE2LjAxMTcxIDE2MS43MDc1MTQsMTY1LjY1OTcwMiAxMTMuNzQ3Nzk5LDE3OC41NTYzIEMxMDYuMDU3MjgsMTgwLjYyNDYzNSA5OC4yMTg3OTEyLDE4MS42NDI4OTIgOTAuNDIzOTAwNywxODEuNjQyODkyIiBpZD0iRmlsbC01IiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ni40NDk2Mzc0LDE0MC4yODk5MjggQzIxLjY3ODA3MTYsMTQwLjI4OTkyOCAzLjM5OTM2ODA3LDEzNS4yNzYzOTYgMC4xNjM1MjAyODQsMTIzLjIyMjI3NiBDLTAuNTE2NDU3NTQyLDEyMC42OTc2OTUgMC45ODYzNzI4MjksMTE4LjEwMTg0OSAzLjUxODQzMDM0LDExNy40MjYxNjQgQzYuMDQ3ODQyMDIsMTE2LjczODYwMSA4LjY1MDAxMzk3LDExOC4yNDU2OTYgOS4zMjg2Njg4OSwxMjAuNzcyOTE3IEMxMi40MDg0MTI4LDEzMi4yMjc4OTQgNTguNTQ5MDA5NCwxMzcuMDIxMDM2IDEyNi43MDk1MSwxMTguODAzOTI4IEMxOTQuODY2MDQzLDEwMC41ODQxODEgMjMyLjQyNjIxOSw3My40MTk1MjE2IDIyOS4zNTA0NDQsNjEuOTYxOTA1NSBDMjI4LjY3MTc4OSw1OS40MzYwMDM5IDIzMC4xNzQ2MTksNTYuODQxNDc4MSAyMzIuNzA1MzU0LDU2LjE2NDQ3MzEgQzIzNS4yMzYwODgsNTUuNDgyMTg5NCAyMzcuODM5NTgzLDU2Ljk4NTMyNTIgMjM4LjUxNjkxNSw1OS41MTI1NDY0IEMyNDQuODk5OTc1LDgzLjI3MjM4NTIgMTg2LjkzNzgxOSwxMTIuNTA2MzMgMTI5LjE2NDgzOSwxMjcuOTQ2Nzk0IEMxMDAuNjk4Mzc0LDEzNS41NTc0OTIgNzAuNTEwNzk4MywxNDAuMjg5OTI4IDQ2LjQ0OTYzNzQsMTQwLjI4OTkyOCBMMjI0LjA2MjUsMTU3IiBpZD0iRmlsbC03IiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",bgImage2:"data:image/gif;base64,R0lGODlh7gI2Bff/ADoyMDpDRkU+PDxFSDI7PiYvM1FZW05WWExUVigmJTMyMjA5PC43OyUkJURDRDQ9QEhCQEA4Njs6Oh0hIyMsMDcwLlVOTUhQVC4oJisqK0pSVU9IRkRMTyEjJE1GRUBIS0JKTUxKSkdAPlxWVEQ8Ozs0MlhSUC84PEE6OCYvMkNLTj02NCcwNBYeIlpUUk5VWERMTiUuMj43NlBKSUpEQhogIzUxL0I7OVJMSiwnJjUuLCAoKzcyMUZOURgfIjMsKi8oJx8mKVdPTlNSUhwkKElFRDxERjhAQzM1N01UV0hQUyQtMCsuL0JGSDAtLDs+Pzg2NWBYVyIqLhQdIUE9PBQeISImKCMsLiIjJDpCRSQtMV5XVjY4OUdPUj5CRFJNS0BISi4yNCYoKk9XWVtVU0dLTBokJyQqLT5GSS0wMUtOT1xZWEVNUD1GST5AQjtDRygxNRwmKTM8P0ZISTY7PRsiJSYrLktSVTE3OR4iIy40NikwMhcfIT9ISyAqLS02OTc8Ph8pLDQtLCozNyIoKhggJDszMTAqKC82OB4jJhQeIisxNDkxL0FJTDtBRFtUUzczMjY+QR8oLCMqLDU+QTE5PTYvLk5QUB4lKBgiJS81OBUfIx8mKCkyNjM6PD1FSR0mKhYgJDMwLzU9QSEqLictLzIqKBchJRgiJjAvMDIrKis0OCoyNS8rKyw1OBYgIzY/QhkjJzYuLCguMDUtKzMrKRUeIjQsKjApJ0lRVBsiJDE6PTc/Qz5GShokKC02OiErLxslKBskKDcvLTlBRD9HSys0NxUfIjw0Mh0nKjhARC01OR4oKxwlKUA/QBohJCEpLBwmKj01MzlBRTw1MyErLjhBREtTVh4nKyozNj9HSjE6PhkjJiw1OTlCRRkiJiAqLkxFQx4oLDY+QiApLRcgJD5HSjc/QjUuLTYvLTdAQzIrKTQtKzs0Mx8iIxchJDIqKSw0NyszNzc+QSoyNiszNi01ODlAQ0lISDM8QEFKTVdXVzU+QjEpJxMdIf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NDVjNjYzYy05YTg4LTRiZGQtYjZhNS0yMGRkZDRkZDJmNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzVENzEyODQ5N0FCMTFFOTk2RENDRkE0NUQ2NzVFMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzVENzEyODM5N0FCMTFFOTk2RENDRkE0NUQ2NzVFMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjODlkMDk2Zi1hOWZhLTRiYmUtYjdhNy05MTUwNTM0YjUyYjQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiYzczMWI5MC1kMmQ4LTExN2MtYmY3Yi1mZmMzMDE3ZDk1MTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFMgD/ACwAAAAA7gI2BQAI/wD9CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169iza9/Ovbv37+DDi/8fT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnkkkw26eSTUEYp5ZRUVmnllVhmqeWWXHbp5ZdghinmmGSWaeaZaKap5ppstunmm3DGKeecdNZp55145qnnnnz26eefgAYq6KCEFmrooYgmquiijDbq6KOQRirppJRWaumlmGaq6aacdurpp6CGKuqopJZq6qmopqrqqqy26uqrsMb/KuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfjmq+++/Pbr778AByzwwAQXbPDBCCes8MIMN+zwwxBHLPHEFFds8cUYZ6zxxhx37PHHIIcs8sgkl2zyySinrPLKLLfs8sswxyzzzDTXbPPNOOes88489+zzz0AHLfTQRBdt9NFIJ6300kw37fTTUEct9dRUV2311VhnrfXWXHft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t7rWvS52s6vd7XK3u979LnjDK97xkre85j0vetOr3vWyt73ufS984yvf+dK3vva9L37zq9/98re//v0vgAMs4AETuMAGPjCCE6zgBTO4wQ5+MIQjLOEJU7jCFr4whjOs4Q1zuMMe/jCIQyziEZO4xCY+Mf+KU6ziFbO4xS5+MYxjLOMZ07jGNr4xjnOs4x3zuMc+/jGQgyzkIRO5yEY+MpKTrOQlM7nJTn4ylKMs5SlTucpWvjKWs6zlLXO5y17+MpjDLOYxk7nMZj4zmtOs5jWzuc1ufjOc4yznOdO5zna+M57zrOc987nPfv4zoAMt6EETutCGPjSiE63oRTO60Y5+NKQjLelJU7rSlr40pjOt6U1zutOe/jSoQy3qUZO61KY+NapTrepVs7rVrn41rGMt61nTuta2vjWuc63rXfO6177+NbCDLexhE7vYxj42spOt7GUzu9nOfja0oy3taVO72ta+Nrazre1tc7vb3v42uMPvLe5xk7vc5j43utOt7nWzu93ufje84y3vedO73va+N77zre9987vf/v43wAMu8IETvOAGPzjCE67whTO84Q5/OMQjLvGJU7ziFr84xjOu8Y1zvOMe/zjIQy7ykZO85CY/OcpTrvKVs7zlLn85zGMu85nTvOY2vznOc67znfO85z7/OdCDLvShE73oRj860pOu9KUzvelOfzrUoy71qVO96la/OtazrvWtc73rXv862MMu9rGTvexmPzva0672tbO97W5/O9zjLve5073udr873vOu973zve9+/zvgAy/4wRO+8IY/POITr/jFM97MAQEAIfkEBTIA/wAsbgC/ARUC2AAACP8A/wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjR4GKQoocqeijyZMoU6pcybKly5cwY7YkSbOmzJs4c+rcybOnz58eSQ7cRJSoraM0gSpdyrSp06dQeeb4VyPkv6JYsxZNGrWr169gw4rlaaqsQF1ZQ6lduxYr17Fw48qdS3duWVO1ah1KUGeT2lOnUAkezNbtyLqIEytezHjl3bx5gTSoE3gwqlixLJ9qS1Ro48+gQ4sO/RhyrVs5MAnGzNoM68yb1W4VObq27du4nZaGfOtWKytmggsbTlyYa9icPedezry5849l8/6Y3puWEzG+mjUDxR1UNO3GMQP/DmXY6vPz6NOrP4hXeu9bOmQ5sbIdFDZx4pIlw6b9OCrA5ZW03oAEFlhbe6exQwstsgzTin3YSCJOIBSKg00yzYT33ykBGujhhyDKxZuCDMqSTgbJSEIOOCz6UWEyoAyXGSrkzSZgiDjmqKNSIy4oSwVO7EAOOaRQUM2R4PghCTYxCjNjjZscQ9uOVFZpZUsILshgBTycQQ4wwFBAwRJiJmlhf8jZeOOVbLbpZkW8+VgBAEx8CcwSWixBppEU8teMa7HZ+OaghBaaEGRaDsNIKqTciacWMWghZjWBSAJKM8H48h+UUxrq6adtIrqgooyOGUMMBZyaZzXgLAlKMK5t/zobqLTWumNeiS5a5KmopiopBeBUeimssnZmnq3IJrserqPqSgGqLLCQaqRlBoJNHMRuJqiy3HbLHLO0DEMnMFoUUEC00RaQJ7DWXupLmpt06u289H7GLDqMAGDHs+iimyqZ1ZBjaTPvFitvvQgnLGIttKCjqA3VaJECunCkGwOZpEhiaRwFaxvvsQqHLLJXuDrMSBrk9luxtJECQ4rA7sIL8sg018wjww4bcobEFK/8r8vkMImtzGvabPTRN+GqA6kpR9sJHD5fTMHL2FwbDNFIZ621SyUPY4gdPLMAx9Mrn7oEMAIL3fGsW7fttkenhbto02OTzTKZaC+JbcE1zv/89t+AR9S1IVLwDHUnT1ushcsaJ7N3LJu98nHglFfeEMNLzz3x4YhXXEAKMVDAuCTJRHP1f5L7bfnqlpfMCCN0I544y4tnvGTp755SjrGs97764FcYLnvin0s6eumZoj6578wHflrmaRhe9+w/vywJM8hntvvyzXe/Na6yMKIAMJtPT7zU1mNvuqYccu/9+0a7Pr4WYsMxyCCdRys10Myon3vf8AugzUrGpZRB7X75Y8GpRJc+5Gmqb0UToATrhTNF0e1++CNenoBGDmZcKBr/c98ER+itChriggg839le1kHsDU1bUiKhDEvYMK+RwnAYzN+/pjYkVw2NRp2ZoRD/k2VCcm0uhyrkYdqYlDwIDvGJoCoi/cSGRM+hr4dVc9d/oqQ6KHrxShWEhAHtl0IrYgyLaoMc777IRja5ThRjrOLdlLikNGqri23M44dclwry1U+OO2Th9ewYCilFUI+INBCuFIWy8gHyYhwcJCg4Bjny4DGRmERPBRlRCuk9coU99OAkQ3jJTJryWzUknPBy6DPjCVKUlGxfKU9Jy9q4zgZxLKP+XBlKtW1RhLUM5m0WeTI/HlCXCsSb9er4KjNs0ZDCjOYwTQg2R+oykD1kZhO5eEhpelMxtzSi2DqBzFQxMJtCOx15YvjNdjYGc4pigjHJmMGyhS6SsLwaDLvp/85+jqVrACicNes5R0EyM5Zr9KdC4xI3pk1xbMikViRvtzcgQnOhGA3L4HY2UB3uT5BZ/OE6+ZnRki6FYXLr40PJSVBpbdCgsCQlSU1KU54ANHjWlJ0ZzymwfD4woTUNqk+6NreVlhOSMCUkF4XK1KHijBGQuGFO7bbDiaaTfUBtqlZjQtRZ+HGcGZyd2ayazsyQxxaz3Kpa4QZPRsDRky2t6iuvKqu0rvWuGokbOuYk0PqRU6f6u6dBQ6rOrOL1sB3pKt3MFzVlDikQPq3rTBFL2YkQVaXlG15jeaqxmJrVsJUNrWXbygOp+lWnZXtpNiMry8mK9rWHQqnDAHCGr/9yLoHqcmxPL/SqEAITtsBVCKJm61XpadZiuu1sWYH42+A61yBERZlxAcsywQ5piZNM3j5d+1zYEvWtmUUt7VY4V+5kqpKg7W53iaoA057WbgpcFz4JC5v0qte5ROVBX98LNeRy9qDaHSl370tZokJCCsCIQbRuS72PXleSj9sugQlsYDuIk8FRcyVIL/Q45tp1woet8IUZazHBbpg7lPxlc0Fc2eEqChIWni5uI0XeXsLohxJmcXBdDNUYh3fG8p0rXT32YR1rlceQqK30phc1B+92yE40snfzq+TyMVlxye3fVdH7sQFLWaj3etgkRly3/o6Xp0EjrG8P9uUQy1b/UaJo1JI7l2HdpnnLzL1omwv8Zl1Bysp0LrGdPYjnGul5z3gdrskwu2Am1xnNhM4u34hyaESvlceGkGfYbmvmaQ1azZ+1r6XB3GcYi5O/GRYTB+8s6fqKetQ0FZXJbHCFU3PaX/tbdaQ7zCkvw9qfiiaVnCd22k6bjYEs7CBvec22Xx+5z5k2IrE5Z+wgl7fVzF2xszMq6xf7uNFlfrTL5nrj83pM29teaLAXheBNX1nQkPZguX1b6XSXtNuMMIR03R3oEqs62VqeJI4NXWR7RxPfPPh2o/vtadGtumocPm+x6m1whXabVO2e9uGgJm5SAPxCjpO4xyiem8NU/FZh/86XpmOg8X5XV5ksJPS802RIXyuGJFVQxDNOniNZN8itVe4Zw48N6Sxie7s2R0xNbPGPQ5iC53vMyy1ooQOTAQBltt74ys487uvuOhinOzeba1OTkmDg6VBXZLcrwAgb+Ljl8H05snuJYpH3OulzKbsiGmCKQxwi7QW6eL77SIGw+ZXj8J67spl09F4vR+8++EffzQJ49cjaZIYwtcTgbmaue9zrIcVUxwSM97joXRF5wMVd0F7581xeUYa4OrlYLnTEV9fadG/8tm6j900kYPWsb31zTLMgh7HdEDzopOGpvXVf4e3hVZt5sbqMm9M/4+yrF/5zBG+IEkiX2PUbm//tzXXsru+23HandMHpUpOidMDp2df+t+6FeWqIovAp0Hi4cb0uxTNT98ZSemNBEraQFQlQC8Anf8sRJ1WnKPnGA7PwZ0JHNj7TcOa3eAKXfgFYfSFxFESxFjuHgPGngNP0ZrBHDWmAJ+DHcS7nfP+2YdIXKK+2GCNRgH6xFolwCOsggpRHgrZEfyeIgsvHfLhWfp83JLvWYWK3fnIhEh7IFq9gBTuYgD44Gq+Xb4ZADSsQAWGgf+KFZS9oY9mlgTXHe054g2tRDgnwA3kxglVoL1JXfMNwfFoYARGAAmGwcC3IKzAHesumgdRnhopwDB/4F4CBAWzYhj34hoxBfDX/dIIrsIUogAI3oAcsSIHpYoHmN0joN3q7R3YhQYiGCBh1cAiJKIKMCBo+F4SSSIk3QAL14GhFqCf+B3ExKBsbaBtOeAyjCBiJsA63UAtsuIipmBhXaAhZuIV3eAOvSAIkkA17WH6bGH1j6Im5qIsdeIOAsY2JcBrCiIrFCE5A+DrJaIeu6IzOKACYmHibKG+Oo4S4WIaCaAuGmAnf8A2nYAXscAvTAY7hWBei0oB0uAIycIeUiI4kIAAkcAOd52l9KIZ7Y42BiI2KcBR/gQr3eI9WQAv8OIzB948MFYePmG9a2IrMiI4CkJIkIAFFmGtHWEf6EQeihxwEx4Sm14G8/wgYGJmRYsCR/UiMICkWcTKSWViHk3iS6aiSzsgF0tJw/idvGVgw0zd2oSESvBgKgfENrPENPdkbifiRQQkWjugwrGiOSJmUCHkDUOCQ/geT1Qgv3CSAAziI9KiTr8ENXdkbbRiW/7SKWAgJCmCWzYiW6MiMKKAA0viS1BgH8Hh3jzeIObkar5GXwYiAfKlRfomMkMAEWgAFR4mQSlmYk4iHz6eYjMeY5wWXJieIUYKVl4EZw2EGPcmRlQmWl+kUY4l5yMeZ5RIBg5mQCpmWo2mHs9CWRheRcDmRrOkXgQGbwZAhYiALtLmXtxkVuQl7mRc9YTOYoemMNzCcESADMv8wNZ+nMYsJdqPnmI85iJtgl8MBHoQgnXppmdX5FNf5l2mAf8RWD4QpmpNoh+G5AtRgmjfWYdMnjyUXiu2JCtwQC8IQDN/RDFYgn3ppm/XpVOOIjDzABPpJMUiQkAi5kN+JAgAqA5G4AjyARgWamtOnnByoCEQRGNwwHNFQo80QBDpAm5V5oUwxlOjwc5rJoZsndFwQooZJonZoogIqoApgnqeJnjT5iQlKiAvqoM1Qo6UDCk4gC++RFzx6M3HTMEC6mx0Kbk8jAYU5oiVqotTQptSADExwniK3hDZZF9lYpcJwpaCgH6DQCsOgA/vopV+KoVpCllgIgWUafhSIpkf/uqaR6KbIgAxf04kzcm4uOqWE2Jx5mgz4ASMZkA6yEKi1MKg2FZCGioyiUJxDaqaIBweNmqRsCqmSGns7gJrvkpxUaYZUqqnRwKkWgg2TMAyhyg6CSqo4cZ3YmQrKl389I36dtwjgKZ6P2qaRiowAAAAV8DhRGoByyX7siae9ih/Wgg0VIAuCwJHFaqwwgaz5VgKpUHirqqi2ly5hgKTSOq1vaq0A8DpOIAzpqSbooaB+cRlXmgwUEgj54QTCiq6jqq7rKpLoYDL51g5Canjy2nm0AwnhqaQCSq36+joVkA6tABuWmqscaAuiiApmULCB4AcuIglnwAjmSgvp6rAq/+GIYuqAmVex4FdsGDstF9MOSuqmbyqp17qvFVABw5AOYvAO54ag5yGwoUCwoDAhLlspO1CuC1KzNnsSjtiAigIAhqAAxUV7Eziv1SU1FICvRRt718oISbu0siALiQAlUBu1IfGBlyEMVRsIpOAHrCIJTqC1NNuwXeu1rwd7AKCs0qYyztqQQLsnwFAKRFutRwu3SguqOXoL29Nl3ZoYIvGBpzCjfUsKSEIOkyCzW2u4h5tYPmp8E5ufiXp480p+RDduqVC0Rvu2cau56HoI3DogZ4iVDhoN4uCy1QAMrEIOolABq9u6bAUuP6qzyUcu8Uq7W9eUfPiCLyMKlsu7mf8rC5sbjKaQAKu5HtmIlTMaDdjQstUwKeRgB4wwDM8LvRlhGrJ1qosbYxYbfmgbuaVZnuTwsZgrtxTKg/9Qp1VZkcxJsAbrB40CvzbgvIVrvxiBsxE7DLC3oaIjgY7LcdkLwA73kktyBm9bwKB6wMBXAx6Svs3ZDA8cJmMyNfJLvxVswaNlqhpMjjZQCtbLrB9cu5GrapsIkxkAsuE7vjx4Fx8Sipm6t5waCO8rX8xLwVyLwwyBwae6KGejBdfrvyE8xCM8WMvmBHArt0oMfBaqHsO7tzAsxWHixWdjwjZ8xVh8EPi7IFX3c/lmAxw6ez3brCHMK2oLJiS8mDKZDsL/qgNKvA5UCCIKSryb6rdxTGOkkAqqa8d3TBBavMPIlwr8C8T94r/9IsKGXJ7mCSNRaQXpwMgMawqOzMQ44sIqux3HO8U0NjU8UMesu8mc/LXTS44KIE8/PMrgFsZ8GMDLdDud6AvckAELUpuxDJQtXJFPHAu2DLiVLDU1vLW+XBB5XHxbDMo/HMjHXMqELLlFHH3vCKWw8QO1+cg5EsmXYQb2IQ7gEDGn8i+XzAj1+82mMXUNY6j5lqod/MXgVsoiPMboxCTtzKKbUQd5AQ/yPM8MTLwrW7WAW3i2q8vDgA43fMfhXHWnygNpUGteLMpBrNDJPMbLjMhQKhiBYgUU/+2GOuLEC2oGwWAfLVt4+7xAZ2AIH02zIt3JDggAouDD5WzM4TfKC33K2cTMUSmVMrgJkifLVpK+9dwM7SvFHG0u5jQL86sDwYjDRi3Mf5zS5kzK/vLU6wxyqAnRVb0JPoDVWX3Ro6vTPA0OPm0uLAMMmCydmjyoAa3HGbzBqVBbPr3WTY3OkVLI4/bScI0tcg0lxoIFa3zTDKypXK0iU3wuFgPYjADSg12f4TzQO5wvjLvUxgzCLG026kzCt4NiyCnTuBi8g+LCsZDRkuDVzwLaLgUMNjDaIU3YZ13QxKzWTN3YLQnZHifZMUnZvkDVt+25hpKNgWEGeRoh5IDLo/+8OPNL2qR62ofNw0yAYIu93GirvbBNxM8tMKm8opWNFTX3ueiL17tty5IADnEM3C5FCkIt3hdK3gSNfGlQW6w9yq7d1qrSf6e8zK4S3ZlC3ZZt3Z+C3W4MChpTJL/dLymgBQA+1L0clASuwbAHCeSc4AqOsWmbJ7FtUP8X17dq25Z9vp4Suhi9HRHC3z69YNHy4QMs4nxJ4A2C2Eqt3Ey94JnY0i4N36lM2+68IdVt4xe+2Rm+4d4tNugC4gFO1P9I5DsMADyw2kje2v8LtJBdxMz80NNdqdVt4cjSgTluHyrSKHgC2lsnKZAg5KlY4qkNAApw5H/G2ErO3hfz4tD/XToyjhlSXuMme+MXneHcbeflUj9bDgw8UAGkPeKth78CjdphDuilcNAsR+hn3uCIHtW8lYETXqmWWt/zguHazR3YMCSUfi62tzgKQNylbXCeXqhkeXxjPurWW+rqvd7kJ8diwtBObnSTJHozPh6O/ui0gt8ZXTW2biq4bmYpAAyikMmcXnGnTdKpnXlkPujHzuK268XL/uBOLtWL7uZ2C+f0otVWCiHZvgTQ4tofngZjXdY8h78oNdAFPuYWVuwqvdKvze7truYgx+bRPtf0Xi+yzrdVoyJEcif7Ln4s8OFS0OW9/mW/Ls5FzsOpUGsIb+rqPi3K7t6o7JaMKd2M/74pFa4cCiPnp5DfEILxdr7xs6PnvB7uIj/uh62zosAEKK/WKp+97C3Hqd7s3SHjVD3XNi8y+J2nO2/rGr/tdtPtmPynXo5oI0/w5Q7os9AoKr7iTN+UoNPeLg0O736a0h3x1Q3rRmPvWB8hPL/1C9b1WvDxIi706iXwWkLu5T7sYOLFCN2sy51/bv/gEM54l4IpLErzWVH1NaPVs07ne9/h4/Tzok2/AD9hhA/sBC22R4/gXmzs6d74be/gkR353QEexhErjU7fVH737JndO33xnX8qfe/3QR34gz/2EUuWOovixZn4m8fYzO3hbU8tLv/y/zf5sTnzEo/5SJO3Of+t43ofCBmv7Z8P+rtO/FNW2IY9vTo7tmlw8Iqf8Ao/yo4fKb/S5HEv+bR/HNxw+2oCEIr+DSRY0OBBhAkVLmTY0OFDiBElJlSkaNOmU7F8NQOFDZskSYHIkSNFYUmMAizgdGIJBw6LFFqkAKiAjlatWhN17uTZ0+dPoEGFJsRZFCctpLTQLR02jNFTQzxSzaIADJgWLSm0suDatatLl167ao0RAyuFqlZJrR0JEqTHZKBAxWkWLJgZM7FioUJ1KlSoi8cEV6w41PBhxIkfVryY0VecjsxAiiQJbImWlCpZdnrJIgawNIyG2cSp2PRp1KlVQzRaNKlSpk2hArDBJC3/1hhbxXoFu5srWbNa0FoFtpZUW7fMki2fG8eur7x7+/oFvMmWLcKFV2/n3p0g41enUD2OPHkkKWAUtMTgurLly5jARIkmndP7ffz577eudev1UnSacooRQwyxIZVSrFIvK918A6szrwooALiz0iqOLXLckkS55ZKJxrlgfPFFL75Ooe6i67AjTD8WWwQKPPF8CSYZbCQL5EaSSjopM/c4g0+LK54aRoeb7HPxSCSTVIi//v6LbcACpaIqPdwadLC3CCVMoazghrsQwxsDYYZDD6OJ5rkRpTPxr8BUzE5JOOM8CMbxZqxxMsrQU489zd7j6rNSDKkJqdLkNPTQ1Jh8/00HAAWEyhBIFGBiCauqTMG3r7DMksuylljCS+OOC3NDMs08M8Q0SzxxE8Hc1A5RWI8Er5w6o6HRrTyrQQul9jYLKz4mDBmNyEJjNfZY1hRNCkBZHCUwKkkTvAorK6+EcNOytPAUrbRCzTDMMTs0FU0Sp2PzIuuyexVZdr2zaJNQUIklGMg+wvU8XddLySVffwQm2GGLNLJdgmFlspbXYAtQtkchEYUJabFi8FJMVQprNwkLyFbbTy00DjmQwl3OTLtQLdfEcqpDV12BCnZ5u3fjnbdee3EkSVf1eOzX32DpE/hloI9k0r9lG2X42XairXQ9rSjG9GKMJdxYW26J+/84w8nILLPkNL/5BuVyUlaZ5aDLRo2xUBzjyCM8c91VZz9h0uJfAHz+2Wy8TTuYaKQYfbKCRyFNBWIqmXb6aaiz1Dg4qqv+8jisQ+5wa5Nj8RrslF9ZWd28O0eMMYxQMWNte83Dd0+4ffxtbjsgoY/YYj2XfaK9E2bW2WejGrwqiXM73FrfpJ66Yy+r8VbDGsUlufLLT3lH7LHfnH36oCo6Bl7RhSG97dNR7zXu+KSYrymb7qb+fIIObjIpv9Fp9ugCDWmHhzRmWXriittLvCvhOSU+rWoYD0PIw4byTiUivTTvHe/4S/RWhD4I8qQitsBeLLTXkdKFqXv6+p7qYGL/FtDUbTTlK0oEO6e+hLXvfQPKHTUgkYo0JKh3Tcufxa7Fv/51injEESA4wAEySXhELs0BEQL38rVThK2Bm3ugCZ04EeulTV7CkAvbQhISt3nPYu/pTHzsMJ8KBExgA3tirNTHN6QAaGHwKxA12iGKqRQOfzXUlOK4hJVteelLPgSiEIcYBxBVTlVKVNkmOFdGREZkghW8oBXDRJmboYWDWwSfcP7lOvIlxSiJVJL61sc+NQoIcIFzow3CMKkFzZGO++NKxu7IsY5Z7WqRews2htgMXJJLTUkkJLoMKT1OBtMhiqBg2rhhwe1xb4O80l/c5FacVIhwhITapDC340mE/6UwlLiLnyGoUQIFSOpTM6wW8IKXwxh4aodqGaCGgmjLW+ZSGNA5GXXExsQmWlOfCiEM9rjRSCtiEZKkwNkkKQm1Lc1NCtEUzTSpWcJ9CgWbaEzjNo/WQjeGE2ISm9jvEHdDHC6OS3m00ONo+c4hygWXzRBGS/FSTzZpDp/rimhNDTJBW0gRmRjUkAa7p8WDQigmCk2F60Qji6Vospo2bQg2PwnK2+Eud950ISROmUrfefSjmHLlK0kqy6sRkDkqxWVLhaEXtKrqXL48JFPdOidiwusUxwRoT212s/QA9UGJG2pxmGADQzR0KUR66FIj6tSnFs1oUu0mNb4ZqfpxtP9pWrUWSFuJTnU67nGQc2cBxQXIugRDGNGB6Vpn+lbUUiSu8TomR3iKq5CMJEd5xU1mbAjShFplCU4wKvmSqtTWPBGxie2bGtd40cY6th1JSwMTZkFOylaWq+hM51fZ2U4CphSQXKNnucx1LsGwqq2pJW9B+inFf7o2oFe02VqqQduy2PZBu9EKVopTilTwQEi+LV9hgwu04eKEolCNKmPjhwzHPlYBzX2upcpZsflOV6RmqS63PHa8zsJTLoAsohH5Mh3qqCxFZCtvieFaTPHs9LVtG6ieJIkS29qQvn0Fhh9K4QQe1K2hI+wvUm7hySQF2CgDJvBipTrVBCc4Uqn/2EODO1pDsey1Yl3NVnXXeV3IndSzf8ylLj+8piWiaMTjNXGZv7PaFF8Qg6Vjr2zdm1fUxbiOYxlqVUhhByYwdL88Rgdhk/LjAPdEyBNNmDaNe9ymjPIpU6VqkiGbhj1cxnAPzp+UJcwps2RWj5sF4ls6BIoPbVeXuwxzm1yVTzOn+sxonqJ6A/rIFr+XW+thZqYwVV/71hjPooBEYPfMZz8nDNCDJvaQiVzo9hlXQMte9KK7aQgEJ9mNkQoDpKEbXQhH+Jw5XI+m9RiqLGdYw0TkblpBbFp0HYNlLVN1u29KTBSj4p8AZXOb3UzQvF4mvjG2WNTIcha1SKEUTBAF/w98/WukGjfYhWZ4wx3O8GQfeoXLHoainf1saVNjBVVVQLWb7GBKr3LOYqGy/0haUnDLNsNx+aOoRZSmXYbYlxdZN7vdffN3X0eu8lKxR+odiNjeW0EmwQ2MowzSjP0718UROBOcUPCD/1pAh6Z61a2uxolTPNHNbvaz25jxjbcjUh3/OMixXWlLS3jCuPE2yr3VaZ+PlcOB9LCqZD7zmuNc7/yE987p6ur12vs86IGzpPe9G8smfUuMu/AZZuH0VCjA4FFftNYtf/mtc13zAPB6/DKe4BVAQvQdh/QeglOWyZ5d5Nre9oSzpc7/EYfTnX4nyzcsalTBXK3ovp66yf+8d+DDldV0VbPPfw502eaI8NwyvNGhzIKMaYlCFZL9caRgh4E31wmpEIUNctx58Ie/0Rlf7nJHH840pH8PTZb0pCf7fLTv1bKKc31w2i772Z/0nVu+Pd3rfu5CSjcSCz4CXAjCKCb0QibAYzOgQ757Wz608JSiyxj4g77omxDgYBzqwz8MIQkpOAM7wL5SmIVZ4IEVOEEUTEEVPEEZaMEIiIA04ChaSz0aqsD4S7spiz5MkxjYs7DqSznaizvtwr3KkQ4AnDmaW7cCXMKGOMB4OyYz0J4FdCcsSj7lGzqTaD4Y4zcou0DFy8CpkUExxIpZkIEXNMMIcMEXXMMIQAH/N3xDFIiAPbDBCpS/kWu9tePBtnO7twtCuLC9ueMu3QPAAEzCAWRCRDTAA4SXBGwpXKoin6PCKkw+4yAO5lsQLok+OgwpL6RAGvxEBYBDURxFFLgBUzzFCJg/KLNDVsqfC+QUGexBHwSrWYI7nwMFQOQwQTQ3QkRC8fq9RAxGRYyrnZM3C5JCSIxEKoSkB3wvOIvA3slECtxEtetECYEDCSABbdxGbuxGb7wBCcg2O9xEL8Q0DZRFzcKyWqRC4xsrIvK//zORu5s53wNGYbzHYdS5YuSGKETGZAw8t7BC5SO8Z8xCjuKUC6TGCmQFFPBGh3xIEkAChSS5ctxBjoK9//8pqc3qQD+Ei5R6R0EcxO/ivV+0R3w8SYZwQkYUD3nBC39cM2WkQoEcSGcsSIOMRoT0won0CiSASJ/cxhsIgy7sRHMMQ1jaQ/zbSI7UP+Mbt3cMrdxDKyOUx1LzpXo0SZTMypTMDgRkSb3ox0f8R4A0HSsEN/yzsE9RJzEsyi20RgnhKigggVOcS7o0RVKMgEV4RbbUQD1Ex1nkQHDLsuQTNyEcQiJ8OV7sRV/8pUPUSseEIpzqyhSLBbywi7AUy3rTkJkcyLU4SwvLQowcw6LbS3NMARmAwzZMzTgURTaMwxUYKjHESL9Mxx8MTMFUOcLkv5Y7TMT0Lnmcx3Szhf+rBKbHLM6e4EoKWkm++EozsEzXwsyxlITNHDyzTMrPRMu0lE21FM00YEPv/E7wjAAoKIWMvM6kpMXA3Ex2bMoC+si5C6Tcg7mpBDN0YyslNE78FArkvIi/MJHlpEwZCYaVSin2jEmZnE7OrM7zxMLrbFC0UIAWjFAJndAJTUFIWFDbTM/pXE/2/Mj+400j8i5CLMTeqzmby08UrZ4DDK+V9ErK7EcBvUzoNFB3QlBKzFAcXVD8g4QVXMHPSzIFyFAb7Uj2tD3DJML4lMoPG1F6FMC8S1EoTQx10ccW5YtjelGzWqnnnFGPGBPJkMQhHVIcBbczaIcfPdOMSwUE5dD/AnXK3QStkkGTEDVCEAuxQmQVVhlO4oxSPlWM7DgGKu1P/zTGF+1HKZTRIWrTAv1SMA1TRy0FNI1UZJhUJggiZlBU4/PQI6WLOEUTM5BPOv3NBrpTJ73PPj3V1ZhSCkrOBpLHD0MrvPAFYSgZLYUMTcVUTL3UGulSRpXE5BgTjwgW8RtWQwAAJshUTX1T0IJK7vpU0qLTOh1VUg0MEz1RVL1WmEFO4USXVh1UnmPOT51VWq3VZCVQXD3XXBUFYi0QAGhXd33XDIiGD507Zg1JUF3SOrXTALwePL2easVWgHURlkmR5ORPQWXJ/wRX6BDXONVSXOKwco1Yif1IbLCB/3e92HfVPK4Tg04NyZeSSmj9TX3d1967nlNrzIBNWYEdWOGkUkY8WIT9VliNVRFh2I512FqlC7pohmVdKZ2tVVwiBIt7igooWqM9WqOlODGY08S0O6qUViQMr1bRU5RVWauFk5ojWH7l1lH9TXyVWanEC7H91Jd7uY492441K9HyBSvAPAGRBbiNW7nVAbq1giUV2ZGdVjy1DqrFyqv920PJWoItWK7tWrz92iUFWcVdXMZVXDGIW7qNXMmNXIe7BSuQVr2lx771W8DtXGSp1pbVWl/EXMPFW9N11a89XXl8BzFguFt4XdiN3dflDysIDH4VjJLdXM71XN4tm2qNTGnhNFkWXUxfIl3jPV7MLYccGC5TaF7nfV5TaADdNdXerd5E+l1V1VrcBdSCldrhJd7tLdm9/QfoLV/zNd9/oF7rXd/Uwl73ndLw3d6TZRk+IN/zvV/nZV/9Dcb37V/3LQRcgN79HeAjCQgAIfkEBTIA/wAsYQC7AS8C5gAACP8A/wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjR4KKQoocKfKjyZMoU6pcybKly5cwY8qUSLKmzZozc+rcybOnz59Ag7a8aauorWNIjyK9OVKo06dQo0qdSlWqTaW2NiHduqmr169Mq4odS7as2bNWrx79uimU27dwQ7HtehOt3bt48+rdqzBHgg7PtH49Rbiw4cNv526yybex48eQI680RbmyqX45GuSRaxjVt8+xQofm9o0bKsNy2R5jLLm169ewXVueXUsVECt1CH8L7cuXsN/Ag8dCdbrw3NUkYytfzrx51NmU18Fbd6v6DzGceP+Oxr1792bNfg//J0449VfkJZ2rX8++vUnoptbV+lGdlix2GYIIC9YsWTJJAAIYiH/+gdeMGaGR59Z56IXk3oMQRijhQfBRRx8t9skiSAbYRMOMOIEEQg4ppJBjIjkDFijeeKgseF5TE8Yo44zKQVfdLRhmWIETZ4gjDonAAEPBkEECQ0ogPiYTzW8IDneKi14lR+OUVFaJl2W11IJjjrIMU4EodvhRDSlDamFmDDFoESQpfvgoDnhmNHkalFrBaOWdeOb5VGVZYqgDOugMMwwjPDABDgVaxFBAASywkEIKaQ7phx8DggIngtyUZ95i6enp6aegwkSZljjqIEuXjADAQymIxtAoHK82/2omBUa2mYylwsTpJJ12hurrr8BqZAqp9qXjJQCGKLCEoo124mwncMBaQJpGkuIjKKAEk6sZxW3aa7DghituQqbcKIuxgyKbhqtwdJJNNoNk46y0BWhBK6XiYINrguV5Zcu34wYsMLDlVneul4yUAAm7naxijCsOryIvC4vaSwG++jaj7XhPguXgwCCHDCqptwg6KDIy7MGCu6648ks3v6wicSeNRnpxIJJkLJ6CXS31schABz2luYIygnIYK2ezzC9MM/CyMYPQzEKk1VSDc8bN+OJkx3T9LPTXYD94o8kArIDEyq788QsDJ5zAdDfxwkrxkNWAgzO2WWs9Z2rIhf/t99/OjS0oANIgAccgrrC9wAmLM9DNzNLGsAQFdQOIbTBa7xql14B37vlj1ZEtDRQsDPKH4rs0HrMx2chdL63gkJPz5Xpzzakin+euu16hD1744X+csMvwC6jusNT1LmFk7NjoGwzmmt+++/TUk9X7MADIEAYcq7S9zS4EELDLCU67Ygy0FKe5RN2y6xsH9HN2jXv19NfvVO8VSCPDIqafsM024RPfApzWDdZFTguTK1HOsPG+2vGNc/aLoARjEroKEA4Ki1gF2/4nh/ClrnzvOuDkgCG7nDUwep2aoApXqJIKEs5w3VsAADsowBMsw3ytSx8CaVVCUMShgfGTHgv/h0jEjrgwAhlkQCU4SMMP3vB8clMfDwF0KyByDYJFzKIWH+LC0XGPcdt4gByaSL5fmM9ZNZMcrUhhOR9iLohY3KIc51iQIyZxiQQQIw0b9weooW9aCKwWFd2IwvnR8ZCI/AeOsEcNSHwRgA/QowCd1seoNWpaMVhj+6oYDCdtLpGglOMRWaDBSoQvkjTcBvn+4IpBDMJ1ajTSJrOlt9TEMZS4lGDJLEgNKMBBiadEJQG2wcdWvjKNyisROZiBjWSc8IqGzKU0dblLaazgkXkU5jBXacw/pmCEymyekjp5mldwaprojOAR91DKbAqTmJQ0JizVpExmMFNJWjtFObqW/85+Vg9HFixcO91JRgawchVRkxukNLlMZozTF+U8pz8nmrsKehGY7hTjJM2IUPSlL5kmkoQ98RkLfcrllhRNqcgs6stVmJIAlKCENgf4i4PO66OaFKlDo/HGU/BTpUD9WgUNcU2Xhi+mM3XbQRN6yUzKUnYjjUY+bRnUqgZtl2XDZkxlqtHxMeCGx/ujGpWpU2eS05bRtKpaxYXVCGgVqV3lpsxuOjVwlrB5tDzNT9fKV3C1lXsMAOBWhflBjnY0ivaSJYDuGYepSrSvkPXVXzUoWLh2sLAQ6+gfE0tWZhKyRXWKrGhBNVn/wdSyG81s1MQK0hI6FIhoHa1s8bRLQ//IgHsvHWxXaaram06rtYt1HkR92rfZGpdGLMXtUVGLWZmtNnIJDOkCLTXcOqX1uNgVWzUdiVHdXpa3zvXtWKWL18aWdK/ZTW97QvfCX+aWuQM8qGahSwGyijRjjkWpevf7GqxKIwwD9a74yAfW+eJUmTjzrHmfVFz+Ong5bSUlMB8wWDLWtLesfWpwqVvSk173wSCGTHKNelqu7lGpEPPjZoE73ayd97EhjjHoStbe7qKWADQFqyt9G0j7lre6//qwjIdsFzsGGL7lc+5zKcZZ8gpXr0EmspTzMuIJ33h8F3bYjhGbUwDhNRjckkuDp0zmsvjXcDY2cfgW9wuwqjj/iglUoJc/K5d/lfnO1sOqDCT8XjU3F6FL/q2G70vIjtkZz4ieyiIB0EvcQvLGbD4o1JjKZIZeDb8dhnGiNw0UI6eZsDlO8ZKn1mRJXDqvxNUvp1cNk5Ix0pHdMyWF1Txgg6o20OO9q/vOuokos/rXOnFhyo4cyd3GM7wefd2g8epiBq8G2NCWSRdhWAlZX1mugBavXXE2u2xxy6eajra4U2JRGRSA2JIsrKS3fMkeO9lSvPb1uOd9ki5uT4mPLvaJba1kukZq2Zhm8KHpTXAj+hfWNtZmYd086uTV993vG46YVV3winORFl4iKjsxSmF9rxnF/fbov30c8DpT3OIo/0+Ivb/40mJrtNZtxrDrdojg6VoRvSnPuUNc2EjAttzjG5XvjsXaZF370LHy1rnSFdLFFZyb4/ret9Ab7m6j3zzcS8/6QPCXvUW49+cKLyPD50VfgHPY0CfXesXHZsEVbG+gLm8iTafu76J7edcSx7natT5tnwdT4ZHO7JvbbVeo7hrpad87vbsIhYZBHZXf5abMy07yo+d9zIpfOuP5DECC7jvLmhV51e/uxuFOXMiZt3jT+Qz2MXqwjHRP9g41XF7oQTP1Wed5yuAQPLC/XN2ZNTBOad9My4MW67hfu39lwAq/Z1TuKJZ5U+1uc3LePvk5d+EK9uf8uHsw8JPXYf8yyVr7b8cW+yhnO+GY332gp07yyI5WzWZP/sNnGvPoX7z2uQ9396uuwKsle4U3XRx2fPiXf+KmfvrjdQNFUN8ndhgmgAy1QLeiMZpzgAgIbepHDSvAgBjlgDXkNAD4LLBUeMtUfnCEehnIalw3OnvgfNnkeiEYczJzPnT1Wwx1gvbXMRi4gizoagFFOjAIeQ8ogsFHgtO3RvVUe44lRD4YbS0ICed2Oi8Vg9BnhDKzCkioQ0oYUkyYd9b1hFBYQQGFBI53Aq13haBng8k2cp1lfwaYeGI4ZAqoPT6XhkVIg3N1g24YUgoGP+CGfBKCE3NIW0BYNvynRHhYQ0wjX1r/yIc9Vk9/6EB6NyF1UYhVIjhB+IKl1HlAF3QFxobz1IU6WHqFRCNMoQi28A+mgInIRYaMBgks4HOeKEkzyEqCR3ZJWC0mwkxweH0xkoq4gwGU4Yoy0oIRAEMMgG/BJIPvF0/hx4W8WIonlIIyIow+wIrFaIwSoonr93aKGEBEOIM3FI04OI2+aIrWaImpeAxYcAiWwY0RwnYBJYt3+Hc0dIu5qIvDRyIm0jy/iFYq2BxMEWTPoI2VIY/adYjSkIwN04nNmI/v14j76FGkBk7h9IUpOJDLcRWqWBSb0ADQoZDu4Y0LCFhoWIvOqDp/4IhbCEgY+Y/6oo48mELtURMg/+kVeUCMs0GS7OGNFzSLpVSFeqSG5ZiF/AiTpChO6mgectgaJAGScFEICQAfPrkeJmmHq0CFKimRLNkyewgt8zSATFmNTsmRsTESUhkXiQCPI3mVzaGJQeiBKRmReaiHojiWE1heVnSWECISawkX5ZAAP1ALbwmXynEjGFcBASUDZniPpySD5AiWYWWRaDJCxOdG1vdAaPkaatkWb1EYdXAIt3CYiAkbN3KIhjA6HsiMVhhAz3hhopaUUjSN1UeJYXiTgAmaoXAYhPkD69CTpxkbQNmQZjgIQ+mJY6SGslmZ8id+pHhPNMmZ7rGboWkYo3kLhWmYCTmc/YU/ARUBEv/Qmnj0mnmIixGzhdCZmdNpXZ0pGbsJmodxClagCtpZmN3pna0hl4QTAY7ZMFRYnkX5fV9pjrWZmT8EPwuCHuwxEscgn6eQCZ9xCs+QAdbxAz+Qn/opYt64mhEABfUgM4rYlbDJkqFIgnppmzNZjbZjk8xhnb15Cp8xo0Rgn7cwH9y5ofvJdf0ZAXhwhuWZR8vpQbGJnm8mN+vpjwTIotS5HoB5DG6hG6ARGlbADjeCn62ooxwKhOF5AyCqQeFol3eJnvOVogjKpJ/kpCGRFTEKGpkjDBkgC6mZo1rqGIrpJQHVkDKgCVs5ohHZREVKmaLYKEkqZysKiC7iosohEsf/YAtR+hm98Ty+gAlOIKfVkSVZWqeNUZwRgAJcYAzJKY62OIPNWaZNpUZduKSIujnv+Rgi0RVtGqnPEwxVqgO0oJ2YqqmbCp79eQM3gAQaVJdiKkAFmp50tZ5nuqruqR6M6qi9Camz+jxiYCo3kqu6yju82pARcAMkIAB0EKaeV6JlVKrPhaRKyYtzNp0Cqaaq2Ban4Bm+EAw/9D7NkAHpIAu3eqOGea1UVh+CYkEeyq0CIAAQAAgCOo41BHuCiqLTh5n1hy1oKj/MGhJI8ai9Ma9KAgpOcK8Yoq/8ihep+a8A0Ksk0K0QAAE0AAiiOqTiU6RHaapJmKo5w0nKyqDO//Gq7ooK3OALcRANBJIMOyAK6ZAj1vqxaMGfDemrJouyNOABDxCuRQiNWsaw0Cmzh4qbNnuzFPuosdCzAOkfhBAotIAOtFC0Rmtm2RoB29qtIsC04eABHjAKCJs6JkqZ5Uqo56qkM+tDGoObTviia5qzO+uz2DBSyTAJgkILtmq2ZysWSJu03UqwNEADbwu3TsuypGqkd9uwRKK3xceknNmqjcGoORsL3NE8ktCLdsAIw6ADi7uvjTsW/BmwkXuylGu5G7ABRSCZzyi1xnCkl5S3hlpFEfu3gNuobWq6ycAMIxJSGcC6rlu2tRC7suuvx0KySzu5uJu7HuAAJcqSmv/Lj1WLrt1WjUGUtYCrCLD6rrEgDB6SusrkB8/buq9LvVVxp9ebtAJru7frAbm7AZbrvcQzruErlniLJvRnqBAbseibvg/am6jQtf8xImsSCEzAurJgqzdqv4rGqUorAG07uZXrvwBsueHgDL3bnJMmvucqSOlqvi36lHwRuJvAvr7wvuRQJCVywcNwKrc6vRwMFSGLpz0qAxIwsG67vZbrAeEQDjTwBG1DSUcJvJxrtRArqdHTwB1Jw+wrDBNMJmvkBzzswxscxPeDtGorAcBKBSE8wty7xE48ud9aUwX8nOlzoHImCcQLiDxovFusCA/cxf8BxkNCORdcAWQMxGb/3Glo7J/AqkEo68YlbMKTO7kQgAcxJ2qbuyh4PLyl57cAs6gUW8M6677MIAlgbCZqwgQAgMj4WsaL7BNDzJhF/MhsUwkQoMRwXMk0cLIQgIsQM3R2rJRW6x9x0Le7EroNCshd0cXRAL/Lkiir3MqJHMuy3MiOCarLWG2AALdvTMmV7MsiIAIt87ube8ez58Izm6B6c76KusUPSsrt+8ykAAzL8ij2UgqG4MpyqsjWnBOzHJ6OrM1++gTfDLdNHM4nO84iQAUyIy8GfKrp7LlXrKzLyq5r4cyoTAFo4iiZtASQwAinYqn/HGzWS8vaqsbIuc3lOQpesMRMHMeWDAEM/y0CAiABwmyuUlTMPsSiMSy6rjrKvckN+5EMI8LRKUAxU0MBkAAAPUzSJS1tJy3Qe7rSfhqZDmDCMu3LNG3TAysAXMDC6hOTAeI+JxQ9F82uD1zK/ZHDSI23WqAAhsAI91odUU1B12NBRawJVl1tnSekcpAPuZzQCt3VX/3VhqPTZuKwbPTCWLw3PfPOfwyrpRwMRi0kST2LTJYGc13Xt3DXLhHQI6utUKAHfR2kAyoHlMvL4nzYh00CenDAnVzWVYTM3cKqDzLKbcHWl00BSR0tcDAts4AMdJ0O1ZGpoI0Sot2fMlDaInrVgJ2PgMDaC+3Vrl2yNxA5O02+krDA0P+D1n6stfEcCqXsszmsBb8N3AWwBFAAAJbQw3ad3MrNnz2KBCEKpn4tjpgrPk8w011t3V9dsiUrASlAzNy9x72RzLid28y827HQDKAAIsCgBa9yUzEg1xgc3/L9EfiL0g2JAkjACiKKhqi93+/nDOI8zq4tAAJOAjeAAlAw1rSizreimQ50ljIMGbpN3g8eDeLgB8DgKrNIggWQBsT93hq+4RsxxEQsDXoaBg95ywdr4otDPgSr4ive4r6KAiigABTA2GVd0bVjO1qspmvB4xD+40HeLJ0QN1NDDU49DEmu5Bix3Nb0oZrAPadD4l2ZjwnrNAyg4gDO4gK+5Sigtnv/MOMkEuY2zjHekuORsaYPzA3tG+FAzizOIjGtUwAKQNyCMud0ThF27p8gClgjqpyYO8Djugx4MOiEjt0vfuhqKwNr0thtxM78AiWSPbGCEQqULgyWXg1aUADtkg01CC17sAKsK+efHeoVkZoYR8Qeqsb0cNr/E5mp/n4E3DJH/NqFHutq658r0A6LHiAInus4DtSuERK9/us+DuTD3i4RIzGwAgnI8OnN7uwSweQe7p9Q/tx+jep+rupOI5sQ0+2v7uLgPusysALUoAAB0t09jTk3zqrqvu6quNbzrObx3uYy8zjZwAKLIA1xDur6znSj3tx6wD3BGvDhs5wDXzzk/0NJwIxQ8tCtWr7w/tnw1EANyMAEt95AFb/g7HjmEey+as7RK4Ocq9ANBUQzUHDvzH7yOyc4RNyfZgMtfcrnnQfzAUSsM0/Hdhs1mpDzXB7uMsDzPo8MyHAG3p3gt0307DjeR//uQuIqHs80TwMHYUDy+E71KE/fTv6h/47fS3TtMC+R2l7wLWm3EA0HXADrZ8/wDr/2yFACPOBM78PHj37xsCHpDg7syRAId78ybd4Ny9gNrkAz9v73gH8Q/K7XDWk2b2f4/zNDJr74jTjFOc0CEmDoaK/2bH/5IysKm9/OZB7Kf9ngPC4M/REIZELhK2MMMLM2ZtQJeyADJZ/vr/+vSAGdp/6u9Xse8EwkmWBPwLz/+EjK5bK+8yvg8GxfAiUwsgDACBkAP0EkP57/+YAMEMc2hUIVS1izZIFIAdPCgkWnQd1+MWBw4pcrOEikMRp269Y/kCFFjiRZ0uRJlClVrmTZ0uVLmDFlzqRZ0yZNjx6H7axQAQAAaRFWQFkEZ9UqipUqbWPKVM5TOQSkEti1YMEJir/+/HHVddUgsJ3gjHXIokAYFBHUylixgtoKZHGR/WTEqGeQWKhQnQq1ye8mRYEV3SRc2HBIwbYGnjKIUCEwCgVYwMm2qltFi66ywVkBYKfHw6FFjyZd2vRp1Dhz3uLZE2jQdmHEHq2otOn/NqhRp+6qegIrA61cvQ7KNkgsWYcFCsRAsrbtW7kl6NqtMEzQt72h+voVPDj1d9KBFYdifDCZOD+QY0yuLJEiVleDwkjz3BH8ffz59e/n73I169Z+CmqoomirbYHbcpuKKqt8A+6XZYQ7KqzjyjIrhhi0WGIFttyiJrrpehomHR0y4Gs7wATrb8WXAhOIPFTMaAYU9KqhIIYC4OikvROuWoABjKCQ5rOPWDTySCSTVHKk1WgJ8LUIIJHNKKQYsC3BpxbkrcGstFrGK2MoRC45DDWkYJbnPkSmBOkAqEtEWWTRgRYrtjumuyXzBEm8xQqaUZzHcGTPsop6Y2AQOGQA/6A60PR09FFII/VvtdZ8AioCGZDYg8r3KkGwKQV36+234Lpy5Ssx4bBwuQyXoIACYMKgRs01Q6wuzjk9emaTY+4MTFIkxVPslIKEoVEccBiSTEdjVvmlR6sY+GOQRSJY1D5gs9V22yP/22kY116TAYopDbwS1Cy15PLBCL1C1bixVE2O1RhchRUYUngA0U27dpIz11tq+SfFX7ldMTC/CIpFRhrBqUYLQTsxxpjLTqjqqmnnW5SWIg32+GOQDaP0SWmCIpceTmtbCt10pdryqi7/+PLUMI2rsCxWNbQXX1LImSSuNt/0V4dca6nFFFP+UTFk/VxcbOE//bBRUGad7f+xql1O+CMjaRjtmGmwwxZbpCYrFRBTJIoaZJU/DrwNt5ZdbhCrX0odjrhObiazVVeB4ZkcSSRhwpAQdyKRFo6NRhpppce+j08YzRAmGmwC8YMCiB3akeJCqcp6a0i67uhrx0s3PVJvSZZm3HKrPOFcuOPe0sEHZe6qWbDgHVO5MnfmOfDAkxHFTRHTkRPxgI9e3JRDTk9NMIGINQiUyqW+cdlsKJ5ogV08P2EVOIT02nnyyzcydXAtLTkCcmdzHfbYF2TwKrrtdqVmm8c0azmIfSeFFOBJAhSg2AF1RnS8xClveeY7DeQKYoZgJKNy4MCcZB6SPYn0yGXb+B5nrkX/OgaGUISiQV+41gcFTcFhbW3r0cpYJr/ZkcpLpsLfceS1N53d63+AA94A4xCHDFTHeABT3PKSNsLRQI5YEKSe5dSDvWy4YhmdowoHwWctRiFRi1ucSQnVN6C0jcVcC3Bh7HTjsos5qG5boSFYspENG+IsZ/7rGfCw4cM4BMMXgvgXx5JnxCNy8TB8kl4wmoENSZDDRlqwIGWiuL3uMYgBV/ygIC15SZJ48SeXylRRUva6T71QXfSL2cwmlKpVlaler/Lb/wKYDFD8MBh69AUniOZHBS4Qk4VxINSwMcEnTmZHUnzWAqQih6pMkgVYxNYunTlCL6pPKO37pKfeFio0/66rbsuY2ancCMd4pRJDS9jZDgOIx1n6Ihax+IYYEgjIQD6zJsKK3EEQGYhFNvKNrsigMQkgB6Z0kJkglGdBxRZNAbWFmgYC5W12gU3Pza12tqMZcXR3w/1lyEw6rGPgsAFLWfpCnXo5xTdUUUQjGvQmvTwIKCQRiGRdT5jZkyIVAWrFTigqiyrlacg0KaDVLZRtSbFmUx4KFS2NKmbCuZ8b86a/C/GNlfjiYfBimUda5iU7oehALeCR0p7OUxHjOQU3JEe9RC5yPTM1Rk0t9s+bdnAFhhhfWO2KurI9CSgcEmrbrAQ/iL5Mjfab0BvjKEeNkpOjVf3oVdO5zr2cyP8vOQDrXWfC0j9JwmEVnIyOVtFWFnYvS9uoBPjENzrLpjZJ/3HSkwwxoL52qoxmhKFSJ+qu3D11d/RSLEcD2NiQjnSrf9nEM3Sp2pgocWHGQuRmZaojia3CFZCEKwFIy4Dwia5RyOUufhAKpXEtwn1+fd1sIRpRUm6zm++6qDj7N1Vz9tCxWSWpdoj7K8Z1N7ljHUixMrvZzAmzE0eZLgO4V10CVGKSGtkYQfX74ML8B0Dp+yLaxEsl8gIWqUmVKLtmNjGLHnZevfMfORiLTj1C9hSS9YuvvAPh/dqCPGZlbiIBvKy8rU26bTvwUx6QYGUO1MEwJvKkctJaCgOVfWH/xLBsr7lhUXVYvW1EpXs32sqOevSqzaDvcO+7tCK7RDD9bQxayUGKV1EtxwQOLVx/jFMZaHfIYaYzk74LJUikMGV/NS+Us0lKD9PQGG8Ep/54J1Xf2hHF6tQqi7kD5jq3hJDFGiA2yOHctUJXx65os4+lomCuVTLSoyZbXpMMpaGEobMMVUqfzziVbaRRhtw01f0IXehV8XZn1YivVWWZ1bysGEW8whOpJc3fGbcUkWdWq0N0BBY22/THQF7FMj84Z2MjV8Lf6omlUC3U9802fvJjipQh1E1bE1rEUX3vvaj620VD1sstLna2WYJZMy+Es2OByKb/8KxIyuEBby5t/3Y9wzF7P3jb3DahNPjK5KNkWNx+tm65AQ0cNtKwOHgLJ2K1kMPFnnO+Im20owlWsITfe6wzZtgvTaxvRgoY2jsu5jEH/ulJVuvaKbeshJHc7U2uj3WsEGOV+Py2ccN6G2T0zW8okvG74W3dOdPCq0Ku6FhyORhmkLeje1Vvnqv8acq29JmBsYSYaxranKauwG9eiQ4KaedhL6jPGd5wtaDQk0dxnVVc/eqKe8pBTof6KaXe8RFnyOo6rKok7jhyrgebL8Q9+YvpvpIxK0zZiTT7EtTc7023feDTVvAq9iADuqL28peU8IRPXbKgsA5le4YW0s9bbrg3/emFZ69uMf966I+zshq8zvJHkxENrKa40fb9MspXr/JhxYi5y+7853NH4Cm+9Z+jt24ltsbguj5fhK3/1qnBq/eik9cqoRTlgiyu+90z1fAX/T3VrQ6M4YOj8Y//NaNJavLusDzxw7yVK6uWo76F8DwcAz3sq7ntuzlq6wS5C78BNB27u7ugC4olmxIdo4iKsIq3Oaq4kYpY67D46wYUnD8bqr8yqTqryz9wCASs6z/hEjYU+TpIq8B7Gw9U4Aay47wEtL7r6wrqekDSm6Q9WAH6oEAdBJnWQzLzWx+hQIIwqAcVirhOAUGm2IVYOy/ekDUPlBauQMFTeRffs5CMSqwXrAZwiMH/wBEHcYAlUGgGLiO55Rs2WwjAJmwRZPMvtALCsxNCsGgWYtKgf8oHCFSKrQkD1KsO1dvDbSG/u/M2KWQdK2wyzNBCozov9IK/3TOVbui9ddufFMiQevEf/XulAaJDYRAGM+C6/2M+estBSCRAHpyeP3y5YBKm3BkEQnSPAzNCnAOfMMAiJqzFJWk91+s2StTAoaDConOdhgpBivsz2qkb+/Gm3BpFsyjFcaKjxhOHx2NFV1Qxk6s8ZISJSWOiXwIes7uRTAO9QZSufhIttztCYjTG0cG2dAQPZSy/KKxEFNID9zE6UGI/pxhBNALDiZI/UUQ8C0kBb7yyvwkgx1vF/2ZoxXXihlikPD3sR3VUhOiJkWCgHkR6qXcMMLWDtrZyD+2TA0ScNmrLiAhYwn0ESf14wvJjxgzUQBQgF4LERJVBSLiRH1GRNRnaivXqvXjBKIeQyBa8v4qEtznMSGHYSI60wb/AQefDSTFTBL8gFl8oyXZEyTOjAAWUuV6cGH4qwnskwdKDA0a0yZv0StJQRijkyZ94LQ3ElIG8wqHCDKUgymr0HKTsknOrNdzJraZEQxaASo2Syl7TsqwLBleMvI7cBFvIw4+0y5AMS1QYS5MMnEDQRbRbwF70xV8spoDjvu6bJDhYhDhbFK/hR89kCbwESL18jb7MFCTYDL4jr//yIkyFRC/6cTr16gbFzB044sbHnEgX9Jup9KhkACms8gXMjCzm28zOvM3P3ASxjKCyLM2UbKQc60UCc8lgfMvXBB8WkLtrqUvvxM3cnMRm7MufRIKg5DsP9A0yQrqk47C5kaFzI8PbqZniOEPHhMzgc7fJNL5oiNB08j/t3I7N5ExanM9j24RXCE8JOknyhLl4lMeZa8sPbE0IvK4/WIVOQILZFBH51NBSk0T77Em1iAAUkICBHDAslC1xC9CjHFDE5KZlUE5BuzUFlSMGjU4sI4dAeNJAYIbqjNBomNCuY7EL7U4Z/cxXKIfQDIZoSAZmeCmzRLN9W8nro8eJuJr/Y3K7qYA72FwEISEcGF0N71TGW4BCCvM23rxRFPhJLtAEiODP9zhIAC3ML1y/a1wjqDtQJF1BNFQOb4zMxXJSGYzSKZVQYItFO9FMDO3KLU0uv/DSWABTCQogXcScEU1N1VTTE21T11SKSTKOYqSGn3DEfbTNsMPTPNXN3eTLvrwBQEWCetAxgzTUQy3ORD1OD2RUprqfibm15oTINPxGyewZS31SKT0+TbVDTiUuW3AxUA1VmQBLMguGOBjNS2W2NDNPEm1VE2VTWJ020sIK8EkBF6UP2iSSnFg9XnW9SgkXoOpLHB3WYg3O/hxMAAXSIGXWIaU13PqmaaVW4DvF/2vlISjdVk3d1Mgqh3J4BeISVwEk13lKGMZA19F8qRBtNgF714lxVXl1M3qV1RVVFSiYzX3l1+2qs3/V0z3lU9gLVmGFAi4gVr4zuqEkyoQEvIaFP2yUGYiNulSh1jT8uN6SzsmUBI2t0sdip29YMY/92ObLUJIVq6fxhRkpy8B5OTONObVMzZdtyzUNRpklQZg5CjjYg3xdQhjNVV2tu54FyJ8FWti70Qi4gRuQAQkI1HpA2EJtNaVl2IVU1EUNjmeF1uJI0BV0ymq1WqmcTq2tTm61Uq9dsXcoB+0A2UcDu7I1DIQBT+lLWdJ8ORuRqbdFz19chrmNJLhKl3KzV//3DAMoqMlb7dvWM6h/9Qif/dlNGliCRdwIWFz9tAdCfdyiStbiNEwhRcytuFwQsyj6c8zOdcGL3T/R7VZG+4avPYVyeAftQBEtbd3QcBrNS1sQfVLaVdVlQdPcaRbpIqZM5N3cuA04rVk4YAUFiDN97bbyO15oSt5eFVxmFFjnNVzE/dMcDVRNcNxMVNiF5cTJ3d4H8RJ0Mzx1g9Rco5ePI1+/gUET+61M5Vo7VF/TdV9ZjF/5TSKyMiv7BR78ZVdVdTb+7d//7Qbd/UC6HeCmgJlJAp+zgAQl1FfaxFW/tVOfgmDlFdyABbrmDVrDRQHEFVYJkAAkQAJEiIcezUL/+Hmy7NXe7cVGCKEoU2Gvw6PYQ1NDVqKA4WPDVKTKH7pO/1vfd7Bh+GXdHDaNSSsztS3T2nVbfnvXmftf3d1d3u1dLvxdisBbODiLBI7iTWLg8vMjZVwtLDY1CZ5gPnXe5w1jxJVePNhgA7FeT4lcM2LahnXYEZYZOYZWBOW4xoxUekG0V9njNnzSN3Q8/ks+b+1Y1B02HD5kREYYgvDBHiZNRn4VR4YuSOa7rjDiiTjRSoaK21iXCRmLRUACSFBgKZ5ggBRlCFaNUubV5bVPLm5eYJXCG2XlG6CCMeYCLkCEMvQr69XEDwbhEMblpyXSWquozPVlqEo8U+wtd+O1/xiUQeARxwGqylniWLBt5rEdWWj+DvGAEUU+SZU1MSDO5ryB5LUhRH46YiSuZLi65N/9Db4ji3O+2ZosmeZlZy1253gO6iaZZ19F5VRWZYLFUX0WY3/+54AOQ/+cZVpe2jb+wotB6KdtVJrBHwpB4VzDkMS6WizD1ouOQzmkw4zkaPb12Bt+5pAW6T6kZpM06TIlhUZeq5Zl1UH0326GaWjhDfl5ii+s6acr57HYgzBAAp0O2p42ai1+bMiObC026gluXnsOWnzOZ30mATFeXC7AgxUNzP4sr1leWCwpzFvGamdFtzJEUM1tSqdUDhXWGXvhqCyzo8eryla8zCt93/9XUN3KA+m3xo/EIOkftOYQtWtsFpTOWmm99kVulqJJzkTukWnB5o2a/o3QBp9wSmwFgOKdhj3LLl7KLm/zRuXxtux79mLDVYulvgESoIIc9Ww8QATqFe2BXj/TZhnUXsirbjrkTGitbhaubk6v/mpVIqfaxtrb9qhxROtWfMV1KjlZ/IsAFO7hbhppLquS9uG6vutG0maW/iwCk+66KVSrAOzAturs3j2+Q5R4KYBF8G5IuFkZCG/GTm8dT+/1xuySWYH2tuD33uf5bmo8AG003oowxAxo8ZTr3e/c6G/DvGpcHmEv0eqj4Oo6plrZBmurXXD8o+gXpsots8xy3Ej/vahQygvuDF8SB+KGWJgR2V3X/NXfsnjk82TVozUVbjpx6lbx2hpsDgJwD9yKF4fxjptx7/7uGmeLGw9ySI90935vDP7TMfbsov3sV0bjNIbqqCYjgobyKG9j/16/4wxwRlXoWjt05lxp2HbMLtco2p4qniFrGAaFZPjjjcZOrOTUTiU2Q27zYNnwHmwp2T1p2oUMOxfilR5xvu6KPvdz/6xumfZvqwZw2hHD7T4l2KbWRfj2MAh3RoRvEih3cz93dBcAdVd3LjhathHoJQdwUCejJ9/vWpZyazd1Qm9WbCRS1r6fz0pNA391WJ9tkHPQrEVmPFJmRtOqyPK6YwhX/7cW9mEnKz88dhlE6f8BcQtqbufW65ctcROXdmihdqO0duzOGmzPdm03dHd/+aNFhHWf+XUXAZu3eQjIeZ2HABE49Wn3O/22dzYe9ZM3Squm8n1HzFT/95BnTqnbXPGN9bAGc/xL+F/yoWZg+An/vxNBkSy9cIrPFiX6hjKb84xn29pddmb/eJD33/+V7ulG8RT/wqI/+qMPqJVf+SXfe4oAhJ3/e8CHABoYfMKHgIoTetsbdVI3eqvW96S38nOL2jnO8jDZOAOH+oIP5i+n+v+xdawr8wml0BXr+r/gzgsf17B/lMRYDDg39l+i67NntkaGmI73eLaH25B/eyOe5P9vZnJTt+qin3K7Z/GmyPuVJwAICAflX37mb37nDwcHCEEuFEGiD/66P3pT9/kwhGMSlvw5JnDmNCxX/2VgvmO+ofq/aTzqnNJf0yMJd3it3ErTB/vU95jVn7Gyf30f/uEzAwhS1YBRoKBFS4wCLBaygOOwE0SIgyZSnGjM2CqMq1xxdLXs46+QvxiQPGHyxIKUC3axZEngJcyYBFrSrGmzJh0I4Xby7OnTA9CgHpzJLGrU6E2VKU+eJOlUZMg/Hz92rLrqasaJ2bINyhaxk8OwcBiSLWC2QIy0B7UsWVKwIDBg1UjRJUdOEt682EDxjeM3GGBfvszEioXq8KlToRb/b2q86dhjRZInS/5n+TLmzJo3c+7s+TPo0KJHky5t+jTq1Kkn29oU6tS3WMKaNQOF7XZevIEk2SVHt9rbgwkVLgz7VWJFihiXX63abSpUpwyYKk158yj2o26Ecu/uPdyT7C9v7qq+lOkJ6SSh/pI6dVnVqhovUuTq9avYsWQZnk2r9mBbbsEVFzB0kXJXbpLcxhcofsUBWDCCFWYYYoox5phjlE2mGocdevghiCGKOGKHrLl2CircyFabbbjlFkhvvgkUHEJmkWXccclVdNFVPMb33jLRSYceSuatRB5NR23jgE9N9kQDlFHSAAEgNRl5HpHqMcBeVB+5B198rmTU/yN9XU10HFj57cefWf7FsFaAbxFYYF0I5rZggw5CKGFhFVoYimOQRaahIiQaeiiiiSq6qIcmvpbiinzd5mJeMNplIHDBpWUjQ2KhqSNFGWkkaphAcqnldESadCWr20AgJayxyipCJaqmh+qWXE4llXthdjTmRWV2tdVx+Tm05kJnofUfW3EOGJeBByaI1159/bUnYX2iktifGD52DKGFMjouueWae26JkrX2qIrCzCYppZXGSFdcNG5KXHE4fgoqj8H2uFGpQAbJZUi4qmfrCTlBsDDDDTv8MAQirEewSAJP5euvY4pqTH1coZmmWMgm259/cLb1FgVzRmvnnckwqP9nYHxSuG233oJLKLo567wzz+c6yu6KLE6aYCCWXkpKvfYOt5+nH3cCqkU8iooVwBhb/B7FWS/zBMRdNywC2CJQ8eV7GMeHFXPBcjXsIE4bqx+yyrq5VrMCPktnXdNS+zLMEfJ5GM01extuz4UbfjjiHJp4IqTusthivHjN+xtBSnN6Y9NOQz2Ivxv/25zZVl+9KxVhm366AKmrvroAEvzhK9XByn7R2lu17fbbIo/cZskm250ygXMZyPKdDOb5YMy+TAh4YosBiqGghCc+PfXVW2+Zhiei2O678EbO2+TVDISycPcim5/TOfIrO5mzU/151aG7ggjr9dtfvwSzL1f/pu33pf823EQmt94ByFl3w9uBiKcX4zmoGXuSGfME1xjI3ExD17sgBjO4M8o05lGxkU33IIcNZkxrckhLmtKGgy/MoS99+1qf/pgDLDK1L1h4EMH9clg/LtzOhREB4LF0t7tlEbBuv5sTAqWlt2rxDXkxy9bMuOU8bw0KZxq8IhazmKjsLWZ7hXGc0CaFjRKaUCCZessS1nKvy60JgD58o/o2d6avcEGHdlQdF/ADxAAKUVlEfBPdAvQ74BEoWkpcIgMb+EDlaStwUwzUBMMlLi1SspKWVBxr1sUubpgBjAwS4xgTFCPfgOM340OZQcq3xhWeb49wgCMsnSaB1JFA/wAkuGUtb2lLXPKSl0gIixDX5Ec3AdJ3J0MZEg15yGkx0VrXeuLy/CRBx9hCepe8JjazKZpMdvBRqChMJ2fzOFCSsYwDQSGNVKlCNgazIa58pyvpcYNe0rOevbwBEgQ4TGLSrVkUOCYy4zIQZSqweMY7ngMXGU1HPhKSm5CkNiMq0YlqhjWK0CSKIBVO2oyTnLkZ5dEMJBd0opFuxFwnO9up0nYuYp73vAFMYypTmKKgpjUNA+/42U9BAlROyYxWKfXWsoMqcpFQjOCfnge9KlqQok59qkQz2RrtHQacYOwoKEMpOZDKCFNzQmVB3NJPhJwUpX48y0r7GAabsrWtEf+IAFvfKte3hiGQdhvkAeWiTHCAQ6i5Oejxnuk3MzByZgy90AQxBFGoMrax2aSMLSLbzYyqKBYbpY3xsho5rnbVq18Fa1gDNFaTlrW0pi0rEuaq2tWy9q0ySANYkShQZRrIr38FrF84CiG/ySyKUmzoY4JbQSs6trjGvSRkp9pFylr1qgfVLKU4G1JDiu+cJAWrW07G0+2mcazc5akCWCuD8ZK3vONdAXrTmwZo0ZYu4CgoMwEbWCcGQxiCIeyEDPtbxH7rGP4dLmWOK+ABXzO5yn1NRjUaTnFi9pPQja50p6tM686JwpUDLYYzjEpIpLfDHkYvNUIs4hFTIxUJhG//fOXbwIQ+0AxQbCS3kkpF4UpykgS+MY61SCjJuma5h+FGZRfMYMA+WIzgi/Dk+NreJZtRfEisLpMFAgkSU5nKyLgylq+ciiU2k6i5pc1uB4vfhQZOxjM+hi0AHOAcs7nNlNRQZAXVY25VdUIudpcwgsHRx2W2yB5FMqBHWcr2vhfJUoCENKiRZSyXgNEleDSkS2CISQPACV221p5ZDBj7DubF+o2x85R65hrb2M2mPrUGd4xmxziPznUGp5D1vGf5es/PHrUtrnOttzNAItKSnjSwDQGAYRO72MNmhBMapNswC6bT+TVsmZMq6kBRkNSovja2dbxjHncTwQmuLKxj/53pBtPawbY+N7pByaBJMMLY7mYEvOMd7wrQm96iCEKzCetpwElT2lSkIJr9a+1sE7zg2oZzZKfa4+UmGFL5dfGd65tnwIx71uW+OMYz/rJmxKEZhJC3vOst8goMo+QmH4YsUq4DTkA72qHmb2L9m+ZqDtzgNr95FsNVzYRj6OUx5vc3Hw5xiOO56GGuONKTrvQwMz0YhKD3yaOe8qmrXAdWvzot2GGF/QJ3ggBPs5qJi/Oxkz3nNU64wrvN8MQA/dXPHjrcm31fXxS97kWHO2HzjXcXP9sKVL864K1Oi8ET/haGP7zhE/AKm3k9zqTeUNkjL3nkShLt3Gb1y70d47iGt93tz/486EHf+c4nxgqEPz3iEV+L1bN+9aZ4vSlyUA7HP74yk7897rVJarSjOc4zXnjmNb/54RO/+MZvXvCd14FbtL75tYA99KMPfVz8Y7G5vz72KVr7i1re8r+fcfLDH/zvfx/sHZA++tMv/UNkv/3uN+72k8t93ve+MWCX+f3/G/D9/5fncdZ/90UWZbiD+qXf+x0gArpZ/C0gAzagJOXBIcBeAk4gBUaeA15gjVWgBm4ghwQEACH5BAUyAP8ALEsAvAFbAvkAAAj/AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePCG2JtAWypMmTKFOqXMmypcuXMGPKPLippk2bx45tErnz2Mh/imYKHUq0qNGjSJMqXUqz5r+bm0JJnRpqoK2cm3yOVMSVqdevYMOKHUu2bEObU0+pVZvpFCpUmd6iOkVVatarPnNy3Wu2r9+/gAMLFqzraVpU377FWszYly9hjLklfkt36k2tezMP3sy5s+fPoCXWgvfPSiK1iRf7atYsDihQ2GInmx1N2GNfsbhRXgt1Z2a+oYMLH068uNFayG/9aCUm0WLXoCRJl0SuuvXqzJJFC8bdF7fvc9Xa/8X5G7jx8+jTq1+vEPmPWj9oyUeXgdBr6eSAAaPAvz8F/aSQIsls2gUDWW5yVRbKZeUFxd6DEEYo4V/IwXcLO/INU4ElrZwhSYAULBFDASSSGMOJMfRHjiSBMMNMNM0Esxh4c1FF3m8T5qjjjjzGVGF8gtAyjIaM8MDEEsCcSCILcMDBwpNPppBCDEv8V12LLzYjzJYIirdgTXmV1+OYZJZpZkQV1kKLDjqkMyQjjCCjwCwnPtlJJ8bkOcienUBZQAr8AUMKOYGIEw2MB8ay2yk2XWULjmdGKumkPVZ4yy2yuPkmAMhAkgaTcAyyiiuu/MEAA3+sYswgfT55In8Bkv8jzmysHZjgl1n5BCmlvPbqa3HJYaphBRUAAAA1K4TBQiejMnDCs9Ci+gerTrIgZaCkBFKodlpCphsqloH5qGa/lmvuuRTWckuGxBZbwgpQhJHNKt2csEAlleyyDb6n/uHKKtRaG4MW/5HihzizImpGbtx4idMx5KIr8cQUI6Uuu3AaskIEULDiyi/PEkBAPgRsU3IlCzDQzSqr3OnqwFoA44cfgdCq5Yw1fpkTxOZV7PPPQKekpnwVwBnnxki4wsACu8iRzyhPk7zNLpWcgCqrnVRbQIqCZjsrKLUJs3B44/nWc9Bop602RUPTUjQjhiDDcTwg7zLKKOOMEwksUE//vYvVDKia9ZN/xizowV93qyjZYOra1dqQRy75QevKZ7TcVGjyywIE3H3EOdacw7fUC1j9i6rZDE4iwRQYvG0yiivq8M5nT2777T/L5zacct/AxeYEjMOLMkdYY80RepNMQOm/dNONMalXO3CgNEuCDSis+TJ2zlllVTvu4If/q+5GS3ODBEs/AIsyxHiTBTHHRzKKHCLvwkDzrkDfJAurV1lNNYUSx2uC4ZjFVQZMEROfAhcYKfLBSRooQN82HqCMLFgwAO/7HNTot4uU4S8b2djf1lJEgWqAQzrXAwV3Fia78YzLQQyMoQx5ZLkHRpAB26BEBbNgBAwa7xzjmF/9/07wi2XkL3pO2hrBTAiOQMQGFHFY4WJqdCMYzvCKWFRPDRkhjQhIkBLTeEMAjCDGLPxwHMr7GwOMmL87aW16JlzRE6NIQAPq7HtZzKMePbNFaZCACwwgwDTC+IYBDMAI7wsdGjlYOpUdcXD8G1iVwLEi672GjmM7oPesuMdOejIwNQQACm6AhxwS0pCHfAMxiIE8IXbQdPnDGuEkWbBKvgaKBMQNFc3GyU/68pdgsRwAIIiCExAAFoRsgyHJuEpeUMKVjSziqlI3Sy1USVCVTGEcoqhLuiDwccAMpziTIswuok+QWSikMlOZBWXwIoiMNN0yplmtSF5zUHLUZndauP/JXo7znwB1STlJgIhjpvMNbVhnD4nhTlg8gH7Lk+eqBrE//lmzluRgRmz02c07+jOgIA3pR8oZQWNOI529SOgyszANYrzzAQ8QWTSNuKeKbu2e1ZGERjnKz02K9KdA7chA8WDQNxghpet8A0uVAQtKPJQAr0QVqWoqvYtiM5tzjFFPeRbUrnqVIrSQBRdLKkij9gKpqRwkU51aP+b5C2BZkx6VupZTnT4Rl77YJVe/yte+JmSgfzCoEY6a0pVOw52UoAREO3i/t1Iria+6qrbsytFd4tGvmO0qLRgxzJLCgodGMMdZlUnGpTpTsTK12ltbBsmbYjQQ07krNy370cz/2lakwkRBMcsaWtEq1LSJfeo2UiZVlrkxSnPFJ2xha73KenMT4LytdHG72WESVLDmyG5hyajW0y5Wtf9ireqo9Frm2vWSMqLtdNcb0rB2VgKC7W1hD2napj41osVl7RtjptzJSkejl9Tll6LL3gIDU5gRoMIJPjtY7W73DYPkhX2/m1+sJTEFBJMsi2J7PW7G4rkENrCI95hbCRgTtH3ow2gNCeHDShim9BtuY/9l4Vkiqb8b/i82kjFbENd2xEBmoDBXoGACoLgPvmVxfZ363V+8dVXHdS02tUVl5somiooqx4JCHOQuC5mz5jOpUVOs4u2+r6EOfSpjfxHeGrMg/7L99a9dZ1PHU5TjFdD9sZf3PLnq+lHMRiDzihHpYlikGaIeNCLAanxTyVZ5Oi4qUJa3rGc+W1ptfiaBMWEx5hQPOgDNNDSTU+tkGjOavHF+9JzrXI6aVPrSsM4dmDV9zE6XmbQBaKmE7atmIioarpCc3pQfPdlIbyfLeOZyrJcta+sCWtDbBbVLRQ1jqFpN0RNtbYZTTeX/0jmv3lQ2s8ctMT8X+ci3PqS0d+1UNadstXxSnTUdXeViZwfL4HI1ufddsRKfeLApLsanQ81rRt6vzYyeN7e7rVEeEzDfe+W3xMvlbwYH2tPRJni7Dc5mlsUbsje+Ur39C+BmgNvVr/+euMppuFkImtji0MY1Q9ld7TUjPMqoFvnIdQxF3NAl4isP+pn8HAEuxDfm9J05td19cFV93J6t0/nOAYzvBT1K6Fg3U6aXgd2AzxeRSi84VN/9r2yPt0oLN68lo2iGfI8r63Dfkb+NDPAUJ3kASi202NUI71OHnFAjN+8Tg9F2RgE97ohnj+VcvmB0r3gA0m5ocHu9xpvLu7yBR+H1CD8XsyX+8+sZ6tH7IPBo61rUG7d2Ecv+9AIoXOr11jz2Cu950NveOHNnsDkw/lu9BxfRvjZ1wjG/8+bO/sO1v73yg0N0OjS+7umGfH3FvryDCz/Y2wZ85mXfjIUx6u3LDz//H/18A67DnPQDnwa7U8/YJz/9zTgNfLeN333kg1/8+BdMWMdqYiMbdffRl3do9ntDtHoe53dRp33b90Td13n3l38QaBaid36lR1qqFHapF1GrN1EJ93fy51+DR3sPGIEkGBabNVZcYFI8BIB3B3YDyH4eZHlVRXyxJ3ucZ3XiVoI6aBQDVVDnJ1oP1l1L12S/1nqoNigfOB2WdDNul4M7+IQyQVL9Z0GhxXsrhYEweD+KtiePZVE0SGz0BxlNCIVkeBS5RQX2MHqjhWtC2FSjZm2Vd4DH9WbZp4DFx4A+FwqHV4Z8+BIklYKf9X9I9nhKhYXVpoFFiICx8oEgeD0m/2d/TtiHkggSUrhpR/Z4PdRSA3iIatRxizaHwpZ2crZ2nPd9kTiJqLgR+wcAK3ADPghau3dW84VBhnhfbiWDUEdv21dy6YWDqfiLJ/GHKthgQPhbxOB7nAhLcqhtHsiI3JeHewiM0ogRlRhfDqZQLfaCNXeLywhyX1iDKVSKyTeN5GgRJIUC3WCNxbhOtKiN98V3uGhRzZiE9NeL41iO+AgRoWQ+iNB4sCiLxoiMD8VxiYhzOGWHqvaMH6aHV5ePDvkQ5NNZKWiNALlMoOZ7Gcg8BYl936hqcySOI/iQInkQ5eRFlthgFalu00d9nWhExgBsb3SQ9KiQ3hSSI3mT//9QjRZ3jbh2ZrxAcwM5djPmdKdWh4zIXFQHkqeIk+QohWkYiCiJVnjHUhgIU7Z4bfHoemgninLGgPZok0zpkOdoflQYWmt4hbVIYRsIkzbWkcsle2zXedEYlvlIUlTQj2AEWrL4dbmmdyyZaG3mRpBllEfJfWK4IHNJl03pZyhABXhwkmaJiRjkYkC5WBoZj7QUKwg5fzwXl4a3lIo5iXb5mPG1lwo1me5UmfEkVfkDZczoljlGf3l4j6E5jREJQY4JmUDIlz6pmqmlhaw3h1LGlfPnlbSXZ7VZl6OpmynZQ+8jkO8oT4EZV5G0bcTJYQM0m8iZnIvJmHcJmYTFm6v/tInJOJQwWVVbCXtgaJiKgoMpx51PeJsJRpoWF5mnSZXk+Y4etFrGcCevqYvyB5elyJCgCZ8luI8R1I/xRVgqpZLHiGZppp/AyTLiFZNu2ZUdRngL6VMG+osIKgHLAJ6+dZ9tGKGWGXxl558WelWbyZkbhT2HSZsdyocf6goEQAn1eZYOGnYm2lZE5C/TuV8Fw5WxaZxUBJYzuoMR+V6bdlJR2aDO+aC71qNj96Ok4nTCGYpEKngZ6n2IWaBJGn63iQJ/ZIl6qaNRyqNWeaKlFqTVdGNbip0e1oTvGaZieoKdlZsG9Y9S6ZyaOKVr6qOsKThZalXE2YgBJju5AqZ2/wp6DvReCgqV4blO6qZWEBqoVdqmxlWoMumMOpah/ISkjYp/S+pyIVpUKAmleUeZhnZobMpGm9patASgxUdZuFR4X1qno/p5CEoCzndMkoqmk8mqBfeqV9qfnHqh5rVTt7qhibmry/eouEmfZcmgJDpzvimUqxdeKvqmyppjH6mdlwWtt1eqEXSqn8WnlFpaUtqqa2qZwJmiycqiR2llGSpg30QxvUGuOiKtZPqrqGqWDcpOJYqp+LWthCqrhmod9Sqg3bSoukomvbEJ/5AApMGvEOKveopM6TRYaLqqynCpnDhTxyqY3kqvhWl8c+pjEnMTVIGxEiKtphpI6TpYR/+VUCRKrK4qqG2aJyZbnf9Bq7Fnr6/xiEfKqDtiC2hRDkxbDqfwD6qwDrUAs6GHoL5jTDjasdaKSn6KrYb2rjxbhD+rREF7qOCaQlqlXuZSE6HwDk3LtP/QChVCtenxqJDapFr7sSz1p+4KYyc6oWxJOIZqttiJPenlTc9aJiTBtk67FqeQCWLADrcgtXR7HrojVsYCQb5qNXtqs1LJTlIKqId4sH+AbW5Gh/cUp4Wbtj4WsREyElHhuHKRCK1AC8hBuZU7HLqDp9KwAhFEn8H6uX5KrBv3twgLPfOqmUlIclklhog7rj1CEkr7DmshF4ghBrTADu+BHLmru/uouSb/ZjLpalQ3q6p767Umarywiqw2NavKG6DMe6+hCr1Ju7jUqxaMsRhEULuSewvc272hYbeaKwDAm7fCO6yp2bf3VaUT6prtu7Dq2W3LGq7zi7QPMr2ooRoF9A/rwg6S+78APH542lkkcD5YO74ei7PLVEbj+ZNDaLylW3apA0lAi1Et6qIUTEU847rsIRKh8LiK4QvBUCvCkJPZ68EgHMKbsbtwMky+SwJU4Akig8Jba5F7G7KiG5QMfLxdWJ2py7Az2Vzyq8P0OyEj8cOnEMSsscY7IAiyQAsX4r9Tq8ScIbNkKgCAgLfkW74KNbwJXKwis8WwOsMP/MU3PFn26oh1/0TGFqwetiAVaRwLq/EayfAadpAOb5y9/kvHdRxKJCwCElAJwFqtOuqgf5qtUeVk2EbIfuK+qit7httR/XQminDGkewLroEN4rBRrVABmQzHc8zJoCQfmNtZZEoFdHCjVLyGfYzALvy1o5vKbJRthYwtYJx5GFq0GppvKMfD56EVUpEYuAwKCEMz4rADosAIsqADcLzJwjzMvDvATzDFFrTHpTy86Fu8PKupFrZfhnzIXIq2GvpceebNxVHLShsKmfANjkHOgUAOMxMIdlA0w8AmlxLM79wXAkymIiACT7ANHGvPwltGp6zAECXILunArTy417x9nwpFTIi421km4P8cCkEMG4EwM34ADuDABHCyzjpw0RntFxtNAiQgAhDgAV5Qs0+6rrTYXdkqyFfKJ9Vsw8urhMy6soiZuBFSy2yLGLiMDTmtH8AADqSQCgDACMMgC7Ig1ENdFpfbxL3L0UntARvQBGHksfesVO+DvunLszGMpdTpxUPa0gEKy1rdE41MHEHhw5EcDMkw1vpRQtWgAGk9JG19C28N13Z81BCQ1BswAzjQBJ6LVH0Msn+sz2FLKtRcT0r0z56qeQItyztcJorgE7ErydGADX6wH6yzBEsACQAwJMPg1pstFkXd0aC9ATiAAxaABpO6rquaz2C7xds6TYP92mVr2Ov50nH/ECOZlKsGLRxdUROPjQ2SsB8oEiKlwAPDXQHF7c7HHUyerLmebdfM7dwWYAHasNd5x1Cp7beBLM2sPQhItNKwnbK2GkXOiytlrB5cgds/HAvBsNvgQAFagCLWNAuG8N7xjdHzvRQbTdceYNfNvd/7LQSmzbWrSrwCvs/TnA1drN2FHcFvyWE7hlc9VdBjwhVKuwluQeHJQA78sSSukgbUAADE8uEh7hUC/MRIHQ52LdoobgFCYAIWMLClNUg6q9q7QOA0duAni7Kx/aI6vkui+iB7Yd6nQOHRQB0UMCJMcuTSoOTwfSlNzhRxDWaai9TLfeIpLgSC/gUs/t9YHNWp/3zdVL1fLG3jo9hclYxJ/FTbPeLj5o0KuDzkwKAFBfAk1ZICYVDnS47neU5OxCzXfY7U+A3oVi7orh4Ch7TlUP3CA146pgOkACPmhA0g3C3BSmjmid3Nlc4VbLvQvhANzEAKcc4knUBNKaAASb7kcFzqSMHEfM7Rqr4B+V3lru7qFhACWx66qPfiWxzDrrAnYq5EjQ7QAQ1FbNdTLzTsinDpsbDb+cHpTCLjffLsog7f007tRWHtmUumJCAAzlDi247i3S7oKD4HFqSJAa7F1j3NBj7Yu07mO6d2GxXpBBTe+cojax4VcVHv2KDsMZDvPtsk0G7nw/DvAC8UAk/CUP+czA4Q2vod6Au/31/wBXgN4M+s2mMXTTE8USHk2pKU4GUuW4v8XJS+IyEfCqgg5B9CAZ2eDfGQPwADBwogDYYg7Zr98jMR8/ZNBYAwxVSu8AsvBDq/8zjgBcTr5an8B0Da2oSj3bze6zf+XwCGS0uPmPEO8sQuFVEfB9hA5CMSKlf/VnAQBivQ9f7+9WAPE2JP8GQ/xYM0A2if82uPAzMwA/fwkxI2eXJw0olO8bpO43Tl6CwywTzFPXox3qCxFzoB9QydDHAeA3DQCYOwDNKyCqwQBjLg+C0P+ZHfEpNv1Hg8xemKBjjf7SjO9pzf+T9P7q9062xk4NHTyq6M93n/790xQts8Dvi3HRWowA3CYPukICKh8jGnEjidEAYR4PgV4PLFvxLHD8VlP8odOwdpDxBCLAz88gUHjhkJZ+CDBYvSgwdy5BCguGvBghMMfv1Z5sqVsUHZOsGBw8JkgRhallAABowUKXIxA82kWXOmJJzMsGEDBSpOMF+xUKE6FWrTpmOKlP5j2tTpU6hRpU6lWtXq1apKFdnaFOoUKm7CkkkitaQAHGN/GJxg+ydbNhnSKsylRQvrXbx59e7l29fvX8CBBQ8mXBhqXVqyGDECAEAaChIkqACi2DBLljdGjPQKIcSz54EWChpUmHBDEUoPI06siFHjr44fQ44seTLl/5KVLmHKtElTUiCcwXXyBNUsmBmhRY9u0mrY+XOqWrl6/SYsGrOyMVh0SsvWezc4EqQBoGsX+nn06dWvZ9/e/V3Eihk7hiwZ0DYCljFr3txGzefQRkNIoQ0K3MABiCSiiACLMtIotlUGkXAkk1hA6TaWdIuJnN56E26nnn46LjmjjrGlufdSzEu6ULwKKxqylkiBhWxc+YOtSjD6xRgoZCiBkQrqUnFIIos08kgk90JsMcakeSwyKujAT7/MNOulDSy/EIigggY0zcAC3VCwNbYejE1CkUiqECWVKGDppQ079FCS4Yj7KSiiWtzElqQUSfJPrUz0CpVYgkmGnOwKGP/ExhMq2WWXE34ZBAkZkAFSyD8z1XRTTjvVCzFaFmvMyfqo8GRKWC6rsj8sB0AjwC4JBNNAD+ZZ0CLXNjpzNjVtUyk3OHnr8DecgKMTRJ+CGTFPpE5cylMVpTuGukIPBUZGFha9sZJtHmVgFT0isJSRumqB9lx001WXPVBFdexJEiTwpLJU97MSyzYG0LcJ0WKVdVYPPAintVw38gikt3q1MAYMWwqWQzl9ywnZOIzDsyijkEJxXfUC3eSUU7iplhxgYjhr0Ua57XaBX+hBYYXFgjSPY5prtvnmw5acj1QSBJCgEnpV5e/KVvUdwIg5/P2X1oA9gGDljH6B7WA0FS7/gM2V3twN4mGNDW4nO4FCjtmjNsbZMGk/JtQ6cUgBZkY4OnHlhG3qzmebBRjopkdLZT77b8AD/zM+dx+DzGeg85tG6HuL1teIN7LAx8svwWxaYBqccc1Mj6q2GkOtN+TaJmKDO9ZO48bG+Kg+/RR8sLS/ioXtsmbsZJAb694mH4oW6AYJcRfD9HXiizeesHYLRwEyKrg4obLF7e2F6HyNhvyyaUJYmumAwwmHBhqeYIBzV0JKs7aFf83w4YgllgRsnuK4MxYSkWLu2eP9kq4r2WnXAm7c0W13+RgFAfImj5cJb2b5Y2ADHZizuhTOcJKhw/MoAYvoVWl6+DLa0SKX/4VpECMLppkBwJrmPfCBjw6wOVM2BkGbNaWkTQ7bWsRK9zWKKetiGdMY/h6IF6XYYjqoqI6hAgGM/21nFdsiQD7yQQmKnGAZXAgeuRb4Qyxm8W/JG9WTbiCv51FJg/iq3tGuB8JpTEMZXphVgS6HQvBBQI5TK5/5Pgc6DQnLQ17DCdhCND+iKGdPZtNiVoJ4jK6ARRjNSEYgKJDETqyiGyfYBQFGMYpIRCIfkNLEDcY1vEKGUpTQApV8RrWCw/0MVaoaIwcfd8Y0qpEX52iCCbv3vTjKUQQC6JznYojHh41OTh/KYVDqxzpCjhIq0hliWBjpSEgusVGWhAUmCxgpCf9EQIHK5GY3j5S8nS1PMs4LGmZaWUYzfjCWyuBFO2FRBO4JDJc0kKMufRahkFgNa27Kox5JBxyv+TFZy1pdD13nzWUGsSuh+EahoiGOI8bAdqv4BSWbGAlYROIcBfwFHlAgjW0iVKQjhQ6oQrWzJ1EBjNBjpWbI2EHIRW6d7HRnajywgTfOk572FIAAuJAw9F0NmOwbJh9PlwyfAJJZiEzmSPdHrWA81A8lK4ASf8GABewOo5Q4xzjkwLJshpSkYyWrX8DZRebRoRIWxGBLjfBS671BpsRQI00bkpoHPCGnKdwpBHbZ055qQp+3yU0/bWjUOoVIbMcsmw/HGsTphCz/Fs2QKlWVqJas5gOj1jjCEbzKAI+C1IplJW1prWJSCYqzec/LT73kmhkyllEz6kyjMuzqENXIwQ23TGE9/QpYwFIBfenDzfpq2L4b1gmpIlKdnhp70LIqxUT8E1lUxeEHCkg0boO4amYxeQRrWGMcowCrNkdrWvSm9x9nfRdkUPAz1ooRtq58JW3r6k7cJmgiDoBjX38LXAFERgIx1MIM+ynMYeHQTkoVZOugS1bpItJFk5Vqdqt6u26sBT/5GAd4wXuOBywAESQQLSjVe2KEonY+9GGe89iawdfC9XFyxV5tb4vX1Syot74VwV8BG5nIICF9Bg5m+9wHtuXOj7Gt/0NvhKlrnWRc95G2G0Q3Kmq3SKgjvNbwBogZIAEUWMrEKCazKNnLsy/iIb6ufe0bZOzBud63pniVCGsYBAj/9lgAPg4wkG9wg0XIsLBFNrLXEjvQHWbMWQ+OriKW45XZPXOqkKzyVXeBn1HAArze6PIDdsGAG5T4imUm9QNV3BgW+8zFLDWnXN88W+zR1bbt5AVuH1LnW1nEGfXUM5+BTII/oyACBc7agQttukOL6GKCvJ9jG/3otUkaiSbpRDYoilWKZBq84fWGMh6wjdAKr9TjdqCKUepeCaiZXjB2NX3hXGM53zW3dmbQRTIiAr/yuae/DrawoVBsQnetWH0cTv+ILCYUshk0vU/tn7QpUFU4WDvDC6gkAc9xBG8EwBtZ8PaXUSBWcodccKVMLWQksOrWsjLGjktnAEBI13jnN8e3srdGPNFjffP7BsuLQM/TELo4FdV0p1swUOiXJx42FcLS5V+0GznV7LIg4pWmeLY1zeU3bFwZ22AAFcZzXpGH/WanRqtkJKCWdavcze6G9cvlXOvUzHtB9S6T1JYhgZz7eefC7rkMZFCKlxxX4MgWqPyMTqKkK/2xTB9UpKMMde3ErUYVrWQTx3EOLgdA48qgBLhJDAByiV30HDM3Wk2u5jWrfe3ofHcsYx731dj5URiJGgtdQQXg8nt5fI+A31f/0I6tIdg3ACVm0X2RaNYxWb0ea7wvmgGK61bDwlKX+AmqzuEOY33jxOg8Fz4KAFmMevTjz9SZJ3jySjAg7a1ePTo1o3m3v17uNN+c1P5wME382M+773nvV7ACaqCGVAi6wyI841u2jDkG5Vs+xpMdM3i+6LOsiJMkrKo8DsO8jDOCLAiAaaAEjwO9MSM/ESQSklsxnlEpRKAbArggdms31oMcl0Ojt7M1/Zo7XHEQXaGabOCCPouMveM9Gfi/AAzAWRC+OekjZEG05GC2BTyxBiSUB4Q+P6gGJII47liFtVgAiiCg7POGNxgAzevAL4sAEBS/ETzD9Si99kKBL0K5/4ZowVeDJboihlmrNRrEtYpokNpbhvuro3ySAB/8wf4LQgAcQmooASP8jZsoPsUyukDiIQcrsyeMhSjEhkAABySKvCucuEqSg1HIPmsIgC8UxWkggBMAszJEQ1VMQ/MTp5PLiPVrs9XroHeTwTqEOxwbkzykvdfgiF4CqkUANkHsOyE0RGpABlEQOD5KNmUZm4RrNkZbOEWQMAcMBlCwRHCoBi0wme24wrWwQErIvg3UF1IkAAb4vtBbRXV0DjUkFZOjA0RgAPxgQdVzNzOKwRCyMVq7Q12st/rzRdnwJRZAgmH0vUI0RGRISCb4pxsiukY0pmfUimiUxsgiFF+wRv9sBIZHskJjuLaq80SuUgas0xe5KkUG+Lx0XEeV/It2NByfkYAUVL+UU7s4fIMYhLlbtLVRiL1c40X760OQ4JWgkgEgJERjPMaETEgpGL6he5/COzjEWw6JHDeFajwzCIY4wAZJIAfp20ZqywZjyDCLIgCQ5IXwEkWSzAJYMEWUNMOVfEuqaMmUSje2iMU2s8eYugximMM6lLf5I5i6sz0/zAaFsZACWIRBDMKjRMqkRAYbuAmjckqKgUqkQ4pIpEqFkp2LzMqt7Epu7IQr7K5OfICQJIaM05dPiJy17Ia2hEvXrAo1bC9go8s1a8H2g6m8zEc6pClcpLN+vMHxsTv/qhFI20gJBfC/g0TIxkxKJmjIiZnMw6tMy1Q8BhSiRKJErNRKcsDEjfzKsPxGipCD1OCFIzDNANCXNihJtvw6t3zNlYxNd2zDumwt26xJ2trNG/NNepu9wFyG2AjK81mTC/kVozzK5VxOKWhKJDO46CwoBaTO6hwi7Hw+nODKR9IO6jMGVxBNsiRNWOAFZRChLxyA9HyDUjwBrwNB93RPuVwe+WStC6oX9lu7T/gE3MTHmdpH2Js5+sNB2wNQwhwuoSI2N0mD5AzAAz1QGzBA4lDCqJxOZyM1huMGM1gkUKhQ6Zs+yQvLitLCDr0gEBXRAfiEEj1RKliBVFzRdTQp//lAKcN5UYqI0cuYUXyx0biCvyzASd70S57syTIhn6B8ocIc0OJ6E0gwxiQ90BJoTslsUmU7uoIyqImUxK1ouip9Pq2UhGy8UJOIuBoRy06UgwdoiDDNAiMg0Ta4HlNERbBT0xFkUybpIlSaTZSL0fq0R7m6SWvYy76kwT5lEOB8Df/8xQA9CULlJ92wA+VM1MYsAUOAhmR71CeVVNGryoa7RpzYVC2tNlewsgrs0FH90L0MgFPFkuuBBRQlw1Z1VdGDzwlSKTxYqzh9w3rES5vUOG/Y1d3UUdjDQ8CsvT8ASvMJ0goxTEFD1mBJBSRN1BJo1hIogVR4Sh2CVOcykf+prNYgajwrxdbt9MxOfYtu7dLwhAhSTaPMQFXNUEsCoIPvCz92FTuTOikTfFfanNe2olN71TxOCy9isIZe7dffDFb76whjAFAY+iX10ZqtIYWGZVhkaNiHfVhDMAQ7KLplkc4HhVBKrdRQgEJrvEZs2E5ScBNu3NJuBU9R9dAPVYZpOFks6QUNXMs/aMv2fFnTglV3WcN4qdkVpNcZRQO8NAI87dmevcVx2NF+9Mf+FFg0oRABZZg2Ma7gCwQmYNanjVqpnVoeSLJgEAZndNDLHD9rpUQr3YmY2FSvlLpq01AOTdsYBdHFKdc2MAfIMVMUSFO7Va+YjdUuOj94nM//hpBRWUQD4n3BvMzTvdxX/EqNnfRXYOVFYd0VoSzYAY1cGhKdmoCE5Wzap71cZ53aqc0Aw/OFz3UuahVBa0WFSwXbrUSUroS4uNFQb/VS1yVVtjVVVIXbuD1FdKzb3PUmvJ1ZcWrDZQDem/1b4q3RGq0vddJTWusq5m3e/RRa2OiGg3kLoKJeQh20gJuJUmjW7sVc8DUEVGOEHQAKPJHO80XfrbAFjcVU03Vfsu3U1Q1Z6xvZ1LDf2EVP/VXZZaDb/x2r3c1bJ6FZ1FsQv5XFNyBeNFDgBZ4t+3q73pTg/bS3PRxWID3a4iRSycXe3uABhxVh8C1hRnCC41tCHoLG/1WsSih8PvaNCbfpTtW1NldYBsojS1HN4bXdYRKdHlXlX5By2SDupiEmYsN5RzxYC5u1zSVOYCfmDxqTQSnWyV993j8d2uHM4MdlmEK9Xi/uDTvgXqjN3KltjJipgGGwAjReDjVeY64NmfXdiQpFFLK1Qu7Q0GVAW4jQY9jFDB7u4bXEAyAe5EKK2TZFtSJWLfSDxdYS3uF1ZAWG4jl1vVvszXmrYp/cCIF9C0EVUsi1Xt2YXBuygVEm5VIGPSBBZVnQgW8AmTS+WFcWohdm3wrVVgyNm1uuY10mzRyG3Wkg1z72YxBa1f71X2IGHGPmXdMTML6lzzmVRTKy0Wg+Xv/Xm0Fbu2YbpGAslpAJGdQNzpADM0KACoQzwNzvPWd0RuVhWGcdEINXeGetHT02plIYzlQ4fl8aHoSOtJFvdV1eHtdT/YTpAWYCQIQbQNN1PeiRK2QBVmYuWKs1u1klfrNPkGZJtq09vWj9mmArfo1usGDZcCEt3mJwDrxPVsZASIWoHWFTTudhWGkd0AFauIU6YGV4XkdrpdLSzdT2JQWcxmedXgWe/shd5uUQ9eWAhtvIoYQTYFn2NGilRpeYldmZnaAbiJIj7tsDnmqWY2B4q6usjrtbc97Zg16p+eqPwOBiJetODuljC46SHmESTml1Xue6uIVbyIGjWLRJRcP/zIw2ep4JOK5l1b2dVRBstbAon37dED3NMR3qlF1LQMbdyCa9AK5scXpJ1MOPZmbkN/Psq7YtdRhvvxztoO1qrwZrY8DgsRYqTi62cD7rPVrE4EiFMW5rlZYF257rWqgFU3iGVobLvJ6snpBlYpHh1AXs4+Zp5S7sfjZLYkDLxI7uot65x65uyU5ohU7mUllm7rbVh4bowKXoHB1vO0TcxC3tS/4F1E5t9h4shokB+HbtAlxGbJiEcz7lt06HuJ7rW+hvUzCFHLhrAVcKtYk0ev6Nm+ZU1ZWQBU/u0eRnwzZP1IRuDcwCxhZmpE5qDP8mpka1d5kgs3vq+bRV78YS/zvFzUgOb1pTB62uZAJYGdMWzPV+cSFlk6SlIXEuqshkhuFwAvyubbn2cSAPclPIg97GayOfMBgODuFGFI3UAvi9nUF48jv+0rgj1W2T8DawcpU9AS74POruchWZbMoGcw73wSjxhPFBYgxiZBqlRZK818+eZNHe6rmLc7yZ82F1cTunXshtbbOW767hI/hJhjNI6bdmaUL3b0MPcgx42d9GcgMvFjiOdFvmaOQWWUzP9A/dNLQkU0+X7lAfjzKEbFIXDFNnEkM+5J5RKS7whPns7hC/y86edVpHXhsLbRSnN11Hb40IWB389cctMDfpYmKvCUVELPgJEVGYi2FIB/9mx+3+hodnD3K71QrqInADr4lrXwJJL25ttxFuX+7X3TYvrHI/pnBQJ4GCRvd0VxINz9sw373IEIGTk3eZjNHNFnFZx3c89QbCxc991Oo68/dtyJE/HR8GEHhXwCeCN1bIPXiE96c9akg/F6ikEgNBv+0fv3iM/99p32vTeXS3WYKyBU1tF+zWdXBe3vQR7fSVV01TDHV0tCKYj/mpMPU2XbEwR6X6EAB4Z/UPf8PomdFZlPXZgj9OG3rlXV6g7ce6UXoHYXqnxyfzae/qPXhgqIZhJ8Bib8qspxgREQZB0G+5pnhnv3hifmWRafSFN/trSXtKr3Tk3mfR5nnyzLz/ERXquf90PKCC7zt3vf+Uye57v+fw+jA7tWItzU6jel851quvoO/ZLbOtI6A1a8b1uZt8qP7TgO1DzO/mO/9mqu/8lwCHhB++yKST4UCqpJpYMehx1Qd7Uzhoje9aZ0ryhQcIcuRIAVsSowALOJ06DWq4apWrZb9O7CJAQM6DB5Q2boQFi9cRa9a8BXgzYECbXiqNGHmTBRaBE38koJAmDQAjRrR2/uvp8yfQoEKHEi1q9CjSpEqXMm36byfUqLJy5gRg1apNaSi2kugqgooEOidOWCTgEda0aVmyvGnr9k2buCfnnmTpdm0WYtaI8VWm7MgRXoI9cqSUUQ7isha3/21bsGDsWAYM/lB21W1Vw4ad4MBh4dlzgQIxYmjRsoQC6mrVSLEW6DoQ7NiyYUsKJOn2bWbYdmNLlixOnGDBfJmJFavOD1q3atVaZ+o5dKfSp1Ovbv16T0WKbG06hSqWMFC7b88OJJCgQYQKGTY0BlHiiQUWMWosTMkjSJEkTaJU2cvuS5TERAcJEdyEk048Ybcggw06aF1UEVJV1VUAZLUVCl2RIIIzEjzhCVkW3eeRWmu95VZcbdA1F0tGBBAAXtPwJaNffwl2zjnjjFPYYYkpxphjkUk2GWXduIJZZpt19hkLoY1W2hKnUQAMMKyR4ppA5WlpG26S6MYbKGECJ/+cL8ahgsopCSxXC3RtPvgmnHEyqN0moZzCjTDNiIdNl7KdBwwFB3mmUGaDPOTKLwxQdBF99o2Y30glnfRJSv+xlMU0MJ2AB00rHJhTVHKKOiqpRUUo1YSMVJiVVlx5JQAVT4i1TVlnpYXXiW2luGJddr24loxpTVOjYLzgSBglo4zSo49l7bJLkCcMSWQ3lyGpGWdMNllACqPFECVqVFp5JZZb2hZbl7nxho2YwQ1X5pmnnBJKIsy1+Vyp+eqbr3aK1PldnnuSV95AgI42KHvtvTeRfBdl5OhZkO43aaWWrgXTNidwQUVNN1EV6r4hi8zUqahOWKGFNq2AoYYifCX/ayW0WmRriWzlCpdcvLb4Boxr8UVMWsQWe9ZGyi6bD2JyKEbAs9FOS6RlDxWqpLaepdDtt1KKayWW5JhbG5fpMvMlu2I2Q6aZaIYSyiab/HOvKSPLPbd1/XYHsMC4EUxQoDEgnLChliW6QEUO11dYxCFFyh9KlQKYaUyuSHBDx1aBCjLdmZNaclSpqrrqha56RQUVzgDiicwEjIgWrjfvyusAO7vk84x9+TU0LPYt+0DSSivW9GPSMvAL8ZUdWeggVFd99ZNaV8l1uV+fK/bYuyXTLpnFxYLmvG233cG9mos/vlF02omnnuOBvTegBv1dqDHGCB7ffPk8bF/i+klK//FKLV0soEwkwDGbWO5yUCEfAqXDOahMJVUoYxWGMuQVl8XqdIo5C+tal6vX6YwlJYmRsIhRI2UUixe54xHverc0pkEreJIpnvGuha0lMYl5pNECaqb0PHJFb0vkSddt1uUbUADnbMLQXrzW5r228QEX+EogFBGoHe6EAmDp49P6ZnMeCqQnIQuBn/wQpajCNQpi+FHc4uYSl/65BHIxmQnHanKVj2EuilBcIAM9h7KU2SSCGtrQV5wBs7Ks7lYaPBEHV7SzX/lMWMO6XQmRtRFmNctZLXTh8H6xjE26whXGmBpnaPgZG5YmXFvj4WvMNT0grqs3yYjGmIZTnHjNi/9t3uvX2+yoS/FN8W7gydvAtFgwCmhBPV8Eo+AYQLj6HQ5xZ1SG/hhHqbjYpY0wiYk9uCABAVSugAmK0C5Dhsc86hF0oRMdIAXgjA4BwndmodkhEZlIuiwSL7WjESRxZ58UVtKSjsEk8TS5jE7GD5TZ0hYpcajDHXZNlbSpDRAlsa4wEdFdvijT9uSlxE0cwxbH6JciwilSuk3xfLG4ot609Cdi+s2LgDOU/LrBsIog5n74ww8voDmSiVEsLm/BVO5isqmNbYWA3vxmHUdanXGS04EPhCDLWuYyAUBAkHR4ACHhGc+3pEhFsFtkzzAVLNuRUJ/75Kc7LfKsS0LmhcT/qxZBP5mNQWRDeQjFWikXCr1UqvKHrJwoKJpxtnelrZbes4UtQBpSpTI2ZOa7U8DUp8phBsqYL3VPMunHKJveVDBH0ClJ9jeAabbhp5m65glcwQUuUK5jB0KQAU/VWKEw1WTlfOo5JdgVAbhMBLy16jx8t7oMmuhmuponPasZ1p/JSIT5HIzuKLm0tUZLeJn8RbWM5MlscJe7dgUNt/CqUCoxtIdfg2hEARvYwWKUlhvl6EdxOdv58stfVUQfMM210mK+D5kyHeN8ymjGj+R0L4tjXONKe5fTWkRRqiVqUY0K25zIAo/kq+2pGui5z+E2t7oFZG8hIIInkBirM9Pq/1ZR1FXY9aoljBRr7UYYSUlOsndpVWsL23pd7MLVk8bobl2/u62EmnJcDXWoX/8KpjAJ9ohI1Kgt2xZf+dK3yqLqZRXBk74+bek81WBpfwt1qP8uarOc5UjEQKLTxRmBLtP8KVCvuQ1F4YEOMrhBBCL82qMyosIYpgV1/sxUDW94j1hhlTRW5sc/9tZlVRXkE4IrIgwasrjGxRlyWVTN2eUlhI98rglPyJFlqXCFwAMo8Ta5DO3GD8h1DaW2nOStvJ4SlV5zKLrSq94mC8M43EhilNumWCsTe1RYxpv6gqlScJACNfx1KfLcAxEyk1EO9mumMwn8WZFESrQUO5FYPf9SFmkto84CJAGGWIWyDfdZ0O7mnCwIzW4O7xHRfYzgh0nA20aLeJ2ClLTqKF0zSxu3q179quw47cifCQ13op6kdKfLVuvC8A+d9LGrF3LQz8h6NOAqcmuOjOtcd6mVFOW1r38N5SUOu9gul5N2jnE3M4Qn2Q71MphdetkwkrlhF7m2ozqS5m3vJbRtWZFPTXtaARFgzpJBxGrPHUF1G3reVr/61Q3dYVYpetGMbrQIRMyhdZZ40gLHC8ELvmIWx85XL1540Bo+GBobBq03pq7T3CrQi3+Srt3V+MbB+yTTSEmHe+XryB+KG7KVbb3NEEavufEN97YNsVPWzsszHyf/Os08GHnDtUCY7WyEQBt5q+B5ouJT7YxgG81p9svPvJGFF72hzW5W8ILTQpiyTEsTeIg6FdA9dXtrvfjG17q9Ed11fP9RqmCHAA3G7gY3RFq4GETLwNPuOoOzve1uR3uwwi/jGT+87mhdIQurO6SAqpqgyAty4MErmht+nLyHz1LiZ7N4sp0c5bGQPPdsFGIlFpVpngE6COd5hy94nmSB3kB8WWWFWWacXif13OqxXtANl2D4BbcRg+zRnu25Wa6I1dIxXdNJhrS4AtTRARRIwLkJH74lnwzK4PLhm9c1H4g9X7/5G4nNA++oznBhX/bZzKUdF/exXYu42AcBC9D8/wzQjJ/DOQol3RgLTZzebVKPtVpmvFr8bcv8lYZCmVJ5mVf+ccnYnGFvtIsRmUFx/Jra2BIBttwBzmGDcF4VLWAyNKADksKXaYGgcMYxidmYpd4yBRjrtZ7Q4VROKQNf7MVa0B6CzUVJnIgjndYJlQVjTMsJdMMf/B4X0EHUuSAV3AAOlqIpfh3YTZWj+RvZAUIPjoI7BSGJVFqKbZ/BHRyLJSHPvBgJOuEIlVUUnpXdmRrw6Fgm/QEnxVXGwVqsdVxe5VCtiVwZossZnqFv/EYsEUdhGdYmKBbm0SE41qG/bEI5oMICxkEyMANEjRzO5RwgvtQgxM+0EY+iFKKZnf+Z6yki7DnhI05iCNIFJL5FJVoiRyxNJj6NtBhJNyzDHyACHjwkF/weFUAARVakRV4kRYaDRnqABzzB0iTi9TkS2tWiLR5h9yWhi7xIWOUFc80IFAYjCg0jMf6TMaZaMnpSQwAZ4FWNMz6jGBoZGU5jIFTj2FxjNESDcBDW9gQgHHrjYoUjVGKH+ZRjLARDNKQjl93cA47eoKwH8hjKoWQW4RTOPSJiEBbLPsZeaE1iJEqiSlLiQFpi+aEfXRIAIIQDR+KlB2ykB2yAX/4lYPqlB9zDQI4kSardLeIiEiahSq5kEwJNczkXqIUa3ZmfjaEf3mHSdakaqxWKdwnZtsz/GuHlkA6txv3dWv5l0VBW4zW+ElKSSXu9oS11VBx+Y1TeplS2DVVaZTqq47mw41ZGYEJ4ZbRhluAQIlmWZQae5Qbuo4H1oz/+I0A2Zkmw5RvE5UBen3Z6hAPMgHd+J3iG5wzgAHmW5wy0RBFeWmLmTPclV4s05kg6YWRKJjA6HN0d4mUS48RRnE0OVFx5ppKIkvx5S9YUHpWYJmuAQ9egpvTIRhYRZWseJWxu49oE2+U9JW5maN20jZ1UZRyIhzqq5mS1o6AM50LA4+lNG5mpnmLU1CFmoHYWy2dBUyMWHXRGJ9tRJyRap0BipyO9AQ5YgJAOKZEWqZFaQAio53q2/yfCMSZ8op0TRukvlpB9SiHr5afEFaOQbGb7+VhO/h0zMklofCGUOE+tKag0NqiIEiUzGKWEKiUtlcN7cZQ3aqidXsdjxYIvfKgeAiezQWCJviOKxk8FSoSisGhZJM0hmmWMoiUH/sxeeCBeNKZbsER76mh18swuvoV1GkGQHumRCoGojqoQlAGTnipKuh0v0k5LMtxL2mf5mZ/dUWEV7qfeCZR2eemXcqGAeuHgjeZPnib+9RXYBFNuQKhvHOVrXpRxTJ68lEM5vMIrsJwc3qm1Tkee+gJKpRRwsgagkp7OfWU8GqdMpZ7qkaWiLiqMNqpn1Ugj6kWkop2OVmqLnP8qk84Bqearvu6rBcwBk6aqcj0plEZpZFrDL9Yn+VXmomJplv5T8PCnQN1k39GVZgQoT87fDQGrXglr4hVrRLGpmyYls8bCN3zDs8qptN4SSF0ry9bNOHqHGTAgFinbHvKhswXqesCjPELEcR7qWLaoi77oul4flf5ipL4rX8heFigtpgaALgKsdLJICIAq1RYpDjSB075n0xomqzJXCJHVq87d9QnjlTLs75waZECsqvmnruokaIYmgUaJgUbjgnasxwIRyCbrayplycrLO8hpsFVryw6uU8Tcv2jZ503jedgsS5GeoOpsWPZsPf5soqar0AbddhJYCf2iEx5tlCr/rWE2reh66heUrumeLuqm7hfMAKfFZ5QSLKQe7GTC6jiU3+6UrdlaEtpu6XUh403ipN+BaRfCLf193MaGXJoSa9goGW+ELN+a7Cm8g/TOqeASrvU2xXbUCWRtK8064J8Cih+Cq6CKq7Tx7CbR41g4xrMAbdCqK+ZmruZu7sF67uvSb5Ry7Vo0geqebnn2r/+GAEvWzuvK7uzCKtGQLe4mTV2u1SU97PqxX5e6367yaq+OqWhqrP1xrN0qHvO6kt5OKMlCr/S+w3vV6fWeMLZuh50g28wKpXm0Y+N+xvh+ZYqar0Qkis9SbuW2r/u+L/xSadEScFq+LhETwz3MgXgm/7ESeyc+zOiUAjEQw2+sLmoCKzBdMrDDpu0D9yfbAi/FCm+v+mrGyi000m3ynhcHp0srNV5FgTAqiDAJl3D1ojAdK4Xd3FdkzayIOuADQmD4yvDjfmX8GKdl3DAKxocO7zAP9/CASXH8QjEUC3GNHAE+LPF3BiYmFwEkO7LCUvEUWvEVZ+bDQmzErtrFbVfwgnEF9yQGZzDyBmWDrlIHNx5wWFRsnmyFquzK1jEvF+5jccNJ5dcea+VA8CGgxHBX5qzODjLPVosh53AiKzJ9ePLl3hQnSzEkA/E9YDI3d/NfOoAUWyk1z2o/6WcDa/EWl3IXF1Qqe1cohbEF/6rxuv/yKyMekqHL8pbcGvcfe93yKUBrLgvbLvcyQfuyv3gH4vapULoGOKjGzZbocCoz5FJgJ6kaPR7yP60V+tnYIo+zWcqiR9TuNV+fF3izSQemF0SCRy8sR4PyAovyKE9LQKnzKXtxKgfo8MbzGM+zGZ+xD+FzPkvUGrMxrwmDNi4lLofCtAp0ARa0Uy/FHd/JL+WXC79wMUMgS0G0iZ7oMj9EGFVgueLwoSIyA9dlS0/zSqc1PgbdojrASb/1BngBfp51OYeyKKetde0YTZ/yxLoaBVfNgMozT/c0LPtQsQa1lww1RTke5LGhcSA1N1JrUz81Zdtx9noHfiXbMAPn4mL/tR9qdShx9TJL2yk7c0ANCWQ4bFnXJaPQNVqrNWyz3ii4NVxzpG3ftge4gUuzNo7BNF4/zUzvNV/PVTtTcBiL8U4P9rjY2rCO3MBE1LGa3GIL1uNB3mNDdkBLtm1WNndD9WNZETB1b/65hrd6dviCa0SLtiC7B2lf3EKe70WPNSKr72rztjS7Nn7T9SjoJW73t3/ftkdiJgM3cHXxrl5H7ELWtE1zV/Di9PAiNxiScRkTtj3fM20gtm5Uj/VMd1E/Nje4IZQFWzfOcXeX+FHcMSoAcx5nZVWTN2scMzF9Nnqnt3qD0SATckW/90xrYmo77FjWt30HuZDfZX9rpJEf//mR04CSK/kTnFoW/zZwB/fa/u7FMTiQNfg7P/iYYmyEG+9C7VA9V3hf4TN0r/EQVVQcGFGvpdyZMOUSMfVkm7icn7jdYHbAhHdV+8niGnMOlcZBzHhoi3YgjiszE2ppr21w83ja+nhGD7ijJ6eQmxogLDmlV7qlUzpF0gAgoLNMB7c6m7KCuwJx+3V3ZflxeyGXd3nhfflyL2hzO/dhf6xiX08ti6xj/1+bh/hhHcOFYuic/3pSRHWK37lm/2aLuzgfmvdohIa2vLOgD/q4nt7OKvh7W3SiP4184/V8Mzq3d3u3P8GSY6S4jzsESICnTzkWhnonbeFctTuQmfqpb/85gar6qpMXmDO3mCsvYgeRYlNULL1LbHJPLUXZANamrwM7wgf7dyMunm/2eLu4Q/e5jM94RD9ujRP6jQ+yumcXonv6aWM7yCs6p4c8A0wkuZN7KkoAlSu4XBX3qDv4g8sfxmYs4dU7PYf5q3csmeOthu/GYjsebAa8vAz8YRl8nCc80pdPVH8Dwxe7wz/8nlcDjMf4xAO2sz/7iWZGxm/9V4d6ta/t19+wx4892e84FaQi2vuWAKw927e9BPjYj/mdy7szvAM2x+m0YHu5vd+7q+e8zl94mbfS9fh7UR91rhN90Rv9dic94yv8YzE9sTt9nus5slMJaca4tzB71Zj/OtarN9dnvLTzrLqPvntzPNj32Oj/ARW0Peu3vuuzvQQUN+DVvd3L/MyDYc3b/M3ju9/Dehqr8ayj+WA52WO715xylOIffOMvP1L0CxWdAuTryZ60sLFPPmx0jZWQ1+X7+bJr/uZzfucLOnd9PvlL++eTvid59edrwuu3P+vrW1dIACvQfu3LPIHSvNzqvb0vN+8DBDlygQgWNHjwoCRJBBUGUvjwITNm2ChWBHURVJw4wTj68mUmVkhUqE6VDBVqU0qVxxS1dNnyX0yZM2nWtHkTZ06dO3n29PkTaFChQ4kWLfpyU6hTqGIJa9YMVEWICxcitHr1oECt5Eh1rfaV/0JYsVrIxjBbAC0LtWvZwnH79m0nuXPp1qWbDW9evXsHDcrbF3BfvYL35rUnAHFixCQYN3b8uLEEVmwps0B72WxmspuXdO4sNiww0aK7lia1FfVArKsZFqQ69WFF2RgvPm3W0aPIkSVPnUSpMuXLl0aJFzd+HHly5cuZ00SqFBW3plCjUpzqkHX2rKjBlf4qGnTYzZljXC5QuTJc9XDttnf/Hr7dt3puQLZv/0b+/BEWmUdLPobNyPLsM9BGG8200lLbSrvVqnIINohkky0ZjDR6iiNhPtKNpN58W+mYTVgSrrkSTTwRxRRVLPG5paRz6iKprnuwQe1S66600cITb/888vxDD0i11huSyCKNXI8t+vDTj0kUnHwShQik5C9AAbXwjIIldjyQtARPW1CrGrF6sKoIJZFooglp02ijjswASTeTTgLumGNsGXG4FfXck88+/TSxRVS+mY46GSHCTswGF0zwO2B2HEtAAP1LK8hKLb0UU7XCyA/KTqeMcspQp5QhDSzD47IaL7sCk8FEEWqIITMjmpAi2kCxjaNgPPIlpFh2kxO4lYSD6c9ijT0W2WRlatHF6WI09KHWXLVxQRxzrAYYbB/VkgIrywLwrEnFpdTScc39j7wwRF2X3QhkeBfedxXgUtVVWQ1z2lfLfC3CNGm19cLbgtGQVw55+zD/2GGJVZbhhh1+GDmkkmpWGBirs+5QqvKtkVUvsT3w0ZC99Rbckk02eeSRO1N33XjjXQHmmGGmhmZqeLhCwXvx3TghMvnt11+L1mQzV4/g9LVDD39bKTgSIX4a6qilzuklWyYe6cWnnoUWVhp5Zu3eeknhUseQtyXQVCy51ZLtLNsOr0Cz05BB5rpXqBnvvGuWBhI7wPz6qq5/hi3o2WzFFbeCkU4a4U1sefzOYaeenPLKn5YYOm6ypu5ibGaEEHAxdRZIbK/IPt1Rs1U3EPXWS2NC79hlj52J0K2CFXRZJaFVaAuJzvAjOEf6VWk67VRYEcuVX575P6tOKvMXLe6c/5kIpbVd9NG3Kp377r3nfivYZ48dmfLNPx8ZUaABHPeGdC/ccAsRHzj4Xoc/eE46RUS++f79/x9QmCtJdKSntc55znqgw97GtNdABz5wdLPAG/ooWEEK9k1M7duXrHjXu4uwSWD0e5P9iNe4lUROcgBU4QpZWJznTaxZTXEK5yYkq1gtEIeBgOAOdZadUhjCgkEUIjJqdzsNQkh3HawVwOanoREaTE75YxqenNZCK14Riz154UmWEp2QVMyAB9TdDXNYRjNOyw4lGOIa0WcDKfhscEBToq1uFQcM5coM9YOi0pYmojpRsYpZFOQgCRkT4VgNel2UjgzDeEAEwkaBuP874yQpaRA7QIKNFSyBGs23yRLUTncKoQj8lggwO4bQiUdbHP6kmJI6PY5/hZTlLAc5LKtx0UWLBGMYeWfDI1YSmDmcBCaD6MlObrJ8nlRmCWwwCQkpsZS+m5+u9Lg4xpnQTtmMJS252U0s2jIlXMQaN960S845EmNmQmKsvBZMd4oJGjYw5jHVuEx7KtMQ+WQEE0hJx4zYJoTUfOIefdPHEIkIlgrz5kIZ+s2qIRKX4/yiOWmjxFDyyzXReicwD2WQh5BDFPcU6SbzWVKTmlQUhPBnwFBpNFXej5UGvdP+ttlQm96UheBMpCIXKcMZnhOdXBtjRzOq0Y3qi6hFFZz/OlMh0pM+taQAkOpUpcqIDNzqjsB700thysdghchOtkBe8nBaVrPm9JAQVUoXCRgSM1Tsp0CFZjoveh0kGtWIY2yQOtlZVw5i44dQPSlVqcoIwx62AomtQDrEEDyuEs+rdLqTNmt6Vste9n9pVetah6e5XsE1rv6cq1D9WlrTnjaUEyElrc7Ag3wStrCHNaxiFTsM29pWFrltBRGGl7TIMu1OKKwsZolb3ObZ8nEq8c0AJfpZ0AIUqFsbbQ1RW92Lrna6HqTNDkQBANkilrYVuC1uc5tbHZz3vLRQrxieUdCvTpamwzXufOnLvLEiEnprZavmpLNV0Ma1kXTM7oAJ/1xgaPrTn9AFaCtoO17ylhe9OlDvhGlxCwtbuBa1OIQVXhFcyIl1rPUV8YhViDzIKXe5zG1ur976XwUHGMEYMfCMY1zjf744oBkSxlbfJAYdlFcWEaaFhCl8YQxnGMmmUPKScdGBsZKVxFGWMgBNfOJwpljF4+xpLPz7X3PiOLo2FnOMwfzigeUqVxXbFY971ebeJuIHFFavkW+BZDsvGc95XjIG8rCwKf8Z0FS2pSI+DJyC6jfLXmyzW3ncYi//lyNlljSGKobmNA/My41u9KJJ2FvfRvEZOTjynfVc6lIHGtWptuJ9P4zfKxeUN4nu7Ja3zGhN3xrXud40pzntab1PxzrWh24lcLBwCFMfe8mqVvays/hkQovVyoYWNqKB7WtrdzYkno0Ff7fN32t/u6vAjuK0gwUcD78ScoqoAQaQbQpmvxvehXQ2oZ/97OSW+9XTxrK4+d3vfutb3/j+aogeF9YPz9sW/1ByvBnecG/OuyWwbHWrBV5xi18c4yop+If/yHEQQzxPDhf5yG8KcuRKvNXZ9PDEWd7ylts7oSZXKMlpXvP6yhznOdd5yG3ec5/He+c6//nQic6cgAAAIfkEBTIA/wAsLQBrAZcCZgEACP8A/wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYGdZw1yBBghw5MADBhaufyX4GT/YjCQQDyAQNGnSYkLGmzZs4c+rcybOnz59AgwodSrQoxAlYPo5ECXSlS5g0jUqdSrWq1atYs2rdytUix5C4uOJy2cAdn65o06pdy7at27dtbbn7GBbuv7EJ3Nndy7ev37+AA//00SBHXcF3czTwgbix48eQI0v+WaPw4cm4FDOezLmz58+g7drCYjh0wcxYTKtezbq1a4k1EgBh+lpgPwyLa+vezbu33wkJaPseiCtB1OHIkytfrhP4ZeYCi9eATr26deo+Ejy/LhBIgs3cw4v/Hz+5ARDyCIE0QM++vXu1E3IIfz+wX47j9PPr35/TPP/06/0n4IAEHpTdfAXa9l2CDDbI3gQYOIjQbfhJaOGFvHVwHobpdcDhhyCChsV2IRKXWokopuhXAyTapdKLJgmGy4kq1mhjVyy2tVJLOcCEhTsT1HBWQ3z4MIE7WHQU0lJtzXjjk1BKNSJa/bQEFXg++ZBHRyIhiBUuHkYp5pg55bFhVnhhgaVVPnSQAAYtTgVEhWTWaWdDNUR41W15vSXXm14ahcGadxZqKB/yVWVfboBVVhpV/SRwjKGU3tlAoE3hNl1klWGA6U/9BFjpqDdOcCZRkeoV2lxx+jQnqbCW/4ioUd5t2lpspwqVw5Cx9urgpUR5R+hr2eUKKo2+JvufD3oGJR1zsX2a06DKVpsfsE3loKp17iTalKjWhhses842wGt4fOQIFLXitksdtj3dtm177jQbL7ju5ssbH/buFOmw7R34Ewbn6mswa+60mhEu+PJnS3A+4TLvwRR/lkDEDROoLk8XV+zxZD4Ye5OTGG6sExAAf6wyX+5IaxHJIE7p78Qr1wxXxzoxXCO8OeFs889r2dKvTZFCCbFOGEwK9NJc1aAwRfYVbOOsOdvK9NVUdeDyRBhYLSaEOvUTJtZkE8VzTWBSKjNOPpftNk855FQ0qUffFPfbeE+bExBeV/9q6rRS5y14RHyIbFGo1Z6NES4pD+44Qk7jxG615N7UD52PZ17QBFs/hLi7ih9Os+aat3wT3wbXYDjUY5OuORadO9S2vrMfjqzrg8NuEy6Y6zvB0xBljHvZoVNEcM3HDG2R8MMzzbxEc/9c/ETPN19z9RD1k8fVv9uEvfUVf+8QEIHbXLj34C+te0Z3u90+RuKnL67WGX2O9/QRxS+/sqZj1M/oZevfRfpxu/3li3ML6xveIue/1hmwXTWInULIR7rz+a93D/QVH4DHEOU9zoMR6YcCM9ir1UHkfbhDIUVwUT4SjgqEJ5Rf7SRiQhcWSoUTmSHudAgRGNqwTvpLSBD/BzfEg/Dwh2Ki30WKSMSMMBGJH4og/H74xPpgEIo34qBCqug4Lv6jHy3Eoop82BAvdhEjNRRjiI7YEDYa0Is4VGOJAAgRNz7QjluUY418IMGDxBGKeJzQCPV4oTQuhIw//KNDtEjIAQXyIIZEIiIVoshGFoiOiwyjGiMpREteaIOHG6Qe+Xi4xnmSP5OcECYJicCKcPKU7eGiGR/oQIk80iKKyKUud8lLXsIyMKSsSCU9eUuCXK4nvUymMpfJzF3+MiuvNEg09ZjKgzASIr20hTZtcQxubpObxwhnOL+5CW+Cs5nofGZQqshCdSbkmgUp5kJ4uc1jbOKe+MynPvep/89w5tOf+ASnLdDpTHdmJJgTOaZBDyLFilxxIrrcZj5DEYpTWPSiGL0oRTfK0Y7ys5/2xKc9xZnOhfZweSZFSAEhAk+F0BOfFT0FKmY6U25w4xvfsKlNY8FTnnLDp6jIqFA7ytGPdnOc4WxmShFSxWr+Up4CgepBImqLe1Y0EzPN6U59EYyuetWrwgirWMca1ljQ9Kw0FeopiLrPkCKVmUvlQx8JggtbLDUh06yPKCOyy6puoqI1/WkshOHVaBj2sMxIrGLFkYzGRgMUzYisZJsh1p5aFq0zzahH/7kJtyrToMNMiELvaqC5DiSvCNmlP2M60556tbHJYIYkyEFbcv+Q4ra4JQU5AsHb3ooDFMAFrmElG1ZfGNcXluXpWTW7UX6ONJmwXOVCpHrKlT5klv/QZUgTkQNV/IAdP8iAGMJq2NjalhTAoIB61RsDLbR3CUtYLzCAQQo/2Jcc4sgvYxsL3Mk2IxjCMK4ZBnzZtGq0ufnU5jGgS8iWCsSpCw3thDSJzVxO4BDr+MEtbkGLDg8jHelwgh12kIzZopcCMShAAVjAAji4uMVwYEEKZpyC9qo3t731LTaCG9yvBkPABO6pgdeK4M56k8GArEg/TEnaf9jCwf+QsEMU0QBTWHkdt9DwhmkhC1kMowIVYIQoSmFbLajYxXDoRDayYYw2u7n/EyxmcQFSoIU6U2C+wKhGNcDRW0lg489/Dm4cIvtVIAs5sxYt8kgH6ksbyrUi2PWkdBXyUIikxsqYrsWGt0wLdMgiHWFmRAkgkYoYxADGbV6Gqhnwi1b/4dXLGASaY1xjG6s3z3oGB593C+hex+HXzYgDWH0RZLMiWtHa7CUJpWwQCC+V2QVxdmkJgmlT1OLaHO6wp0FdAUMgYwXtCEOLOxGPZTCgEpUggLpPcIIFLIAB8F7FIAbRiU7EmAVzNrUW7qznaui2tpIIOKAFDexCm+HQQSVyKO45Tkbrcn+VFi2Fm0zXitRyIn+08rWx3WEdDMMSwwAAAJAhjQhAQQ/0/3i1uwkghwfI4eUu38Y2dnECBvxhFfKu971ZrG/56rq25Ai40HdMcEJ3VcDKTTiRGd7NRlsPtf+I9C8njRAoD+TRDLG2prf85VCPXBooiAAX/vCLBWxDDqOYBy94MY61j0MO6ibANuD9B1fk/MX4LkB7931rPf9b6AInenAl61ViHzrRCzeyw3M5vIs7RNqkhTZBuGhdhWydw7IINSNGvoIIoEACJ6jELkYRibVPIwuoV4YyeEGJfLyc3fB2hd3rDWc5F6DOfJ+vv0kBDsD7eeBF72qAD25sxN9zmwXVnIOXTHGJHMO0X7wIVLfe4TCLHADSWAEKBAB6AlCCF1l4g/8RjCD+N6DeG7CgxANkjm66u2LeOo+zvvl+Z/rynrZD7zWPCf9j4meWoky3eJnzRNR1V5XHEFIleQaxZV22eSJXcihAAoAgB/wAC2/wCW3wCZ+ABhqIellgDeoAC/kgd5WwADX3B92wCtkQf/hmajEAX7dmf/9GW70GfKAwaP/Vf8plfPiUfHnjYFZHcdIGRhVRgAOBebKweYZgCNpHAgJAB+NgDW8wANrQBx9gDubQBxxoBNMAguqQD/kgcybIbr+Ac/RWe3lna/yGW0AXePoHXDh4dAf3f4lHUoyHN1C1Pc1HEQ1lS5CGE7fQZbIAAEtoCDKwfc4wD96wgR+gDyD/0AiPqIUaGADeMA2UMAojKHc0x2rd0A2DsIJ4p2JaAIP1d1ttGHDMUIPBZ3hmZXxH9XBuA30KuIcDIU9EOBF7RRGB2GWEyIQy4ITzIIVoAAIgoALGyAGN8AEc+AmUOA2wMA6ZSAC7UAkn0GopuIL2Jn91BoPzxYb4B3iqCIfC9mNJt3TjBItXY4tMRosKAX1QBXULwWVdVoi/CAFuYA2f0AfF2AMcwI/IqIxo8AaUaA3PiImauIkMkILGgI3y917xdWfeGHS+F443+F+GR4edtWDoCDTuyI4olVATdxCOVxOC2Iv16AD42AccwAY90ANd0AVsQIwAKZDWcARHMA6Y/wh322CCrFaGC5mNabiNtxaRvueGgjdoADaHQQWA5bSRNSNPQeiRqAVVs/gQgliIESACRZAFnwACHPCSSqAELxmTjaANW2gNNXkOOPly0riJv9CJn5gNL6Zie/eQ9gd0vDWRb4iUwaCUa8V0Tvkx0HeAHtkQEXcQt8g1PnGVSxgBArCV2gACXZALuaAEGiCWbKACyagNnzAAb0AMaTkKo8CWu+BunOgKa2Zv96Z37zWUM5iXfWaUg5eUrfiXTXeHKsNE8FiYD0YRUlU3OzGPjfmYWaANX0mZCHCZXdADKvCInNmZH6gMapmTcFea1dgNsmcMLNiCrdmNMygJeel7qf8YaP1Fm0sJmIqwMg5GdbyZELk4IRcRG1GpEMJpCI4JAQFgnBdwDdeQnMrJnCDwARk4AFlADKunlg/geupmnQnpCj8JlC0olN1YW7AJnoEgdONJdEiJXK24cLeZnuFjPO2JEbNohHyQFLORE/UZARDgAEbQCBewn9fwAi9wDWIJoB/QC59gBAFQoEeglq0Hd9LIk7/goKmJdxFql6a4W7B5oYCXoXD4X3P4l/cUmO6CWoc5ogmBUCyVE6xyE8LZDgIgAl6gn/1JozWaC8vJAY+oozxaoMTAduqXiQz6C8tgpHIZino3ihD5mn3mpBgKfMLGoeepkSCqL3ooEZCnpQP/MYuEWRGE4SkZMY/tcJ8v2gMXgAAIMAY0eg1qypyN0Ai90AbkB6fKkH7qt6BEeqfGAH9IuqfxNaG0lWMXCqhuKI592aEMh5vuIm1ZyqgIwaUPsZsMcQz+cRGU6phF8KIXoAEIcACcmqZKwAHNKaqkan7TYKCoKqTSWHN26qCtqnM7B6sQSaG0Cp56SXQWqaudxavhso4HsajAKhCz+KuQCpwSkawQ4AWN0APOuqnR6qn82JzF0AsD4JmmOg6UQAls2a2sxqqrQHuqKWfduaS0erGo+GfJcIPkeJ5NeajhIk/2Oq8GIawOUZXU42DzWAKW2gi54KwGMAYBqwQ9kJkg/1AMxXCw2GqgrMewQuqWd2qGtBeKFftvF3uut4qUZlCojNYupkWsJKuAiRkUawMR+sqv/ooALxCz0VqZ/BigxdAGA1CqPNuzDbuqdidvZwihRTurR4uu+aehuWqbTWstTMSeJJsQIxtVRoE/COFl9kkCEPCiufCsBsC1aVqzbPoBOTu22Lp66edyQsqTdZe28Ceucsand8mkRxubv1eeB/eXDmcteQW1eets8zkRlWOVsmAIlQoBjtCvGnAAB3C4MzuwHyCgB0t+0zANkKt+pGmCv1B3Zni5E4tvmuunb2ur5CmlsWCbVjoqext1eZsReEsQ13sT+LoQrcuyj2kE/v9Ku4cbs9LKBtSau2KLsL7LC7AACw/gcqrKasSrtpcbisnrtp1boZ8LWX3pse4KK1JbvWijmFOhRA1BqWNKuIZru51Ks+ebo2LLu+vbvu87uSdoufNWv6t5v5ybv4CainAYDOz6v6NiWkYowEXUD0ojFXnQOVcru7U7vpwqsOarAui7u1kwwe5bwXL3bjaHwRmMuSxQsfjrwYFanq3YgyA7Ko+KmCEpwAxhWlInEU0sEF7mvUUAwzFMvjXqwJoJwTqbw5C7wz97wcWbwWc4lzZGX0XcuXC7vx2beCRsKM6GslBMEMVkuhYhYfOIDAIQDuA7u1tMvjT8xeaQvkYgxuz/G7nwu5Pud8ZBDJR6F6tG68G1mn8c6wv+u8SHYlrTe8cF8Z4MZRVbg8CD2wiCPL5cnAuKq5nmMKqO27u/y8MOO79oHMmr+YIUYLGW/MaBJmyt+AqbMMd2UkR6fMfOdsIWgUiUigKnPLtjoMpdqwQ1nIywPLaK3L7qB7+lKb92d8u4zGI1Vq4dbMQXqrHJEAfIdQrlsHDETCZ5NcXVW8WnYRUjWRCtW6kioMCDbAAH0MUDG6q9AMsSvMjbbMHDC8RojLl7Ss6W7LmpmAzR8GNBJczvLCbwWhAqDMpEg4tukc8sqsDRLM0ATa0Cfc0BkK2/e9C1rNALDZTjzMbl3MuS/xDR0bDOAHjRUFJEdszRBKGAyqxkB+y6LBoA/brAMpy4mRmqBZu+5sezqMrD3VykkHzL8TfJu6xbD92kgZBYEk3Rp2DRnFwneZW9Po0Qe5u6LzPUr3upm6rKhMzKS90IBUvQ2czICB204BzOMhYDDr3VfebVN/28cjzWGD0Ran3WLSXKPFHKRH3KhdvPMyzXmknXAx3BBTrGCwu/3fqtq9Cqe01vahxflQzYqMgMX21WhW0oRRTUPl1Mrh2cj/2i0AzXk12zld0Hlz22AQDVUc3NNRe09AvOLGhq5QrYOVbTO6bOhD3Mhh0lzvbJZ12yE3HMEjFpCLzPqCy+qvzPhf8cqrpN0L0dp9rM0pso3KGdxpn718it3Byr2u1qKHOV2NOdV0/cMweczwIwuOE70uPr3ZQN3rvNo8RA3r9dne+G3ul91aMo08gdnsvdvx6q0ypCz3g83TdRRPK8SPltn98bvv0M4AHdCOEdweNt0Ob9blQ93MSdjVhd2qb9uf17Ch97Jwoo3RheEBlNEPJaEVQH0gLgADDs34fr3V4s4OJd4Cgu1Spud6Ad2sW9b2z84E4aaM0QuqGgkXcy3zl+OtAjFZME0rALw7bdwNVs2Umu2SnOai5N3BvM3lsdeJAlDM09UHayt7E93cWE4xNxmNlN29Ba5i9QmWde4tjs25v/zc0J3uZW7eJSDuO9fKEg/F/wbed1suddbhOMfeFEEeatq6wBAOJw/c+D3sp0Xddi+9RqLtXBzegvHWO3B+cPPXT8u7QLV7djAmHQl+lVR0NEUcUv3N+jrtS5beiJjOjm3epV3eKw/uhtTNOfKwy2XuNkMlc9zeuN+uVCgXUM8edkTtJdXOhNfbA9CtULm+ye/eRQ7uJ+7eAPLufSHlTU/jUTYeHYrhD3nBD5bjdWaQje66Ki3t00SugmTeK7PQAnzr7nztnCq9fpXb8tKOuzHu1LS+O4HiXFdN/33o5+CBT7PhDJKgKxG/D/Tezgbey9veoM/7Df/PDqrXcST9OB/xbvFk/hITJN1s3rOA8Ufdjtw+Dhy4rKSM3Ag07NBd8H437oKo/gbL7szI68MW/EFC/vFw8lc5XnXX5Lu96lDhHsqUzSNFzwqE7u2bzwwM0ACv7wDB71+QvvFe/cz50ie2vWG38Qe8vnC8Fsrevh2v2ykt3AI470A37i5U3LDe/kLv/yzj7TUj/1NR/3KDJEW1/3Gt3xOxFIXs/dSR32uX3wx770Q8rmLe/yQLnGkA7tO0ZZlW7zHyJ5OY/tENbjncS6RP29qDy7gm6jgY/yBb7SwFudys7iex3lx93ekp76dI4K7gz5KAJPWJ/pt0TfA2HAHS6mEHAPWizNIn7mOP97zZ+/5AxfjUGr7usO67p8+jKP/HXO/CFiVxLx8ZTfEGat8Q1B/d0O5ADvrH9f9LsPEL16tRkwIEAWYsp4wYJFidKDB3II7FrA4JcrV6sGbeTYkWOnTnBYFIhBARgpcuQCrWTZ0uVKSZKwYQPVzEysU6FsKVL0z+dPoEGFDiVa1OhRpEmVLmXa1Kc7p//4RKVa1epVrFm1buXa1evXoB26uuvHVJYsQyUiCIBgpFEPDQcOGKBrYMyLF9dy9WDDQUWjRn0EEhxgBCGxhQ0fRiRAYMGJX8syGvNYeWNIFiO1mESp8uVnljFnggpmBtWpTTt7gmXd2jXVBE5xvaZd2/b/bdy5bQNxGntrnrJmhxlqh0KEl7dx59Y1cABvLiV9/wYuNrjgwYSJHUKUSNGi5FWULXcEKZJFjM0nPYN+GVN0TWGmQ6Xmqdv+/as5nOrH39//fwADpIo/pjDYqoPgljqLuLUccCsX5Zi7Ky8l+PILMMEGKsgwYhBjaDvGJjqBAfA0Go88zEiigILO2AMtJmZoakaYWFCZrz4BcwRwtqYa0PFHIIMUEiwfm+IRKywSVGrBdiIgoa3k5JIQL70snK6P6jQ0AjuFPlysu4oiy8jEEy+DQ6QC0mvRxfZkkvGmnGzZaUg6aVNSqQnq1HNPPvXMU7cizUJLLbbuiXI5usZw/+4F6Hq4MLAMCeOwS8W4a2yXEcETr8xByssMPc5SYrMl99wEJb7T6FutT1atqqFVWGOVdcg7k/qzKt8ENYTB44yAK8K6JrymQukAy7INgrbskFIQwfxuTE4vS7EkFlEa1SXRZKTRRlVn9RYpLGT7dlxyy2XqyKUCjYpABZls0C24pKxr0SqLhdQ6gxBi9svGHhMzvGg7xUyzUNcbtdTRbMJpvjnNdTjXpQx0eGKKy5WYKYiZ4oM3p9wVoAh4gU2USujsbeTYDQ9j1tKJwiwxYE9JWqLga0mVCRTSTENNtYrJZVepjHsWemg6g0bqYqZqQLddBtkKWd5E79KrQr+mO/822QCImWZfSymC7OVoPdVsCfUMZhNhbWtkGEeiY+WYqXDblntuAeM+1ykEo/IYAmKSQwBqRZ8j9tEMNcw3Oy9ZxtQijAAOe2BQy645NFNt4ianYxqmm9Vakbp1c9BDr+3Vpjo3yuik9nYkOZEDp9BKDFEuTGXtFHcZ2sfNS5PmmkuNET61uxVdz2OGN/54AE03aqqkbEFa1ybZ8sIIDiCE2i6SYTcWX2URb4g7ML/GPfdP1RR18kCyrQnOtVdFHsjPlVr6ffrrl9+p+IlSmqq9pz90yryUrGrbM9yW9KUdfjlmRBcZX5nEliayrelavpNRaVLFM/v9yG4Ry2AHPTj/lOclZYNEaYDyjtK/pyEKewGMzgBPNhisHbB2IVrcv8jEqZjFYGaSm5x7EuaLhQnvgwBCnVF+NkQkvu+ISCmiT5aYOhT+b14ko5oKrgTDgryBdh+y3bNWcUMHDgyCPOyd+pphwZ2xLYn9eeLp1vhG5DWRKG2cwPyWFMV4qVBYjbJXlgq4xe9FJHxiauCJyoMmHfLuYOkzI/uECEf7hBAp6oJkJeU2wqRI8h8l5B8elYMoevGRcAL547JmKAeJKJBxhTQk5MxntoNVLhg1SqP7LImbty0FKrfk5dDyh5Rc+sQHmoQiWqIHAf/lEVF7HNwVuZe1rSUGFhCh4QLBRr6x/1XrfBNUX86CyBNb9pI2djwK6cR5TnP5QFxASVJVFtQ0ETgihcsZAzO11whSSipr3ptmF20YMIHpLpFkPBsjK7et9qGzNeAEpykU+lA4JogPbYTiro4pz0PR054my+eGDhLNxFAzld6x4abC6EpFljFhaNQJBiGqFYbG1BQOXYoJX3pTWlElb+5ES9MgwItGcECZiQplMwGDz2fKkIs09JdkWDmeB26GAtWQYCwl8TvSADEnj8QpVWKqCDnJ6RkzpWlSyNlVtP7orEWZAEWRchZjRg9kb7HeMjf6KKQWkEu8OOWl/PWHxoGxlQLdYVVdJAlGxiht3HJpWpvC0LBuQv+ymzhGHsi6lGA6VrMCyixSbHrCvTmIdYC763Tyqs8sgHSpI30MAwD7VMs8MHKGZQ9ifVhBnSV0s0qBrJw2EYpQnCInoegAWct6FGLuVrm5Sa5X3hk9GiRTA61jJhs4mtTshNR21oRtZQ45EvREkLaHlaUjj6HG5Q4Fssc4xm+F+96cWMG4SnFreu3bmvpqBa4WXUuv/AY4vATQQnjtaGE+qhDtMpW7jnucKwu7TauOpiZA5NYm0HtfnzA0Nb8N7iky8eFMCLcQ8KjFZZOSXwynWCty1C+TmvSke4TsbxqlopVMi0UDK7WfCvaiYKEa1QfDsrYwSti24tTY+8bUtx3/PgUqUJEJJ59GDLX4wQ9muhQWq1jLV8nyVZ67FggUIQBvgcuMo1Zj6VgNxwbMLkNE6tcF+zi2sg1y7wy60txyNb3rbW+HoYyKb8QiFt/4BiZ+cItb/GAdVwbalh39lS53sqfHFO2vFkVUNLvwah7VGoLdvN0eAzSgmZFZwYTcnjvjNohIXm5vbeHeJqNC0LOOBTdawQ5aINrKx53ko329FUpyZb/tiF48Q9a6AE/tnvnUpykTzNo4mzSMAlXTeFF9W5wFg8LzydyFN9tbyQrXyd/wRbnNHQsrCCLXujaxUoL9a3g3BZNZ2a9P5/pfei6KhdYlML4O1+YdQ7vH0h4s/6nDexJrYyvVOJsRLUPR7XBqFtybEC6UY+GLYGRc275ohhNosW5Et1sp8453ycHl3C9LD14QMrNdijrgG2NXtf1EJZwHDlDZaqHOi8R2TWZ5Gt0qd+LBBXQsNB6MOCS9GWKQxcd1XWJej9zkU1+KWLZS7yaBGaOWdo5dXKfsNB91zdgBOPjg/Is/XDN3iNR5Ss+WLdwCXc9pHXqTBa1xUNAEZ9hwwjB0AHKo65Tqgz+K1emdchGIVqga+NsLzpxpKwKG2R4F5JegHRm14zAk5gmv28nrJlVv9bze7io4feteWRs9GHmfCU2ikQFGnGXdtSixVQxPeNwDBcWgnTQywP+cTJZ33etovu5AUGvK1TZGRM+ajKi/e562E/TtV8XzqsG5W9O/msOyxng08o42UTBiGLhGNO2j3pTb557wnPTyWYZTgmOC7NiXrmeyRRl5yftbi51eWYhUScgvcr7NK58gO7U2oT6aiIPSCJ65u6nsezXg4j5f8L6XEIcMqIDYowVcM7+sSD/1M7kOWKs7+jIUEAD/6oEyw4vHYyEbA4wPGDva6auW4a7u8giQGBjoK8AyMiNtY8DRkzhwYq/tu7gJxIZASAlwAIeU2IHwq4B0+Dha4MAO/ECqm4DO6pgvA7Mi+IRiYB0zq6eX4zf8m7wcc7ZPq7kZZL4AhJmc00H/buLBm0gViHMsDZMs4DoFIowGxEqJauhDJbQDAGCECpC9W6A9rvBAKnS0CWiuEbSoY/KAZCoz4XMdFgy7/DOcMvQey7M5G5Iz78q5FSkbAwwNgzIVBaSwrWI1iKo7QRMGPZQEcqiGUASGaiCHVGAEQUyHpivE87MKkktEDKuB3TMKrDsmESiCAQiqX0EAFaynPbq/6XhB46O8Zem/VJrBX+hEnANFU+M5IqsgVAw6BzS9yQoubogFYQgGbJAEUgCGFdECeKRFHsjFdEiH8vuKXwTG5Zqoz3orrIuAEoSAcGgCwFhGFRy+TOu3acxET/seNPQaNWQwzROjzhNFb0RA/1A4RYejLNI7p7rDQ4xLBnaURQqIAfTYDCagBgAYRF0MOSLRRxXjgwToR3+ctAgAMxrAh5VjvADzOmEBOxeSRmQpCIbkq0B6yNZCu8ASQIqMvs4YRZhINXDcyB8cR544vQ67uGZIBmYAB3fUggIIS+hTAGRYyWFoydp7SZi0Lx+YycObtGMKBxpAAzKbrktDyEq0RKE8voSwRuWDSKWsQRscQPByypSAyvSRSp8LR1WJOHEKwvaCNW5Ix2ZgBnL4SrFEpHYoAfEbhmHItVpwjUhbS3SSSZrkvfeLHraggTlQxulqvKihF6DEv9MiSgOahjbbDqRcIG3cxjMxuPSwyP83bD2fi8NUvL5VvMrI7DBUSMdgYAZJwMwCCAnM2IMVkAZBHIZd7EWuGE3S5KW2PE3e4y8wCwd8KMjXlIt8sz9i0cs12z8z3MQ0BMA1bLDfBK/CesodJE4FNM72ccxbYqjM4TC7S0eRJAUKgMcCgIMbDAkkkAaVrIBBzLXa8M7vhCTTbDG4LE/zpCvGU88V1AtoFDt/Y7Ot8UtOdKovIrgfw8GKJIWEU7huOiP/5MiOrKT1IlBZS0c9DAQKWIIYKAAW6IRByIZsCAkoWAFkEMQKcDrbGMYLfSMfyAHxJMbnOiaB3IAvuASusyv25Av3XMiiXAjdFLhsLBFP/MSmzE//CDssRpIwGqVK5ESn7LNDu4uFZogG6HTHIIWDjegGjTiTFVBSJnVS22DEKIUjYazSooCr4WCQgAwHLf0CIRiCa2g5vJyaZoq5hTRRZbBGM1XR+lw74GRTxESshYOPOJyPxlSoOkU9WQuGaNBDBF0CIR2EVeiGboiHeOiERYgAQhXEj7sKRr3CRIWkRby6fyzPDdBSITABF1CUSay/vADKoMSxHLOG3HwINJzP11rRbSRMkjDMNv0MVO25GTEvVbQkAYVAcUNH7xMHciAFIF3QVfiFbmCAbnAFY9ADFFiBQMzAW8gPc1oKETzWIXIHRG2X3uNQZxUCF3CBLTAAxwvR/0ZpwUaQxk4lu20VJE5MuzFJ08HEwXF1Q6tSLIZjKcpaVxy9SggkOnR0RWYIBATt0074BQY4gRHhVyQAVgAIREOlClzYJadgVIQ9ngYwVr25UjDL0i+wAIh1gRHYgom1WFG6VjFls47tVsD81lGdSPPIQZMQzunDyDhoOLljrxt9o1clunN0xWSQV1II0gWNh5zVWRJZBS7wWaCl0KrIAeb5B6M92jdqgIMVlA0VALaQ1C+g1IidWqqNAp/8UjGMRmzV2q0108AEVzYU1xfVTzdFmwTswbStyl4CN+ZEx60UB5otSSHNBgZgAIrwGleQABSQhp9lhKAt2hE63KBQJ//C/aAMVdaegj+AXNwNwAFKhVbI3YIoeF5qZUGMzdg101pPK9O/TMplQFOmvM+S5YwYjcpU1Ui5swXT5SXT6zOYFYZmqEyaBQa6zQZjYIAF2IVdUKA/sF3c7VurwIDA/QmlJYo8CN4OaqvBJQpHJU/kfdiIpVrnfd7ntb+rxb+9tE3swM3r5VZoo8EvElkUuc/CNNnpI87ilNO1RaK2vVP2jdvW7VNj+IP6nQj81d/cHVaq6Id3+4eFBYocJuDQwYIAxkJZeNSsW1zGFYKohVwIhuA1qFY+CtOh3BAtisFK4dqkBNkO7l5q2yGyfZFSJOE4Tds5DVCXhVXVBYWZ9YP/BE2BIXWFE7hfVBoFAjiB/L3d3G26qsCFX3Ki3vDh47EFw+0KuLJJh33aJHbgJX7eLVgDZcPYD6hgajxRvnIIDYYzDv7akwrb70W4wywo0c3IYDAyVh09AE2iOr1DWTOD9gWFleDT6TSGZViAxpCDUZBjOqYCOw5EPB6Qo7BQKPXjcllUQcY632MLCPCAST3kyE1kByYDJRgcrI3iMsRgo8Tej+XecPXeTYbRcn0RdF3AtFWNUh6iFE499mXl1i3JNv6FXYjjeZDjSjgBGtZlWrjhHv6JfCSKHQZmcumAfR7BhjVmD2jN5ZVaRE7kKKDaERiBIYA5y83aACC7TyVT/4ew4hGJSA/+iOfb5C421y+GU3DeqgZco/TV0VhQZZxZiZpd0EFwBQYgAFrmq0gYhXw4AVwGWHoW2oJlq3Xi56GRSd9F3MSFAAjIyYJ8BINeZmbegoUeATK4BL2EZCPw1Az22IkAzO0NWRadM8IMYfDt5OFMmDAWvTGGpHI+6XM2QhilADbuhPmV5QcYh3PghSMYhweohCe4AZzOQKrY4f/16fcxYJRjWmPuULrKBRM46KVmaqeOWDawor945Mu94MzNXt4U1YyWFs9tu6+GSttyD5QFZca00XH2IAG1Uyc76WbAGXHwAwTVAhbwU2P4hQXIh1EYhyOYBr56gF14Av8S2Otd7mOmYNSdBuxxSdqvGGRHbFrz/IC6vIMXUOolduCFJgMycAFopeDLnWIMRjBK9j+vueTM1mxN/lywri2YgLuUrVGIK+0OKmlUPulgWG1saO2aje2Wpt+4Vgat8QZleIBtAAQBwGkACO7hJlrMcop8Nm4+EezBHuqixgfnRsHXfIF9QOiEVminvm4T6HATcMHtvuCJpmir9lbM1mLgdErQLVv+HGtuO184gizUFjSUjlvXBgYtiAH8dulteABemIYsCAAtUgcCoAMBQIGfLXBZiApcKO5MEm4GlxXkTm73s6hiJmoPwIcupPAPdbw1WOym5nAPN4EhkGyIRgj/aiZxi45d+hxvgdlsLl5xL6YgvTsjINpIcSZjsHJXuzMDWc07+4bf2O4Elz6BbRiFHxfyKYaFSjjy/T2LqACCv8Yyp/jnKA8QBx9sIr7yY56DLV9GuXC8MZhuDW9s7B5zE7CAyT6MbeXW7NXeE8/m8lbx8x5hkK5R0tZz7YNZM0hH1qNZWdRxP3XpStiGcVCGaRByIxjyfBCAG5ABQ1DydbGKeyaKoL70/wDkIOapnmKQph3oT6/wZqynL6fu6o5YVPfwEJBmA1IZ77bm+dxcTG6lje68zvZk0Abp+KDKPG9ZnuizWENrUEgGI5xXHGdjODAGl14AY0f2qTaCT8gC/3XIB2e4gQiIdkiHcqrYY6M4YGy/DXegUrBQ7rQoYqIOB0+vyy4X9fo7AMgNc3RPdyQWgjmwYBF/90q2OYwWtTcH4W2Wc49WzBIGuhc/4fe+yhnvdfou+GAXUjhYhT84gUoggGOfhjeA+E/4BG8YhScQAGg3hLMY2B7JCkbl+I/vj7a89qYgeWK7SWMuAoJU+Rlj+UVJgn1gbFNPdxOYeSGwgE8ojDcgO9WiZCuG9cAa7xv0eXvn5G7Gls9u8ZAueqO3n1N+Vz/fynUMBHBYkSAdUqg3dKq3hiwYgKxHg08wgiOQAxFAgV2R9uGudoN1Ctg/e9yY8pEvRrcvarjvA/+5p7/ozYt9OPdTR3W+R2ILmGrKzmBK4FrAbHOeT3zd+fla92g6xxnylbtc93fzRT20Xvoj3HywHHRX+INip2XRz/pP6AM0GIBpGAdnh3bXr6kF56Cm+GXa/4qQ9/iaJGLVBAgIHoqgadSoRy4NGhAcePHCwJiIDh1ey6WEDBkXLkxw7GhCCMiQFizgCJBlGjFiypTx4kXppZyYBGbuWnCCwa9fy1y5WuXT2KCgQocS7WQUDhwWSgvE0LKEAgVgpEiRqxroKtasWSVxxeYVFKhmwczEQnUq1KZNxxSx/ef2Ldy4cufSrWv3Lt68eu2yVXRsU6hQp1DFMiOsWTJskgL/katGQUsKFnA6uTpRaVs+StPefELzqY85cwNgOSMhw5AhWbL2uu2HhTXeBLD/4Zpt+zbu3Lp38+7t+26NBP1+y1WtGrWhdsgiCBAAIZyDTwYRKmR4wABEiRMrKlHSQ6NHjyFBjrTwJURKlSxdvnwgk6ZNBjiX7ezpkyj+oUaPKmXBtOlTUlFllVZaLcZVV1+BEkcwwpBlFlrH2NIXcRVauFtftvwlGGGGHZbYYuAA81gBklFm2TZyaPZGG2j00Ucj2gzgzSgioICaarC5Rpw7ttlyIZBBCjkkkbzx0QAQQhonC2oltBMBc86FM4cRjXBA3UIHXJfdGBO9wJ13bPQQ/15H4wlRnnlfNKFeSy9R4p4cMxFQ0wk3/fJHfT6tkh+fg+yHVH9MORWVgFWRU+BWgSDIFTMKiuVLWWeltVZbRVpKZF9/ATZYYcE0A4pijDmmRQxKdTLIHyjmA8tmRrjYBwjamPMGLyKYhuNqrL1GHB+2dXApsMEKO+xtDWAw5JKotfMkcxCIUEQTVfbQQ3UIOMRllxSB2QMbbHBwCZlmlvcFuTjMoFKbL43y3pwLxJdTnvf1id+fSS0FYIBTGYooogh6hQ1YcYj1oKQSUkgswrllaMumqHR4mFeLNfZYqSycyoCqsKiThRHafNAICCA0gsYbT4hwWmq57tXAhbXBJv9bwjHLPPOFHeQwXJBLDqPskyg4NxAaxRxE7ULWPhSRdl9u2y0HKqgwhHjjjVvuDDNskC5MccL3rk486bnnvPrVey+AhOpLIL8HLvovWI9GKqktE1ZKM911LdxwYYc1g404IY5a8cUojgKLNRyj8YEKIDcyqzW24voykMfClmTdlVt+eVzu3IysccgpF6VA0U1HNAJGc+nlNUt763TiZUo9ErlfmFv1Bhu4SQm7u9CJU9f2yRu2UGPfO2hUZx/Kr6KKLtoowAsOHClaah2M+eVsxQ0Yh3l/qpgkE1MQQ4mToSo44Ryb87EKIHAQIzFuCBDB43vlECTLOlJ/P/7Dao7/c87JJsesc54VrekkpGgOQVq2KJILi0zLW01zWiM+8AEznQl2VKNd7RyQNTnpjmv18R3wxNYJQA1vUIVCG/Ku4i+2hWUsZYGQWuSmiPzV7W7ZM4ynQMUV74HPRKv4xQJ2sY3BWcManAFDI9LXtEZ8onEkiJ9eKAekCdimRzS8IhZ9MwHhEMl//4OScyBAkCpdqYClOyDSULdA73CLAw80iAR7UYbXpUl2VbNa7Wrnhdztbj7xAlsI/SS8AggqQCc8XtqUt8LmicVB0EuLDLM4swyl5YaHAQtXAgEOx3wvfJ1YRaqESEQjfkIbSeRWDxLnDQe8D4p4wUWvhMS/vcBM/5K2vOVd3JEAlynJf04Co3OK4IAqDa1a1kJgQ7RlkTA5EIIR/EAvetGGL5DHgnbEYB434AGtwecmfvTa70K4nxHayz9lK96AEJlCRTKvbW4zS8EiiUtiWY9hHOKG9jDZPVJwsoeTWQXGKkGAfESiiEf8GAe60IX0NRECT0zZXvpBxSFJcS8VnSdGJZkHLnaxczwDo7OgRcxpGfMFCESd6tzozDhKsw0DQFPsZofHbHrAA+HgoE3shCdwrgIogRQkOQPVFBNKxVDqLJDaGMXCRxEsenGbXkYt1RdF2JNTZvDU9rgCDlKMqJM+xNguBhoJdVjDG58opfq41QU2gOATbv+AAPwgqpdaComueunHMaKqV/ztr0hLYpIhnLSc5jwnOmTEUulKd9LtrJGZKk3cM6PZBpcOAA1fqKNMZ1q7mtbUAe2qE0526jtAivMo5fwPUY2XwqQmqHkMciGEIiTPvRbJhla9pA4lMZURLaFUk/lkQDEz1rKe1ZRXUqgS2BqAIgjgNDmKoqWsCJtd0ba6MrPZLHt5nI8261leGCnpEosApCVTgQxs4wMTJ0FoTpayAzACPtIk0w1olrM2DccTchraP5IWeOMkoTmJd8h1YmWRABNYMCDlsIJRam7WDRIlA8MpYeCWe1NxzBIiY7FB/FBVwyXl4dTXhe6wdVYiiOv/c/HSDx9cKrt5md+DY3ypY2ABAy4G0l+b9DnCQsCwBDTmeNO4nW2hl3XPZO9kB6BkIxjhDSHAwXzry9lwUBkCoIUXT/sbtv+eFl/oNOpqk7fItiW4qZCcrYwvVM+GccMwzdieYsjBzxGRylQc/sUJtoGZUQagMx9IK3K7ECsvtDI1tATWRfNy4zQzmjc+MNaiLZRj7gawCN8dnRkTu1jzdodbzYQsS5Os5Pe+wSTTuKNmNzvlcNCABhCAAO/4+1OgBrWEhlQt8lgrCRYiuKmyhWqjiRPhwbS5wjvkKgWWUOcN/5ABYSXA4I5gjQC8AQ0eUwEHlGCRXAh6uQJwpV14/2kpu+plosE+9222mGjtymJnXwRdjz8BXiAHOYFKW2MDPw1HaLZ01KQ2CTHu0YQ7ZlObq261qyHgjN59bdZcFuo5B5xrRSrVUQmOxSPTMlV0C3vNlvyUDquCbIrZudkL2Aa0h0ttP6dVCRXhtjYCANd2yBUv9buUuVlDbo7zfC6aE3dHPeokAL7a0uDNtGKFrMxOFxmC65Wse99rkpOkRBn4SLV9qYzwV7+aC93gqcOFZ86IG++oaau4a4MB27OgRUPA7rnCrFfJCV8yYiLv6rI7kQ2To3wUozhHWd9QWVOqgA3a1gC3OaANL8zc0HkBuqUiXZd1w53jR7IxsCb97v/mPGuY8y6appPG6Xw/dt9Idi+Tp56elfBCyjVldau5/moRiGC0YTdtoAoJFQGlk8AqbG3A3gnDTaC58nGnKptjUeE4y5mTpArf3rvBgCDO5O9H8Aa1B2BKK/XA5WtUPCsjUIJhqOwuNwcWjGFTA+PzXN3C8uKygPlqBzQhAJgG8qbvfV6mvTGy/R51kwHcNKDEesCCG+RR1m0d19Fec1CBnswaUAEYIXkZMEhcIi2KJLST85RZxj2Vg7HfbQzbw4Cc3TUfVDyfZEQfED1btE2b4FkbCBSetlXENSgBBxgBcyFDzdmF5AkJdekcCDIaH2DB5gSLzugY0YnRdwlNGdH/m9JxmmOl15FBnb8FYBasXgG+RBEY3Osp4OyJQHM0hwRo2ZaZVpc5xa313sRhIPOk3doFRgy9XRDChsfdFgky38ihIByo4Ak8Wz6MA+Bhn5J5zCm5XBKkzgXcIBjSXIrZRfoFiy304FxA3hxmlLpJoqTBHwAJQOcx2f2B3nhpSXndG9Px30rFUXsBYJNlAdWxCXvAxMHF3gKCYRg2RzzcXq0F2BKkIZhd4PIs1fMsWPQ02AxVYghSVVWNIKiUYB76UycYQ4ctwEz84TlIW/Z9AvqISS5cg9JcQCMYwSLuYF2cX7BQHnAYI0Y9Gua9nybKX7wdnROOwSh+SWN52mOp/1eoRR2TvQErDqAr3k5MPMF9eaGz0GItCgAJ/NTD2ZrZpJPZFZiYjdkGQkoHFh867kUdEobeLCMe8pYePqMrdMMJUF8+UGPgDeKfyWAuJEE3fuOJMaJesBix7FxsXKQkdQBHsaNHbV4YOcASch/SJZ29kSIbmaLToaKoLVmpUd00sB4vjIObrIvWOADsJdwXHmQtSkBp4R7ZpJZD+t7aOApTQc+vfaBN6kVGKt8ddmSyfSQ0/gJYTSMgFlH2tYEEtdw1sOQ1IIA3ylwEwKSKJcz6zQYlnmXdbNE66uR28WTRfdfngWL+pU49GiU+IiXqGYHqVV0WtkfuyOIsYuVBav9CGXLl2AlY2fmeIrFQCzlSbKkFMRomHSLjphTbHe6QCVJMiVhMNhiD9I3kNI7COEibNwjeANgl4mhjXn6JBvRAI/glYN5FYV6KOdpFzsGmzNQApCGM5sUfSCmhJw5NUNabl9DjMpFe/z3d/yml6hHgegAkN83JLjyB7DkLaILmvCxkaT7Fl+0LWKIdmcHW8BmMWVonXyAfYHRIDi2jbe6WsvWQbvImnpGkSbrgAHxCL/wZBxjeSr7AAVzDcjYCLzRe+dUFJtaVbTwigQrLkeRAdPqVJi5HdwnTd05LeIriKErm/n1aZZ5eFQaAqREDAbYELLinnLSLTYjAVdYnVmr/ZX7gJ2rpJ+/xpy8aWMCo3YMMnwcWY4riBSUdaD4paPfIGT/hpqnspivAZR/+ZnCeZHHepUqy5AGUTl+KKA3JpP1s6aUMIYvGzHZ+TpR0nrx9onhdg42i1GQ60HlaZhViJisCqSsOKWdyUweB1gIUpJLWp2gWhRlCnIBZYL9Q3K7xmtuQZVpswsbh6V2IYKfUZpjuFpmm4G52Q4TOhBwAJ+BRqIWiz5W4nEPEKV9+I53mxQ8Oy3SOI6oGiZ62qKX0KZT8qTAFKvcRDSgSqig6RBIcIpFR5hSmp3peIRbyAqRuEAfRiU6ZjEFeai0mZPDUS5dFnKciFaj+i2uNamtq/5wcHitcZAreuBlH2qacdZWD7mGswiX1yUFmrKkgFueFJtGucqOWlE4uACsKMOKI0oXkIAw5Qhe++saKKquLGoe7vZuz+li0KgQoWoeWvMC1Yuuh3qPptZQ+Mqq3uiJUvkQ+sIuRelNO/IErnCu6ZmVQcFm7duppTql/LgiD+IKvuWaDbWyB+sW+1l3ELCje5eZkZEM2hOSsEkCtUkI1nuQntEEvGAS2dZ/DNgQCaACwCgDFKtqPIIydqp/T4saj7anM/FXIcqfPhBTJXgliiVehWivLlqK+bWsqLhlm8iNKaCbWUMLNSiq58s4f8KwrcMHPYip+5ufuHdJDqhCotv9h8HEgPA1j086t3UDtx/Xrgjqf1epd1srq9IWVwXqttOFqNJEtcnJol6RtD+CgAOhgI9oFTUrniZruXiBmiQbdYg6dOwrTexmE34YneU3EteJop2nrevEoAC7lSbCnkBLpuOoXvMQLFVwuVt6A2GluQ/bip2JgqLpW0irYKUgK8Vmk8b6F3KXuvyCIyJHCCVYMUuidMWitb3Kt331twort2CZR7mrHhzKX+JHfXkjXsGSsot0vXQxhAgBB8nKOJm5iY35n9Maj6LFsedojB8Tgyx4u4vqotw4g68FCuD5ukdZEfEguT/gOIpgvVnJBLgYY0X6l0QIfmbHm/DqVDGn/KQbnK/Lp79SG6b+SaQCD5JnGLtc+gK0Kp+BZaC8IDcMiBDdGhAEcwIc6gohWLF1IVMJ08FtYsNNOQAPYLc3gref4KWF5lwjTKAkPpfUWpY4abtRJXWY+6u3cbA1H7s5+UMNJAA+nKyuUExBD6VQIcftioGq+1pXSL8Oc6hLHRf7aoepKzG0GrFEYwwDLagHLARbDAi/QpeApsBeXLa+K8QsgQMQaAQSwrTjyYHWin214LGz6ABZsMBt78E4yr/zhMXhJq3jVGx+/HOG67BSy8Hut4sxag1PeDpzUsLtc2Z3IWlAYQyOHIQlIQO4NlSQXbSWHpYJg8gvRr4AOaCd//zKCwhn3iHIetu6pmHJIxmVMPAAg1m4AKBksk23DmtQYjDEZ9y4El4Dj3dWwXkoe3EZEW6cuJSbd0DHPgHDnOcKMYsnJklfKKtMJG6UKZy+37qPiOqoyHEFL1CwlSOUhd7N8fHMON9xQMDIPkwBPk4Ae+IegmKY6w6v7yut/kgWpxrMSdzITI59V5dD+ZlL//q9S/NYznjLB0ioWjwMvCOdAK2wxxPJBm5QBcGgZnzFsoOilALNcFCsI2oIuyXHd/BVgBRZ3wtuzEhN40lu9VStJR3N67ag0nVUVcq8/rgRLwPQo0DBOia9OKPID4sdO9zQJ3MAEouH6Suk6U+mCqP8dRbbmMbwmU8+FxyljVB+IyP1N+PzWIPDzMuDZs6kyJbCyMhDDcFao2Ia1QRseN5L1GKftN0KwIUgwbOBCRQ+JG+NFL7MfH1w0WyvmYv7PJvakY0KvHp9sX4906kCzH9+jYE/WJ/jbG3BvetBsVOLspOrsY2eZT+GH5f4sZd/ADaAAElAg5xJYUfOaZ2Nca8ZN6Y62XJQ2PkntPV/F3UEFKZ9Ka69CFRdsPgA0bRfOFkdTMcAIw2por2KHWTMn4/3lLucFEFAwkfBBMf/DxVaeMCcABjw3dLdbHTMLXjsAGnw0MzezSCeTZGpAdzCTjgr2YIf3qJVaAHiDN1gD44L/ayGjdzfbyXpnWdiQwKVSdmXPNwqgAGZX4FAbSIEhCOj+52ez3ZndK4AP24DbM4IYuJieoD4LBVZPn1Y/gAzzQm1nwStH04vACLbl7paMMeIF9/u0rW2E+KWotV4MJrrBcQ5w8P3QdcgOHYzymHfq9bRcgMna+PTiuIeWtLYeGb+Bt3gLeZEXETazRLi+CXrbsM5OLn+RIVG8N2hKOZWjAJRAweZmeaIsRmpe8n6Tav2K+Zh/8jeoZShjxYF/pFGEM1an6RXPNm0TQwAYgcJ28YvgLhhzKHaU9UI3ghfYCKDfBi40QCwJyXLnxYk/GByrOIsTC13XtXQDUxgJ04wv/zOlY3f+3ZuOs5Gnrc4p5mPUjbePErmoH4FLP6WbMHZje7No2V4glS9WxnesN6sMzAKWUzJRU5xRezl/g7lr+jqA/0Nf4A2Bnzk+99OaB4VP9HOaqvIDMLucT8OzR/udG7TZwum1x6kG3GARkICHB+9s9EMO/IqQuDVdGHpUnTsQpLt20jVytHsyQ0d1R+u807vo/TW+26ORcTrM6iOoh3oRCfw51KzfbfPBqzd9ZBmr8wkeHCSsPzyUyIAMUMMks2/Fs/O8WmnGw+HGc/yvJ6Owg+mBoPmYLhtrC8XJE6zsPsDKx7kyTAPHwPy0g0yGatu17rmWfOgn5PLOo3HP5/8AFrxthRw3XpQ7FtUATubAimcRoy/9ssA4j3WiEXjxtPxtYlHrSBvqCdsjG1w9SrdXzP57Foi6NXj918f0Yp+6fsUaZIfTTzE8QsZ3lcs6xK/AClADE1C8lue3WDYIUtdraHNyx9NFhtzT8ok84JO8ZAx+OBOwNF5x4tM240O7At85nhceGNO8hmf7tr+PQ/M8bgBEPyAJJvwzeBBhQoULDeJi+PBgDYgTKVa0+M+HuwYJgODqdxFkSJGySJaUNcxQSkPtWEZwKUAABJlFHDQJUKxRIw49euTS8BNB0GsIrh0weuBF0qTXmObKpUQJTzZsOLBRcVVFzg9bzZlDg6b/zQCxYo0YeRMgSxZi1tgeOXLu3LhRc0flkyOHQN5duxYsOHGCwa9ff/4sc+VqVWJjxgY1dvwYsuNOnZDAJHGZxI0bKDi7jCBDxooV1KgZIneaXCDVq1dLCiQJdmxss7GBAtWsWTBfZmKhQnUqVKhNm44dU3RckUjly5k3d34Rua1NoVBxiyXM9uzYr1efJlWNgpYCLFjAmfx4satuv04syCvnASVKsGDxUjYti5EBbXr16vO/j5xAqEqJXJJI4gADFHzhgJ84CMABCFBoJyWSnlNIoAQ64OPCBpbD4MIQDeJjgo1y6OgjEVWsyKSSVDKkBJba8QwmmSAIp6ayctqp/yefNAgKyKKOSioJIpt6CiqpqOIAq6y24sqrrz4Za4Cy3ngjrWmI2VIZZXiJixK67MIrLwL28guwwAYz7LDEEosMzsgmm+wGzDLbDAXPPgttNNKoSSU11gRVLTbZaLMNt2DM4M034IQrzhbkkluR0kotDek46UI5xTphmgFFO9i4U+00cMCjIIbxzOsEMmNWcWUZ9nYh4K745qvvvvzE4q8YAAVUgY2erikyQQWN0qCHRoyIMIJ2SjDEwktxwSABLCRaLkWRCroUogk6MBFFbsU9qEUXVZIRGRpjgkCEcIpoQseceHIKKCCFGvKFA/U9MskeplqyyUae/KCrr9D4BP9hsszCMgstufSSl3HkE/OuMs3sK03BCDsMMcVWiRPkxubsBA4kMMMzT5dAE83PlgdtrbVCaasNlDhy262334IjrjhJx/0ZaEozne4UVK77NNTtuiPnu/DGK+889F5dhoETZoXP1vnsw++NXXvp1ddGQAC2wGGNUtAABpFVlllnoY1W3H5wGagBd3ywKIHlgLiUxG8TyAGDcIMet1ySXlyppZdqlAlHeI3IqRGeerjgpx/tRWAMo5TK90CmrnGq36k4GB0rrZ4sWEqEp7SS4Wlcn6ZLXiKWL8y6Ki7zzL8YCGwZNjt2M2SQRyYZDhY0Q9mzlftsmRpkUnnZtegNnc3/tppvZvQU4Ibj2efBvf9epOg2NdpTUJMW1LtTU4WaVcgSg7Xqqx/IGleuvfYv7LGDVeKOA4tNGylrWxYEBNCst8kCfP8QCAZykIAGdGACdzsIH7IVEiwoxwcTyIPf/hY4j1QwgdwqHErOJSN1rcsDNHHcjiTnI8vZawxj2ByRkuA50IVuSUy6ium4YrCDqa5KV8rS62AHMVjQLkxjstiZ/LI7wfSOY276WPDgNDw4XJE8UECeykLDPNIgA4wlgAb0CiWJmVUvN7qJRW+yJxziRAo5IZTjHBcyNOpY51PmUxpr0uc08qwqMu+jmtVoNT/a0YcXWwqAfvjzNbAFSGzA/xKW/9CWFAQIMEIFpNAB6YiQfsitI9hqwCg38re/AQ4DHvRIJ79XuJO8KEaJiwAKFncjFRoBJzqZlwsvh4ADxHCGS+EXDgFWOoGdzoeq+wTrhvi62PHiiEh8wO30whc0OXEZ3YiimxhDRTmNDIvkYUEBOsNFlnkRjOkUBcwIJbNDISoYamSj9jZhCzgeh5X5DCFyiNYppGFjO67hY9NQpaqoue9Vf4hfIemHK2JkoWuf6E8xHgk5/RWofwiq5AEumSwjeIEGmnxWSfRZUpMyx5UkLGE70qW4dUEghfiwCeR4RK962euXSAnmkZAUFSWRLmAD608biDoWhDGzYc58Zv805TNNaprJmrpTUzY5thhXebOKc7pi8cRZgBhAIXl88mLz0hnGMRLqNbFhxhlrFod48maebrRn905aV27xc3xH06OoBLq0pmkhBn886GPep1BCYu2QDvVG1/YzUQBBUn89KBuxKvmCjirLEQR0ySZJalfP1tWVr1RJLFl6QhulsAhzWCbkWuijXmIOmDv93A19+i+gji0rx9zKUItKJaQSsUteUgdTKeFUi0EVYxn7RTe02SbFdBOrkgEnV8lTAK/GYA8qE83y/FRW766zndOjWVvfukadubGedP3sekVkx+qUjzaFGpR3gOFHQMKpsAtFrHwQqQxieCMAYpHo1x7/C1lJTpZBle0oB5RVBM2ypEJwY++Egxbaw5G2pRGAyUvDEVN40bSFlXttDGUo29lCpbaiuy0IQMDDD/A2LL5dWDOLqAx1QFOaTyXANqKqXCi2yarQje4grBjO6sYgBlrQwhLaIVZ0ejedJRBjWsWLxnj6whc5c9RwjnHPSVEYzMzBK6f0er6XMU19gm1fIBMqq/dk7Va8YMtiB4Awxz72V/vLRUbPlrakaCAXHvUCAfPktgMiMMyJfk5oVZoSGc3ItIxLYQhUm8vIzYtyN4VhbGdowxsqKYdYYbGLYTwlGQsxqa7rkjqGS1zjWmwb20iuE3/xYyCvYjFDlq5WqTvO/+sueQkUSMM5WwZlKJdAFIVa6zttdmXznnc4tjBOHBVdbehkKq/wBShf54tmP7IPZG1uz5uR2F9rAFjAdw5bJPU8LAT9789rK8YAC2jACEvY2vlGSGhFO9pHe4aWtexwESjdBHOwdpciHjGnN+dpFEtOxTrcoYtf3Asgnrp1wBUufXJMpjLFetZq2tg2FaNrkU23179eMgUoAAxgjNXYYYyyGGHDVusFQxhw/Q09u+xlff8cInh97z/LeGam1Vc84A63K/7AHvcwtNy8OAJbAsDYAT/yPxY9cC7czaBiWRLQHr1HEURQbwgfGtFAnzC/ZXE4GP070oyjQThCIFNL8/+oJwrvJYmDKcwT98tfETfmwHbbizZcfCxmCQBaUq1qIyKxuDoG+TWdOHLnltzkRU75r5cQbJcDgxQKYF7MkVGC0oexBKkwI7PdqhtGQZvL08an2mmPkDF/o8zb7ut8CRpYpcepzQx4+n75W5+po7vO/SEwnvMs2T0fyOsLsuxPesBgIziC7GbfJNprn0+2N9rRcHcphztMd5lC7tLzqtwLL8f3vjucmKMD6g4JX2pTU+lKi0/LlrQUXNkRN/I8Li+2oRIqQap2hwEsT4rexOSIjNd6bZyQTMmCreVAjxRIwQ66i/RMT8o6sAQAYNloptnkqVF2Znsk5cu6r/b4qWj/cm+Puu2vfO++gO9VfkH45AfOEEnOzs3qJgrrIInd2g36+gzsAi0nrs/BYCICkOHsuE8Ff4bt+s3f0EVPNuylbiQcwmED6g4NQCzh9K79GK7heOrhAi/UAka3Ko6oiOr+xiL/Fs8bvGEtHubxaMepBDDWCvAAE1ABF7ABHZDXxKm6vGoCKdDlLvA0AqEEyMrYTK/0PPBZDIEJxitRcCauHqVnqO0Ju+/2YiGPkmb3+Mjbkm4GaRB+Disf4CzOps4aqi7dHKnAtK4qnK/rjkKngiLsjpAYIkSzmsXQ0A7fNnEkohD8ws+EqnDDbAQLaWADNgAf5qDF5KW1wDAMNef9/4bJp8xQ/pokt+pvDWOMSgbgDQMgDtnCHJfK1e4CDwnQAP8iTQjjD5rLD/8QEIln8ySw81juEBERNVKB9FDPA1+EB2xjBHGmBN2oOGQvBYWR9liQfIhOVF6GVJiG5danFPFrapzuzVQRkY7PFe1s+ZhPbAZkfyaLWI7CXsLO+j5KBAhI+7YPGNOOIRMiCkmiGN9O/MZPGbMwHJhxBiitDLxwclyI/cJQDJXC03oK4gRv8OrP8NYwHK1k8cixHM3RGtwCLsZBYuxQ8mQNTaQKHpmrG+bxD4tMEK0LyZLMEPcRNRJxEhyxrOASEl8EAADgDOKg9XSujdDLyxZyJoFuzP/waK9Ccb5Mpb5kcLCAD1ZscAGuJhUhryPnLMDqrJEoqsAga2xmsUC4bghREkjCLlmUhRccQATKrt58ESZDC+hqsiRuEiepEBlrCQLmLgtpYAZm4BmDkoVCjBqNssSucbaU0gzPsHQITw2hUsYULy3UwiqvEivBZBRqR4lgzSv3MCyZiyzL8gHPUgJjIB8r8AJJoS1ZAxLiEiADUiXqEgBE4WayLK625xg2Qb3+cgWPYxOKhhu0Tb4kMhBGETHXDGRc5RRnBerKzfjmzOqu7geBkMWqot26zusOYChw8QJ44giNYDRbcsM8Q0YOZxj4raRYs0Vc8zWPMTZlkyez8Db/nTEEdDP9emT9inLTMkengNMphFMbt9GY0vDFvhEcE2/G9m9LzNEt3iIutnIu8mE6cafHEJAPxXIspYgeT247BxEf1zI82zJQVsMfZU4upexw6pIRGKECgsA9D3J7+pI+hdE+N0UwzYw/+yjpoMabBHQ9xo1WHhMyD5QHBWzAQnLdWEwFZpEWIdQzcVEDKjQ0tcEIAsALSNM0T/PRIlElPlREm0NEidHtYOnRTBTgrPAKsZAnZ2ADcFMNyiAa8a4nMk3TFo5G+87vbrQMc3T+Js44n7K3orJR9S/V6PAIvkQr6SJJ1fG4mMg6/4BjohR4plTzzpIQtYDlwJMfUeNl/+xAys4TTOlSTMm0AlrBvPYy2nxuTdm0TYduMAlTFP/KoAA0ZIzhMGyQkAo0sfiUzursTxeUQTMzWJyPM/MlKYxiQilUUSGnLNTBAXjRJU8TNX/RQzPVYVOKRDm1U2XpRGVzNlNUC0v1J1s0VSVnKGP0tTYNX4AzOGf1X4hz4nhU+b4xHKtkV8lRLbaEGGpMdiJGYoRVSXXMWDNmd/pQSpkV5ZxVAqNVWrWUPwMBAE5vLtNzW8l0GD4UTXlGXMeVXG0h27LjBSWSvuwrMQPUXe90AbYhTw3JQGWHFZEv+XzwMtEPtwh1M5kC+v5VQplCYHmCwRqBURvVERzAwWTCCv/1hAk7lVI3lXAL13AldmJZIsP0ZJZANVRFlSebUWNnQA1CILdUdVVBNmSBhMR+CVZjVVYB72TlT+JS1il9VFcVj/FkVmafCcdoJ0nHRACRi/IEYzCQ9fKWlR6blTuTDFr1sRqydDwl0jVEwVnQk2kBYEwroAKeVhZ0wAq27ATnk2pVEK8yIT8hMiLj9OiWgBS7Nk7SwxXglUCJL7HMVjITVPko6gfZdlAdVLLedlg2B2Dp9pIuAH/tlmDLIgD2ljRtBFQZd7MSl4ALuIAXV4Ab13EfF3Ijd0VnAAcqF1V3cxo1d3N9KYZGlmRDV3RtS0d31Clx9UeB9CyWk3XXwv//Xhd2c3Z2oapJRc5ndVc7q7Srfo1oqyF4p3VLB0WgdqAUljYl1HN5m9dSdYAWWmFn4lMhq5c+HdIF0RUGgcF71zW67JQxy5dsy1bq0lfAGkltY9GiBgR+49cp4LZIlGJu7TdR87f67hZvy6JReeFR/3c2/dZxExiP8TjgFtgKldGPMdaBSXULf/JUdXN0PHYoibJVQ5ZGabRGN5iDPXZ0P9h0T5dlU3cqh2hmiaFL3AJYt5IrdcyFk8vHlgF3f0eGM493a1gCf5cCcFh4qfVoo8cPYGRwDUGInbaIjfgWfuAZpJZ6mXgTkWNTcE97oThdD5OKq/hVwPZq5EBPDZRe/12xi5UPUNdtJMV4KngCKsrY3eL2BTzHfvGXnCVndCBHG/KWf4/AEea4CJyhJdlFnv2YnuuZngGZJ2nAAx44BLaw7iR4ginYY280RmWUkTPYFj/X74Kzp7Jxkik5t3i04kR4hF12V02YdVPYZiFPdo9rlEPOdm0Nladod1fZSn33hnMYHIYXemIGNiAhTLeVeZ1XB4yYFm7hFlQhAeYqmIX5CYUue8/1aCeSFJRZsIYsPdajaobPfIuPT8+NminTmi0T69xXm7eZjLnOjDtNnD3nApSAnBW1jd04J9IZjuF48czWEdrZCx51jjNWcuNariUXB+r6C75ADT4A/Q4Zkf954gJy4a8L2qAPOnMcWaEXmqFRLBuHk3S5MaJvFcZy9dR4NWatgQ5rlrhiV5SZ6CsR8IlEOjsbcHjsURB9rZUpsOVU2mhbmsoKJRW0VXm5tYhp4aZvoRZqwRRwYWp9uontswXhK2u5t6hRBTF1LanJ9z2a+lbqY4uh+kqMyosdqX3d933/hZs3U6u/mau7minCOqw9lnTJGv3GG3LKAAfu+ry/wK6/wALau72FAL7jWwgsQA3IGbBZ1YIveEYLW4M/t6tvtKEl+aFLN2UlemUvGZN5VWYdJrh+dXY4ekmZtC8oT01qjapILpVV+QEhEC19F7X3UTxZmoe5o4zWyg7/glimifh5aRunb3sdTAHGa0ATeXtNifkUcA87QHGou2O4YyAF1My4m/mKxbZWVHG50ZeLoXuqLROMw/h9xzirs7vrzhixufsawNq7s7yvt3wITMDLvxzMw9wEXIDMy5wMkkC/N/eXOre/D/u/ORjwhjOHCDyiKc6aUbdl4fgsGC9mN5mTXVcrOZpYi3VnPfuzm4vkXEXIRBvlUo4FUiAFkOw7pTXEZZm1y0gSQhAacnmmLZW2a/u2TeHFYTwB/JLGe7uf9BOZz2y4l+A/jduKb5DIscbI6cP4zhbAGGtXohsWm9zJqxur4xe7pVxfqDwp7sDKk727szzLk2ALRgDa/6Nd2qed2kdgCy6Hbq/BkW3xkQ8bKd8czhf7ZOeczuscsiO7oi36ooU0o1MYFkA5lFt4L3pMuQhDpDtG0Ul6hmlYECFd0l0ZxLV0h1mDrzB9ZrAhGcZ0iHeZFtihxWEc4mHcIU6dia83qENlx9OVAlx9mZHaXdXjipM7FWtdB49AGeYs16nkE4jKmntdJCFHBQRV/k5WchQbwLu62ElW2Xc+CVyg2n8+CoJe6KNgDbzd6K0cwBs6zuU8vB27zg38wBE8OV/WhLWEwZXBwTcaiWxns3dWuW73lH8n3xddw/ldnPwdpSvQAivd0gWl4Mvo4KtHFGR7tkEdtyMexhVIgv8onmqdGDtAZT8z3js23iLBl4oEFORl/T1GHvKcGsnPLdd1HWF4Xbr/A2zIeySxYuatu+ZRLOml3HNy3tiNPinWYOhPH/VTfwv2QaE7B+k/X7GXnumb3unH+9zRvWUVRnX5/IT/HNAb/wE6mtAn3B1pzcJ9Z6QZcErrcTK2qrTJA+2VTB8DXsRHHNNrjq1yoxWIOB3Soabt/u7x/iA8hO+r18aNWagzvj+793vZtYo/Xqnbo3xpvfHHwdYfPw6rTtcpk/IBopjAYn36EOzTKKHCRipANFTBIWJENhTZ9Lh4UYnGjbk6eux4LaTIkSKTmHyRBGUSBGu2uHwJM6bMLSP/XpD8iHOjTiUYMVb8KTGoiqFEVSxU+CFp0l5Mm7Z5CnWA1KlSjVgNgDWL1izEunpVBlYZr7HjxlE6izZfPjlyCLh9S2DXrgV0T5xggPeX3mV8Xfl1tSqwYGODChs+jDgx4k6MG8N5zCKyZBYpUsSIoUULBQrAgJH6TIqcaNGBSps+Lam0pNWsJWF7/RqU7GbNgtkZJiudDh20bvmuVcuU8OGm/hk3juG48uXMmzt/Dj269OnUq1u/jj37P0WKNoU69S1WM1CvV58+j760aFLAKGiJERkOY8X0ERsz5rfbLwYnFuxyy1Y+DwyIFlqwHDgWL0dYw6A13mD1xhtUfQJV/1NNDSRQQQQdpRAIDj0UFAc/UdQTRjvphFOKKd4xQosuvghjjC7ecaJGJfY0IkUhSlRUjxw2opRSFvYCVZFUUWWVVW9kpZVXToYlVoJmFUjJKGuxBddbctG1gF14MaDXL3/09ZdgZtaHJn2NOQbZZJRZhplmm3UGWmijkZOeaakF0lprsMUGCm3CCGOGFbrx1tstwBFHHHO48KFdpJJOSmmlll7KnXeocCPMeOXtmWee5LC3GXwsyNdJmmgas0p++/X3H4ByCPgAlWcdiCAvYFlDjIMPBhDhhBUOyRSGByH0Y0IPFbWjiDmSeOONNWo0hIwvkoFtttpm20UPzwLVLP8HPfr4Y5BLEVvkU0cimSRWTHLlZFdQJsjLlFReiWWWcs1Vl5dg6vVHwH8BZmZgqh5s2JqdPNZmZAW8eVlmm3Hm2Wd3khbqnn2y9ic2sgXazKCxxEIELSb/Vss6jAr3nDuXvgxzzDLPHB13tmjKqafYsBaqqKNupsXDqCJM332t6veqf2+xNWCttuIKy1i7NujNr28YceQnFLZB7IXGGoRsso14+GGP4Ur0bdpsmOBC226/DffbJsw9NwzNjlvUh2IDaW7XRKb7ybpTJWnEku964+Q08oZFr733stVWlnFt2aW///7C1zIDF2ww0aoqvDDDkxVQQGURy9lZxXbe2bP/nnz22fHHggozMjfffFMLOyibonKj0CVAc/DCD088dTZrGkun5LXWOnrrVeOeqUN7bh+rrnSjH3/+bSOrHE07XSDUCR6hDK8MVg2hhFlvzbXfvRh77N4LEeVh3nhDdHZEMLhAd//+//+/oZRtKPJLiLk+4L50RUVwVWmXu7aCuHgRA0pHaJytzoKvyMFlX1yyy10uNyYy+YVzq6De5xQmutEV4DKnmxOdLHax5ukJdn+S3exicTtUoOIU8FBUcFZWnOgAoXhELKIRZ8adYyBPeTvjmQxN87z2xEBo8zHhYViFn+vtR3uxIgDkvmercYhPQeTryvl+BSz1rW9Y7isW//yKUcAC3k+A9SsD/wCIRwBaYG8HbOPfFMjAwTnwXfCSIJSiRBbHocVKkNPgBilXuQ+GKYQDI1jBrIgm0IUODm4iHQtjsATUvXB1GHvixphRw9ncEIeoyMQpThGKQyxqZdTphw+OiMtc6tI6mdKUGYLhKSc+EYqjgl7Q4lNFTBbGaNfLXn+U1r3vgc9AuEpQWBp0RndFSI0TYt9T/Dgk+BkEjnEspxryiE7/XQIM4HSKAhcYyAEoyQjuOpwEF8c4C14wg47UEiQ9+KUwZW5zJFSmYjS5SU6qMGKgXIILVRfDYb6ONcxAJaBAFjLaxcJ2O4RlKDaBAXjQ0jou26VJT/+K0l6GAhW+CEYclmceiaqHHOCAHgWmeKrpGfQ+WUSa9qApK2k+bYxjOcKCsEmMqmUhfVcLpDfZ2E5wvhF+Q/qCEK6K1axqdatY/YKF3gmVwMVTkFczHCEjeM9D0qteFxwFJTIoObdwsF8fBOFAy8Q5whh0MZpkmEIl48nTLcGhFKtTRDOWntVU1KLYSIZs4jA7M2yUGzr06Ec3kYORWgd4KO2sZ43Yy3KgIhYuTUYTYyrT50UPmana6yB42iotJg2oXmQaGKkEtaido6jkMx/V0KfNCGEtnloD6zejilwLFYOrzG2uEEJgDnWNlV2DJGQhJWgNta4VFhfEYCP76U//fkXyS5dbxpgqWVDXHqavfnUTCwKbmcFObJSkxJMMQaWaxVa0sY6Ng3+DEQxfSDYWlfXoJjbBnQSIdDjZSc5nHwzh4HUHecGIhmmZkRr8DjOK7nnYqZK5V57mx6d28U8Xa+u924Yvt/Qi39R6dUbgMrVw0+3mU42LY7A2wQTO7TFWQ8BAwkWontY1o5N4hU/yrZWttnLrW78LXrn+03JhwtxdR5he9RaGvSlU4QrjNDEXguZi9pVpafRb0WSoORrRiAOAfeGLkRU4FJe1BXcUkQAGawcXEe6znzF1YNGS1sIVFWZqaVoNYLzHwzp1rYj9sgy98OeZJ0axNKdJidzm/8qaLjYfjHlVNRkH92pWqbGpTz0HC2zVAqxutatf3eoQBICeRA7AVrZyTwZ9RbsJ2m13z8LI78Z1clOua5UDdl6CFkyvWt4yCrvs5dPJ6aFjPqyZ0azmNUcDwAGOM4E7SucD28LOd87zpPpRgz+re93Y6c4rvjPoC6PWzKIBR01Xm1MQu1Ywf+lGpPFSYrlk6YuXniYsxMjiFkMJyWY0X6iz4I2l1jqN2yQ14YZ7asG9AR+whvUXPg7ykIMcH7duOMPjdUhlVHCt5zjHr6s0CigPm9ji9aCxBXplLA+mc80eBEKh7bDAxmnam6mG0avNOsSGCtvZZjO34SxncF92E//jvnOCKdWPDrB761yHTqbKcYpY+OKlnzLzaeqdaHw/Rt8hXoX1RizpEpt44AS/NG41HbW1uviaJ2+Qk5Qa6ohrZeKELzzhQyDyxIccB4xvfONngI8jZzflK18yL37t1lHEXObD3pd4xxtQnItQ54Fhldt77mzQtTfaQw9z0Y+O9FLmSWPoQTMzmu70bkf9leUI94EPbHXu/IOzk2pA14+PfONkCt5jJ89pNSxRDh8z363tueljiz1JT5ouAqd73e1+K7xvWu9GXfjJj9wrI9/z74Gv2vq9Mo0NOP7xM6i//e+P//rjAyyW7zV32+pklPAAUBZl4fV5Nhd6AJNzpHf/JqiXemviV38VdF8WJ4Q1MUZXDaABDmTWOhqDX5Jge7i3bbr3bbwXCuXwCr+HYMF3HMQnKTmQfDHIdb10CiwVDM7HPGYXCKNRU1LEaI3WbLDVb5G2RR7EfZXWPbNScE1jIGUhfnnXf3tHQYeEVOmHZH4HY1mYfvFiDRuQf184AxsghmNIhhuAD7xwIIq0SJmneQNIgDNHc1xCV+R1bJmjOcrGOQ64Xs8GdO9Fge8hXy4EezBkbegBKn3CJyGobSMIdazEe733CikIfCyoHDBIKQ4mg5n4ZyqFCmbARDmog/VGCjaFU9RXfdYnhJBGhEX4THMnOVC2hEJ1cGUhRgiH/3dj0XL9p4tkVH4UZFS7yAuOUIbDSIzF6AGRAGwwNyAEmC8z53kHCFAJKCbmlWx4eEl6+IAQ2DALJVgWmDp1Ul+yl1iqMVEUpV/Zlgy5R4K384h0JokraHXNYYmTMkSaaI99xonJozPzFoo0NYql8oONgY2vdX1/kTnat31HiIRJ+H2xyISUUIsH94QTCTW71X/nQJGwIIzFyJHE6AHhsHnCBodSBkl0VVd5IXqjx4BuV3oDmY1sso1++Iea4Y30RWbiaIgeeErniHtv5m049A2v9A7v4HuTGI/OgYmS8ij3yJQQpghK9B3cIB44aGhmtx731mGSgSqn6IDXFxj9lv99CGmECgmHzJhiDllwVfJya8mWF7SRHbkBHiCXc0mXcxkOgACHzyiHkWQ5KJmSd2iN1+iSPqd6qwdY8BVfFkgxEHWTzWMeG0NRf4KOudeI7HgK5VAORDl18Ch80MEH9Xhu6daUo9lZx1ODyUOV0GeVNNWD0ROQbId6WMRvYMkXYfIlY6mQC+l9ZnmWaOmbv1lwkOMG4VCXxWmcchkOyamcgPCMn8eXJ3k5e2GHgBmYDTiYhFmYMRl0LJSYYfaNsYeTiaWTNCSZjpWOjOhtqBCUp/AOvVeUwacI01EDfIZ1E0Ca93lSd6Yp38BEz6eDZzcqWLlo8bGV11kYbmc0sWX/kLVpmwCHm7mpmzPHmxNKoRUKF8NpnMqpoeFAAx3qoR9KA0/wnNBZZdJph5W0kmbCbNeJUAnlXqQzk4G4mKoTjvc1nuQJGx/jX25GggWGmXQ2dfBZHR3QD5XSDyWFn0mKS/r5HeGxj/z4n/XWmgNKoAJpoAQJWwo6YgzaoA76oCb2jCMppmNKpsPmDMkJomkKohDApm3aplQgjSbKF92AoimaoCtqoD9nmIcZo4H4neAZnucRU5DJMbEzG//Vox31o+9JidXRAEWKdVqnpJN6RPp5Cpmgj6mpmvSGdu3hmlVqpVeKpSz5lZW0DP7mbyVKXpNmc624l80Jq/syprFK/6sluQDO8KFuqqu7yqsQQAUhpJLViaAtKaovCZPa6YfcGV+u96c3WWZKV44b0zEeY0O1kajtuJmNeh3zeG5YQKnfWkRMmglOqqmbemiIZlNUaopcKao8laClOjD+ZoclipCr2qr36qp7qa/7uq/4iq948QS9yqsiQLAFS7ACgLAIiwd4RUKlx3PFmjBchqwwqqyDVZM2WYizN0OEOq3UqkqDIgyN6KMomK1HmR0+AJqUYnzgyrLEc2ffgan9yTPmGn2imHaZUYrryq7F6q6kCq8oOp0HSa9duqpFa7RHi7RxqqoSAAEG67QikLBRK7VSywUkhKcQa6yMEYESOIHKqv8FFjtf9FWjjjlD0eoaHfsxGDUoA7Z7BqaCnBmfkpIHkFopK9uyd0sz4kquqfmf6WGzN3sZHpZTW7mzWDuqPmsmdRqvQcu4qzi0j0uvjSu5gCkBUDu1l4u5UisB8mC4idGiEeheXTt0X8usGMuBHXijrcFYqaRKGaVRGzVnRfl72hopCUC3Kou3uZu3mXKp/Kkzp9W3zmOznvoeOcswCtO5q7JzDTubiuu8zwu90YtegiEBmWu9mUsFmoC1LZpQXMunXgu2D0WjzuqYqWuOq5u2aisytfMNsbuZRtmZlMIHSXludqu794spywcemfopUNq3dzKKaRc9Oauzyes5son/oKZnNF7JvA3swA/slbBlDNV7vRVMtSz6uXvKekMXvjMKjo1ZvqrBsdOatrQxO6+bQ7H7tnAbt5biDvRppN6KvzOcv93RpPzrn8F7HqPxGUZHvIE7Gce7JgasXllqtRHsrkacwA6bV/ehKhRswVF8A1drUNy7taErk+Aro4v5wSDcga4zwqwLCjsKYOu7Ue3bSq8EpL9nC8dwDEIKMy4YqTRMx5VidZvQu1OpqTosvKMSwMS7aII7uMhLxIWsh1wQxYlMAniASdzbvd47gTP5tYrpwYA6GjZKjmHMumT8ZgPGDZTlvmw8buRmsi9TAymLdUhax6usHUzau8qzxzTL/6nrEcATg7ME7FegY8i7rF6InMhRLAEH48hbC8lZrMWKmTo0Go6BmpMiDJmrm6OyA1k+mZ4FZlmzC593FjyP+jL9YJ+sDM6trL8xOx6xzMcASsv/aMuBK8iDrMu8DM/Ugwe/HMWLvIdWDLpYDKOSTLrI3BkZaFheHMJma44kXK1PV80ddc3wm83C4wP0Sym4IJrhTNG85MrhAcv9m2HnjM7+WMtAU7yk4ya5rEnxbNJoogkkQM8VTAISoKf5HLr7/EmZMcn+LLbL/KyoK8IEfbZirL6EwrahLMrZHL/Cw80vAwSQUtFLXR13fMMZrdF8wtHExMMfDdLs7F4kXdInzf/VgxAPKr3SmEsCY00CSEDMWCyTFMjBlFzJlszM4unMmhzNYwxZtWHGUmnNskt1VdfQxTMBqFwpEM3Ug/0cTr2/UO2fshylVW3V7hHSIj3SWr3VXb3LVLDSZI3Zmd3SxSzTXlvT3pnMXSzQAy3VhArNF0XX1hoMZuDJOiR17/vGfV1ELWC7McOthI3bhe3Ko9Upv4uIit2PjG10YUbT7NzOBCrE3EvZhssYUBy1Kq3Z0Z3ZN0Dd1I0EnS1tk0wBNn3TzprTZJvJHHvaJTzNPjky3/baK0zUuoQFMHwp/WC/uS3fzXFnNwOzGF3OsPHbU73DANzDNmXLtzxFx43ckq3/3MttRY6sMFwg3Q1OAtVd3Sgg4RIeARUuA4tA09pdun/q1m8N1zxdqAZ90Obdtgu9124Mx7tUA4KdyvPt4rqtv+qZqc73fKDI3zt4MaCBga5X3MaN1oNr4AoeqkQs5ApOzHCgB1Qg3RBO3RNO4RUO5VEO5VBQCqD9z+CI0x7+4YQamWiro3UdDGsb1Aq9xuI2yrK9S3yQA7d7KRL94m9O3648rvqY3xqdYcC92P793wAe4MXr4z9+5GtX5INO6IWewYHeh/ERARDu5E8u5Y9u4TIg6TKwApUOCRSA5Vn+3Zj8OiC+X4b65TwaYKx93q6txpt5DHyd4ihV2zLD4nD+/+aGPa74LRt/sjFSfeMdzdgBzOd97ucDDtk/XuCILuiGXujEHujCHtP7DAWQ7uwRMOmSXunTvgLUYO3XTg2i4N2bzumlzeVeXsK0gdClntd6vQmxTbso1QDuHcew7u7MccfeUYP4XedRvdG53t85Xic77nog3eMstM8EruxAjuwFn+wDr+wBL3QzTdNhIAOPHu2UTu2Vju0Vb/HUkApanjEe6Okd67FjbMJhLubkTuayq0Qs3MIPtu40c6Tv7vLKEXzyPq5S2du1rt/7je99rOc6nmie2u/+LuAAr/ACj/BFb/ReNvSfxPAZTnSuVworIO0Tf/FTb/HIYPVWXwKpMP9MqPWY3w7ujyXuZUzq5P5KJn7u44bupQxh7R08Sf3yb698Tv0dMj4o5UzjNU57Oa/z+r7vGOjzP+/YTP/rSg/sQ2/4h4/42E34ni34DiVfbB22ydwZCkD1lW/tV4/5mY/1Gb/ld27aHp++JqzacDbmJT91SpTqpKz2EbbywSPHcP/yMQ+zc173H2Prt47rer/3fN/3GNjrgE/cgi/8Qb/4Sz/8xw/8kB/5kg/QmR4aTGD51KD500/9V18CoiAFOgniPS3iYB/2Yj5gpl72ZX5gqL/e62YLCcDuMYML3wz77291NyPzm5I8NX/3eJ/3uu+32+7HAEFK4EBS1YABq2b/ECEwCg0dPoQYUeJEihUjHsSYESNBjgPJfQQZ8mM1SNSoIUOZUuVKli1LlED5sgQPO5Js3rzJDNtOnjxB/QTaTGgwosLMmImVNBYqpqdOhYIaatPUTceOVVWUVWvWf129fgUbVuxYsmXH1kjQz+xathj4sIUbV+5cunXt3sWbV+9esFsVbYJ6KtM3brGECRMKtCdOnIECSXIcWfJkypUtX5YsUjPIjp0TIkz4WeNo0qVLh9aYsPNqUptdh6ycCmZL2itlxnyJTOZuSExs9gSODejPZnGGCgtm9KhSpqicPoVKdZMt6tT9cuWbfa07DNrJ9sPiXfx48uXNnx9/HXCo/1NMCxtO/BM445uObWLGn1//5Nf9ybEGMEABA/SvQHL2m2wSSGqzbTbdYNotQpkModAQAFKBxqfhQBFqqKJ8WS6p5p6LSqqprjrxOuzQ846PBnBh8R8MfIixRhtvxDHHuNQLzL2kDosPlPnou+8xyBBEMknLDGSySSedVBJJ2RpM6TYJJawwywoB4NKGDJLpsJnkkDsqxKWacqpE6ag7xhYVV9QRL+7UYrGfBuLEM08998yOR/ba46YwIIMcksgj64syUUUre7JR2BaFtDJJFMQNwit30zJTLjflkhFPGanACUKUQ4o5NNOMbs023VSRz7smSADGGt1ytVZbb71Vxf+p/mTqmx8RI7RQQ+07MlJjj0U2WSQRNRIySZi4dMJMs+R0009BrSDbYbYdRhYdWklkRFRTnYpNW455E1e60ALiRvDUhTdeeWPUdT2nUAn01w4VC85QZw8tUlmBByb4MmabbZZIaGx4aVotqwXgWmy15VYWi73VQQdaNv4hh0RMPLFNkd9UZF642M0xh2NMZrlll/HyyxaqeMX3vUGbGS64nfz9F+BiCwY66PwaI7Znnm8Czg4eHoZY4myfrvjijDXemJZbrr6lFq1rOSSHDqZj9bqXt0tLRyAmGDtttdcOq97A2qv5V2Bx5lfnoxkr+meh904U78gau5sxnYMDJQj/Jqp1GuqoLdaY6o2xznrrWkyhvPLKMUjgGa3YFquGBjCgM0c7OSe9dJff3JXmbwiTe9+cB8cmcL/z1ptvgWenPWHZJYGd8A2JayYIJyameNuLMXacFnYgl9xy55/3CpccGqiBdM9Bz7OfBN4yvXvv472OutSdyqTX9wy7me66B9+9Ptx1P3jgoykjEv72ee8duN+BD/Mw/80QXrekVjUCQi5yWnteAiu3ln5gzh22YBkf3JEA7O0JA9X7XgY1aKvwiW89NKuZzfwXpt/lb2f3ow/tUogg2UkGhXczoe/2F6bjjIlUSmGOFX5AwOUxb2sKVGBecIG5DtDIVTXAAgVl/+Wqs23QiU/kE8lm9rbmBOp8/ptbkF4XwxO+0ItflB0XB7e/oNBQTFgk1XLew43mOIdEobCCKg6IQCAmsDz9GGICGpAHI6LHBxNoAAWBEDpb4aIDUERkIvFEMpml7k9wCyEOsWhGMgpJjLADY/suKcZKltGMaEwjDpPCxjY+BzpRkc5UGnCIOjoPT3gEAgZyoEcsuGMCNeDeWvhQgwm4AwuBzAEGgIALQsILF+FRZDKVeSNGNvKDj6xiviSJRjOqr5KbxGY2Y9jJDVWzQ6BMo5lE1EY3vhGVqVzVqliFBVzY8WX9gGc85Vk6XNxpmffEJ73e5EFHPhKSITyf3CbpTf9udlKbwiloQr3Zv8MU5X+lKpMoSVlKU5aIXFSpTkbRRTJFdKBd+ZQXEJAJUpKWND375Gc/TUlOK0pTKUgB5wgXSsmEVnKmN40pFsu001LhMFDkLGdFLZpKsJlLEWHj6Fjy0B2TMvGQTYVqVPnCUa04s5/+vFcbW+pSUb40p18Fa1jBCdGk7FSisVgjUE8lVIuCTDrqzChVNyeXGuSgmFKtEwbQhle+9tUucs2oVa+K1ayqlTBb5WpXy/pSsyrWsUpBrBXVSlFTjqutRA1ZYKsjVzjlxQdl8+sdE9DH0JbWtHDhrJsyitm2RqWyr51sbGU7W8q+lq2tvWgqzwXXuHL/trPlwcJHT6sXINhzuMdF7lp8e9SsBBaz0sFtdF1r29tKV7rP1a1mN2ud5f42R3W9a3LL0o8c7FW850UvWbrL3bBtN6XYhW985atdjWq3u35hGRYqmF6wYMC4/AVwgMVy330y96j0PTCC6Wsd1SaYwFTtHh9iBWBcjFbAF8bwjh68YQ4nNZ+wWuJwK2zeDJfYxH3qsHfPi5YQ83XEJ4ZxjGWso+uFF5/9AIKFZ7xjHvfYPB3IQYuTKb2R+tjIR0ayZxsQZERKrwGkTXKUpTxltvhgyUJmm5OhTGUud9nLYJkgBrAsrzy648tnRnOavwLIHAzyVjieHonVPGc6n5kPMxNIYjCJGSM8yjIBWJBznQU96DnbogbuCGQCgilMXBAznmKJZ6Nj6ecGNKADE8gloQcdEAAh+QQFMgD/ACwNALQB2QItAQAI/wD/CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDOlQksqTJkyhTqlzJsqXLlzBjypxJU6Cimzhz6tzJs2fOmkCDCh1KtKjRo0iTKk3oU5Gtp1CfHpNqq6nVqzeXat3KtavXr2DDgrX1z9amTVCPqVWbdu2xTW7j2nrr9ixctVh9it3Lt6/fv4ADG31qd1Oow4hDnVrMuDHjwpAjS76Ltm7erIIza97MubNnsIURM0aViXSmb99QqV7NunVrxoljh5oM+e3dqVWvft7Nu7fv38Afil6c6TTqWMiR+0rOvHlzbtyQR0fuGpVj2Ycn07WNV3fw7+DDi/8fbzTTP+PfYqWP5at9sPfvo8kP1qx+ffn4o9kXxr8/fzMAAsgcN99wo5pji2Gn3VRvNUXegxBGKOGEEzHXXjNxgAIKNskkwwwzHYaYjDgfimPiicyYWKKIHepn34v9mZGcjNS91phstcF1Vnc8Uejjj0AG2RuG0Wi4ITZISqIkOUyS4iQwpAQSiB9UUkmOk0xWSaWUXAbCYjKgFIlfM/79R2ONq12XmGRr9STkm3DGKadSImLDzJWkAKMnBcBQwCefffq5xBJ+aqHnnn4eqqiTTvrRZSAnmgimkaDs519zNia4pl1vQdXjnKCGKuqoIWEjCTngVFNNoEtoEYOrMSz/EcOsKdSqBawx1ErrrLf26iugepJSDaNaSnkiiy/WJ0x7Z6JpHWzZcYpbbjqRau212GZrkB+rUvDPrbOyIO645JZr7rniFlDArOz+6meiqhbLpThIYmPki+8x22yamkZ7G484aSvwwAQH2ecSBYjbSSfZZGPMIMY8vPAgFC/cCRwYZwyHxRibq+7H7PLa67uAqurkvCfaS2kz8AXji4DJ8XsKYoV5Wm3BOOes828xKLxwNq640k03f/xi9B+rQByxMRNbPEjD2TC8MMYcd+yxuq/e+m6fwKhaDThUKikJvfVqGAfL7y1rxnJoQjvbWXMBjNnOdNdtd18LB230L/+c/+A3A36fwIArf/zRzSpJJ01x0g+vErHDTFtsMbosgMzr1l6DAzaX9dZ7dn0tv3zmgf3uaHPAd6eu+upK/XLCLrvIIfs2uxBAwDa4C87A7kMb7vvQiAe/tDFQVw0HuliLrAWfmfvBpJSSdG62ffC9zDa/NO841U+sd+/99zLJ8cAoD5Q/yiiyP0BAJZUEDnjRu5/wCwN7d/OLK44vDXXDF2d8ruVaSxQwNMckcohNSZSqFOjeE6AalQ4tT7kZ+CZIwQqC5B7K4IUyMkiJ8nUQd+1bwAIER0L30Y93Q3PF457Gv/75r1zJyxrJvlbAA0aPUnH4HHxgRrrsnW5uFgyiEP+H+JA3GHEaxCAGLygBC1jYDoTbqIQIQyjCBQBOcL9YxjK6ETRXUIyFktPY1UQ2w2GRIxAHLNu9FugyGvXwbWyRIBHnSMc6fsIIRgyANXgBi/HlYxTbsB0BdoE72sFuFycYofyMpsUuRgyMYXzhuJIXQOY5CRxpVOP00NZGB/oLbtyroyhHaUE0GPENWZiGMmBBifONIh+whOUTDbmLKu6Okctw5NIkZzwYrutVhBIglpgUvc6pDBQ6DIYw3PisaP2QlNCMZve0gYZPZCGV02jiKFpJiW6+8pW2q90ga4nFLHIxaMZA3MMGwUsX+jJrwewaowr4IWMaKYdo46GmTEf/LZJI858A1Rk1TWlEa6gDFucYRxNhEYlIjMKh+RBkOBF5yyzmEn/5+2I7JVm5X2ohmHyaJzGL2blJ4TNfnoTjMUIZ0Ja69FrmQANB3+ANayD0HEc4gk0j0cRI/DGiT1TkLf9wURU+8ovsjOTxJknGRInUgEpihj2nl6/rJch0LH2pVrcKJ22YYwB5rKk1xqoOnapDHTsdxyuBSgAR6o6RXXSc4pDKS0li7VbxHOZIlWQn6SHzbAykzlXvklWuGvawEdKGNgYwgAA4dqzWIIY1xGqNnCb0lXKYqFDhGjR1IlWjvWRqJaFEihracKoKVKYbB8sjxLr2teSh5icC8IYA/3jjtsS4ZhZsS4ycHsGh6Mss7Dabxc7K9bMViyS51hXAYJV2r5lU4wKtmh2Awfa62O3NB3rxidnW1rYB2K1jbzvWI5zjfPmQXTjdSr/iYnSdyE3q1KxWOWASirQ15NIBpapGwC4zFgeqLrWyS+ACZ2a7vUADHh3L4AAYwQi2zUJvz5FQWGZ2vSOkXyMxOlfkKlW098XvGdFoQ0nwF0kaAt1/m7mjwhr4xTDeSiN6keAHO/YNDx7AgyFs28omlBIWFiQ5sdjI4MUXtPNl6quc+lwDkhh6UfUr6F4G4JnNJoJAjLGWt3wUbXCXsXh8A2N1bOPwJvHHQFbvest5UcQdGf/J/QMxoJr8ZBKL7cQqi0NgWdygLHP5z4CeiZc/AeYxj3nHZiZGBsfRTdldeLhENm6H46vc+gIzpAXskiTsHFX+ggmwVLbObFob6FKb2iXF6EUbxtzdAbSB0DtGZRIzyMoOqnmQGf4FUTn8ZiTTl7lMfp6mOU3SPO95ZnZB3amXzWyReHnVjO1uG15NZh1LWNF8ZGX5bk1ODfO618mNc30/GtLnPgqNxPY0Mlm2HFG/TdnNjre8MVKMNvRizDT+xLQNbYRr07qP5XuAmrvtXjeDW75WY+59h3nuc0fZ2KFGNlr8PO+KW3whH0Cwq+39bGiD2d/Z7uC2H53rNk/6zRz/myS5RdzwR/EVSZ8mk4xEDZfcXPzmOEcIgqfdXRqr+t7QRiUS/93NgF+4rZHG6MHDnfBYlVvYLee0dIMxc2QPOOdYz/kH7D1tn/t81UGXcAZDLnKBPzrpBl96kuu78Ew3fNOnRTEyXVblK8M763iP94y93oZipJrG0141hFNJ9KKPPJyRNvLSk9r0tkM96plMMd1pvlKK5/3ygd77z3vx93qrGsxvmIYqyW74gSf+5L1eewFWbm7IE1vuLKv6uy2P+drHuBF+97rfU/33sI++id0M/uEHefrFJ9dql4bS41sOdxPDfvKnSLY/bU99LuOe87xPtTmKgQbA6zj0v6+1//DNbruSK934awcmy6Ou3zsbW0YS3wTtq09/2OI++8X4wO6LYY7PWzv8wTd+6kVOunZ+6BdnwKZ8I8Z+UBZlkmcGNCd/81d/FMhVjdAH+Ld7GNgH3odHold4Abht60U/f2CAizc16eJ0CsiA6GZnchcH7SZxE1iBNOhSfaB/+5dx+seB/tdvABiApYd49GNcxnd84jIrS7CCLKgkJMZfc9dubyOBNTiFh3V/vaCDOOh3PCh44EdrQCiA5Sc4JZh2J4iAKth67Cc2TYhieuYLovYKUkiFcvhSIJB/+YeFGuh9YEV4pBeC5LcNVsQAY4h6qXcxKWgoaMiAcIdGMDd3Vf8Gh3E4h5IoTXWIg42AhTu4hdaGbcD3hSJ3YRk2iEVohAWQAsujhCyIbi+XDNFAd6dQDnA4g5M4ixUEAhnnd5d4ibfYB5oIYUnUh0AogoC4O501ioyXgkmYiEsoNjDXinUXi9NHi9I4RLaog41wjTqYf5rYWGLHR54YhEhXgGRYhsezLo6XippmYiCSDJOXHbI4jfCYOtWYcdeoi/r3ARjYg93YiZ5IfhR1P+OodobIArOCaQu4hPolVawYDFVWDmfxjvEYkTozjx9Qj9mIj724j+L3hSIYjmNojMdojhSgjOiojgu5HK/4kNEokSwpj1hokZeojb23iSDIkQKHeMX/FZAHh4IEeYqlhY7paJJ6VmUq2ZJG6ZLWiI0xiY8z6Ys1aZPCJTi55DggOZCrZ5BAqWkfkgxtGAsyuJJHGZYEM4/1mIv3mI+f54tKxI/9eJO1NIQ6uZOGuHrJuHxA6XzIBIVFKZZ8OZZJCQJmqY29GAC/yJZQGYY5WZVz6XQkWZJS5YjWsZd9OZnYApgVeY2AaY9M2YGEuZYb2Y9nl5PwdYBLFQN+YkZZqZX2omfwFwrbQ5mwSSogYJmYmZn2iJaCR5hPeZgUNZWEWIil6ZMHmZUvBwpU55V2B5axuZxBYou5OJu2qYO4aW3WsJvB6JZSiT+jiX5LdZWoSJzFVCnC/wBgycmc5vkmzlmR0GmRGceLHaiR3wiGvWmCpFk5wjmcqciM9kIm5DlxynmeAPogtnmNKlCW7YmWhCZr1umHwmVFvqmY5XifqblpjLifVBeZlRegGhohs5mLjQACBfqhFYmRqQZtZuaF8RmEb/mgxoiCV2lG+LmM4Rl7opahG3qj4pGeH7qet7mNnYmiKSqCK0qf5GifFACjqWlnjwkKy8QNMxNBOBqlwdGhZakC0dmeTdmZwNiWUckALDqKLro8SJqkJKYy//WkVSGlatobHXqZIPqh2Eii78mJn8mlxOelRCqQEXqkjZmfN1QpZuCk5bmmhMoZ6QmdHTqP7ul/J/+6pbwpP1O5nUX6on2qiMXZDK3pn4W6qYLRpphppey5mWlJmHvkjSladKAIqdpZld0pppVqqSiGqYKqqZxaq32ho4gKp5fIiyWaoFlQnY56namamC06kEuGmmRapikWqMgGkbb6rEVBpZ96pRiph41qmHb6lgD5m8B5hKf5k8nKVxpypqFgc9B6rl1xqLNppW2KpZz5i6Z6qkLqoKtarOVomiNpl346o036pM6KrgAbE576oaAqou7KqPB5qrYmhF9ahGGKlUmqn+JJlOYasBZLFFT6AdDJrpl5sLk5a8HKoIg5lSDJTq0KscQJPbG6TJFZsRf7sjTBAQMLopmpqNv/2G90qrCfiGtwya0oZ6yuGqP7urL96bIwe7QvIa3rmqvSmaUgi62g2aUNW5/r4idYkqxlup8zN6hI27UskbE7qgIF27R6iLMLKqwjW69gOpcSGq5/epxW969eO7cWIbO02Qhim6hxOp1qebYiq63oBKFH2Lbgeaksi6b/SbeKyxFKu7Qde6DWmrDyepN3GqmCW7V8KrQySrQtK7eL+7kNsa7PSbOYGaczqWM/GrJ/a0Wiyap7+p2FG6tbS6ugW7sYIbMFepl5C5iPy7fXWqd2Wrlq67BAi7J3KbEyh5y0a7vMKxF2O7q7a5ke+3HwCrWHGY5TO6n4erURi7yHW66e/9u8zPu8tQmioPq4p9u3qguGwhuX4MaTSwa7xzujs2u04nu/CiG6O0qzvLu3gJebkju5w5q9esp2xluSEsuas2q/+NvABIG75cux0iuqJnptvLC+4Dif7tutRiq/x8u5iOvAImwQEKye0auUt6iHspazOjuv3rbBP3uv5zihabSs/WmjIzzCJUygu6urKdyDqWu916vBPntkPOmdrwqr+zmeNMfAOdy8O7yueevD+Pi/qNuNGPyJDfrCRUxpi/mt+mqp3lu04fvEMBvFUly62WjF3Fi9wBu8I9S69jq4BwyejylzTVzGZmyxaMy/cIqFX8dYK+y3Inun9zO85HivTv8Vxml4Z3fMxNG3PYm7x4qLuyqgno77xzoYyKj7tG88xKxLwHIZnHWMwDMKt1xLybZryZjMv56acZysvgvVwh0Zx6L8vla5PCOZxJBHUhPbsk6synPLyvsrwWapf2XbqFm8s4bMRTDsxR2DuR7cyC5ooZkazMLctcS8sUyri+mrzEKMtjwrx8RbvNNMzcX5y9F3ddm8uNvsuK+MzECMxeFcyAR4yxx8laWMwGx4oXE7ye38su/syrSZcf03z56ss1qMa9mZp7jcnfh6zo2czphKxnoc0IT6ztFb0AiG0CyssEYXhlxsr/dKuHcJZWWDx//sUjuB0ULCAZZcj+bbzbD/nMwgV8/jR7n/iM9GDL+6zHBk+nCVcpyokJwAPUfV8hRlcRYuPSEwLba1KbYnPKIdDW2Dl9C0rNOh7NAPnS6sx8gTjZeVEoOpDE06ERqzoRhNHSFPHaJSPMUcHcuJRsj2vNWetbYQvcia63oSK54QuNLSdNZ2IRqlgQrfsNbkodFSXaBxbdOe/MnifM9EiNcl/XR7/XZSt5pEPWrYLEQ5YRaGoRinUBzqkRzBgNjiMdA93Nge/W+QXdcN/cweJm5LtstgPdGxStSAPUqffRaHsRio0R7uUR9xgNrgwQFSHcHr2dj7dsWPrdAdSXA8Dc2kvM9+CnuQPGoXXTc6AdqH/1Ecwf0eGZJnoGDcwNHWjE2zEnylbHzVG7TMCy3dXP2zuTzD3evLyYtslXfU36MTtvHdp8EewRAHSCIO0bNpSGLevtHWmLzYuerN7X2idC2AqTrSa2uVEU1n9+2EsVe0nd3fOaEWiEHaAk7g2IBG5LAl9JIMCv4ZPfAPyC22De7gGSvPHoez2Abfw2d+sv1ZKVdfen3ZmJ3Aul3WFvTZc/HbJO4LwZAMFAoOT0IKVCIOO9Din4HeBGulq82ep9vGOY7TFC7SOUmV5QzRPsnLDlfNKZbd/snfqoPktqDkx/EeTs4kUK7L8gQO/8AIVr4ZL97WvGu+HPvHEN7aFwzmZf93dDze43SF4Wd+2w7XfOE51H/N2ds9MEh+DL99CuHd5KdCDnqiy6dZDdDwDwDQ55rx5zE+4xt9zBEOcssc0gzNxV3s445u2RPagCm9Ypbu5naT6ZteIEze5KiSKiMjQ9VQCoZw6qieGViOqDSOvq/+3FlNcqdX641u5mAs5C6n67kte3Bxd94D58HOHsIQDckQCFdCAb0CMqdo6sze7H+h6nAt6MvN5Xp4xUOXba+d09ZO6xeu7dYd1k7ImnXX5hQE7Iph2LEgDMGA7qeSJ7eiLsulBVcACQDA5/IeGDHu1oLOroSews191aPH79Ad3YuO7Ux3iHod1Pqp2WQd7pf/bi3kvvDp4fDR8CF54icxkDDigjFY8w8rYAgbP+8wHuOBruVSzaMxOe1f3u/+vmYAX+YsP/C9LNRnw+b7PUE4IRWizfB0rvN9cis/zzD+EwOQIA1EX/R80QP0DtVvfe+mm+9X/fQKvdCzPuYqj3BVr4Dc7nLut5oqfWUfvjNdTxg2HwthLw6kQAGE0vMb0wlPI/kXIxDUwPZ80QVvz9h5u/TrOaK5N/KJRqdQX3rWrmu+Kam47OiO9/eA78uUrrwyD+I3gfinAPZNzgyn4viyUgAYkw3ykA3dMAircDGLgPmZ7/ZH7/n2nqjR2XtWPdeHjuhGR3Le9l4B3/caTsMU/43KLebrBPPZb7HwqCDgHXIqB5MCCSM18jA0h8NOQo/8YZELmr/8KmC3i730ulroNw4QAbIQI6aMFy9YCSktZNiw4QOIcghMXHCCwa9lrlytMjbI40eQIT926gQHDgsWBWJooUABGClyMQPNpFnTZk1JOSVhwwYKVDNhZmKhCrVpky1Fiv4tZdrU6VOoUaVOpVrV6lWsWaEmTXrMaKhTp1DFEhYsWbJA5EhRWBIjJcls8oz9+rNqVbZO/2Ro5dvX71/AgQUPJlzY8GHEiRVP7dKjBxsOHFRIBqHCsmXJKkBsbtT5Q7Fivdq0GTDAyJuBBA0mhOXQ9cOIE3dVvJhx4/8qkblDkjSJUqWWJS5hyrxZnKakQDp39vwZTCiqU0WRJl1c3fp1plwV2bJlNOzYWMGiJZNEDhiFGCkKsIDTKZuxbhdP/OpGci92/Pn17+ff3/9/xXJp7J/IJuOgMswu04wzzz7rRTTSTBNItYNYe+3CiCQiYDaLMNLILt1CHIS3k1JayaVqhiPHOONySi4nZnjyqRnnhopuk2O4AnDHHbWzxatNvoslvPHKW0uLFFJgjyRjXGHghA67yYZHKqu08kosswRQwB7+gUyyyBDMLLPNQOiskc9CG600CVMzCCGFLnQIogfk0JDD2m7rSMTcSPQthuBeGo7FFmfSKUbmaHz/7sYcqdPy0cJ8/DFIsbghq8hASAFmiSRRguM9Y5Y5oZITFmCgG1cgVXVVVlt1FcAuGvtyMs1oBdOyMs30DDQISzNiwoJWi1NO2OqcaEPaPLQLNz538zMlloQblNCbkHtxuURrhK6oRpV69dupJO0uSFTGEmY8ZiTRtC31lmxymV922WWb2VAF915889UXXy69LLDABA1cUFc0eV3TV2DftJDYYjUkINllMlq2WWdLQomFE6UljlqcrsV2Rm1v5M7Rfe/l6phjxhXLXPHSXdctT+Fo0pU/TpBtl/lSLXlnnnv22TouH/v3wIALzFXXNHttk6CCKhyWYTrtlA3iDzmi/xgkkiw2ETiNV+S4Wp14SjQoG6XT8WdWtQOSXFS4EebcdNVCT8klB5n5l4nyIUCOetH2+2/AA38qVqHBhMzAW8kkOOmDlw4WztYYZijqO6m+7WqsSyrxt5YE3fjr48KWMQ6gFjWbZMGtlPSrcrnxBW5m5E5PyfYGcSUjBhjIW458Zkv9d+CDf7XfLyNLHHFcy9xVzQh/zcJNpyOXnJIMj8VTWRAxH/FZzoWLyWvQDb1WbFBIJ3tbHM8WHkAfgQyl9bfRlVuL9FAiaZU//nhyAd7zsdP39QVQgAPcT9BmBTBaCSx5SDNYhBynDGFJT3KUm1qHInYbZmEua73ZWqBUFP++juWEfDTSVii4pT4C6ocrk9qECdtGFrPETlPouVh77KK/UvFuFDv8hxwWkEIgBlGIfxGQrIbGBuQZb4G6Ag3zEPY8CkFueguJmvUsNzHtbfBiKwnUS74HwuO8SEbNMd3pvDVE66yQOy183zfI0oxkMCMt54HZkuxCs/3JYYejOEcPK4FGQAZSkLngEhuKdzglKnFBmlme0h4YwSlSr3obup5tspdFzf2Ja5773NesJboZne9GR0GhIA2zuhZm4htuMwt5zEMBJNmvE7ZbhZNKtYt8jGMcB5mHHEz5S2AGcAv/UMJjivcvWyEzVwUDTeOcxzSFPQ1qk6ykxC55tQ3/bi5jnASji8TIk2SQsWxGmc4ZgykYtY0LLC8MBhxnoin6XYwkg+gGDke1jVHskhhHmEckzvlPgKJtCyP4R+GMh8REAmyZzFSaEZ75ONZIkFgUrGCeMKi97Wmtg97rZPgONUZFjTNlpQwoX9TYHRNmwlLCgKM4MgUM+q3HjvTMXakI8IBR8EIZxLgHMXhRUqAG9VsDJQMZemC8hIJJocpjqDOB1TQpTpGi1/PQ5TCZyY0Cw4sd5ZhyJIGoUJoOR90SqknVyLpvuLGVL4VpHWdZy5qNqhI31akynncPZZRVr3u10kBHQAYXkOGgx1PkwJhoMDadBopQXZhUY1PRqmJR/4Pc2yYpPuhRj32MdCHjFln5apWztlAsajULcuAZA5nWbhXxgVIltiGHB/BiGllATQCI8Vnc5hY/fgVsYAWLzDHdaqGMc+BDIRi9SE61IhasWgaxyZuLdY+bIPyk6HqyWbH+CHW6fcrqXOjGssTxpfRzS3veWs8n3VMOlOAFbR1qBO7GV76E2QJRXXDforqAA8dE3iIZ6MQnQhO5yaUmxKzpXIpl80+V/SIYPUa+5oiSW+Wcb1O8CxY3EsllR0KtSdwziNXub650susb3lthFKfYKsP8a299+4ghJHGpDEqTmhIbgIRFU6ITnSSymHvRq3LwN128LOiQ41UIh3RbJ//c7nxDC5ZTgHc84lBLWwtQAPOCeBW/2N82bko9YrzBxEb4hIrNfGam1LfF930xYIcwtMwYtjNNdORDGStNHhe4Q5FFcLMUrMnOWbbBnqyuCEEaDF+MM31Nju+FowzDaMhxhjHNsjFC3NqJ0GkaYi5NmdH86QqrOb//aPMjiqqGJMq5EXR2amruvOM8Sw2ylrxmginLta5188iiC6f5xDpSRuvW0eCBG5U5vB7zGsPSv4DSAuYK2wdQYtMm/gQaQH1t7oraxUU1tam5nUj/Lq8YTp3QNI4b1elR1McX4fOeJqtR6Qqaq4T+WHN88WsKVxiV65RypKsMS5jBxdLyKdX/sxmyaSOMxtrYZvhetY1f35LB20X9qxI3w0hmjru4dtZxJCVZpztVsrkY/fNvNilv8HnSUNYFWRnJGezcto+NYiHLuZJhbIAjm0lNyt0CFjAvO40jIeowMRqM3nCkBzUXI1hzYF88cTL8dQQuWOJhNV7cp+oY1hjqMVVp3Wc+lZyLLtlqyqkLoyQjWtGedfKTV/ZGf/vhPPFkgcDhU9Ofv5YSQoeFNciMBnMsPOmDDyYhu5BfNnNb8S1mOhmGcLQ5N/DGrj53YydYxald0WpBLtHWAl1klSN5jHEIBmeNwnb5rtB966z5lP3AYXm6Z9k9l5feh+73T5jDHB8gfO9N/2n4HiiBzW2WeNQp3mIyqIGprMb6YiuP51g7rJoj57wmiTxoI6/c0NmSMI7ynfqzmvDtLL15IOQOcE/JHj7MHtW8vjz0aZD5E9rgve/tL0Tgd4ENpCa+qZGP/PvCuCbSBnIbiGl4NY9TNzyxKMl6LqzyvK4xOyOzrp5oBhpJNOhgFNTjLrejOZYaD/M7D1iSKbvrBmZzNvdbCPjLAjIDg0a4PxgkoPyDjP2TOG/zv6IyPsQzAROIvGbCuqyLnq17DToBucyzoK8juVsLjgj0qF1jueYwPVKCuc8KP9Z7GzhCi/Oju7rLhvdwBRMsuHnJh4iyBoSbvxeMQTUMnhlEKv8XuEEdjEM240ETMIcmciaOE8IE7LpkoQvqezcOyqoUwb6zg5EYabkhQZ8pNCcOTIo1Eq1ygTstnLTUco/3MMFf+DnXyod8oAR1UIe+8wZq64M0XENTBJwiMiakiozAgjo5vC86NIEv+MHEysMBcywjrKAfa0Bbu7Vo4SQJZJHqehGw+onSsRFG+b5Gc0SUukILLL8tlKkl8cL1YwBN3IZ8GIVI+ER1MEPUqLZSPEVx7JlUNKRVlIxLcEUAhMVYNIEywMOs6zgCo6bpAzJA7LwhIzvQc0K0O7Tu8z4q3Cu3eyGWAgW0eCn0SK1P+UITtMZ5wcZR8MRP9IZNC4Bqq7//ccxIfQE+VUQqhOKAIcjBxkM8F2hHOkQDNnGcx0G3dFPAPkzC6rO+zyPErtK+YsQuZOwskoo5Zpy5sTCDZ3SpSUOtmKFGMOSyvIPIbrQGphTFNwBHjYzKe5nBY9ov5AmskXQxkzQBIRACC5g8N9G6PcxFH0NCDHK3XsSqK9smYHQwnUiOtJNClNlJ3OpJSFypZgAFcRBKOpLG9vBCjYAXh9wGbNxGpmxK2noDo8NIqWxMSKHKVfzIzGCDVyxJk+zKrgyBNjHA54M+OXFJA/tDBwzEfGxC6nowsPK1RNRA7Wi77fAK8fvJdtJLcXi9vowZSwxMpPQyTtzGpfQGb0jM/8V0TOLUknKsyv1SKsQJSaezzMvETAuwgDkQiLDUw3kkS6+rGrRMS3xciZNTkWCkN7EJJxqRsAmjyyrsCth8OzMQD73MlGpoqxr6S9s5SgZwLQLIRkrou2kAzgAQM4tEA20oTgKtkuOMjENSTqRSAROYw63ETK+MThxYrFcbQiJ0SYtgQF70M+7JR61CubPLLAgjvXtTtJEJyLIayFgwA6CkTduMqRoSODCEl1LhzYXoxizwhgAITk4T0AL9Uf/gSHNcRVvBDAQCAXZ8zq6MTgv4gi+YAQGDHAt1jSKUtbKsDZi8x+gaO9PMvswqRgtUu3JhTRRN0Z6MzRUtyL30g//4hFH2+MsvFEybys9I8E3g1NE3+M/SoD8g7VP8SEX9Q84i7a8FUYOt5ErojE4n/QIcwIcKHUvs9Lk9o7Xt5FDKYkvwdDDtqzcScjlgY0SePFOaW9G8fM8XJco3Vb/b4bIazc/97MbgxLH/fIMBqLYB9VNcTQzDkxX+sspbIdRcGQIljdAmdVIcmIEZ8IKDYMnL48OX1M5KFZGsecDSbEvM8qp6E6cxLYqjmA59s0vWM4OCxIbaZNMRjFFVldMF4E0+gtUs+E8co9VPmL9crdfCSMWORBwkUqBfNSwzaUcIZdJFPVZk3QAphVQrlZdnFc1eJE3vnMl5KxRsRRTmID3/ztLJMhUq1RMtmhNXnyDXU1VIu7PPW9qbUYCFI7AGHZVVTqvVNmBMe41ZrQDUIV3QXy2sMsG4DygDOgxYRTVWZJ2BDdgAD7C8lsTOBcSILB1NfJQua9W1j0oUoEg0E1VGYQPXjm1PUOAJ8zstkVXVhixZPULZI1hZPeW0eb1VmV1bq7gAA+pVhEognB2uYtCGS4BQYjVWghXaod0AB5hSKs0Q6aMNLGVYS6VWLn3arrIW7YOwCPNUq73a7UApIRHXvCRX86uGnMPNWbK0Vd2fXZgIPkpZHhWzlq1VT2Nb1YWKXe2BQD3HfQWYfoW8VbvDRC1WRt3bvu3beUDYwc1Q/6VtrmgNkWl1WC34xUGkSUJxEeWgWJDRFkX81G/djq8YVcvlWnLYQlQ1r859F1b9ubwZh3NQWaekVdNF3V5YXfVlCiGF20Fd0KrzQY2bg7zV26Dd3b71gOtM2OW6iD/4OrCT1mcxEUzdx7PDhpu8wNU0IYDM2KBSUXFtp2TAhpkAh5bgQu61m1pS19DlHfEtWx01AtNo2Xltg/Vd3dZ93cg0UiONM9qtMQKMEBz4WUYNWr7F36H922aN1GT5X+0MYOId4LXENcVVOY9x3ihclFE6UVANVeqFMtlshjjAXHIAh7n72u793JLNT/FtygA4DREuDXn9hPQ9YZm9gAtojP+OhDPlLNLKeGHmSyzc3dsbxuGhvYdpctY9+4PmAmLdyKbuJGKUC0+Jbd4RVbIla2AHBqrwq5Sau1zkqOKW2N4ss5smCVvwzc98Il1vcKiU7DQ0MGEzrtdcSOPGUGF9fV8E8lf5bRzTMIImANqCtWMczjMentQ+VkIh9k4iM+AJ3D6f2CxfwMDo4FbpnV516liWguTM3dxUnSVLDkzQzZu9I10cC+NPqNUxLuNR7lN8rVmlit3gcmG6vUMHGmGB2ADdpWUcLgKu02N2sw17dEDEPd7OKeKafEIk7tShUEQmbuK6xNqfLEjyQA5zdVMPg2Zl04gwzORs7GKVFbMwrlX/UG4Dbu7m4mzfA5qMfU0gN2bljKsz5xmIACBYdqZlPJ4TwbWil1xa7uzOxB1kJxTRQ3YOyG3N6X3icCVoF4lPZ05oj+AI3dxiPdpklf1Ph5rXee00MsZoAv3mXo0zqT5SyKsxjUtJh6JOgrCGIpjlk8Zf/Z0cyhncljbcsPszAhbkTPVSbBWbbAmZUVpEgA7oyb3LRzbInCAHn0borPEIZdtgpAxdk61mppxVpl7qAUCDpnZqqURjNQbng7oMqaaVN+aM/wIwX8nT1JgGc+OFOv7q3XWASPg4kCPrSf264f1jtB5iJhQUX6a3rxpPY1S7teuWuabrNVonvMxLccgJ/3DQ3J/ua78G7CcRbNiKyHOwZtNAXcSutgdh7Ix07FMe0mSq7kH1V6vD7KyGogM8Ny8AbTv2gHOoUodBlrI+y6ui1mrF5wNOYES7afQM1WQmSAvc2pwgBeDm63kabpI1bpyihOQubFpF317I5nl9bug2RQ1wbMcAZwPp6MnGlYFphMu+6lrUatWIJg8AbxwOB3Uz79MWXl0mzSHrZeX95dhmjvIJBlEapWNOsRXi2IEuVWzw7b3eXuGOZlf43omwE5yChQDX0eU+8ALP5lC+6AT3vQU3ZdeFbKsMmOs+GjP5gBpzJHTebKiCnHvgcLB2ALK80l8IXvTmvEBeAhM/cf9h/NIkU+CykY5yum3cpty2iWAav+/8xvH9tmTAFltoE19eEPDSaAMyLvJaRYNeKIYkV3LpbvIv6VWPVqTKNpMKFw2sHmloepODLQIu310PGIXy5hBcFnEy39LjPfOILeSolVraTuSUidy2y+1KsdzLrfEqvvNKzHMNts9M7nMgV+5AH3TFJnJET3SkW3LCUeFzlGxlpwzsll8r/xWt7m6xXIhI2PT8LQLrAfV41gg9SW3V3mV71se1nkA1B6kLVGJuZeIz29idpnFa/+25w3No5m859e9oSwheIF15HQCL7gVtQEnnPnRixzYNSOGaFdTJJmfLFrcYrnQc2+xzO9j/hnCATfcAi/eAJ6Ck/g1zeV4Wb++T1Y6BmB730HtCtw5mEsJAVn/zdRfVGf/Yd8fv4Mb1hd7x/elxOhG6fC/sTuv3Bwl2Qxf4gUczg09QBB0aFpZw5eEMGH52zaY8TI+o1+Dyi7f4cFBY4PVhDPLjb0fckf8eQqYWQx6jKKTalXd114T1KIZ5I5F5/Z53/m7oDoa2/YQFnYroQPf5B6k2ARX6oUexoh8sQk34WpFyhnfl7Xa1lYyorftu0K76cAgHGnAGwqULAMaojPJ6tX5t2D752WbRnDw9lm/5um53tq9it5f3kLgjwdx1iFBBuwd0Mm6D0Ph559aGYf97+eJI/zUWfAS17sKa8El35TyNdnOLeqN1jQ0/aciXfBqggUrIHTFfFq4XieJ12MRNEc5f3O2r2PJ8DkWU60+LcUhc0dncWmz4HplPyPTD9Vy3+ROwd4bodZ6vVdGo/b03dNDQfe4CiFxduvToQbAHh4QqOCzkwGZhQxURJUoEYfFiow/FNhbr1abNgJADjLwJECALMWLTlLHkxQsWTJiUZtKsOdPLhpw6dXro2TMcjaAQIAj49WvZMleuVjFdNegp1KhSn3aq2gkOVhZaC8SIoWUJBQrAqpEiRe5soLRq17INJEmS27dysTHDhg0UqDjNggUzEwsVqlOhQm06ZsuWosT/Fv8zbuz4MeTIkidTrmz5MubLiRXZ2rQp1ClUscwEa4bX7llypKqFjVFAKxyrU42tcrXs14kFuwjIeeB7JkxeR6x5exOyTa9eHZP3QpN8Y+bo0qdTr279Ovbs2rdz7y5wYMGCCcc3fMhQYUSGFC9abJSRo0eQIkeazOItJbGWLmPCsum/pgc78eRTOEAJNRQEXCClVFNOTfUgVFZdldVWXX0VFjDAlJVaWx2qBVdccklSl1146cWXL7H8JRhhniGmWHcxyjhjZZt1Nlhoo5UGil3YSHIWOKxRoMVrLMRW1VSrGONKN78woBsBvP0GHCzCEWfcJ8wtx9xzxdD4JZhhijn/JpllUvcdeOKNd55DFKGnkHoVWaRCexoVo4028c1H0kko4acff/39NyhOAvrkQYFB0YDgUCIotVRTEEoqIYUVegWWWBqaxaGHbcEl4lw94gXKXsGkuOJgnhW2mSJmuvqqZDZ+Fgoq3JghTDBx8GjXj6oJqUUMsB35IG1MMpBblL09UFNw1lgTAJZamsMccspBByu22Wq7Lbfb5YJmeD2wMS6cbUr05nkU0ckeCO5phKeeIhlBUhZ+pqTfSzENuu9MAeZ0KKKKLoqgCCIIwAWkTEkKIaVwaGXphZluyGmnnob4Fol3mciXXysKpuoxrHY7MpibHfNZjrEI04xpdjHT/ys4pIQFrLBIzlZbk0/uJoeyzFrpTQAhZfnctFta6yXJSSu9NNM0fpumeOSWq26ccKrLbrsZ4YknGp98Ii+f9U4zTX6A8sfvoL658S+BBg5MsMECCNCUMQs/2PDDBXClRcQZToxWxRaDmnEyeJV6amAfFxbyZk07bp3JKIt2q2m7+pjaakO6ZuSwxOJ87G5SLktTcMMBLbRyqaveJdKPu/467Ex/+12447HBZpwQnZvueuy6eyfXXs/3Rkliq7SSMi7lKxPa//nmWziHJnog3HLLLYGDdkuF91Z7913WpoAHvtanIjJDYuF57dVx4i0ewziMscsfa2I35kj5abz2mv85BZsbaXOScOYkKMkhH6MjXZWUcaUBfAI5HelDl1bXuvlRsIIW5E4uLpCmg6yJTQ9xk5t4Jyf2/A542uja10RSkgDc50/J28/Zmuef5z1ADm4gkKIYBYGCWa+H8tDe9qxSKb155Xt/I8f4yFe+UJXIRHvxRYra5xnDvCh+F6SgrEAzuZXlz0f7+1WROuc5Y50gdD1jVgIXOLRimKON8Endta4oxznS8TEX0OBB2CAu8nhQd1UT4bpI+J6NBC+FISEeC73hrLIpL1AynCENeUaAArlNhwWLWw8FIAEgUkWIQ9zbEsDityMm8UNpGVyPNHYiX/gFMCxyURVbVUf5RU7/i6PhouXecpayzCxY/wOgVIyxpJwR0ID+CY4yiJEF41SrGH0wRx84kqeOcGSW1rzm6+6Ix4KM63ZrKg/VQrieQArSToT0iCEHgEgWOstZ+IrhI2lCwxpKkgDOqCSjMJlJ68UDiA1zGMRCKbHwIbGUp7wYE1X5xFYGJlXvg58ssem6LNLqlpXrkVx2yRpgvQYrwAzmMEGXrCmhkRfJzIIRBtBMNi7nA73I09EkKtOZZuuOG5TaNxPywXOBcJy+y5o5NxKvQ67QG4p05xEaCc94UmKe9YzSLnJYvUzqU5Pa+2feLISpUaamoAZdoohS6cRgCIN9r9zEYURGU8fJCmUq/8IlRnXpq9aE8aPBZNIAd2bMYyZwGihVaXL68Mzl3OmlL9XIB9aq2MV2x6Zp6mYHG5K7yV6NnI1ozyCF+hH5hIRPiWynNZSRVF6cY6lMjeRTCbCLBTjjbTus6j75OSnuBRRDmuqqQQ8KqreIVX0cU1FD3RdLxjatfp4BjUW7mNG5DqmunVhYsZqELNH9B5l+TWm1BBtN5WwNXtUkLnjDaxnacROyOTUXT0GoHhBY9rK/i2ZHPjKfkRihPvdp5xFGuzzmMbWpqI0SVFe7AE/Araqwtd4m7+ZJgNZ2oLj9KljlkrGx9gW4p1Dc+9QqXpLVz37cUNlF9QcXjWoONrKRVP+xliHSAh7QJtb9azMFS0htfABPLtXGRhK74R2Hl7w9+Id5dwdO9fxRd+wlIWY/oN1noqFrewqbvRgJQ33117/P45kcAKzaBSzgBCdggABeG9sxyzaIVcEKg4nIt63elmK53a0kehuHOKDIwoqzBUR5zGHOeBjELaOLXAJB4v45127DHOBIW1xSZVz3OMoRrDla2l08xVHPlr7mNgsCZG8SOV2TLfJ6LQtUJWvXHE0WXmdJ8gbj3euFU+bvaf8L4F2s1ssMYMAv6MBDMpM5wZ305MNYwJUispmUpQTRhxKqSjqbys4tSmvjLs2tDkvOz7lcbsxmVmjoHrqMid5XX5f/6Whnyhh4NabxYYuhY2mzu4J4PMimz+tHiKCHp6HG2qiXbGoUCm9exBPb2JCnvP0Kqr9OTa2AbW2UZfzhwLzuYT8HgdWsXkqUmiJobt2SbIzJ+XDOhiWrItpuWGUxRyv788sCDaSN+lKMKK6Nir3NYn6F2ziAffRgbUxjeOF4giP/+dLAVV5OU4084hTyvbH23lKf2mte8/eqsxBwgSuVygZHbZZnnfBb/+IPf0gKFR7O603SVtjeK7axv6rxEPWWVKUyK4ahbUWgm6nktcJfXN8iaF8Bg9Amfq6h8fqkb4PbpGQL2s3JDV+d75zGlaY75GHl401z+tMVEXII6y1q/6CSeyP7dvrT/y31qb/TkVW2Mj2zPmsuK/woSVEKIhwudhKUfdh8C4uDH6x2sLadZb/1WIsWp+HIl8nuyc37KUlMs19qT5h4ne4ZBxWclAQAu8/R7ozP/YEbI5b43g+TY8MT75xinr0Twby6yImRzMa3Dfz+BNQBPjaWuDpQBb/6lVUf4C5/GdeuZxBTiB2vccGEpJntCZRYgI/uHdunXEzvNYMwsNLHLU6efV/dcYbkfBgXIZ9bDNrmeBTgcRsZ6ZWi8ZVJWYO4rdGSZV/jpdu6WSAMWofQ/RhOWY1k0Un6HV364Zu7BFV8yMfTqZr8IY8yqMOr3V+VYZ2W0Rrrcf/d/wEgU0iAAI4ZFVSK2RGbbSmgmyURiKCSqPiWqcCd+2RYtMXgmGRRrYDYtXXh3mUOkfwdEDlfXlEXzSUQMZxO4pVaR9jYuW1NjpkhIF7GDI6f5t0gDupODo6T+iWZD8rXk4ke6bGEOkyi6Z0e6tHTEibclxnF170e3TiFJkzhPpEACSBBsB0g2nWVVx0bQo1Ix6EIQ13YGFZgIIYJtdkSXHlR+exdkNAV88Wh4C3ANvDGXtHcCT5LtFgL9pnb1pwbR7xgLdaij9Fg5Vne5SFiIs4JviXZnQDPUKUaJAYc/U2iOlSiJT5PPmDZErJe/y3c6yVM9gxC2ImiAJAiKUr/QPdYCAVYnBaKT8bBWe+RlRnEYtwNVzTaonFpETfkYqAh28qV2C823/MtAOHV4QkWh6Mp42AxI4314R8eJAwOonm9ye4wxJwkYu5sY7sw4owlhyOCTTjOXxGSozmeHjqm41MxYZc54dc9yidKhRROoT3a4w0sgu31TZttYeDo3SmByiv2RSymCgUOH0jSSEKGhgb+GaisBTkESd99oF1BiPNJlxmVYHVViekg3hopXqRx5Pb54eNVJbu9m/gRYiGix0nmYKgtYtYw4qShUzrRV0xSHS+Uo2klITqqo9bxn/95nU82yIOEogAOJSnewA1AgVZtFVlg3JvpVlg9pQS6/5JUkmEZyqVVJuTdbaCIscVDLp/LLQxTPB8JPhIsnAMvOAtGMtD1LeNLNd5b2thHmuaOzSA1RhYiJoT59VRPmR8PulcPmtAJodB8zUt9jJ441l9NIqZv4KTqbYNOtuMTNkg8TgUJzB5l3gAKoEAErFkWpt2bAaScMRv7BNcU0aJwniYGgkZWrmFb7FLfvaFHcdIgxGbMzaYMlQ5xVJ9udskyNqODppu63SdjEedi1CCRleQ1YmM28mDWsB+88Nt8rVO9HI9MVp3VnaMSAph3siPXLUM3PCZT1M3CBCWZnSd6qmcEhAHucdUCjg+yteKEGc7bOduzxZLISaiMbEYGMv8kU3LlXLlmWEIIga4YSaENTNgmbtrcWq6gCfUhzzlehCKpNVGoXV6oZCVneoVT73Ao53FEYaHTfKnTOnmDvRChicKaTaboYu6k/3XDi0LheEIIF5RnJlFmZd5oBCRqBLQDhvTjKqpdU3Jcj6TPiZQVkRaG3M2dmHaHkiok3uliA6pFa24bEMXmH1CpWUofWjoLtKCORpabg8aquj3jplrQQEANNVZjmhpdcuaOhuKg71zWqLlp+3GWCs2pUS1SaJXeYcaanu4fYxqFn8KoknCSPRCq9RgqCdxoeiqqDMjAElxcj76n+cQnLP6FFGGqQdbqjKDhfopYqIqqanxlR0X/qZTWxh/gxs5UafMgKNBgyZYuo7ltH8HmCY6ZEzSya9LQZV2OJEliaPrd5Q4emSB16PYR6w/GqaqZxGeBFr4QnCXK08Hpn2ppohNOq1IIE20I6FPMYz0aqmWmJ44m6reugAIc0aP6qBJJahOBYWim6/usq8ImaWJUG5MGmpOuBjBAaQiWKr7q60gxFYImqNCsFJcObHfV2EvNanAOLba820FomsM+rCEWXcT6qjZWrHt4KEy9JNhwrH0cVTvR38BlJ/7lH8l+J3i66KPQhsqy7FMEpbbGrKLSrAyswApQQztwZmd2oYQ94O+JZvAZBlV6LXfYiKeGmIh0yKiaGOCa/+qxUKSU9NfU5qbXsI7AxupvGizXhqnlhsmthq2mlWmnZR5K6mUObqN7cCPGfiM4VmdKWAMxuJNo1a3dOqtvYBnJrmi0uuNjClOgXlUnIEF52mi3euvhIi41bK8dKCUDmg/hONETIQ59Yqp9vu7lduopvKv+HBRrzqvfvWapusKpQh+/9uuqImNKNRCDpi4fNqPWbi3Cou92gG24/BjtHt14oKlyNrCcLOLuru3FumnGTid1Rt3Y4Mey6hdp2V/IzsTI6t82bAOL+l/XvSPdyCjLSkg8WO/MGq72Ju72ikLO6mykJtSonEgYoqssCpfQEnD6KoLRau7m9qdX9g8cfv8u/SIaHcZTTFiJ/jLQ0OAcpAmVg/ZhAOeYmyYsEE9G7B4wY1goumQeA6epcq6X7kZwRgSVZrltZ4mo8cjkx5bW8cbTPKWelhHACJewUZwwtVYr4ErIVdwAUaJn4UbAtx7u9i7y9pbAP4bqZ36hzxLkaELUkXaxdrDKZ6ShahZxf3YlyyUxy8bmHEafE9cmFLeqFGuJ4sEXdHppC/ZcUHExAX9xuDRGNWreH3FAcqKprx5n70Cwc64xsebJZmmsZ9VLC6WEnd7piebps+oxCTPmrTGA1/3BH6uwgAoymknAtnJr4dasDDMyNSBDCdjB7sHnF+qFx/GwVE5RyGFyuxb/LS7+mRdVTOcGKOAOaG2U8v0eaJWk8huk1IK+6kZ2KSxvTW+2btfWqi3XZRh3kNHtKnIm4q9edNoK0jCz8XJ8RGAKZnUu8/DSrTMjIYpG8whXQiXYWjVf8x/v86+dGUBBAbfOrDiPMyMjg06nAhfe8ONOqpCeK/BN7g/LcxALMa0sJBEj7SeTAr1G5CjD3IoVI+kG9HAkqJZOMUcIrGF1ZNbGco7N8vbJpexCdERL9NmGUF6mNVtfTUav30ZztEsa69sCL9m4kKsRHJ6G7B0rpopug0p7GUs75kvDNDdXChLILPZmLzlvr04/Ng98r1NCbrPx8FmRpqYadRCjzDeo/+FqNilrHjFYNq2AEihuiK4pS61V46Yqny4r62FLejXjddfWavEWjzXxHfDsPoZETzT6KURe+vIvA/MINSdmlZCbGrMbvzHc+kkk5rX9mTRfj6yW7fFKC3ZLY3NhG3bthcELi3NjO/Zj63QJSIGHgPZuiVXhzBnHIE4PTxGexbNm4ydS14pq3nPgPGnL2avdwBwTz5wlXikU/6tI8C/qVrEVA/Ck/WXPqRtHE+yG6TYCQ0Zv+zb6NcRFWPRF11tKUmywHjf7wcdm0TV91VdI40erQbcHf7BNhHB1T7Ot9Z81/8Gfimf0ctJhM5iwxcAeyAAMa29jj7eQM0GnNCn4Sv+yDv/se4NM5c53jKhvZ3cyaHOufosy4BaLk8gcVVfZE181Vhe4VjsTubXlHir4gjeewcryBN82hMsRGZCBC8R5nLMBhVf4N1m0r/JyhuP5cBdiMPOlsHZoiIv4cpd4dUZZihtvHUMz3oqwyWY3jfupjcN0TBfgKQ5bDKxAIscwOQu5pytAhzjuZK/z4ZDvWcFzkzs5p3aqfduzJ1O5G+43pQ9CdJ12smx5VaPlVf8rQXtNtfTvQXcj1l6xbKf5MxIssTo4weI2t8i5s8d5ZXAADKC1hpvxQrBLZZktSlaNWxf3+sH1oLfxcs+LifdJnZbNx0Y3i0PSduJxJpbwrV3/s592w6RTeo4H244XEQVQA2OHt6d7OgAIDvmcD2VDkWVLJZ4VtarPM1KbnFZOOaz/Z13N+liWMq7nukt4OYFX7a8fDYInuJnXmPYVu7GH9bInu7Iv+wewi2SoJAjAAMzHvLTDPEXAwIRThwsMQbXnYKCv9SHqoF4OdyDxZV+C+Jon9w+SuKEfOn6QDUmX9Lq3+E1yZx7rbTXPuHbTO2TO+r1fur6LRTsAeaf/u6eXwBmYEpASfM+yjDBY6sEXqXwvvJiw+oe5OlN7iH82l+dS/OeU0TAC+AfHxDnkF2urshR3vMe7kTRNWsGq7v9S2kKz+cmjfMqrvMtfPtaowCVc/8azO/sj6Pza7m7mj1Bbb7uGn2Qag3u4F2uh+1tzIzq6K/qia+dNKm/VP3q8EzY83jiOT1ze2J5tVQMk+DvZkz2R612E0QX6iG9ZieEYGqnck4n6ioaU/2in5P0b/s+s0/qh6QxvpPbpPTEUJ6jhMxDiu2mwL3RvNv5X/2bBCnttE6vKzz/91//2hT7+h/6ya8MQAIQJgQMJmnBxEGFChENAgFChomHEhxMpVqTIgYPFiREdcvTYCGRDkCM/FDN5spi2Yr3atGwzAGZMmEZoBrCZBScxndOmEVP2UxkvobxgFTValFJSpUuZNnX6AGrUfPnkVJVDACvWXbsWdD1xgv8Bg1+//vxxddbVKrVqB7V1+xZu3E5z6cKxywIv3gIFYsTQooVCYGDVqkGidhgxMsWLGTdeLCpQIEmTKUvCdvlyMlCg4nQOFsyMmVixUJ06FSrUJtWbjily7fpfbNmzade2fRt3bt27eff2/Rt4cOCubW0KdYpbLGGbL1eO/Bz6c3LkSAGj0BcvnE5xuXdva2yVq24MTizYRkBOvgdO2bendFToEWvzvdl8I/NTy17795vsY9IclFLShsACPzjwAwIT1OZABRtEkECTVJJwQgFPQhDDDDXcMMORGgHBIIVEPMiER0w88cQhNnJIo4oyoojFhzyakaORRPKwkZIsNIn/JZdekikmmt6wKQCcstAJSZ2AGkqoo4xyD0r2oprSqqqyImCbbbbyCiyxxioLrbTWWsW7Mtuiq6678mJhr77+CiwwwkghRQHEDnMMT8ZKQIYHySqbDLPLNuMsjs988WU0VEo7LbXVNnlNEeEknZTSSi29FFPdXtvkFFS4EaYZUJqbLLpSoaPOOuxY0G47M8tcxRjxfiFvl/PSWy/KXI2KTz766nvjvpjya4O//lDqRcBeClyWQQibdTBBDJvFcMcLObyWQxw9VIGMElH8FtxHyBiX3EtatKghGGlc10YQtNVRwAl7dOkTIIOs6aacklRyyaGcfDLXgCmZMqoqr7qS/4CtuFrgq7DG+mWZZdAaky1Xu0NzLrvgWJNNvvwCDM7B5iSFHFESyxNlxUowBJo/LQt0UM+COTTR0lBb7RhbII000559/hnooHvb9DhUlAt1VFJNLRXV61LIbi6LyzQm1m5+KW8XrOSASuAodxVKmfms8aa+AIIVVr9ikT1p7WOZXVZDB6F9sMMcscVW27xDikgNb08kY0RwERpXRYjSXbHGdSNq111tq5VwXpfsnUlIIo3cl9+fmCTqX1i6DpjgB6pEWKstGW7Yy4glPotiMqWWC02NN16zzY+XWEKwakaermRqUsZzz8VKKMGOygLFZtBmmjEUUdIWvZk1W3SGVP/o6q2/HnvhiD7lG+WYw8a5paNreokYoG719bioPmu88my99XMov+bliLB9NftsmIZVm7+TAtyRWQuam7PuhiC94UhxHEFXuhpyiRENDnAjiuBBGLK4BN5ob41z3OMI5KOWTI5ybzCC5S6HOaAEhUmd81z8oBQ6qFiFdArryum69LBu3HBiFEsfXDAmO47Vri+3Ewwwdse7kv2uMcEb3hJLwARAHS95zRCGMELjPNNAbxPSmx5sstdFL34xe5vq1KeQBj6liW981KFA+QqwqqjtUH1Vm5X70LM1XLHQKfDhldjIZp/8DeAT++Nf21ZSrbc1yEAFxNsBGZk3jwzhgZH/fOAQPlQjDy1ObxwckAc/CEKa4CtfR8KcT/rlLxXi0T0uFB0MryRDGobFS7+4YTfCpEM4nqmHaqJdClIQRNwNsYhGDIQokCg8ZOyJicNLBTaYAbPNKG+KoqkZoxylmp2BEZvZ1Kaltmc0UInKjJJAI9PUyEY3ou+Wblmf1Wj1PvWgsj16PEKv7oc/ewXSJYM01uNMIsACFUNaA1TkInF0IEaGSJIjKogJLIBBvcErXhWKXEvqBcIBCGmEJNTXvk64Oc79C56pDJ3BEObKr3QplrOsJdVg5bpbYqwTGuMYXnjppl9SABhEnJMRp/McBSAxeMcUKhMNYYNmZmYzcYAm/xVFo6grNmo119zmVKla1dxsr3vLAWf4xhmZ6VRnCVpoI6vSCReqyZEBC6iV1t4Z0jzOr35iG1sf7XlPfOqzf/xEibOWBVBFNpKRimvEQglb2IJQEkGGVEmBJkpRi17UCMAiUihHScpSNumUbm3PSEdX0oWd1GFjiRgO0cLSsxqjrDCV6Uxr+rEh6pRkPI0OD4o5vGMmc2WG4EEzk6GZziyPqdPEojWlalXjHpeqRPPUN0fVVXJWhwJihVpZzRorWaV1rVVRzx01qxQnDeUn8yFGPesKJHzmE6/9g6heB5qtRt4NRIaV70ItoKPFamM/nJTcY4UkwskaSZQm7OjmVP+4wu42RZWs9OwMUfewsqwuh2o5K3Vzqcs1tfZNOM1pMHlnKtqmzLa3JaohSAwA5BGqUDOTplOpmcVjtIZ6yJXxjLEpRm+WkTLOPVXTtGC+c1L3Leu7rlrPg57tHrgp3wVbeOVKV/z9UVjnTVt6i1VIvV55r+4toArmO18hfFkIFtCGfh97L8n+t4SjPCEKU1hgJD/FhZ3NiitPB8svgSnC4JkwhWO32gtjGGQb5nBPTQUNAKDMtrgdHokZDYAdgKIZKaaZFVucxS1ykcaZ1rT1unm0reZYx16F7nXG+kYgfyc81z3BWo3MtTcv5V9DmSc9+ehkYEEZP/gc1pSprLb/lGAZ2Fguw0LBXGxjH/vLFmgCf/s72SIZyRuVzZzmCOzmVyOYswou3WdRF0vVRXhMqAVyhWf3ZzeBTMMji22H0TgJQ+QJmYpmdIkBAIBJKM9QNbMZ9LRY3E3/G+CZ2l5ytJo0cYY6EF+tRnRLjc5TC5mdWNParbh77X+dQ9b1s994fVU2PwKrzIAM5K452WuTn3yQLimDBZDdcmNbAOYxb8InRTgkNOMk2tJeM5vbnNlrMyXB2p4zt2v4sG+Du2LjJjdre+laDcOWp+RwbimCqjIlynve9QYAI8TwmSpSGov9jnHAyV72SSk3OTg+I8IVHl0fk/XU6rRuxIlcxyP//5wpF2cSUORaayd/HOQhz/XI9Vt4wx/eRyMX1hxYfuyYPx7yMf/C5C0wh2cDGEnWUPOaPfpRn+NdKapcpZU8u7A6e/vorLPlqVVr4Y4B+rWDlrqOmRDUq2M96/VmBNeDy2Is5uzSmDb78InPG7Qz14wI3zEpFk7qH8dd7uybY93rGBXQ5z3WTJonk8XbZLL9/cm3xrXgyV9+i+Ij8pCf/PrZ334czAAfOj/hETrv+c9fPylBF3rCTHd6Lz04TMREwmAF+lqv3PSCL5ouw3IK6mQL4VJBZawO9xpN9xihAipADIRhmiqNuMau+D4QBG2DODjlxj5t7UKt7aTr+aBvEP/O6rrIQ60mbipcDf+8q3Mwbu/qJ640jwd78PvIBiecjUjEjwg/CaMEjwhFiOaS8MyIBB/aDwonDwemkApnwAqv0Ao34B4GrPMK7ChqEOj0j/QWjEtQyugiBukkrACXjnY8JogCDbbWjdCUDxo+bKgm0BC0busssALSIQO4gRueB6qiygND0BAPcQQ7xdMMTvm8ijqqARh6rOFYUO6qhu6yRgatDwyxr3M8SuP4TvM4juP6bq5+8PuMRAhTURVVEdpwzhuy4BVhMefwgQprEQtvERdnYAN2cRcdwZS8ECk2EduybQxbqf+67QzRMA1ZEKZiys8QsC98CZgGrRGf4wz/3k0CRyz3KvACh2EYZCEDfK9RxO41DtEcz/EfiKNoFjGcDq4RpwMcrEMLnmYFWVDPpI88JC4TNVEYYa3A6o8Xdo775Crz+q6yxEsnenC8FjIUe5Ag9yUUM68IchELedEiL/IiHeD++jH/xLAYt43BkFG0lHEZ464ZndH1gOgvhCjdqLEan6P2lkjEcmsb9/ACK+AbZYEWxOCpVIMcyxEdgzIEXcM4OsUMkI+rlA8eIVESVwXuKLEFU+2Gpo/6rGJKOJI9gLEoADI+BFIgGXIUSVEsxcYry5LNimADdBEj15ItLbIIsBLO4kzOSq8MzXAkIUwAw80km9GHfshj3uSm/wRtp4TpJaGDmGaSJimQG7sxJ2lhJ8uB34KPZ4SSMj+QKIvGF4JB7dyxGpfS7c7H4aDPBWWFKjGxjuyIH+HyrbRyfrjSNV8TNuvvKBygLWuzLT3gHjhS9EbvI4fO9EArtCAm9fKypcRN6cjtABHwL9FtGgeT3QrzOaQAEmZy3uhtMXGyMWmBHQQhARplZ4CyMsOz+IiSBDMzDkSFGUDtJZcyVejxKaHyrMJjKsOiPGIwK6qCYFSza1iTP/vTP7WSNm1TQC/SCyLh+naTpEiH/35TJMliGf4AL4kz6Y6zz1xPOc+NORlQ9qCTMwOh9m6rOvNQ63bvJr1RFnRSO9nhFv9uoQFe4VG+Uzxj1DIVQTU6xTyTgZmS8h3JARwWrinrET5hhX3YCQbtc+JQkwb1E57+k0mBMUocwAMGVEo3oAgM9MAQNEFj6BgbVDgjtHUIcA0rNDkv9GOYkwIIQ3ec8zk5FDp+KkRFdA/5EDtPVAccU0VvoRZqwQq+U/hk1E/JjjxtNBiiAUfTMzI6VCl5lPncbqzeEypbEOKsZo6wxjRPc7uSVEkzFcm8QC2n1DY9wBHwaDd5sze3jUHt8i7x8kvBdC8rbKb2wg3/At1yCk3VLeqgU3zsAACqUw93T05NVBZ0oE5pYUXxtBZMoQP49E+X1eyI8hXKwWgGtVB1dEf/e1Qe385R4ZOlhnQs8rErKrVKQkdTx1WzvMBTpdQBcmVUDaZUF3SGXik4u9RLW8c4WY8vn7FjljNDB0NONhRXxYcZUqEmfZUxhyEdgnVYizVPTYFh88DfmBVi/81ZQyFaCTVHEXU9eRQSo8s9s1VbhYw06fNbK9VSxZVcT/ZzHOFcpTRUQ29ds1RLt5RLVYeWaincwIMST7Iv2zAaVxJO4qRfwUFob/UlMRY6mIEZzmBX4TRObxIn0+FgUVRhj5VhTeEQnqEQI1ZrM81ZoTUWfOE8m+tfE449nSY7PPZjrUs8JNVb1Ypkq+RSrxJl57Y97iFKV7Y2PcABRkEuYbb0/0wPXmNJXgNQQic0TNMEXzumZ7WAJTWsX0lhaB2waA91aZAWaQW2V0m0RKH2RB1zaqu2anHBB/p0a0uXxsjzOL42GEzwBDtTUTc2BjqWLh41jkZzKmelbbeCdOBWlejWd5NiHu4Wb2/zCajCb42x/wJXcFVnXm/WpXLWAGcqX8/tdn5JQ2016mavGpVm7Q7OcpHWDnhgRAm2G6NWao21FuABdKsWCFrAdN9XYmm0KFU3bNtxbOHRWs3WKWeXdms31da2W3NXdxHGYGbQhX6XXCMBLYd3AzzAgR/4gSHgYGIWcE8KVeW1eVuHdnU2cVUyw0ImDrNXe7f3OVzGTyThe/+RFhtEIU7JF1gdk1jRtxbWYR3UF3ThF4cBTn6Lxgw0k3XHlmwhd2PnMS9YJTT7F1K3lVtx96RGlmSPFD/j1mQRuB+hAkoFFIKzOIvDgYu52BkUpoKBM16ZN0IlVM/6l4Mt1IPN9HrlkDAL8+Dc0WVSGGl7iwkI9lezc2rzNE/XYX1NIYcDedMCFRWOcjOB2BHBgfmutY3219SQ+C1gBTz+93aZ+CtmaIB3l11HNTWpuGs4OSpGwVx3UYtL2YG7uItpQJVXWZUhgA4sGJaWl3kJl17VcIPvtYNjlXFv6kwf141H+F/j+IQng457q7cmoQIskA+9UY9XlI/5+I8FWZr/B3mHl+uQEZlsFXmIY6CR7YJ/Ibm6WoqSK5k+L9mJFfQ+2dWAQbmTVZOdX5ZdnyAcTBmVuZiV75kGIECf91mfnQEPHkZea9Zmv7ReofIkUXJMp9d2GpdWsVdycRXUXAaFU9iYkyEadsAJ8vhEz/cHfuCZqfaGp1mkuVYRjqEos+p7qBU68Xeb6dGRjxicTQs8wmSWHgaWmhiTMxmd2ZV339mnfxqoqYSn2RWdPYEGUBmf75mfl5qpRUAEIIAKEIFwC3eSwTmN1XiNWZIBQ5hox5ZUJBpQjiozjDkaoqEZnKBEszOGO9qjoXl9RxquSbo41hEpW/dfeSd/e4ybzxZN/8C5O05rNIdUUgM4H83ZiZ94p4eapx9AioManhV7qNFZshd0K5wBAliZqTN7n52as0VAAD4btAVAAuKBYia5oNHYAHN5cc306Rz6jYM5jiX6eJBqM8r6MzJgGOb0fG+Brd36reMauE9XEYqjU76hrtUTiHmH+ba5kV8apv06icckAGvapm/agt/VbRVmsicbsrvbu493uyUbjOnsXS0YEDSbnzubs0ObvdtbBCSAVSH5oHfWL1ebl1tb9oAZjuUYrGf7xJIqxYIhA9LhhWPYWNsapKs2uBecpGn0OLLqmrGZbHk0r/uiub35m6GbOwBbLQj3hiIGoHHXunH6Xcdbu//DG8VTXMVN1cSxOyQtGKXsbCzw4KkhQL09u71zXMfZWwJO+3DFNKFhdXGrF4RFJr+BmHvB+omgKGYC3BcyQBai1nOd+aOjmcGvfMY67bjtGlfx2lqv1aU1pq81fGqKU5L/Fy1mqRuWIcRFvJxhvD5d/LBNnM7r3M7pXM6xG85hOZZlPMTJeLSoYMcHndDbu8ftFZctVKHLdI1+to3VdE33u4SVfMkxY1AgDd+YJwN0oHMN/KMTnGGxXNSF28EzAaVZ12i7HB4XObp6LMwx/JHJ3DsAe5I73MPVfLBDvM9jec97Pc7zvLx9Xdh3PZbbHKABfbSmemK4QABwvNCfXcf/JUATdmi+6bsN9fVni9y1XxuOJ53S/fu/MV2KhOFQfEEYWkEQdvvTrXzU2x25ticT2NE5Un2lV50w5PFH+XrMZd1VZFqcJ1nZxWO01nwZ1tzY25zYE17hE/7gDx7ZyTjg05ClJNkeBB3aLz7HqWDaL6barZ1My7RxHTdNIT3St5e/h/lPwP3SxT2apAkTWiFhqfyZ2d3da/64iMbU5R25JXzCtTmn3G6vixjWn5vfZ53DB3AtIj7N1xzXH97pn/7hZ4mMSUvp05BeJ55quEMCMJ7r2ZsKuACXrjqhF11Ws/3p4vCX9dvkvR2sVXi2V155xl0DR4M0rOAHptxYaXgd/0Dd5vs+yy/zFEz9m0yQ59PI3q2j1bn5woee6IveTCa+OONTwmodzave8i8/4lc13NZCz2rdx11FEyy+67ueBEYbcRP342U15PE7v9W+EZOc7SnD7Zk8iuSe7gERFeogA+5e5vXej3/b74P/5gEfwsEpnArf8BWZ1RN/L9ZEzPfd8R/O8yVZzyaf8jVf8yEf+zvfzI9+8iF560e/0EmA/MufBG7gBpBg7GFVlwEj5Gl15NN+Djk0tlG+Mr7XmWrf9keDGwDi2zdUqKyouoWwlkJTDBs2/AcxosSJFCtavIgxo8aNHDt6/AgypMiRJEuWVIRS0aZQmb7FEtYMFLaZkv9qBrqJM6fOnTx7BiIHFBw4UtWAUTiqJUaMAiyaNoUDtZNUqYOqWr2KNavWrVy7ev2K1ZhYY6vKii2L1uzYtWnHth0LNq7cr5qoCLiLN6/evXdJ+P0LOLBfFBLCsCiAWKlSLYyXLDkKGZhkYKQqVwaKGbPPzZtrSrrpOXRNZjNLY0sGKnWcZqyFuRYWK7bAgahOdcjwI2Eth7xNmfwNPLjw4cSLGz8OMuXKUy1hpi7tmbP06T8xDwVXrRpkxkuZOmUBFc7UqXPLmz+PPr369ea58H2PV7B8vzfq30CBH0WECFD2MNbyGGRHTUaZZaRklhl1CgbyGWigiSaJaaWhplr/HHEEg6EwZpgRGze0ZXLKKYnkcJBCu/X2EHIqrshiiy6+CONEKakUCnMvxSQTTdEtyCNOCA6VnYBJdfcdeFGNRxV7Si7JZJNOemUMFSS8N9989t2X335abhnBCpDsQQGBBl6GoGY9cmYTgwxCGKGE2KRWoYUYBuPLhh0SVFuIiWSwjoknouhbjIIOSmihhsY443IuOZcjNqGpeSaPmQGZnVEUcEfkd+GJh2SST34KaqiiDoIkInZVKd+VWOrHJZcyvCrDCrKu0A4kTFhWJlCRotngmmwyQ5qbcILC2oUY+oJsbHjmeUo5VmDgJ6ApHkpttdZei+1FytXY0o3P6WhT/6+7UjdpZZVuNyRiRRp5ZKedjApvvPJe5W6nUHGB6pX5sdqqlrDGOusK1AxM8MDSQCJKKWaOy1OabHoGrJtvDstaM8cmqyyzp4RCRAKHmCgtQ9mOTHLJJreYKLeL4ghddOIyLN2PlAo5ZKaablqvp/PuzPNXOdu7aXhPSaDqqvz2G8G/AMtacNNOIwN1CZCkYgfMaa7pK4QST5xaxRa7tiGHseAZYiihJJJAK33+Ke3Jbr8Nd9wfpczcyt86+ujLMHP2o7naoZuuuusG/fO7PR8uauFIBi30ut8VsIgMRyOtdMBOX04w1JpvrrnUCtyqoMMPh7Y1haBYyFowr4kdC/83BIV4ii5W5PAx2yHLjXvuustNd7eMtuzy3gv27beAl2Jqc5GMK2444s53xfzijEPleJGIJaZYDFpEvqXSSwuM+eWcj08+5yXwIAoTVeO0o5qj17T1sBYaq3rY3LT+uohiYNCKievAE7JA7W6ABCzgtXq3spgA7zMN0pvwfFKm62SnKJY6Xs2uVz124Sx6Onvekjjoruk1LoNNuR72FPMfLRiPAmlYwffAF76nlW+GNDSfISChgFQw4Qzvk0TEhAWn1dCPTr6IjbKIMLsMHCI3IPsfAAFlwChKcYqCQuCNWAauBkLqgdOJoGUmWEGkIM+EJBQhp0DoLnmhMXpmHCH/CQ9jwuwtJoUrjMxkspMGZMSwaTXsIw1LAMioBRIZgCykIXhggxwyIQOlOAM0gjWsrqUuGEGwghXEIIYMZEAVTsgNOxByi2jdjoqkLKUpjWNFbzUKb8Hj4vDKZKAJhsl4/8keGd+oQRGucZe8/Fkbg4ZL65mwAHJMIWPqaEdgFKUaY7oMNJhQAvH5cZo1LCQhC4lNbBpim9w0BAC+CU5GiJMRFagAOYchi3TqYJ20oAUoQwmyUZ5ynvSsp0hSViNU2O1uD3Nlj3IVS1nWMYW2vGUwc/lLwvEyoQyFw0EdN8wTotCYyExmpZpJplwBhQmGoKZHyxfIbIq0BN0sKTi//znOcqp0GOhUJzvdqZuFBNCeNK2pTTOSqOX47ncLZKAD/RmzCA7FbwJdoTHl2B2DPrR6DTXjUp8aUYlmz5gqrGgyJcNMjGoUQT1hAiQ+Ok1rXvOaIy1pN08KgJSWk6UsTacsXtpOUMZzpjetq13rOiMa1S02MMFiFsMF1EhpdKhDnWCQrHpUpCY1qk9t7EGjOkzFzpGqVjXeHbGK0QNtNUELsgMPwDq+QY51pIY0qzdPOk5yrrWtLtVBO+MaU1M8sW13ra1taZpXnerzJTxdIKR+GtigDraZhj1sZalaS8kWFLLMZa5yJYtcOlbWspdVZmYzullyPPAMCigBNcUaUv/SktS0pw1nalfK2rfC9Z1zledt3wtfU+bWbHu94t3+Ctjgjiu7mS1uUaaLzOgKeMAEli6ArUogMGb1utnlqn5xkoqvhta7ghQkacm7TbSeF70tVa9rYQtPmbo3viQu8RRzq9v7uYY192Xlo7b44F01mBxDxah/i3vgHOu4sgnGKgWzc10DzdjBMeaMZwcZXvGOl7xoTataK8BWt771tSAW5YhNjOUsF3C+KltUX1vcTxgXeb9DJkeQx3TjNPu4Unf8cZoNq0wgn1mrZSbymKWzI89AI8JKXrJpm7zh1XYYruz4ZGwDKDItK3rRBERxjeqm4i/fd3TsuzMX65wrocz/edOcHhOmG2zpHl2N0jWZhCgMAUgMZ1jDT4ZylF1KZfaK+MqMrrWt4+boELXEyywGM6XFHGp/fnrYxB5ysBn2Ypf10DOlsYMoAGBSVotTpa7usHpjHdNZ0/bW3O42rnMNad5WrMUuzlulj41unRSbs+ku8qi1uGz4bW0moJhEKszb6le3tp3sgGmIbQdFbwt84HDLq0qWcwp93k/cOFolfhsI3HZLfOIUZ1+vwvW+edM7kqdjDSFaYQlBW3udH/b3vxGdaIKrfOUlM/jBH00QbkR63OQOM9YqjvOcP/hqvsoamzTONflVTHWr25AwxOAED2M72yhPOcufDnVsuXwT/yvJJypkzte+Nlxiv26fzr8Odl5dHOM9/GH8Iuk1ixG9TnYyItn0t0SmozzqdK/7yKZe9RAR5BuRljS5yw0hi4d98BVvX56XDfSgwyntGQJb2zOWv7KZLRRU30Qd/oGBfiDa7pzv/AENXnmYX33hr6G5w00TZtFFnPCsj5TX8xbvxG88kqsZumswFDbWje3tG5s85St/jGPYYvi2QEkLOgCRQ0zL88xvfqFc/nLRY523Wh/WvHuYtQetvvWEf7H2fR77xHNckkOfk4bCZsTdR773Zqs81YUv/OFDXxHOr7/9DwV9qk9e76PPutYbfnqoF2/J5n3cd2yikRMIOIBaI/97ird4XtN4GoIsuqd+GuN77kd1xGcLxzB/9Hd/HwiCgzJ/+kdfCdd//md6fyeAC4iAFleABkgdgZeACsiCDBgs4jd+adcMr+F4FLgsFjh5GDh8x7AJ8Td/IYiESUgo0GcLJCh6ArFw1Oc1HAd0Neg+ZMdz2ieDMbZsDSODNYh4DeiAFJN2PHh+j4c/vCd5QQh8G6iBHaiEcSiHImhww+eEsBNz00d9/0eFiQeGsEd2WmhzoTOAOvGHfyiGpjF+XVN75Ud0Z4iGrqOGvvd7wBd/RgiHc6iJmwgjdVh8B1d1j2aCCheFPJh245eIh+hT2NcTXieIrAh+h5iIQLSIOjj/SY+IfqxzPz8IO2vYfu5HhJfIgZnIicVojJ2Yf6FXgqPId1G4h/8HgJE0iyuoitVojW0yjRKziGRYho/Yg2gIeevHfr/ofhpIfB3ogceojuuIjC5nh3eIh3snc85oBmaog9uogtkIHQ8Xhvqoj/iIdraoOt4IieD4gxozjuRYeeYof+jIjg8JkVXEhIrQhMooiqM4evfjjGYIjSmIj/4IkiE5hvhoi17Dkd8Ijmm4LL2YkJVYjhsYfw1JjBFJkzXZjiNokcuIkRmph7FRjxxZkh4JkENJlEVZlEFZhif5jenHlDJ3kCzZkhi4kAz5iTNpk1eJlYjChMSHgZTIkj/Y/4w9GQu5p5Slh5RnGY21iJZruYNlyYO5B5dM2SGSuJJQGZVSSZUUWZVWmZV96Zc3iY4VmZM6yX/LMo+HKZdy6ZaLyZiNuZhjySFxmX4LR5kVyIt2SYkKCYxUKZMO+ZefCZr4h456+Y5d6ZVQeZCGGZZY54xyiYaPB5cUmJjol5hzqZGsmZp1iZmZqZkvyZmjmRKhKZzD+XmBWXzyV5rux5v7Z5c7mZuGeZjRKZ3z+JzVeZnN6Yu8KZWbyZmdCZzECZ7h2XLAOSPIKZjbGYrLSZjYyZ7tiZ3quZzoKYQxqYExSZ55JZ75qZ/fdp8p8ZvJKZ/KCZ8DmpkBaqCbQHzB10CdyNmfBrefDwqhBtSg5VmeDbmgF4qhGWqOFXqOE+pyEQqiIWpPHkqiKPGbJYqiwSmiK8qiJZaiL+qhLSqj4hkQADs=",targetWidth:"",tokenWidth:"",initToken:0,panBalance:0,forceBalance:0,isActive:!1,flog:!1,flag:0,text:"",lastX:0,lastY:0}},components:{uniNoticeBar:a},methods:{handletouchmove:function(M){if(0===this.flag){var I=M.touches[0].pageX,g=M.touches[0].pageY,i=I-this.lastX,C=g-this.lastY,D="";this.mindex=-1,Math.abs(i)>Math.abs(C)?i<0?(D="向左滑动",console.log("向左滑动"," at pages\\main\\main.vue:119"),A.navigateTo({url:"/pages/nearby/nearby",animationType:"pop-in",animationDuration:200}),this.flag=1):i>0&&(D="向右滑动",console.log("向右滑动"," at pages\\main\\main.vue:129"),A.navigateTo({url:"/pages/daily/daily",animationType:"pop-out",animationDuration:200}),this.flag=2):C<0?(D="向上滑动",this.flag=3):C>0&&(D="向下滑动",this.flag=4),this.lastX=I,this.lastY=g,this.text=D}},handletouchstart:function(A){this.lastX=A.touches[0].pageX,this.lastY=A.touches[0].pageY},handletouchend:function(A){this.flag=0,this.text="没有滑动"},toPan:function(){A.switchTab({url:"../pan/pan"})},getMainSlider:function(){var A=this;(0,i.mainSlider)().then(function(M){A.slides=M.slice(0,7),console.log(A.slides," at pages\\main\\main.vue:172")})},getToken:function(){var M=z(g.default.mark(function M(I){var i,C,D,E,z=this;return g.default.wrap(function(M){while(1)switch(M.prev=M.next){case 0:return console.log(I," at pages\\main\\main.vue:177"),M.next=3,this.api.homeToken(I).getIndexPan();case 3:i=M.sent,200==i.data.status&&(console.log(i.data.data," at pages\\main\\main.vue:181"),i.data.data.length>14?this.tokens=i.data.data.slice(0,14):this.tokens=i.data.data,console.log(this.tokens," at pages\\main\\main.vue:187")),0==this.tokens.length?(this.bgColor=this.bgImage1,this.isActive=!0):(this.bgColor=this.bgImage1,this.isActive=!1),C=this.tokens.length,A.createSelectorQuery().select(".planetPublic-box").fields({size:!0},function(A){D=A.width,z.tokenWidth=D,E=A.height}).exec(),A.createSelectorQuery().select("#content").fields({size:!0},function(A){var M=A.height,I=A.width;z.targetWidth=I;var g=[];if(I<D||M<E)return!1;var i=parseInt(I/D,10),a=parseInt(M/E,10),N=i*a;if(C>=N)return!1;for(var t=0;t<N;t++)g.push(t);var u=0,j=0,B=[];while(C){var Y=Math.floor(Math.random()*N);if(g[Y]){delete g[Y],j=parseInt(Y/i,10)*D,u=Y%i*E;var o={value:z.tokens[C-1].token,id:z.tokens[C-1].id,leftVal:u,topVal:j,display:"block",styleVal:{left:u+"px",top:j+"px"}};B.push(o),C--}}z.tokenList=B}).exec();case 9:case"end":return M.stop()}},M,this)}));function I(A){return M.apply(this,arguments)}return I}(),pushToken:function(A,M,I){var g=this;this.flog||(this.flog=!0,this.initToken+=1,this.tokenList[M].leftVal=30,this.tokenList[M].topVal=-this.tokenWidth-64,setTimeout(function(){g.tokenList[M].display="none",g.takePan(A.value,A.id),g.initToken>=g.tokens.length&&(g.bgColor=g.bgImage1,g.bgColor1=g.bgImage2,g.isActive=!0)},800),1==this.tokenList.length&&this.getToken())},takePan:function(){var A=z(g.default.mark(function A(M,I){var i;return g.default.wrap(function(A){while(1)switch(A.prev=A.next){case 0:return A.next=2,this.api.homeToken(N).takePan({numbers:Number(M),id:I});case 2:i=A.sent,200==i.data.status&&(this.panBalance+=Number(M)),this.flog=!1;case 5:case"end":return A.stop()}},A,this)}));function M(M,I){return A.apply(this,arguments)}return M}(),getAllBalance:function(){var A=this;(0,C.getBalance)().then(function(M){A.panBalance=M.balance})},getAllForBalance:function(){var A=this;(0,C.getForBalance)().then(function(M){A.forceBalance=M.balance})}},onLoad:function(M){this.getMainSlider(),this.getAllBalance(),this.getAllForBalance();var I=A.getStorageSync("USERS_KEY").token;this.getToken(I)},onShow:function(){this.getAllBalance(),this.getAllForBalance()}};M.default=t}).call(this,I("6e42")["default"])},a6d2:function(A,M,I){"use strict";I.r(M);var g=I("8a0d"),i=I.n(g);for(var C in g)"default"!==C&&function(A){I.d(M,A,function(){return g[A]})}(C);M["default"]=i.a},f802:function(A,M,I){}},[["2c5c","common/runtime","common/vendor"]]]);
});
require('pages/main/main.js');
__wxRoute = 'pages/pact/pact';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pact/pact.js';

define('pages/pact/pact.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pact/pact"],{"4b70":function(t,e,n){"use strict";n.r(e);var r=n("8320"),a=n("72a8");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("f9ed");var u=n("2877"),c=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,"1bda4874",null);e["default"]=c.exports},"51c9":function(t,e,n){},"72a8":function(t,e,n){"use strict";n.r(e);var r=n("92c1"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},8320:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"92c1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),a=n("0be9");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{voteList:"",labelList:""}},methods:o({},(0,r.mapMutations)(["setBarText"]),{voteDetails:function(e,n,r){var a={voteName:e,voteId:n,voteStatus:r};this.setBarText(a),t.navigateTo({url:"pactVoteDetail"})},treatyIndex:function(){var t=this;(0,a.toTreIndex)().then(function(e){t.voteList=e,t.labelList=e[0]})}}),onLoad:function(){this.treatyIndex()}};e.default=c}).call(this,n("6e42")["default"])},f9ed:function(t,e,n){"use strict";var r=n("51c9"),a=n.n(r);a.a}},[["0988","common/runtime","common/vendor"]]]);
});
require('pages/pact/pact.js');
__wxRoute = 'pages/pact/pactVoteDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pact/pactVoteDetail.js';

define('pages/pact/pactVoteDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pact/pactVoteDetail"],{"6fb9":function(t,e,o){"use strict";var n=o("f449"),a=o.n(n);a.a},9151:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o("2f62");var n=o("0be9"),a={data:function(){return{labelList:"",voteList:"",voteId:this.$store.state.voteValue.voteId,btnStatus:0==this.$store.state.voteValue.voteStatus}},methods:{treatyIndex:function(){var t=this;(0,n.toTreIndex)().then(function(e){t.labelList=e[0]}),(0,n.isVote)(this.voteId).then(function(e){t.voteList=e,t.voteList.accRatio=Math.round(t.voteList.accRatio),t.voteList.noaccRatio=Math.round(t.voteList.noaccRatio)})},vote:function(e,o){o?t.showToast({icon:"none",title:"已投票"}):(console.log("投了票"," at pages\\pact\\pactVoteDetail.vue:70"),(0,n.sysVote)(this.voteId,e),this.treatyIndex())}},onLoad:function(){this.treatyIndex()},onReady:function(){t.setNavigationBarTitle({title:this.$store.state.voteValue.voteName})}};e.default=a}).call(this,o("6e42")["default"])},"961e":function(t,e,o){"use strict";o.r(e);var n=o("9151"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},da7d:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},e94d:function(t,e,o){"use strict";o.r(e);var n=o("da7d"),a=o("961e");for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);o("6fb9");var u=o("2877"),s=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,"e1c10514",null);e["default"]=s.exports},f449:function(t,e,o){}},[["f689","common/runtime","common/vendor"]]]);
});
require('pages/pact/pactVoteDetail.js');
__wxRoute = 'pages/daily/daily';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/daily/daily.js';

define('pages/daily/daily.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/daily/daily"],{"0c1a":function(t,n,i){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},e=[];i.d(n,"a",function(){return o}),i.d(n,"b",function(){return e})},"0c1c":function(t,n,i){"use strict";var o=i("711c"),e=i.n(o);e.a},2272:function(t,n,i){},3733:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;e(i("b47e")),e(i("996b"));var o=i("0be9");function e(t){return t&&t.__esModule?t:{default:t}}function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a={data:function(){return{dynInfo:"",commentInfo:"",bulletList:[],following:!1,did:0,uid:0,cid:0,like:0,beStatus:!1,commCount:"",commContent:"",commplaceholder:"為保證用戶隱私，只可以看自己的評論",addType:"",array:["取消關注","屏蔽用戶","舉報用戶"],pickIndex:0,likeNumber:0,showComment:!1,count:10,loading:1,flog:!0,time:"",disabled:!1,isLove:!1,animation:!1,height:"",doomm:!0}},methods:{findDyn:function(n){var i=this;(0,o.findAllDyn)(0).then(function(t){i.dynInfo=t,i.commCount=t[0].com_count,console.log(t," at pages\\daily\\daily.vue:167"),1==n&&(i.did=i.dynInfo[0].id,i.uid=i.dynInfo[0].uid),i.getAllBullet(),(0,o.likeCount)(i.did).then(function(t){i.like=t})}),setTimeout(function(){t.hideLoading()},800)},loadFindDyn:function(n){var i=this;(0,o.findAllDyn)(this.count).then(function(n){i.count+=n.length,i.dynInfo=i.dynInfo.concat(n),0==n.length&&t.showToast({icon:"none",title:"没有更多数据了"})})},goBack:function(){t.switchTab({url:"../main/main"})},publishDyn:function(){var n=this;(0,o.getImgTemp)().then(function(i){n.$store.commit("setImgTemp",i),console.log(n.$store.state.imgTemp," at pages\\daily\\daily.vue:206"),t.navigateTo({url:"publish"}),n.findDyn(1)})},userFollow:function(){var t=this;0==this.following?(0,o.concern)(1,this.uid).then(function(n){t.following=!0,t.findDyn(2)}):this.following=!1},bindPickerChange:function(t){var n=this;this.pickIndex=t.target.value,0==t.target.value&&(this.following=!1,console.log(this.uid," at pages\\daily\\daily.vue:228"),(0,o.concern)(2,this.uid).then(function(t){n.findDyn()}))},behaviour:function(){0==this.beStatus?this.beStatus=!0:1==this.beStatus&&(this.beStatus=!1)},userInfo:function(){t.navigateTo({url:"/pages/daily/userInfo?uid="+this.uid})},likePerson:function(n,i){var e=this;this.dynInfo[i].isLike=1,1==n?t.showToast({icon:"none",title:"不可以給自己點贊哦"}):(this.likeNumber++,t.showToast({icon:"none",title:"點贊了"+this.likeNumber+"次"}),(0,o.like)(this.did,1).then(function(t){(0,o.likeCount)(e.did).then(function(t){e.like=t,e.animation=!0})}),this.animation=!1)},hid:function(){this.flog||(this.showComment=!1)},showComm:function(){var t=this;1==this.showComment?this.showComment=!1:this.showComment=!0,(0,o.getComment)(this.did).then(function(n){t.commentInfo=n,console.log(t.commentInfo," at pages\\daily\\daily.vue:285")}),this.flog=!1},hidComm:function(){1==this.showComment?this.showComment=!1:this.showComment=!0},moveHandle:function(){},swiperChange:function(t){var n=this;this.following=!1,this.showComment=!1,this.addType="",this.commplaceholder="為保證用戶隱私，只可以看自己的評論",this.commentInfo="",this.likeNumber=0,this.isLove=!1,this.did=this.dynInfo[t.detail.current].id,this.uid=this.dynInfo[t.detail.current].uid,this.commCount=this.dynInfo[t.detail.current].com_count,(0,o.likeCount)(this.did).then(function(t){n.like=t}),this.getAllBullet();var i=this.dynInfo.length;t.detail.current+1==this.count&&(console.log("上拉"," at pages\\daily\\daily.vue:313"),this.loading=2,this.loadFindDyn(i)),0==t.detail.current&&this.findDyn(1)},addComm:function(){var t=this;this.disabled=!0,""!=this.commContent&&("reply"==this.addType?(console.log("刚刚是回复"," at pages\\daily\\daily.vue:328"),(0,o.reply)(this.cid,this.commContent).then(function(n){t.findDyn(2),t.addType="",t.commplaceholder="為保證用戶隱私，只可以看自己的評論",t.disabled=!1})):(console.log("刚刚是評論"," at pages\\daily\\daily.vue:338"),(0,o.addComment)(this.commContent,this.did).then(function(n){(0,o.getComment)(t.did).then(function(n){t.commentInfo=n,t.commContent="",t.addType="",t.commplaceholder="為保證用戶隱私，只可以看自己的評論",t.disabled=!1}),t.getAllBullet(),t.findDyn(2)})))},replyComm:function(n,i,o){o!=t.getStorageSync("USERS_KEY").id?(this.commplaceholder="@"+i,this.addType="reply",this.cid=n):t.showToast({icon:"none",title:"不能自己回復自己哦"})},getAllBullet:function(){var t=this;this.bulletList=[],(0,o.getBullet)(this.did).then(function(n){for(var o=n.content.length,e=0;e<o;e++)t.bulletList.push(new i(n.content[e],parseInt(Math.random()*(t.height-60+1)+60,10),Math.ceil(10*Math.random()),t.getRandomColor()))});var n=0,i=function t(i,o,e,a){s(this,t),this.text=i,this.top=o,this.time=e,this.color=a,this.display=!0,this.id=n++}},getRandomColor:function(){for(var t=[],n=0;n<3;++n){var i=Math.floor(256*Math.random()).toString(16);i=1==i.length?"0"+i:i,t.push(i)}return"#"+t.join("")},showDoomm:function(){1==this.doomm?this.doomm=!1:this.doomm=!0}},onLoad:function(){this.findDyn(1),t.showLoading({title:"加载中"}),t.getSystemInfo({success:function(t){this.height=t.windowHeight}})},onShow:function(){this.findDyn(1),t.showLoading({title:"加载中"})},onReachBottom:function(){console.log("onReachBottom"," at pages\\daily\\daily.vue:431")},onPullDownRefresh:function(){this.loadFindDyn(),setTimeout(function(){t.stopPullDownRefresh()},1e3)}};n.default=a}).call(this,i("6e42")["default"])},"528f":function(t,n,i){"use strict";i.r(n);var o=i("0c1a"),e=i("c4b0");for(var s in e)"default"!==s&&function(t){i.d(n,t,function(){return e[t]})}(s);i("0c1c"),i("993f");var a=i("2877"),l=Object(a["a"])(e["default"],o["a"],o["b"],!1,null,"70cb052d",null);n["default"]=l.exports},"711c":function(t,n,i){},"993f":function(t,n,i){"use strict";var o=i("2272"),e=i.n(o);e.a},c4b0:function(t,n,i){"use strict";i.r(n);var o=i("3733"),e=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(n,t,function(){return o[t]})}(s);n["default"]=e.a}},[["8fd3","common/runtime","common/vendor"]]]);
});
require('pages/daily/daily.js');
__wxRoute = 'pages/daily/publish';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/daily/publish.js';

define('pages/daily/publish.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/daily/publish"],{"6ab6":function(t,n,e){},"6b99":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},"883c":function(t,n,e){"use strict";e.r(n);var a=e("d4d8"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},"8dca":function(t,n,e){"use strict";var a=e("6ab6"),o=e.n(a);o.a},b784:function(t,n,e){"use strict";e.r(n);var a=e("6b99"),o=e("883c");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("8dca");var u=e("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,"1e1bdc2c",null);n["default"]=c.exports},d4d8:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("0be9"),o={data:function(){return{imgTemp:this.$store.state.imgTemp,dynContent:"",location:"所在位置",showType:"誰可以看",remain:"提醒誰看",flog:!1}},onNavigationBarButtonTap:function(){var n=this;this.flog||(this.flog=!0,(0,a.upload)(this.imgTemp).then(function(e){""!=e&&(0,a.createDyn)(n.dynContent,e).then(function(e){e&&t.navigateTo({url:"daily"}),n.flog=!1})}))}};n.default=o}).call(this,e("6e42")["default"])}},[["a251","common/runtime","common/vendor"]]]);
});
require('pages/daily/publish.js');
__wxRoute = 'pages/daily/userInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/daily/userInfo.js';

define('pages/daily/userInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/daily/userInfo"],{1087:function(n,t,e){"use strict";var u=e("b4b1"),o=e.n(u);o.a},"1ddb":function(n,t,e){"use strict";e.r(t);var u=e("796b"),o=e("4a40");for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);e("1087");var i=e("2877"),f=Object(i["a"])(o["default"],u["a"],u["b"],!1,null,"392563ba",null);t["default"]=f.exports},4452:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;e("2f62");var u=e("0be9"),o={data:function(){return{userInfo:"",dynInfo:"",statusInfo:"",uid:""}},methods:{getUserInfo:function(){var n=this;(0,u.getInfo)(this.uid).then(function(t){n.userInfo=t}),(0,u.getDyn)(this.uid).then(function(t){n.dynInfo=t.resp})},preview:function(t,e){var u=[];"por"==t&&(u=[this.userInfo.portrait]),"dyn"==t&&(u=this.dynInfo),n.previewImage({current:e,urls:u})}},onLoad:function(n){this.uid=n.uid},onShow:function(){this.getUserInfo()}};t.default=o}).call(this,e("6e42")["default"])},"4a40":function(n,t,e){"use strict";e.r(t);var u=e("4452"),o=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=o.a},"796b":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},b4b1:function(n,t,e){}},[["260b","common/runtime","common/vendor"]]]);
});
require('pages/daily/userInfo.js');
__wxRoute = 'pages/store/store';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/store/store.js';

define('pages/store/store.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/store/store"],{"3b0a":function(t,o,e){"use strict";var i=function(){var t=this,o=t.$createElement;t._self._c},n=[];e.d(o,"a",function(){return i}),e.d(o,"b",function(){return n})},"4ab3":function(t,o,e){"use strict";e.r(o);var i=e("a98d"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(o,t,function(){return i[t]})}(s);o["default"]=n.a},"574f":function(t,o,e){"use strict";e.r(o);var i=e("3b0a"),n=e("4ab3");for(var s in n)"default"!==s&&function(t){e.d(o,t,function(){return n[t]})}(s);e("57ae");var c=e("2877"),a=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"2284d3b2",null);o["default"]=a.exports},"57ae":function(t,o,e){"use strict";var i=e("8a1c"),n=e.n(i);n.a},"8a1c":function(t,o,e){},a98d:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e("0be9"),n={data:function(){return{topicList:"",likeCount:"",commCont:0,showComment:!1,commContent:"",commplaceholder:"請輸入評論內容",likeimg:"../../static/img/topic/like.svg",unlikeimg:"../../static/img/topic/fabulous.svg",islike:!1,commList:"",replyList:"",addType:"",topicId:"",topicRid:"",commIndex:"",height:"",pageSize:10,loadMoreText:"上拉加載更多",showLoadMore:!1}},methods:{toUser:function(o){t.navigateTo({url:"/pages/daily/userInfo?uid="+o})},publishDyn:function(){t.navigateTo({url:"../publish/publish?tid=2"})},getTopicList:function(){var t=this;(0,i.checkTopicList)(2,0).then(function(o){t.topicList=o,console.log(o," at pages\\store\\store.vue:122")})},usTopicLike:function(t,o){var e=this;1!==this.topicList[o].isLike&&(this.topicList[o].isLike=1,this.topicList[o].likeCount+=1,console.log(this.topicList[1].isLike," at pages\\store\\store.vue:130"),(0,i.topicLike)(t).then(function(o){(0,i.getLikeNumber)(t).then(function(t){console.log(t," at pages\\store\\store.vue:133"),e.likeCount=t.likeCount})}),console.log(o," at pages\\store\\store.vue:137"))},showComm:function(t,o){var e=this;1==this.showComment?this.showComment=!1:this.showComment=!0,(0,i.getAllComment)(t).then(function(t){e.commList=t,e.commCont=t.length,console.log(t," at pages\\store\\store.vue:148")}),this.topicId=t,this.commIndex=o},hidComm:function(){1==this.showComment?this.showComment=!1:this.showComment=!0,this.commContent="",this.commList="",this.commCont=0},addComm:function(){var o=this;""==this.commContent?t.showToast({icon:"none",title:"请输入评论"}):"reply"==this.addType?(0,i.topicReply)(this.topicRid,this.commContent).then(function(e){console.log("reply"," at pages\\store\\store.vue:167"),(0,i.getAllComment)(o.topicId).then(function(e){o.commList=e,console.log(o.commList," at pages\\store\\store.vue:170"),o.commCont=e.length,o.addType="",o.commContent="",t.showToast({icon:"none",title:"回復成功"}),o.commplaceholder="請輸入評論內容",o.topicList[o.commIndex].commCount+=1})}):((0,i.topicComment)(this.topicId,this.commContent).then(function(t){(0,i.getAllComment)(o.topicId).then(function(t){o.commList=t,o.commCont=t.length})}),t.showToast({icon:"none",title:"回復成功"}),this.commContent="",this.addType="",this.commplaceholder="請輸入評論內容",this.topicList[this.commIndex].commCount+=1)},replyComm:function(o,e,i){e!=t.getStorageSync("USERS_KEY").id?(this.commplaceholder="@"+o,this.addType="reply",this.topicRid=i):t.showToast({icon:"none",title:"不能自己回復自己哦"})}},onPullDownRefresh:function(){console.log("onPullDownRefresh"," at pages\\store\\store.vue:216"),setTimeout(function(){t.startPullDownRefresh()},300)},onReachBottom:function(){var t=this;(0,i.checkTopicList)(2,this.pageSize).then(function(o){if(t.pageSize+=10,!o)return t.showLoadMore=!0,void(t.loadMoreText="暫無更多數據!");t.showLoadMore=!0,t.topicList=t.topicList.concat(o)})},onLoad:function(){this.getTopicList(),t.getSystemInfo({success:function(t){console.log(t.windowHeight," at pages\\store\\store.vue:238"),this.height=t.windowHeight}})},onShow:function(){this.getTopicList()}};o.default=n}).call(this,e("6e42")["default"])}},[["677b","common/runtime","common/vendor"]]]);
});
require('pages/store/store.js');
__wxRoute = 'pages/game/game';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/game/game.js';

define('pages/game/game.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/game/game"],{"49f7":function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e("0be9"),n={data:function(){return{topicList:"",likeCount:"",commCont:0,showComment:!1,commContent:"",commplaceholder:"請輸入評論內容",likeimg:"../../static/img/topic/like.svg",unlikeimg:"../../static/img/topic/fabulous.svg",islike:!1,commList:"",replyList:"",addType:"",topicId:"",topicRid:"",commIndex:"",height:"",pageSize:10,loadMoreText:"上拉加載更多",showLoadMore:!1}},methods:{toUser:function(o){t.navigateTo({url:"/pages/daily/userInfo?uid="+o})},publishDyn:function(){t.navigateTo({url:"../publish/publish?tid=3"})},getTopicList:function(){var t=this;(0,i.checkTopicList)(3,0).then(function(o){t.topicList=o,console.log(o," at pages\\game\\game.vue:122")})},usTopicLike:function(t,o){var e=this;1!==this.topicList[o].isLike&&(this.topicList[o].isLike=1,this.topicList[o].likeCount+=1,(0,i.topicLike)(t).then(function(o){(0,i.getLikeNumber)(t).then(function(t){console.log(t," at pages\\game\\game.vue:132"),e.likeCount=t.likeCount})}),console.log(o," at pages\\game\\game.vue:136"))},showComm:function(t,o){var e=this;1==this.showComment?this.showComment=!1:this.showComment=!0,(0,i.getAllComment)(t).then(function(t){e.commList=t,e.commCont=t.length,console.log(t," at pages\\game\\game.vue:147")}),this.topicId=t,this.commIndex=o},hidComm:function(){1==this.showComment?this.showComment=!1:this.showComment=!0,this.commContent="",this.commList="",this.commCont=0},addComm:function(){var o=this;""==this.commContent?t.showToast({icon:"none",title:"请输入评论"}):"reply"==this.addType?(0,i.topicReply)(this.topicRid,this.commContent).then(function(e){console.log("reply"," at pages\\game\\game.vue:166"),(0,i.getAllComment)(o.topicId).then(function(e){o.commList=e,console.log(o.commList," at pages\\game\\game.vue:169"),o.commCont=e.length,o.addType="",o.commContent="",t.showToast({icon:"none",title:"回復成功"}),o.commplaceholder="請輸入評論內容",o.topicList[o.commIndex].commCount+=1})}):((0,i.topicComment)(this.topicId,this.commContent).then(function(t){(0,i.getAllComment)(o.topicId).then(function(t){o.commList=t,o.commCont=t.length})}),t.showToast({icon:"none",title:"回復成功"}),this.commContent="",this.addType="",this.commplaceholder="請輸入評論內容",this.topicList[this.commIndex].commCount+=1)},replyComm:function(o,e,i){e!=t.getStorageSync("USERS_KEY").id?(this.commplaceholder="@"+o,this.addType="reply",this.topicRid=i):t.showToast({icon:"none",title:"不能自己回復自己哦"})}},onPullDownRefresh:function(){console.log("onPullDownRefresh"," at pages\\game\\game.vue:215"),setTimeout(function(){t.startPullDownRefresh()},300)},onReachBottom:function(){var t=this;(0,i.checkTopicList)(3,this.pageSize).then(function(o){if(t.pageSize+=10,!o)return t.showLoadMore=!0,void(t.loadMoreText="暫無更多數據!");t.showLoadMore=!0,t.topicList=t.topicList.concat(o)})},onLoad:function(){this.getTopicList(),t.getSystemInfo({success:function(t){console.log(t.windowHeight," at pages\\game\\game.vue:237"),this.height=t.windowHeight}})},onShow:function(){this.getTopicList()}};o.default=n}).call(this,e("6e42")["default"])},"57fb":function(t,o,e){"use strict";e.r(o);var i=e("49f7"),n=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(o,t,function(){return i[t]})}(c);o["default"]=n.a},c412:function(t,o,e){"use strict";e.r(o);var i=e("efc6"),n=e("57fb");for(var c in n)"default"!==c&&function(t){e.d(o,t,function(){return n[t]})}(c);e("ee4f");var s=e("2877"),m=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"17e103f4",null);o["default"]=m.exports},d8ac:function(t,o,e){},ee4f:function(t,o,e){"use strict";var i=e("d8ac"),n=e.n(i);n.a},efc6:function(t,o,e){"use strict";var i=function(){var t=this,o=t.$createElement;t._self._c},n=[];e.d(o,"a",function(){return i}),e.d(o,"b",function(){return n})}},[["9406","common/runtime","common/vendor"]]]);
});
require('pages/game/game.js');
__wxRoute = 'pages/nearby/nearby';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/nearby/nearby.js';

define('pages/nearby/nearby.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/nearby/nearby"],{"4fd8":function(t,o,e){"use strict";e.r(o);var n=e("b834"),i=e("6906");for(var s in i)"default"!==s&&function(t){e.d(o,t,function(){return i[t]})}(s);e("a74f");var c=e("2877"),a=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,"a9758abe",null);o["default"]=a.exports},"5acd":function(t,o,e){},6906:function(t,o,e){"use strict";e.r(o);var n=e("a08b"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(o,t,function(){return n[t]})}(s);o["default"]=i.a},a08b:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=e("0be9"),i={data:function(){return{topicList:"",likeCount:"",commCont:0,showComment:!1,commContent:"",commplaceholder:"請輸入評論內容",likeimg:"../../static/img/topic/like.svg",unlikeimg:"../../static/img/topic/fabulous.svg",islike:!1,commList:"",replyList:"",addType:"",topicId:"",topicRid:"",commIndex:"",height:"",pageSize:10,loadMoreText:"上拉加載更多",showLoadMore:!1}},methods:{toUser:function(o){t.navigateTo({url:"/pages/daily/userInfo?uid="+o})},publishDyn:function(){t.navigateTo({url:"../publish/publish?tid=1"})},getTopicList:function(){var t=this;(0,n.checkTopicList)(1,0).then(function(o){t.topicList=o,console.log(o," at pages\\nearby\\nearby.vue:122")})},usTopicLike:function(t,o){var e=this;1!==this.topicList[o].isLike&&(this.topicList[o].isLike=1,this.topicList[o].likeCount+=1,console.log(this.topicList[1].isLike," at pages\\nearby\\nearby.vue:130"),(0,n.topicLike)(t).then(function(o){(0,n.getLikeNumber)(t).then(function(t){console.log(t," at pages\\nearby\\nearby.vue:133"),e.likeCount=t.likeCount})}),console.log(o," at pages\\nearby\\nearby.vue:137"))},showComm:function(t,o){var e=this;1==this.showComment?this.showComment=!1:this.showComment=!0,(0,n.getAllComment)(t).then(function(t){e.commList=t,e.commCont=t.length,e.replyList=t.reply,console.log(t," at pages\\nearby\\nearby.vue:149")}),this.topicId=t,this.commIndex=o},hidComm:function(){1==this.showComment?this.showComment=!1:this.showComment=!0,this.commContent="",this.commList="",this.commCont=0},addComm:function(){var o=this;""==this.commContent?t.showToast({icon:"none",title:"請輸入評論"}):"reply"==this.addType?(0,n.topicReply)(this.topicRid,this.commContent).then(function(e){console.log("reply"," at pages\\nearby\\nearby.vue:169"),(0,n.getAllComment)(o.topicId).then(function(e){o.commList=e,console.log(o.commList," at pages\\nearby\\nearby.vue:172"),o.commCont=e.length,o.addType="",o.commContent="",t.showToast({icon:"none",title:"回復成功"}),o.commplaceholder="請輸入評論內容",o.topicList[o.commIndex].commCount+=1})}):((0,n.topicComment)(this.topicId,this.commContent).then(function(t){(0,n.getAllComment)(o.topicId).then(function(t){o.commList=t,o.commCont=t.length})}),t.showToast({icon:"none",title:"評論成功"}),this.commContent="",this.addType="",this.commplaceholder="請輸入評論內容",this.topicList[this.commIndex].commCount+=1)},replyComm:function(o,e,n){e!=t.getStorageSync("USERS_KEY").id?(this.commplaceholder="@"+o,this.addType="reply",this.topicRid=n):t.showToast({icon:"none",title:"不能自己回復自己哦"})}},onPullDownRefresh:function(){console.log("onPullDownRefresh"," at pages\\nearby\\nearby.vue:217"),setTimeout(function(){t.startPullDownRefresh()},300)},onReachBottom:function(){var t=this;(0,n.checkTopicList)(1,this.pageSize).then(function(o){if(t.pageSize+=10,!o)return t.showLoadMore=!0,void(t.loadMoreText="暫無更多數據!");t.showLoadMore=!0,t.topicList=t.topicList.concat(o)})},onLoad:function(){this.getTopicList(),t.getSystemInfo({success:function(o){console.log(o.windowHeight," at pages\\nearby\\nearby.vue:238"),this.height=o.windowHeight;var e=t.createSelectorQuery().select(".page");e.boundingClientRect(function(t){console.log(t," at pages\\nearby\\nearby.vue:242")})}})},onReady:function(){console.log(this.$refs.page," at pages\\nearby\\nearby.vue:250")},onShow:function(){this.getTopicList()}};o.default=i}).call(this,e("6e42")["default"])},a74f:function(t,o,e){"use strict";var n=e("5acd"),i=e.n(n);i.a},b834:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement;t._self._c},i=[];e.d(o,"a",function(){return n}),e.d(o,"b",function(){return i})}},[["6c33","common/runtime","common/vendor"]]]);
});
require('pages/nearby/nearby.js');
__wxRoute = 'pages/publish/publish';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/publish/publish.js';

define('pages/publish/publish.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/publish/publish"],{"03c3":function(t,n,e){"use strict";e.r(n);var i=e("4ec7"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);n["default"]=o.a},"186e":function(t,n,e){"use strict";var i=e("269b"),o=e.n(i);o.a},"269b":function(t,n,e){},"2de6":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},"4ec7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("0be9"),o={data:function(){return{tid:"",topicContent:"",title:""}},onNavigationBarButtonTap:function(){var n;""!=this.topicContent?(t.getLocation({type:"wgs84",geocode:!0,success:function(t){n=t.address},fail:function(t){console.log(t," at pages\\publish\\publish.vue:37")}}),(0,i.createTopic)(this.topicContent,n,this.tid).then(function(n){t.showToast({icon:"none",title:"发布成功",success:function(){setTimeout(function(){t.navigateBack()},800)}})})):t.showToast({icon:"none",title:"請輸入發佈內容"})},onLoad:function(t){switch(this.tid=JSON.parse(t.tid),this.tid){case 1:this.title="#星球定位社交";break;case 2:this.title="#星球特供商城";break;case 3:this.title="#星球小遊戲";break;case 4:this.title="#點對點通訊";break}}};n.default=o}).call(this,e("6e42")["default"])},"855d":function(t,n,e){"use strict";e.r(n);var i=e("2de6"),o=e("03c3");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("186e");var a=e("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"4b653ba4",null);n["default"]=u.exports}},[["32c8","common/runtime","common/vendor"]]]);
});
require('pages/publish/publish.js');
__wxRoute = 'pages/entertain/entertain';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/entertain/entertain.js';

define('pages/entertain/entertain.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/entertain/entertain"],{"13d7":function(t,n,e){"use strict";e.r(n);var a=e("ef40"),r=e("a21e");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("3820");var o=e("2877"),u=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"a6403660",null);n["default"]=u.exports},3820:function(t,n,e){"use strict";var a=e("9ac1"),r=e.n(a);r.a},"6f13":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("0be9"),r={data:function(){return{location:"",barInfo:"",itemStr:"",picture:""}},methods:{getBarListData:function(){var t=this;(0,a.getBarList)("广州市").then(function(n){t.barInfo=n,console.log(n," at pages\\entertain\\entertain.vue:41")})},navigatorParam:function(n){console.log(n," at pages\\entertain\\entertain.vue:46"),t.navigateTo({url:"entertainDetail?id="+n})},split:function(t){return t.split(",")[0]}},onLoad:function(){this.getBarListData()}};n.default=r}).call(this,e("6e42")["default"])},"9ac1":function(t,n,e){},a21e:function(t,n,e){"use strict";e.r(n);var a=e("6f13"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=r.a},ef40:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})}},[["793d","common/runtime","common/vendor"]]]);
});
require('pages/entertain/entertain.js');
__wxRoute = 'pages/entertain/entertainDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/entertain/entertainDetail.js';

define('pages/entertain/entertainDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/entertain/entertainDetail"],{"30f9":function(t,e,n){"use strict";n.r(e);var i=n("f5f2"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},8283:function(t,e,n){"use strict";var i=n("d642"),a=n.n(i);a.a},"98f8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},d642:function(t,e,n){},eef9:function(t,e,n){"use strict";n.r(e);var i=n("98f8"),a=n("30f9");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("8283");var u=n("2877"),r=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"425bd3f4",null);e["default"]=r.exports},f5f2:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("0be9"),a={data:function(){return{barDetail:"",id:"",picture:"",geocodes:""}},methods:{openLocation:function(){t.getLocation({type:"wgs84",success:function(t){console.log("当前位置的经度："+t.longitude," at pages\\entertain\\entertainDetail.vue:45"),console.log("当前位置的纬度："+t.latitude," at pages\\entertain\\entertainDetail.vue:46")}})},getwelfareDetail:function(){var t=this;(0,i.getBarInfo)(this.id).then(function(e){t.barDetail=e,t.picture=e.picture.split(","),console.log(t.picture," at pages\\entertain\\entertainDetail.vue:66")})}},onLoad:function(t){this.id=t.id,console.log(this.id," at pages\\entertain\\entertainDetail.vue:73"),this.getwelfareDetail()}};e.default=a}).call(this,n("6e42")["default"])}},[["1868","common/runtime","common/vendor"]]]);
});
require('pages/entertain/entertainDetail.js');
__wxRoute = 'pages/entertain/entertainApplication';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/entertain/entertainApplication.js';

define('pages/entertain/entertainApplication.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/entertain/entertainApplication"],{"684f":function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a("0be9"),o=a("e7dc"),r=function(){return a.e("components/m-input").then(a.bind(null,"edc7"))},i={components:{mInput:r},data:function(){return{barInfo:{name:"",phone:"",location:"",intro:"",username:"",userphone:"",logo:""},isUpload:!1,avatar:"../../static/img/user/upload.svg"}},methods:{upLogoImg:function(){var n=this;(0,e.getImgTemp)().then(function(t){n.avatar=t,(0,e.upload)(n.avatar).then(function(t){n.isUpload=!0,n.barInfo.logo=t})})},commitVer:function(){(0,o.barValidate)(this.barInfo,this.isUpload)&&n.navigateTo({url:"entertainUpload?barInfo="+JSON.stringify(this.barInfo)})}}};t.default=i}).call(this,a("6e42")["default"])},8515:function(n,t,a){"use strict";a.r(t);var e=a("684f"),o=a.n(e);for(var r in e)"default"!==r&&function(n){a.d(t,n,function(){return e[n]})}(r);t["default"]=o.a},9152:function(n,t,a){},"991c":function(n,t,a){"use strict";a.r(t);var e=a("fa8d"),o=a("8515");for(var r in o)"default"!==r&&function(n){a.d(t,n,function(){return o[n]})}(r);a("a906");var i=a("2877"),u=Object(i["a"])(o["default"],e["a"],e["b"],!1,null,"1b61bf40",null);t["default"]=u.exports},a906:function(n,t,a){"use strict";var e=a("9152"),o=a.n(e);o.a},fa8d:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},o=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return o})}},[["db0f","common/runtime","common/vendor"]]]);
});
require('pages/entertain/entertainApplication.js');
__wxRoute = 'pages/entertain/entertainUpload';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/entertain/entertainUpload.js';

define('pages/entertain/entertainUpload.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/entertain/entertainUpload"],{"056f":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i})},"0995":function(n,t,e){"use strict";e.r(t);var a=e("056f"),i=e("3499");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);e("83e1");var u=e("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"1fe6cd87",null);t["default"]=r.exports},3499:function(n,t,e){"use strict";e.r(t);var a=e("66e3"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=i.a},"66e3":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("0be9"),i={data:function(){return{barImg:"../../static/img/main/entertain/en-upload.svg",licImg1:"../../static/img/main/entertain/en-upload.svg",licImg2:"../../static/img/main/entertain/en-upload.svg",licImg3:"../../static/img/main/entertain/en-upload.svg",licImg4:"../../static/img/main/entertain/en-upload.svg",barInfo:{}}},methods:{uploadImg:function(n){var t=this;(0,a.getImgTemp)().then(function(e){1==n&&(0,a.upload)(e).then(function(n){t.barInfo.license=n,t.barImg=n}),2==n&&(0,a.upload)(e).then(function(n){t.barInfo.picture=n,t.licImg1=n}),3==n&&(0,a.upload)(e).then(function(n){t.barInfo.picture1=n,t.licImg2=n}),4==n&&(0,a.upload)(e).then(function(n){t.barInfo.picture2=n,t.licImg3=n}),5==n&&(0,a.upload)(e).then(function(n){t.barInfo.picture3=n,t.licImg4=n})})}},onNavigationBarButtonTap:function(){"../../static/img/main/entertain/en-upload.svg"==this.barImg?n.showToast({icon:"none",title:"請上傳環境相圖片"}):"../../static/img/main/entertain/en-upload.svg"==this.licImg?n.showToast({icon:"none",title:"請上傳營業執照圖片"}):(console.log(this.barInfo," at pages\\entertain\\entertainUpload.vue:88"),(0,a.setBar)(this.barInfo).then(function(t){n.showToast({icon:"none",title:"上传成功,請等待審核"}),setTimeout(function(){n.navigateTo({url:"entertain"})},2e3)}))},onLoad:function(n){this.barInfo=JSON.parse(n.barInfo),console.log(this.barInfo," at pages\\entertain\\entertainUpload.vue:106")}};t.default=i}).call(this,e("6e42")["default"])},"83e1":function(n,t,e){"use strict";var a=e("cd97"),i=e.n(a);i.a},cd97:function(n,t,e){}},[["3c06","common/runtime","common/vendor"]]]);
});
require('pages/entertain/entertainUpload.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"0583":function(t,e,n){},"2f54":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),a=n("0be9");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={data:function(){return{userInfo:"",socialInfo:"",userId:t.getStorageSync("USERS_KEY").id,avatar:"../../static/img/user/upload.svg",settings:[{src:"../../static/img/user/relNameAuth.svg",url:"../auth/auth",label:"實名認證",expla:"PAN幣綫上交易所交易需要實名認證"},{src:"../../static/img/user/invCode.svg",url:"../invite/invite",label:"我的邀請碼",expla:"獲得PAN幣和原力"},{src:"../../static/img/user/assetLedger.svg",url:"../ledger/asset",label:"資產賬本",expla:""},{src:"../../static/img/user/focusLedger.svg",url:"../ledger/focus",label:"原力賬本",expla:""},{src:"../../static/img/user/plantBase.svg",url:"../base/base",label:"招募節點",expla:""},{src:"../../static/img/user/option.svg",url:"../setting/setting",label:"設置",expla:""}]}},computed:o({},(0,r.mapState)(["hasLogin","forcedLogin"])),methods:o({},(0,r.mapMutations)(["logout"]),{bindLogout:function(){var e=this;t.showModal({title:"",content:"點擊確定後退出",success:function(n){n.confirm&&(e.logout(),t.clearStorageSync("USERS_KEY"),t.reLaunch({url:"../login/login"}))}})},getUserInfo:function(){var t=this;(0,a.findByID)().then(function(e){t.userInfo=e,t.avatar=e.portrait,null!=t.userInfo.signature&&""!=t.userInfo.signature||(t.userInfo.signature="這家夥很懶，還沒有簽名")})},getSocialInfo:function(){var t=this;(0,a.getAllSocialInfo)().then(function(e){t.socialInfo=e})},uploadAvatar:function(){var t=this;(0,a.upPicture)(this.userId).then(function(e){t.avatar=e.id})},touserInfo:function(e){t.navigateTo({url:"/pages/daily/userInfo?uid="+e})}}),onShow:function(){this.getUserInfo(),this.getSocialInfo()},godynm:function(){}};e.default=i}).call(this,n("6e42")["default"])},"2ff3":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"731f":function(t,e,n){"use strict";n.r(e);var r=n("2f54"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},cb96:function(t,e,n){"use strict";n.r(e);var r=n("2ff3"),a=n("731f");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("feed");var u=n("2877"),i=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,"539ea977",null);e["default"]=i.exports},feed:function(t,e,n){"use strict";var r=n("0583"),a=n.n(r);a.a}},[["0877","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/user/update';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/update.js';

define('pages/user/update.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/update"],{4087:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("0be9"),c=t("e7dc"),r=function(){return t.e("components/m-input").then(t.bind(null,"edc7"))},u=function(){return t.e("components/logo").then(t.bind(null,"98cb"))},i={components:{mInput:r,logo:u},data:function(){return{accArray:["1","0","0.5","其它"],accIndex:0,raceArray:["亚洲人","黑人","拉美人","中东人","混血","白人","其它"],raceIndex:0,userId:e.getStorageSync("USERS_KEY").id,userInfo:{age:"",name:"",signature:"",site:"",stature:"",weight:"",acctType:"",race:""},avatar:"../../static/img/user/upload.svg"}},methods:{bindAcc:function(e){this.accIndex=e.target.value},bindRace:function(e){this.raceIndex=e.target.value},uploadAvatar:function(){var e=this;(0,a.upPicture)(this.userId).then(function(n){e.avatar=n.id})},update:function(){(0,c.userValidate)(this.userInfo)&&(this.userInfo.acctType=this.accArray[this.accIndex],this.userInfo.race=this.raceArray[this.raceIndex],(0,a.upInfo)(this.userInfo,this.userId))},findInfo:function(){var e=this;(0,a.findByID)().then(function(n){e.userInfo=n,"亚洲人"==n.race&&(e.raceIndex=0),"黑人"==n.race&&(e.raceIndex=1),"拉美人"==n.race&&(e.raceIndex=2),"中东人"==n.race&&(e.raceIndex=3),"混血"==n.race&&(e.raceIndex=4),"白人"==n.race&&(e.raceIndex=5),"其它"==n.race&&(e.raceIndex=6),"1"==n.acctType&&(e.accIndex=0),"0"==n.acctType&&(e.accIndex=1),"0.5"==n.acctType&&(e.accIndex=2),"其它"==n.acctType&&(e.accIndex=3),null!=n.portrait&&""!=n.portrait&&(e.avatar=n.portrait),e.userInfo.age=""+n.age,e.userInfo.stature=""+n.stature,e.userInfo.weight=""+n.weight})}},onShow:function(){e.getStorageSync("USERS_KEY").token&&this.findInfo()}};n.default=i}).call(this,t("6e42")["default"])},"55d9":function(e,n,t){"use strict";var a=t("f902"),c=t.n(a);c.a},"5c55":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return c})},b574:function(e,n,t){"use strict";t.r(n);var a=t("5c55"),c=t("ee2b");for(var r in c)"default"!==r&&function(e){t.d(n,e,function(){return c[e]})}(r);t("55d9");var u=t("2877"),i=Object(u["a"])(c["default"],a["a"],a["b"],!1,null,null,null);n["default"]=i.exports},ee2b:function(e,n,t){"use strict";t.r(n);var a=t("4087"),c=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);n["default"]=c.a},f902:function(e,n,t){}},[["3d8b","common/runtime","common/vendor"]]]);
});
require('pages/user/update.js');
__wxRoute = 'pages/msg/msg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/msg.js';

define('pages/msg/msg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/msg"],{2938:function(t,o,i){},5601:function(t,o,i){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},n=[];i.d(o,"a",function(){return e}),i.d(o,"b",function(){return n})},"655a":function(t,o,i){"use strict";i.r(o);var e=i("ae18"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(o,t,function(){return e[t]})}(s);o["default"]=n.a},a984:function(t,o,i){"use strict";var e=i("2938"),n=i.n(e);n.a},ae18:function(t,o,i){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=i("0be9"),n={data:function(){return{topicList:"",likeCount:"",commCont:0,showComment:!1,commContent:"",commplaceholder:"請輸入評論內容",likeimg:"../../static/img/topic/like.svg",unlikeimg:"../../static/img/topic/fabulous.svg",islike:!1,commList:"",replyList:"",addType:"",topicId:"",topicRid:"",commIndex:"",height:"",pageSize:10,loadMoreText:"上拉加載更多",showLoadMore:!1}},methods:{toUser:function(o){t.navigateTo({url:"/pages/daily/userInfo?uid="+o})},publishDyn:function(){t.navigateTo({url:"../publish/publish?tid=4"})},getTopicList:function(){var t=this;(0,e.checkTopicList)(4,0).then(function(o){t.topicList=o,console.log(o," at pages\\msg\\msg.vue:124")})},usTopicLike:function(t,o){var i=this;1!==this.topicList[o].isLike&&(this.topicList[o].isLike=1,this.topicList[o].likeCount+=1,console.log(this.topicList[1].isLike," at pages\\msg\\msg.vue:132"),(0,e.topicLike)(t).then(function(o){(0,e.getLikeNumber)(t).then(function(t){console.log(t," at pages\\msg\\msg.vue:135"),i.likeCount=t.likeCount})}),console.log(o," at pages\\msg\\msg.vue:139"))},showComm:function(t,o){var i=this;1==this.showComment?this.showComment=!1:this.showComment=!0,(0,e.getAllComment)(t).then(function(t){i.commList=t,i.commCont=t.length,console.log(t," at pages\\msg\\msg.vue:150")}),this.topicId=t,this.commIndex=o},hidComm:function(){1==this.showComment?this.showComment=!1:this.showComment=!0,this.commContent="",this.commList="",this.commCont=0},addComm:function(){var o=this;""==this.commContent?t.showToast({icon:"none",title:"请输入评论"}):"reply"==this.addType?(0,e.topicReply)(this.topicRid,this.commContent).then(function(i){console.log("reply"," at pages\\msg\\msg.vue:169"),(0,e.getAllComment)(o.topicId).then(function(i){o.commList=i,console.log(o.commList," at pages\\msg\\msg.vue:172"),o.commCont=i.length,o.addType="",o.commContent="",t.showToast({icon:"none",title:"回復成功"}),o.commplaceholder="請輸入評論內容",o.topicList[o.commIndex].commCount+=1})}):((0,e.topicComment)(this.topicId,this.commContent).then(function(t){(0,e.getAllComment)(o.topicId).then(function(t){o.commList=t,o.commCont=t.length})}),t.showToast({icon:"none",title:"評論成功"}),this.commContent="",this.addType="",this.commplaceholder="請輸入評論內容",this.topicList[this.commIndex].commCount+=1)},replyComm:function(o,i,e){i!=t.getStorageSync("USERS_KEY").id?(this.commplaceholder="@"+o,this.addType="reply",this.topicRid=e):t.showToast({icon:"none",title:"不能自己回復自己哦"})}},onPullDownRefresh:function(){console.log("onPullDownRefresh"," at pages\\msg\\msg.vue:218"),setTimeout(function(){t.startPullDownRefresh()},300)},onReachBottom:function(){var t=this;(0,e.checkTopicList)(4,this.pageSize).then(function(o){if(t.pageSize+=10,!o)return t.showLoadMore=!0,void(t.loadMoreText="暫無更多數據!");t.showLoadMore=!0,t.topicList=t.topicList.concat(o)})},onLoad:function(){this.getTopicList(),t.getSystemInfo({success:function(t){console.log(t.windowHeight," at pages\\msg\\msg.vue:240"),this.height=t.windowHeight}})},onShow:function(){this.getTopicList()}};o.default=n}).call(this,i("6e42")["default"])},dd1d:function(t,o,i){"use strict";i.r(o);var e=i("5601"),n=i("655a");for(var s in n)"default"!==s&&function(t){i.d(o,t,function(){return n[t]})}(s);i("a984");var c=i("2877"),m=Object(c["a"])(n["default"],e["a"],e["b"],!1,null,"5af6e2ae",null);o["default"]=m.exports}},[["9521","common/runtime","common/vendor"]]]);
});
require('pages/msg/msg.js');
__wxRoute = 'pages/pan/pan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pan/pan.js';

define('pages/pan/pan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pan/pan"],{3301:function(n,t,a){},3926:function(n,t,a){"use strict";var e=a("3301"),o=a.n(e);o.a},"5c57":function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a("0be9"),o=function(){return a.e("components/m-icon/m-icon").then(a.bind(null,"2702"))},i={data:function(){return{propInfo:"",isHidden:this.$store.state.isHidden,changColor:"#EFEFF4",data1:"+0.91%",data2:"0.082",data3:"89,893,708",noBind:"暫未綁定",Bind:"已綁定",panVlaue:"198,878",donateValue:"10",rmb:"",red:!1}},components:{mIcon:o},methods:{assetHidden:function(){0==this.isHidden?(this.changColor="#9B9B9B",this.isHidden=!0,n.setStorageSync("ASSET_KEY",this.isHidden)):(this.changColor="#EFEFF4",this.isHidden=!1,n.setStorageSync("ASSET_KEY",this.isHidden))},getMyIndex:function(){var n=this;(0,e.getIndex)().then(function(t){n.propInfo=t,n.rmb=n.propInfo.balance*n.data2})},add:function(){this.donateValue++},sub:function(){this.donateValue<=0?n.showToast({icon:"none",title:"不可以捐贈少於1個"}):this.donateValue--},donatePan:function(){var t=this;this.donateValue<=0?n.showToast({icon:"none",title:"不可以捐贈少於1個"}):(0,e.donate)(this.donateValue).then(function(n){t.getMyIndex()})},getChang:function(){var n=this;(0,e.getChange_24h)().then(function(t){console.log(t.data[0]," at pages\\pan\\pan.vue:154"),n.data1=t.data[0].change_24h,console.log(n.data1," at pages\\pan\\pan.vue:156"),n.data1>0?n.data1="+"+n.data1:(n.red=!0,n.data1=n.data1),n.data3=t.data[0].volume_24h,n.data2=t.data[0].current})},toIXX:function(){n.navigateTo({url:"ixx"})}},onLoad:function(){this.getMyIndex(),this.getChang()},onShow:function(){this.getMyIndex()}};t.default=i}).call(this,a("6e42")["default"])},"6f85":function(n,t,a){"use strict";a.r(t);var e=a("97f3"),o=a("a8dd");for(var i in o)"default"!==i&&function(n){a.d(t,n,function(){return o[n]})}(i);a("3926");var d=a("2877"),u=Object(d["a"])(o["default"],e["a"],e["b"],!1,null,"56ef90b9",null);t["default"]=u.exports},"97f3":function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement,a=(n._self._c,n._f("toFixed")(n.propInfo.balance,4)),e=n._f("toFixed")(this.rmb,4);n.$mp.data=Object.assign({},{$root:{f0:a,f1:e}})},o=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return o})},a8dd:function(n,t,a){"use strict";a.r(t);var e=a("5c57"),o=a.n(e);for(var i in e)"default"!==i&&function(n){a.d(t,n,function(){return e[n]})}(i);t["default"]=o.a}},[["3ee4","common/runtime","common/vendor"]]]);
});
require('pages/pan/pan.js');
__wxRoute = 'pages/pan/ixx';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pan/ixx.js';

define('pages/pan/ixx.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pan/ixx"],{"268f":function(n,t,e){"use strict";var u=e("d6c5"),o=e.n(u);o.a},"2a13":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/loading8").then(e.bind(null,"4c38"))},o={components:{loading:u}};t.default=o},5810:function(n,t,e){"use strict";e.r(t);var u=e("2a13"),o=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=o.a},"89db":function(n,t,e){"use strict";e.r(t);var u=e("cebd"),o=e("5810");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("268f");var r=e("2877"),a=Object(r["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports},cebd:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},d6c5:function(n,t,e){}},[["8242","common/runtime","common/vendor"]]]);
});
require('pages/pan/ixx.js');
__wxRoute = 'pages/pan/donateList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pan/donateList.js';

define('pages/pan/donateList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pan/donateList"],{"23c2":function(t,n,e){},"395d":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},7438:function(t,n,e){"use strict";var o=e("23c2"),a=e.n(o);a.a},cc40:function(t,n,e){"use strict";e.r(n);var o=e("395d"),a=e("e41a");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("7438");var r=e("2877"),c=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"7dfdfe88",null);n["default"]=c.exports},d8b6:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("0be9"),a={data:function(){return{donateList:"",textColor:["#4CD964","#4CD964","#4CD964"]}},methods:{getDonateList:function(){var t=this;(0,o.getPollTop)().then(function(n){t.donateList=n})}},onLoad:function(){this.getDonateList()}};n.default=a},e41a:function(t,n,e){"use strict";e.r(n);var o=e("d8b6"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a}},[["0cad","common/runtime","common/vendor"]]]);
});
require('pages/pan/donateList.js');
__wxRoute = 'pages/ledger/asset';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ledger/asset.js';

define('pages/ledger/asset.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ledger/asset"],{"175c":function(t,e,n){"use strict";n.r(e);var a=n("9dd1"),s=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},"9dd1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a")),s=n("0be9");function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,s,o,i){try{var l=t[o](i),r=l.value}catch(u){return void n(u)}l.done?e(r):Promise.resolve(r).then(a,s)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(a,s){var o=t.apply(e,n);function l(t){i(o,a,s,l,r,"next",t)}function r(t){i(o,a,s,l,r,"throw",t)}l(void 0)})}}var r={data:function(){return{assetInfo:"",listInfo:"",labelList:"budget",menuTabs:[{name:"收支記錄"},{name:"任務獲取"}],scrollLeft:0,currentTab:0,isShow:!0,loadingType:10}},methods:{getBalanceData:function(){var t=this;(0,s.getBalance)(0).then(function(e){t.assetInfo=e})},getBillData:function(){var t=this;(0,s.getBill)("0").then(function(e){t.listInfo="",console.log(t.listInfo," at pages\\ledger\\asset.vue:126"),t.listInfo=e.splice(0,10),console.log(t.listInfo," at pages\\ledger\\asset.vue:128")})},getTaskData:function(){var t=this;(0,s.checkTaskList)().then(function(e){t.listInfo="",console.log(t.listInfo," at pages\\ledger\\asset.vue:134"),t.listInfo=e,console.log(t.listInfo," at pages\\ledger\\asset.vue:136")})},swichMenu:function(){var t=l(a.default.mark(function t(e){return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.currentTab!=e){t.next=2;break}return t.abrupt("return",!1);case 2:1==e?(this.currentTab=e,this.labelList="task",this.listInfo="",this.getTaskData(),console.log(e," at pages\\ledger\\asset.vue:148")):(this.currentTab=e,this.labelList="budget",this.listInfo="",this.getBillData(),console.log(e," at pages\\ledger\\asset.vue:154"));case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),loadMore:function(){var t=this;(0,s.getBill)(this.loadingType).then(function(e){null!=e?(t.listInfo=t.listInfo.concat(e),t.loadingType+=10,console.log(t.listInfo," at pages\\ledger\\asset.vue:178")):t.isShow=!1})}},onLoad:function(){this.getBalanceData(),this.getBillData()}};e.default=r},b5cc:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t._f("toFixed")(t.assetInfo.balance,4)),a=t._f("toFixed")(t.assetInfo.freeze,4);t.$mp.data=Object.assign({},{$root:{f0:n,f1:a}})},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},e614:function(t,e,n){},f27b:function(t,e,n){"use strict";n.r(e);var a=n("b5cc"),s=n("175c");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("feec");var i=n("2877"),l=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,"0a73e13c",null);e["default"]=l.exports},feec:function(t,e,n){"use strict";var a=n("e614"),s=n.n(a);s.a}},[["852b","common/runtime","common/vendor"]]]);
});
require('pages/ledger/asset.js');
__wxRoute = 'pages/ledger/focus';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ledger/focus.js';

define('pages/ledger/focus.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ledger/focus"],{"032f":function(i,s,t){},2214:function(i,s,t){"use strict";t.r(s);var e=t("a616"),n=t.n(e);for(var a in e)"default"!==a&&function(i){t.d(s,i,function(){return e[i]})}(a);s["default"]=n.a},2747:function(i,s,t){"use strict";t.r(s);var e=t("840e"),n=t("2214");for(var a in n)"default"!==a&&function(i){t.d(s,i,function(){return n[i]})}(a);t("f2b0");var h=t("2877"),o=Object(h["a"])(n["default"],e["a"],e["b"],!1,null,"01f450a6",null);s["default"]=o.exports},"840e":function(i,s,t){"use strict";var e=function(){var i=this,s=i.$createElement,t=(i._self._c,i._f("toFixed")(i.assetInfo.balance,4)),e=i._f("toFixed")(i.assetInfo.notFree,4);i.$mp.data=Object.assign({},{$root:{f0:t,f1:e}})},n=[];t.d(s,"a",function(){return e}),t.d(s,"b",function(){return n})},a616:function(i,s,t){"use strict";(function(i){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e=t("0be9"),n={data:function(){return{assetInfo:"",listInfo:"",labelList:"budget",budgetText:"black",taskText:"gray",pageSize:10,isShow:!1,sing:[{value:"+1",title:"第一天",isShow:!1},{value:"+2",title:"第二天",isShow:!1},{value:"+3",title:"第三天",isShow:!1},{value:"+5",title:"第四天",isShow:!1},{value:"+5",title:"第五天",isShow:!1},{value:"+10",title:"第六天",isShow:!1},{value:"+10",title:"第七天",isShow:!1}],singDay:"",force:""}},methods:{getBalanceData:function(){var i=this;(0,e.getForBalance)().then(function(s){i.assetInfo=s})},getBillData:function(){var i=this;(0,e.getForBill)(0).then(function(s){i.listInfo="",i.listInfo=s})},getTaskData:function(){var i=this;(0,e.checkForTaskList)().then(function(s){i.listInfo="",i.listInfo=s})},changeList:function(i){"budget"==i?(this.labelList="budget",this.budgetText="black",this.taskText="gray",this.getBillData()):(this.labelList="task",this.budgetText="gray",this.taskText="black",this.getTaskData())},loadMore:function(){var i=this;(0,e.getForBill)(this.pageSize).then(function(s){null!=s?(i.listInfo=i.listInfo.concat(s),i.pageSize+=10):i.isShow=!0})},singIn:function(){var s=this;7==this.singDay&&(this.singDay=0,(0,e.signin)(this.force,this.singDay+1).then(function(t){null!=t&&(console.log(t," at pages\\ledger\\focus.vue:174"),s.show(),s.getSigninMsg(),i.showToast({icon:"none",title:"簽到成功"}),s.getBillData(),s.getBalanceData())})),(0,e.signin)(this.force,this.singDay+1).then(function(t){null!=t&&(console.log(t," at pages\\ledger\\focus.vue:188"),s.show(),s.getSigninMsg(),i.showToast({icon:"none",title:"簽到成功"}),s.getBillData(),s.getBalanceData())})},getSigninMsg:function(){var i=this;(0,e.signinMsg)().then(function(s){switch(console.log(s," at pages\\ledger\\focus.vue:203"),i.singDay=s,s){case 0:i.force=1;break;case 1:i.force=2;break;case 2:i.force=3;break;case 3:i.force=5;break;case 4:i.force=5;break;case 5:i.force=10;break;case 6:i.force=10;break}i.show()})},show:function(){switch(this.singDay){case 0:this.sing[0].value="+1",this.sing[0].isShow=!1,this.sing[1].value="+2",this.sing[1].isShow=!1,this.sing[2].value="+3",this.sing[2].isShow=!1,this.sing[3].value="+5",this.sing[3].isShow=!1,this.sing[4].value="+5",this.sing[4].isShow=!1,this.sing[5].value="+10",this.sing[5].isShow=!1,this.sing[6].value="+10",this.sing[6].isShow=!1;break;case 1:this.sing[0].value="√",this.sing[0].isShow=!0;break;case 2:this.sing[0].value="√",this.sing[0].isShow=!0,this.sing[1].value="√",this.sing[1].isShow=!0;break;case 3:this.sing[0].value="√",this.sing[0].isShow=!0,this.sing[1].value="√",this.sing[1].isShow=!0,this.sing[2].value="√",this.sing[2].isShow=!0;break;case 4:this.sing[0].value="√",this.sing[0].isShow=!0,this.sing[1].value="√",this.sing[1].isShow=!0,this.sing[2].value="√",this.sing[2].isShow=!0,this.sing[3].value="√",this.sing[3].isShow=!0;break;case 5:this.sing[0].value="√",this.sing[0].isShow=!0,this.sing[1].value="√",this.sing[1].isShow=!0,this.sing[2].value="√",this.sing[2].isShow=!0,this.sing[3].value="√",this.sing[3].isShow=!0,this.sing[4].value="√",this.sing[4].isShow=!0;break;case 6:this.sing[0].value="√",this.sing[0].isShow=!0,this.sing[1].value="√",this.sing[1].isShow=!0,this.sing[2].value="√",this.sing[2].isShow=!0,this.sing[3].value="√",this.sing[3].isShow=!0,this.sing[4].value="√",this.sing[4].isShow=!0,this.sing[5].value="√",this.sing[5].isShow=!0;break;case 7:this.sing[0].value="√",this.sing[0].isShow=!0,this.sing[1].value="√",this.sing[1].isShow=!0,this.sing[2].value="√",this.sing[2].isShow=!0,this.sing[3].value="√",this.sing[3].isShow=!0,this.sing[4].value="√",this.sing[4].isShow=!0,this.sing[5].value="√",this.sing[5].isShow=!0,this.sing[6].value="√",this.sing[6].isShow=!0;break}}},onLoad:function(){this.getBalanceData(),this.getBillData(),this.getSigninMsg()}};s.default=n}).call(this,t("6e42")["default"])},f2b0:function(i,s,t){"use strict";var e=t("032f"),n=t.n(e);n.a}},[["1992","common/runtime","common/vendor"]]]);
});
require('pages/ledger/focus.js');
__wxRoute = 'pages/purse/purse';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/purse/purse.js';

define('pages/purse/purse.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/purse/purse"],{3198:function(t,n,e){"use strict";e.r(n);var a=e("490c"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},"490c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("0be9"),o={data:function(){return{assetInfo:"",listInfo:"",pageSize:10,isShow:!0}},methods:{getBalanceData:function(){var t=this;(0,a.getBalance)().then(function(n){t.assetInfo=n})},getBillData:function(){var t=this;(0,a.getBill)(0).then(function(n){t.listInfo=n})},loadMore:function(){var t=this;(0,a.getBill)(this.pageSize).then(function(n){null!=n?(t.listInfo=t.listInfo.concat(n),t.pageSize+=10):t.isShow=!1})}},onLoad:function(){this.getBalanceData(),this.getBillData()}};n.default=o},"74db":function(t,n,e){},7587:function(t,n,e){"use strict";e.r(n);var a=e("f240"),o=e("3198");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("950e");var u=e("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,"15d4d30c",null);n["default"]=c.exports},"950e":function(t,n,e){"use strict";var a=e("74db"),o=e.n(a);o.a},f240:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=(t._self._c,t._f("toFixed")(t.assetInfo.balance,4));t.$mp.data=Object.assign({},{$root:{f0:e}})},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})}},[["2389","common/runtime","common/vendor"]]]);
});
require('pages/purse/purse.js');
__wxRoute = 'pages/purse/blockChain';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/purse/blockChain.js';

define('pages/purse/blockChain.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/purse/blockChain"],{2464:function(n,t,e){"use strict";var u=e("5fcd"),o=e.n(u);o.a},"4dbd":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},5955:function(n,t,e){"use strict";e.r(t);var u=e("4dbd"),o=e("61f2");for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);e("2464");var c=e("2877"),a=Object(c["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports},"5fcd":function(n,t,e){},"61f2":function(n,t,e){"use strict";e.r(t);var u=e("e703"),o=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=o.a},e703:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/loading8").then(e.bind(null,"4c38"))},o={components:{loading:u}};t.default=o}},[["4941","common/runtime","common/vendor"]]]);
});
require('pages/purse/blockChain.js');
__wxRoute = 'pages/purse/password';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/purse/password.js';

define('pages/purse/password.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/purse/password"],{"192d":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},"1d2c":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/loading8").then(e.bind(null,"4c38"))},o={components:{loading:u}};t.default=o},"2b9a":function(n,t,e){},3555:function(n,t,e){"use strict";var u=e("2b9a"),o=e.n(u);o.a},"8a1b":function(n,t,e){"use strict";e.r(t);var u=e("1d2c"),o=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=o.a},cdc7:function(n,t,e){"use strict";e.r(t);var u=e("192d"),o=e("8a1b");for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);e("3555");var a=e("2877"),c=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports}},[["f25f","common/runtime","common/vendor"]]]);
});
require('pages/purse/password.js');
__wxRoute = 'pages/passport/passport';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/passport/passport.js';

define('pages/passport/passport.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/passport/passport"],{"0b85":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},"2ba3":function(n,t,e){"use strict";var u=e("3ba7"),a=e.n(u);a.a},"396d":function(n,t,e){"use strict";e.r(t);var u=e("0b85"),a=e("899a");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("2ba3");var r=e("2877"),c=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},"3ba7":function(n,t,e){},"899a":function(n,t,e){"use strict";e.r(t);var u=e("d25b"),a=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=a.a},d25b:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/loading8").then(e.bind(null,"4c38"))},a={components:{loading:u}};t.default=a}},[["470c","common/runtime","common/vendor"]]]);
});
require('pages/passport/passport.js');
__wxRoute = 'pages/auth/auth';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/auth/auth.js';

define('pages/auth/auth.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/auth/auth"],{5992:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},"621c":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/loading8").then(e.bind(null,"4c38"))},o={components:{loading:u}};t.default=o},"6b4f":function(n,t,e){"use strict";var u=e("ddf7"),o=e.n(u);o.a},"80e2":function(n,t,e){"use strict";e.r(t);var u=e("621c"),o=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=o.a},cd5b:function(n,t,e){"use strict";e.r(t);var u=e("5992"),o=e("80e2");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("6b4f");var r=e("2877"),a=Object(r["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports},ddf7:function(n,t,e){}},[["7eac","common/runtime","common/vendor"]]]);
});
require('pages/auth/auth.js');
__wxRoute = 'pages/invite/invite';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/invite/invite.js';

define('pages/invite/invite.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invite/invite"],{"57a5":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;e("ae57");var i=u(e("606d")),o=e("d68e"),a=e("0be9");function u(t){return t&&t.__esModule?t:{default:t}}var c=function(){return Promise.all([e.e("common/vendor"),e.e("components/wm-poster/wm-poster")]).then(e.bind(null,"657e"))},r={data:function(){return{inviteCode:"",panCount:0,inviteCount:0,valiDation:0,createImg:"",created:!1,imgSrc:"",height:""}},components:{wmPoster:c},methods:{getInvData:function(){var t=this;(0,a.getInvCode)().then(function(n){t.inviteCode=n}),(0,a.passValidation)().then(function(n){t.valiDation=null==n?0:n}),(0,a.getCountPan)().then(function(n){t.panCount=n}),(0,a.getinviteCount)().then(function(n){t.inviteCount=n})},createPoster:function(){var t=this,n="http://pandla.io/images/register.html?invCode="+this.inviteCode,e=i.default.createQrCodeImg(n,{size:parseInt(300)});(0,o.base64ToPath)(e).then(function(n){t.createImg=n}).catch(function(t){console.error("error===>",t," at pages\\invite\\invite.vue:124")}),this.created=!0},saveImg:function(t){this.imgSrc=t.tempFilePath},save:function(){var n=[];n[0]=this.imgSrc,t.previewImage({urls:n})}},onLoad:function(){this.getInvData(),t.getSystemInfo({success:function(t){console.log(t.windowHeight," at pages\\invite\\invite.vue:173"),this.height=t.windowHeight}})}};n.default=r}).call(this,e("6e42")["default"])},c148:function(t,n,e){"use strict";e.r(n);var i=e("57a5"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},c199:function(t,n,e){"use strict";var i=e("dc61"),o=e.n(i);o.a},dc61:function(t,n,e){},f8dd:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},fc96:function(t,n,e){"use strict";e.r(n);var i=e("f8dd"),o=e("c148");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("c199");var u=e("2877"),c=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"3ce3a3db",null);n["default"]=c.exports}},[["d535","common/runtime","common/vendor"]]]);
});
require('pages/invite/invite.js');
__wxRoute = 'pages/base/base';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/base/base.js';

define('pages/base/base.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/base/base"],{"0b01":function(n,t,e){"use strict";var u=e("e12f"),r=e.n(u);r.a},2685:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},"80e6":function(n,t,e){},b5b0:function(n,t,e){"use strict";e.r(t);var u=e("2685"),r=e("c887");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);e("0b01");var c=e("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},c887:function(n,t,e){"use strict";e.r(t);var u=e("80e6"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},e12f:function(n,t,e){}},[["09a1","common/runtime","common/vendor"]]]);
});
require('pages/base/base.js');
__wxRoute = 'pages/strategy/strategy';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/strategy/strategy.js';

define('pages/strategy/strategy.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/strategy/strategy"],{"76c2":function(n,t,u){"use strict";u.r(t);var a=u("efc4"),c=u.n(a);for(var r in a)"default"!==r&&function(n){u.d(t,n,function(){return a[n]})}(r);t["default"]=c.a},"83f2":function(n,t,u){},"8aa5":function(n,t,u){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},c=[];u.d(t,"a",function(){return a}),u.d(t,"b",function(){return c})},b764:function(n,t,u){"use strict";var a=u("83f2"),c=u.n(a);c.a},ccdf:function(n,t,u){"use strict";u.r(t);var a=u("8aa5"),c=u("76c2");for(var r in c)"default"!==r&&function(n){u.d(t,n,function(){return c[n]})}(r);u("b764");var e=u("2877"),f=Object(e["a"])(c["default"],a["a"],a["b"],!1,null,null,null);t["default"]=f.exports},efc4:function(n,t,u){}},[["9b17","common/runtime","common/vendor"]]]);
});
require('pages/strategy/strategy.js');
__wxRoute = 'pages/welfare/welfare';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/welfare/welfare.js';

define('pages/welfare/welfare.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/welfare/welfare"],{"56f3":function(t,e,n){},"7d39":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("0be9"),r={data:function(){return{location:"",barInfo:"",itemStr:"",picture:""}},methods:{getBenfitListData:function(){var t=this;(0,a.getBenfitList)().then(function(e){t.barInfo=e,console.log(e," at pages\\welfare\\welfare.vue:41")})},navigatorParam:function(e){console.log(e," at pages\\welfare\\welfare.vue:47"),t.navigateTo({url:"welfareDetail?id="+e})},split:function(t){return t.split(",")[0]}},onLoad:function(){this.getBenfitListData()}};e.default=r}).call(this,n("6e42")["default"])},"8fc0":function(t,e,n){"use strict";var a=n("56f3"),r=n.n(a);r.a},9393:function(t,e,n){"use strict";n.r(e);var a=n("e91e"),r=n("e296");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("8fc0");var i=n("2877"),u=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"9da8c176",null);e["default"]=u.exports},e296:function(t,e,n){"use strict";n.r(e);var a=n("7d39"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=r.a},e91e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})}},[["082a","common/runtime","common/vendor"]]]);
});
require('pages/welfare/welfare.js');
__wxRoute = 'pages/setting/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/setting/setting.js';

define('pages/setting/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/setting"],{"08d9":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})},"397d":function(t,n,e){"use strict";e.r(n);var a=e("08d9"),r=e("a20f");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("3c12");var o=e("2877"),c=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"4a11121c",null);n["default"]=c.exports},"3c12":function(t,n,e){"use strict";var a=e("cab7"),r=e.n(a);r.a},"8a7f":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{toIntroduce:function(){t.navigateTo({url:"introduce"})},totermsofservice:function(){t.navigateTo({url:"/pages/reg/termsofservice"})},toPrivacypolicy:function(){t.navigateTo({url:"/pages/reg/Privacypolicy"})}}};n.default=e}).call(this,e("6e42")["default"])},a20f:function(t,n,e){"use strict";e.r(n);var a=e("8a7f"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=r.a},cab7:function(t,n,e){}},[["0e92","common/runtime","common/vendor"]]]);
});
require('pages/setting/setting.js');
__wxRoute = 'pages/setting/introduce';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/setting/introduce.js';

define('pages/setting/introduce.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/introduce"],{"3c3d":function(n,t,a){"use strict";a.r(t);var c=a("c8a9"),u=a.n(c);for(var e in c)"default"!==e&&function(n){a.d(t,n,function(){return c[n]})}(e);t["default"]=u.a},"47ea":function(n,t,a){},a008:function(n,t,a){"use strict";var c=function(){var n=this,t=n.$createElement;n._self._c},u=[];a.d(t,"a",function(){return c}),a.d(t,"b",function(){return u})},a7a7:function(n,t,a){"use strict";a.r(t);var c=a("a008"),u=a("3c3d");for(var e in u)"default"!==e&&function(n){a.d(t,n,function(){return u[n]})}(e);a("ce49");var r=a("2877"),o=Object(r["a"])(u["default"],c["a"],c["b"],!1,null,null,null);t["default"]=o.exports},c8a9:function(n,t,a){},ce49:function(n,t,a){"use strict";var c=a("47ea"),u=a.n(c);u.a}},[["c1f8","common/runtime","common/vendor"]]]);
});
require('pages/setting/introduce.js');
__wxRoute = 'pages/user/album';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/album.js';

define('pages/user/album.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/album"],{"1a49":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("0be9"),u={data:function(){return{dynInfo:"",imgUrl:[]}},methods:{getDynInfo:function(){var n=this;(0,o.getAlbum)().then(function(t){n.dynInfo=t;for(var e=0;e<n.dynInfo.length;e++)n.imgUrl[e]=n.dynInfo[e].images})},preview:function(t){for(var e=[],u=0;u<this.dynInfo.length;u++)e[u]=this.dynInfo[u].id;n.previewImage({urls:this.imgUrl,current:t,longPressActions:{itemList:["刪除"],success:function(t){var u=this;(0,o.deleteDyn)(e[t.index]).then(function(t){n.showToast({icon:"none",title:"刪除成功"}),n.navigateTo({url:"album"}),u.getDynInfo()})},fail:function(n){console.log(n.errMsg," at pages\\user\\album.vue:72")}}})}},onLoad:function(n){this.uid=n.uid},onShow:function(){this.getDynInfo()}};t.default=u}).call(this,e("6e42")["default"])},3498:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})},"68e0":function(n,t,e){"use strict";var o=e("efc0"),u=e.n(o);u.a},c17a:function(n,t,e){"use strict";e.r(t);var o=e("3498"),u=e("dc46");for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);e("68e0");var r=e("2877"),a=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,"570bdfef",null);t["default"]=a.exports},dc46:function(n,t,e){"use strict";e.r(t);var o=e("1a49"),u=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=u.a},efc0:function(n,t,e){}},[["ec38","common/runtime","common/vendor"]]]);
});
require('pages/user/album.js');
__wxRoute = 'pages/user/followList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/followList.js';

define('pages/user/followList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/followList"],{"47e7":function(n,t,o){"use strict";var e=o("d0b6"),u=o.n(e);u.a},"5bf2":function(n,t,o){"use strict";o.r(t);var e=o("8358"),u=o("987b");for(var l in u)"default"!==l&&function(n){o.d(t,n,function(){return u[n]})}(l);o("47e7");var i=o("2877"),a=Object(i["a"])(u["default"],e["a"],e["b"],!1,null,"d03cc8d2",null);t["default"]=a.exports},8358:function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},u=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return u})},"987b":function(n,t,o){"use strict";o.r(t);var e=o("aa23"),u=o.n(e);for(var l in e)"default"!==l&&function(n){o.d(t,n,function(){return e[n]})}(l);t["default"]=u.a},aa23:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o("0be9"),u={data:function(){return{followList:""}},methods:{getAllFollow:function(){var n=this;(0,e.getFollow)().then(function(t){n.followList=t,console.log(n.followList," at pages\\user\\followList.vue:36")})},userInfo:function(t){n.navigateTo({url:"/pages/daily/userInfo?uid="+t})},unFollow:function(n,t){var o=this;(0,e.concern)(2,n).then(function(n){o.followList.splice(t,1)})}},onLoad:function(){this.getAllFollow()}};t.default=u}).call(this,o("6e42")["default"])},d0b6:function(n,t,o){}},[["42cb","common/runtime","common/vendor"]]]);
});
require('pages/user/followList.js');
__wxRoute = 'pages/user/fansList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/fansList.js';

define('pages/user/fansList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/fansList"],{1211:function(t,n,o){"use strict";o.r(n);var e=o("2210"),l=o("62f4");for(var a in l)"default"!==a&&function(t){o.d(n,t,function(){return l[t]})}(a);o("4d52");var i=o("2877"),s=Object(i["a"])(l["default"],e["a"],e["b"],!1,null,"d327b64a",null);n["default"]=s.exports},2210:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},l=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return l})},"4d52":function(t,n,o){"use strict";var e=o("9ee8"),l=o.n(e);l.a},"62f4":function(t,n,o){"use strict";o.r(n);var e=o("cd7f"),l=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n["default"]=l.a},"9ee8":function(t,n,o){},cd7f:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o("0be9"),l={data:function(){return{fnasList:"",butText:"",allFollow:[],list:[],textColor:["#4CD964","#4CD964","#4CD964"]}},methods:{getAllFans:function(){var n=this;(0,e.getFans)().then(function(t){n.fnasList=t}),t.hideLoading()},userInfo:function(n){t.navigateTo({url:"/pages/daily/userInfo?uid="+n})},getAllFollow:function(){var t=this;(0,e.getFollow)().then(function(n){t.allFollow=n;for(var o=0;o<t.allFollow.length;o++)t.list.push(t.allFollow[o].id)}),this.follow()},follow:function(){for(var t=0;t<this.fnasList.length;t++)console.log("1"," at pages\\user\\fansList.vue:53"),-1!=this.list.indexOf(this.fnasList[t].id)&&console.log("2"," at pages\\user\\fansList.vue:55")}},onLoad:function(){t.showLoading({title:"加载中"}),this.getAllFans(),this.getAllFollow()}};n.default=l}).call(this,o("6e42")["default"])}},[["8a3b","common/runtime","common/vendor"]]]);
});
require('pages/user/fansList.js');
__wxRoute = 'pages/daily/topicDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/daily/topicDetails.js';

define('pages/daily/topicDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/daily/topicDetails"],{"25fa":function(n,t,o){"use strict";o.r(t);var e=o("fab5"),i=o("7d5d");for(var a in i)"default"!==a&&function(n){o.d(t,n,function(){return i[n]})}(a);o("7272");var c=o("2877"),l=Object(c["a"])(i["default"],e["a"],e["b"],!1,null,"7a7f93c1",null);t["default"]=l.exports},"55a7":function(n,t,o){},7272:function(n,t,o){"use strict";var e=o("55a7"),i=o.n(e);i.a},"7d5d":function(n,t,o){"use strict";o.r(t);var e=o("acb1"),i=o.n(e);for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);t["default"]=i.a},acb1:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(o("b47e")),i(o("996b"));var e=o("0be9");function i(n){return n&&n.__esModule?n:{default:n}}var a=function(){return o.e("components/loading/loading").then(o.bind(null,"48c8"))},c={components:{loading:a},data:function(){return{dynInfo:"",commentInfo:"",following:!1,scrollTop:0,beStatus:!1,array:["取消關注","屏蔽用戶","舉報用戶"],pickIndex:0,uid:0,count:10,loadingText:"加载中...",loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},showComment:!1,commContent:"",commplaceholder:"為保證用戶隱私，只可以看自己的評論"}},methods:{findDyn:function(){var t=this;this.loadingType=0,n.showNavigationBarLoading(),(0,e.findAllDyn)("").then(function(n){t.dynInfo=n,console.log(n," at pages\\daily\\topicDetails.vue:136")}),n.hideNavigationBarLoading(),n.stopPullDownRefresh()},userInfo:function(t){n.navigateTo({url:"/pages/daily/userInfo?uid="+t})},userFollow:function(n){var t=this;0==this.following&&(0,e.concern)(1,n).then(function(n){t.following=!0})},behaviour:function(n){0==this.beStatus?this.beStatus=!0:1==this.beStatus&&(this.beStatus=!1),this.uid=n},bindPickerChange:function(n){console.log(n.target.value," at pages\\daily\\topicDetails.vue:162"),0==n.target.value&&(this.following=!1,(0,e.concern)(2,this.uid).then(function(n){console.log("quxiao"," at pages\\daily\\topicDetails.vue:166")}))},showComm:function(n){var t=this;1==this.showComment?this.showComment=!1:this.showComment=!0,(0,e.getComment)(n).then(function(n){t.commentInfo=n}),this.flog=!1},hidComm:function(){1==this.showComment?this.showComment=!1:this.showComment=!0},addComm:function(){var n=this;""!=this.commContent&&("reply"==this.addType?(console.log("刚刚是回复"," at pages\\daily\\topicDetails.vue:186"),(0,e.reply)(this.cid,this.commContent).then(function(t){n.findDyn(2),n.addType="",n.commplaceholder="為保證用戶隱私，只可以看自己的評論"})):(console.log("刚刚是評論"," at pages\\daily\\topicDetails.vue:195"),(0,e.addComment)(this.commContent,this.did).then(function(t){(0,e.getComment)(n.did).then(function(t){n.commentInfo=t,n.commContent="",console.log(n.time," at pages\\daily\\topicDetails.vue:201")}),(0,e.getBullet)(n.did).then(function(t){n.bulletList=t.content}),n.findDyn()})))},replyComm:function(t,o,e){e!=n.getStorageSync("USERS_KEY").id?(this.commplaceholder="@"+o,this.addType="reply",this.cid=t):n.showToast({icon:"none",title:"不能自己回復自己哦"})},scrolltoupper:function(){n.showLoading({title:"加载中"}),this.findDyn(),setTimeout(function(){n.hideLoading()},1e3)},scrolltolower:function(){var t=this;this.loadingType=1,n.showNavigationBarLoading(),(0,e.findAllDyn)(this.count).then(function(n){t.dynInfo=t.dynInfo.concat(n),console.log(t.dynInfo," at pages\\daily\\topicDetails.vue:242"),t.count+=10,console.log(t.count," at pages\\daily\\topicDetails.vue:244")}),n.hideNavigationBarLoading()}},onLoad:function(){this.findDyn()},onReady:function(){},onNavigationBarButtonTap:function(){console.log("1"," at pages\\daily\\topicDetails.vue:255")}};t.default=c}).call(this,o("6e42")["default"])},fab5:function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},i=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return i})}},[["4fef","common/runtime","common/vendor"]]]);
});
require('pages/daily/topicDetails.js');
__wxRoute = 'pages/welfare/welfareApplication';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/welfare/welfareApplication.js';

define('pages/welfare/welfareApplication.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/welfare/welfareApplication"],{"0132":function(n,t,a){"use strict";a.r(t);var e=a("6d68"),o=a("1a41");for(var r in o)"default"!==r&&function(n){a.d(t,n,function(){return o[n]})}(r);a("85a8");var u=a("2877"),i=Object(u["a"])(o["default"],e["a"],e["b"],!1,null,"3170f6f6",null);t["default"]=i.exports},"1a41":function(n,t,a){"use strict";a.r(t);var e=a("f5e3"),o=a.n(e);for(var r in e)"default"!==r&&function(n){a.d(t,n,function(){return e[n]})}(r);t["default"]=o.a},"6d68":function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},o=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return o})},"85a8":function(n,t,a){"use strict";var e=a("8735"),o=a.n(e);o.a},8735:function(n,t,a){},f5e3:function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a("0be9"),o=a("e7dc"),r=function(){return a.e("components/m-input").then(a.bind(null,"edc7"))},u={components:{mInput:r},data:function(){return{barInfo:{name:"",phone:"",location:"",intro:"",username:"",userphone:"",logo:""},isUpload:!1,avatar:"../../static/img/user/upload.svg"}},methods:{upLogoImg:function(){var n=this;(0,e.getImgTemp)().then(function(t){n.avatar=t,(0,e.upload)(n.avatar).then(function(t){n.isUpload=!0,n.barInfo.logo=t})})},commitVer:function(){(0,o.barValidate)(this.barInfo,this.isUpload)&&n.navigateTo({url:"welfareUpload?barInfo="+JSON.stringify(this.barInfo)})}}};t.default=u}).call(this,a("6e42")["default"])}},[["0b8b","common/runtime","common/vendor"]]]);
});
require('pages/welfare/welfareApplication.js');
__wxRoute = 'pages/welfare/welfareDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/welfare/welfareDetail.js';

define('pages/welfare/welfareDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/welfare/welfareDetail"],{"1fe5":function(e,t,a){},4788:function(e,t,a){"use strict";a.r(t);var n=a("56ee"),o=a("a08b8");for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);a("69f1");var r=a("2877"),c=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"612e34a2",null);t["default"]=c.exports},"56ee":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"69f1":function(e,t,a){"use strict";var n=a("1fe5"),o=a.n(n);o.a},"6cf6":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("0be9"),o={data:function(){return{barDetail:"",id:"",picture:"",geocodes:""}},methods:{openLocation:function(){var t=this;(0,n.getBarlocation)(this.barDetail.location).then(function(a){t.geocodes=a.geocodes[0];var n=t.geocodes.location.split(",");e.openLocation({latitude:parseFloat(n[0]),longitude:parseFloat(n[1]),name:t.geocodes.formatted_address,success:function(e){console.log(e," at pages\\welfare\\welfareDetail.vue:50")}})})},getwelfareDetail:function(){var e=this;(0,n.findById)(this.id).then(function(t){e.barDetail=t,e.picture=t.picture.split(",")})}},onLoad:function(e){this.id=e.id,console.log(this.id," at pages\\welfare\\welfareDetail.vue:65"),this.getwelfareDetail()}};t.default=o}).call(this,a("6e42")["default"])},a08b8:function(e,t,a){"use strict";a.r(t);var n=a("6cf6"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=o.a}},[["70b6","common/runtime","common/vendor"]]]);
});
require('pages/welfare/welfareDetail.js');
__wxRoute = 'pages/welfare/welfareUpload';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/welfare/welfareUpload.js';

define('pages/welfare/welfareUpload.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/welfare/welfareUpload"],{3044:function(n,t,a){"use strict";a.r(t);var e=a("4e4a"),i=a.n(e);for(var o in e)"default"!==o&&function(n){a.d(t,n,function(){return e[n]})}(o);t["default"]=i.a},"4e4a":function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a("0be9"),i={data:function(){return{barImg:"../../static/img/main/entertain/en-upload.svg",licImg1:"../../static/img/main/entertain/en-upload.svg",licImg2:"../../static/img/main/entertain/en-upload.svg",licImg3:"../../static/img/main/entertain/en-upload.svg",licImg4:"../../static/img/main/entertain/en-upload.svg",barInfo:{}}},methods:{uploadImg:function(n){var t=this;(0,e.getImgTemp)().then(function(a){1==n&&(0,e.upload)(a).then(function(n){t.barInfo.license=n,t.barImg=n}),2==n&&(0,e.upload)(a).then(function(n){t.barInfo.picture=n,t.licImg1=n}),3==n&&(0,e.upload)(a).then(function(n){t.barInfo.picture1=n,t.licImg2=n}),4==n&&(0,e.upload)(a).then(function(n){t.barInfo.picture2=n,t.licImg3=n}),5==n&&(0,e.upload)(a).then(function(n){t.barInfo.picture3=n,t.licImg4=n})})}},onNavigationBarButtonTap:function(){"../../static/img/main/entertain/en-upload.svg"==this.barImg?n.showToast({icon:"none",title:"請上傳環境相圖片"}):"../../static/img/main/entertain/en-upload.svg"==this.licImg?n.showToast({icon:"none",title:"請上傳營業執照圖片"}):(console.log(this.barInfo," at pages\\welfare\\welfareUpload.vue:88"),(0,e.createBenfit)(this.barInfo).then(function(t){n.showToast({icon:"none",title:"上传成功,請等待審核"}),setTimeout(function(){n.navigateTo({url:"welfare"})},2e3)}))},onLoad:function(n){this.barInfo=JSON.parse(n.barInfo),console.log(this.barInfo," at pages\\welfare\\welfareUpload.vue:106")}};t.default=i}).call(this,a("6e42")["default"])},7652:function(n,t,a){"use strict";a.r(t);var e=a("823f"),i=a("3044");for(var o in i)"default"!==o&&function(n){a.d(t,n,function(){return i[n]})}(o);a("c1aa");var u=a("2877"),r=Object(u["a"])(i["default"],e["a"],e["b"],!1,null,"a3b2ade6",null);t["default"]=r.exports},"823f":function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},i=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return i})},b717:function(n,t,a){},c1aa:function(n,t,a){"use strict";var e=a("b717"),i=a.n(e);i.a}},[["a83f","common/runtime","common/vendor"]]]);
});
require('pages/welfare/welfareUpload.js');
__wxRoute = 'pagesA/settingChat/settingChat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pagesA/settingChat/settingChat.js';

define('pagesA/settingChat/settingChat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/settingChat/settingChat"],{"0ddd":function(t,n,e){},"14ea":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},"2f27":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"settingChat",data:function(){return{height:"603px"}},onReady:function(){var n=this;t.getSystemInfo({success:function(t){n.height=t.screenHeight+"px"}})},methods:{switch1Change:function(t){console.log("search",t," at pagesA\\settingChat\\settingChat.vue:52")},switch2Change:function(t){console.log("search",t," at pagesA\\settingChat\\settingChat.vue:56")}}};n.default=e}).call(this,e("6e42")["default"])},"7d6f":function(t,n,e){"use strict";var a=e("0ddd"),u=e.n(a);u.a},"84b7":function(t,n,e){"use strict";e.r(n);var a=e("2f27"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=u.a},db7c:function(t,n,e){"use strict";e.r(n);var a=e("14ea"),u=e("84b7");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("7d6f");var c=e("2877"),o=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,"5aaa65ae",null);n["default"]=o.exports}},[["815e","common/runtime","common/vendor"]]]);
});
require('pagesA/settingChat/settingChat.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

